import React, { useCallback, useState } from 'react'
import { observer } from 'mobx-react'
import store, { Cut } from '../store'
import ReactPlayer from 'react-player'
import { formatTime } from '../utils/format-time'
import { Button, Grid, TextField } from '@material-ui/core'
import styles from './PlayerPanel.module.sass'
import playerService from '../services/player-service'
import { ReactComponent as EyemoLogo } from './logo.svg'
import TimeInput from './TimeInput'
import classNames from 'classnames'
import { when } from 'mobx'

function PlayerPanel() {
	const [cut, setCut] = useState<Cut | null>(null)
	const [playing, setPlaying] = useState(false)
	const [position, setPosition] = useState<number>(0)

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

	function onPlay() {
		console.log('---> onPlay <---')
		if (!playing) setPlaying(true)
		store.playing = true
	}

	function onPause() {
		console.log('---> onPause <---')
		if (playing) setPlaying(false)
		store.playing = false
	}

	function onProgress({ playedSeconds }: { playedSeconds: number }) {
		setPosition(playedSeconds);
	}

	function startFrame() {
		const current = {
			startTime: cut?.startTime || 0.0,
			endTime: cut?.endTime || 0.0,
		}

		current.startTime = position;
		if (current.endTime < position) current.endTime = position + 5;
		setCut(current)
	}

	function endFrame() {
		const current = {
			startTime: cut?.startTime || 0.0,
			endTime: cut?.endTime || 0.0,
		}

		current.endTime = position
		if (current.startTime > position) current.startTime = position - 5
		setCut(current)
	}

	async function onStart() {
		setPlaying(false)
		await when(() => !store.playing)
		playerService.playStory(store.cuts)
	}

	return (
		<>
			<Grid className={styles.header} container alignContent='center'>
				<EyemoLogo />
			</Grid>
			{store.editMode && (
				<Grid className={styles.searchLine} container direction='column' justify={'flex-end'}>
					<TextField
						fullWidth
						placeholder='Copy YouTube url'
						value={store.url || ''}
						onChange={(e) => (store.url = e.target.value)}
					/>
				</Grid>
			)}
			<Grid className={classNames('padded', styles.playerWrapper)}>
				{store.url ? (
					<ReactPlayer
						ref={playerRef}
						playing={playing}
						className={styles.player}
						url={store.url}
						width='100%'
						height='100%'
						onProgress={onProgress}
						onStart={onStart}
						onPlay={onPlay}
						onPause={onPause}
						progressInterval={100}
						controls={true}
						config={{
							youtube: {
								playerVars: {
									//autoplay: 1,
								},
							},
							twitch: {
								options: {
									autoplay: true,
									time: '0h0m0s'
								},
							}
						}}
					/>
				) : (
					<div className={styles.playerPlaceholder} />
				)}
			</Grid>
			{store.editMode && store.url ? (
				<>
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

export default observer(PlayerPanel)
