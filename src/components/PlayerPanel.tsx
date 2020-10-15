import React, { useEffect, useRef, useState } from 'react'
import { observer } from 'mobx-react'
import store from '../store'
import ReactPlayer from 'react-player'
import { formatTime } from '../utils/format-time'
import { Button, Grid, TextField } from '@material-ui/core'
import styles from './PlayerPanel.module.sass'

function PlayerPanel() {
	const ref = useRef<ReactPlayer>(null)
	const [playing, setPlaying] = useState(true)
	const [position, setPosition] = useState<number | null>(null)

	useEffect(() => {
		let stopped = false
		function getPosition() {
			if (stopped || !ref.current) return
			setPosition(ref.current.getCurrentTime())
			requestAnimationFrame(getPosition)
		}
		requestAnimationFrame(getPosition)
		return () => {
			stopped = true
		}
	}, [])

	function startFrame() {
		const time = ref.current?.getCurrentTime()!
		store.currentCut = store.currentCut || {
			startTime: 0,
			endTime: 0,
		}
		store.currentCut.startTime = time
		if (store.currentCut.endTime < time) store.currentCut.endTime = time + 5
	}

	function endFrame() {
		const time = ref.current?.getCurrentTime()!
		store.currentCut = store.currentCut || {
			startTime: 0,
			endTime: 0,
		}
		store.currentCut.endTime = time
		if (store.currentCut.startTime > time) store.currentCut.startTime = time - 5
	}

	return (
		<>
			<Grid className={styles.header}>eyemo</Grid>
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
					ref={ref}
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
			<Grid>
				<Grid className='padded'>
					<Button
						variant='contained'
						fullWidth
						disableElevation
						onClick={() => {
							//ref.current?.seekTo(3)
							setPlaying(!playing)
						}}
					>
						Continue Watching
					</Button>
				</Grid>
			</Grid>
		</>
	)
}

export default observer(PlayerPanel)
