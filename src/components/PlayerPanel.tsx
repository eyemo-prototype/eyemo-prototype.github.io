import React from 'react'
// import ReactPlayer from 'react-player'
import { Button, Grid } from '@material-ui/core'
import classNames from 'classnames'
// import { when } from 'mobx'
import { observer } from 'mobx-react'

import store, { Cut } from '../store'
import { formatTime } from '../utils/format-time'
import playerService from '../services/player-service'

import styles from './PlayerPanel.module.sass'
import TimeInput from './TimeInput'
import MultiPlayer from './MultiPlayer'

interface PlayerPanelState {
	cut: Cut | null
	playing: boolean
	position: number
}

class PlayerPanel extends React.Component {
	// private readonly playerRef: RefObject<ReactPlayer>

	state: PlayerPanelState

	constructor(props: any) {
		super(props)

		this.state = {
			cut: null,
			playing: false,
			position: 0,
		}

		// this.playerRef = React.createRef<ReactPlayer>()
	}

	changeStart = (time: number) => {
		this.setState({
			startTime: time,
			endTime: Math.max(this.state.cut!.endTime, time + 1),
		})
	}

	changeEnd = (time: number) => {
		this.setState({
			startTime: Math.min(this.state.cut!.startTime, time - 1),
			endTime: time,
		})
	}

	play = (): void => {
		const { cut } = this.state

		cut && playerService.playStory([cut])
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

	// onReady = (player: ReactPlayer) => {
	// 	playerService.setPlayer({
	// 		player,
	// 		start: () => this.setState({ playing: true }),
	// 		stop: () => this.setState({ playing: false }),
	// 	})
	// }
	//
	// onPlay = () => {
	// 	this.setState({ playing: true })
	// 	store.playing = true
	// }
	//
	// onPause = () => {
	// 	this.setState({ playing: false })
	// 	store.playing = false
	// }

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

	// onStart = async () => {
	// 	this.setState({ playing: false })
	// 	await when(() => !store.playing)
	// 	playerService.playStory(store.cuts)
	// }

	render() {
		const { position, /*playing,*/ cut } = this.state

		return (
			<>
				<Grid className={classNames('padded', styles.playerWrapper)}>
					<MultiPlayer updatePosition={this.updatePosition} />
					{/*					{store.url ? (
						<ReactPlayer
							ref={this.playerRef}
							playing={playing}
							className={styles.player}
							url={store.url}
							width='100%'
							height='100%'
							onProgress={this.onProgress}
							onStart={this.onStart}
							onPlay={this.onPlay}
							onPause={this.onPause}
							onReady={this.onReady}
							onBuffer={() => console.log('start')}
							onBufferEnd={() => console.log('end')}
							progressInterval={100}
							controls={true}
							config={{
								youtube: {
									playerVars: {
										'controls': 0, 'iv_load_policy': 3, 'rel': 0, showinfo: 0
									},
								},
								twitch: {
									options: {
										autoplay: true,
										time: '0h0m0s',
									},
								},
							}}
						/>
					) : (
						<div className={styles.playerPlaceholder} />
					)}*/}
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
								onClick={() => playerService.playStory()}
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
