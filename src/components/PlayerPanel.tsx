import React from 'react'
import { Button, Grid } from '@material-ui/core'
import classNames from 'classnames'
import { observer } from 'mobx-react'

import store, { Cut, Mode } from '../store'
import { formatTime } from '../utils/format-time'
import styles from './PlayerPanel.module.sass'
import TimeInput from './TimeInput'
import MultiPlayer from './MultiPlayer'

interface PlayerPanelState {
	cut: Cut | null
	playing: boolean
	position: number
}

class PlayerPanel extends React.Component {
	state: PlayerPanelState

	constructor(props: any) {
		super(props)

		this.state = {
			cut: null,
			playing: false,
			position: 0,
		}
	}

	changeStart = (time: number) => {
		this.setState({
			cut: {
				startTime: time,
				endTime: Math.max(this.state.cut!.endTime, time + 1),
			},
		})
	}

	changeEnd = (time: number) => {
		this.setState({
			cut: {
				startTime: Math.min(this.state.cut!.startTime, time - 1),
				endTime: time,
			},
		})
	}

	play = (): void => {
		const { cut } = this.state

		if (!cut) return

		if (store.mode !== Mode.Create) store.changeModeToCreate()

		store.playersStore[0].instance?.seekTo(cut.startTime)
		store.playersStore[0].playing = true

		const checkCut = () => {
			const { cut } = this.state
			if (!cut) return

			const position = store.playersStore[0].instance ? store.playersStore[0].instance?.getCurrentTime() : 0
			if (position >= cut?.startTime && position <= cut?.endTime) return
			clearInterval(intervalId)
			store.playersStore[0].playing = false
		}

		const intervalId = setInterval(checkCut, 100)
	}

	clear = () => {
		this.setState({
			cut: null,
		})
	}

	onAddCut = () => {
		const { cut } = this.state

		if (!cut) return

		store.addCut(cut)
		this.setState({
			startTime: 0,
			endTime: 0,
		})
	}

	updatePosition = (playedSeconds: number) => {
		this.setState({ position: playedSeconds })
	}

	onStartFrame = () => {
		const { position, cut } = this.state
		const current = {
			startTime: cut?.startTime || 0,
			endTime: cut?.endTime || 0,
		}

		current.startTime = position
		if (current.endTime < position) current.endTime = position + 5
		this.setState({ cut: current })
	}

	onEndFrame = () => {
		const { position, cut } = this.state
		const current = {
			startTime: cut?.startTime || 0,
			endTime: cut?.endTime || 0,
		}

		current.endTime = position
		if (current.startTime > position) current.startTime = position - 5
		this.setState({ cut: current })
	}

	render() {
		const { position, cut } = this.state

		return (
			<>
				<Grid className={classNames('padded', styles.playerWrapper)}>
					<MultiPlayer updatePosition={this.updatePosition} />
				</Grid>
				{store.editMode && store.url ? (
					<>
						<Grid justify='center' container>
							{formatTime(position, true)}
						</Grid>
						<Grid container>
							<Grid className='padded' item lg>
								<Button
									variant='contained'
									disableElevation
									fullWidth
									onClick={this.onStartFrame}
									color='primary'
								>
									Start of frame
								</Button>
							</Grid>
							<Grid className='padded' item lg>
								<Button
									variant='contained'
									disableElevation
									onClick={this.onEndFrame}
									fullWidth
									color='primary'
								>
									End of frame
								</Button>
							</Grid>
						</Grid>
						{cut && (
							<Grid container justify='center' className={styles.timeRow} alignContent='flex-end'>
								<Grid item lg>
									<TimeInput value={cut.startTime} label='Start time' onChange={this.changeStart} />
								</Grid>
								<Grid item lg>
									<TimeInput value={cut?.endTime} label='End time' onChange={this.changeEnd} />
								</Grid>
								<Grid
									item
									className={styles.buttons}
									xs
									justify={'flex-end'}
									alignContent={'center'}
									container
									wrap={'nowrap'}
								>
									<Button variant='outlined' disableElevation onClick={this.play}>
										Play
									</Button>
									<Button
										variant='contained'
										color='primary'
										disableElevation
										onClick={this.onAddCut}
									>
										Add
									</Button>
									<Button variant='contained' disableElevation onClick={this.clear}>
										Clear
									</Button>
								</Grid>
							</Grid>
						)}
					</>
				) : (
					<>
						<Grid className={styles.previewButtons} container>
							<Button
								variant='contained'
								size='large'
								color='primary'
								disableElevation
								onClick={() => store.changeModeToPlayAll()}
							>
								Play trailer
							</Button>
							<Button
								variant='contained'
								color='primary'
								disableElevation
								onClick={() => (store.editMode = true)}
							>
								Make your own trailer
							</Button>
						</Grid>
					</>
				)}
			</>
		)
	}
}

export default observer(PlayerPanel)
