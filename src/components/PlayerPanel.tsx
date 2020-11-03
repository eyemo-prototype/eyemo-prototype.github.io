import React, { useCallback, useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import store, { Cut } from '../store'
import ReactPlayer from 'react-player'
import { formatTime } from '../utils/format-time'
import { Button, Grid, TextField } from '@material-ui/core'
import styles from './PlayerPanel.module.sass'
import playerService from '../services/player-service'
import { ReactComponent as EyemoLogo } from './logo.svg'
import TimeInput from './TimeInput'

function PlayerPanel() {
	const [cut, setCut] = useState<Cut | null>(null)
	const [playing, setPlaying] = useState(false)
	const [position, setPosition] = useState<number | null>(null)

	function changeStart(time: number) {
		setCut({
			startTime: time,
			endTime: Math.max(cut!.endTime, time + 1),
		})
	}

	function changeEnd(time: number) {
		setCut({
			startTime: Math.min(cut!.startTime, time - 1),
			endTime: time,
		})
	}

	function play() {
		if (!cut) return
		playerService.playStory([cut])
	}

	function clear() {
		setCut(null)
	}

	function add() {
		if (!cut) return
		store.addCut(cut)
		setCut({
			startTime: 0,
			endTime: 0,
		})
	}

	const playerRef = useCallback((player) => {
		playerService.setPlayer({
			player,
			start: () => setPlaying(true),
			stop: () => setPlaying(false),
		})
	}, [])

	useEffect(() => {
		let stopped = false
		function getPosition() {
			if (stopped || !playerService.ready) return
			setPosition(playerService.currentTime)
			requestAnimationFrame(getPosition)
		}
		requestAnimationFrame(getPosition)
		return () => {
			stopped = true
		}
	}, [])

	function startFrame() {
		const time = playerService.currentTime
		const current = {
			startTime: cut?.startTime || 0,
			endTime: cut?.endTime || 0,
		}
		current.startTime = time
		if (current.endTime < time) current.endTime = time + 5
		setCut(current)
	}

	function endFrame() {
		const time = playerService.currentTime
		const current = {
			startTime: cut?.startTime || 0,
			endTime: cut?.endTime || 0,
		}
		current.endTime = time
		if (current.startTime > time) current.startTime = time - 5
		setCut(current)
	}

	return (
		<>
			<Grid className={styles.header} container alignContent='center'>
				<EyemoLogo />
			</Grid>
			<Grid className={styles.searchLine} container direction='column' justify={'flex-end'}>
				<TextField
					fullWidth
					placeholder='Copy YouTube url'
					value={store.url}
					onChange={(e) => (store.url = e.target.value)}
				/>
			</Grid>
			<Grid className='padded'>
				<ReactPlayer
					ref={playerRef}
					playing={playing}
					url={store.url}
					//onProgress={(e) => console.log(e)}
					onPlay={() => setPlaying(true)}
					onPause={() => setPlaying(false)}
					controls={true}
					config={{
						youtube: {
							playerVars: {
								//autoplay: 1,
							},
						},
					}}
				/>
			</Grid>
			<Grid justify='center' container>
				{formatTime(position, true)}
			</Grid>
			<Grid container>
				<Grid className='padded' item lg>
					<Button variant='contained' disableElevation fullWidth onClick={startFrame} color='primary'>
						Start of frame
					</Button>
				</Grid>
				<Grid className='padded' item lg>
					<Button variant='contained' disableElevation onClick={endFrame} fullWidth color='primary'>
						End of frame
					</Button>
				</Grid>
			</Grid>
			{cut && (
				<Grid container justify='center' className={styles.timeRow} alignContent='flex-end'>
					<Grid item lg>
						<TimeInput value={cut.startTime} label='Start time' onChange={changeStart} />
					</Grid>
					<Grid item lg>
						<TimeInput value={cut?.endTime} label='End time' onChange={changeEnd} />
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
						<Button variant='outlined' disableElevation onClick={play}>
							Play
						</Button>
						<Button variant='contained' color='primary' disableElevation onClick={add}>
							Add
						</Button>
						<Button variant='contained' disableElevation onClick={clear}>
							Clear
						</Button>
					</Grid>
				</Grid>
			)}
		</>
	)
}

export default observer(PlayerPanel)
