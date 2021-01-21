import React from 'react'
import ReactPlayer from 'react-player'
import { observer } from 'mobx-react'

import store, { Cut, IframeStatusType, Mode } from '../../store'
import styles from './MultiPlayer.module.sass'

interface Props {
	updatePosition: (playedSeconds: number) => void
	currentCut: Cut | null
}

const statusOptions: any = {
	active: {
		isShow: true,
	},
	inactive: {
		isShow: false,
	},
}

function MultiPlayer(props: Props) {
	const { updatePosition } = props
	const playerRef = React.createRef<ReactPlayer>()

	function onReady(index: number, player: ReactPlayer) {
		console.log(`Player ${index} onReady`)

		store.playersStore[index].instance = player
		const cut = store.playersStore[index].cut

		switch (store.mode) {
			case Mode.Create:
				if (!cut) return
				startPreloadVideo(index, player)
				break
			case Mode.PlayOne:
				break
			case Mode.PlayAll:
				break
		}
	}

	function onProgress(index: number, playerState: any) {
		console.log(`Player ${index} onProgress in ${playerState.playedSeconds} seconds`)

		updatePosition(playerState.playedSeconds)

		const playerStore = store.playersStore[index]

		switch (store.mode) {
			case Mode.Create:
				break
			case Mode.PlayOne:
				if (isInCut(playerStore.cut, playerState.playedSeconds)) return
				stopPlayOne(index)
				store.changeModeToCreate()
				break
			case Mode.PlayAll:
				if (isInCut(playerStore.cut, playerState.playedSeconds)) return
				goToNextCut(index)
				break
		}
	}

	function onBuffer(playerIndex: number) {
		console.log(`Player ${playerIndex} onBuffer`)
	}

	function onBufferEnd(playerIndex: number) {
		console.log(`Player ${playerIndex} onBufferEnd`)

		switch (store.mode) {
			case Mode.Create:
				if (playerIndex === 0) return
				store.playersStore[playerIndex].playing = false
				store.playersStore[playerIndex].muted = false
				break
			case Mode.PlayOne:
				break
			case Mode.PlayAll:
				break
		}
	}

	function onStart(playerIndex: number) {
		console.log(`Player ${playerIndex} onStart`)
		store.playersStore[playerIndex].playing = true
	}

	function onPlay(playerIndex: number) {
		console.log(`Player ${playerIndex} onPlay`)
		store.playersStore[playerIndex].playing = true
	}

	function onPause(playerIndex: number) {
		console.log(`Player ${playerIndex} onPause`)
		store.playersStore[playerIndex].playing = false
	}

	function onEnded(playerIndex: number) {
		console.log(`Player ${playerIndex} onEnded`)
		store.playersStore[playerIndex].playing = false
	}

	function onSeek(playerIndex: number, e: any) {
		console.log(`Player ${playerIndex} onSeek`)
	}

	function startPreloadVideo(index: number, player: ReactPlayer) {
		console.log(`Player ${index} in preload`)

		const cut = store.playersStore[index].cut
		const startTime = cut ? cut.startTime : 0

		store.playersStore[index].muted = true
		player.seekTo(startTime)
		store.playersStore[index].playing = true
	}

	function isInCut(cut: Cut | null | undefined, playedSeconds: number) {
		if (!cut) return false
		if (playedSeconds >= cut.startTime && playedSeconds <= cut.endTime) return true
		return false
	}

	function goToNextCut(playerIndex: number) {
		stopPlayOne(playerIndex)

		if (playerIndex === store.playersStore.length - 1) {
			console.log('Last cut is end')
			store.changeModeToCreate()
		} else {
			console.log(`Go from ${playerIndex} to ${playerIndex + 1} cut`)
			store.playersStore[playerIndex + 1].iframeStatus = IframeStatusType.Active
			store.playersStore[playerIndex + 1].playing = true
		}
	}

	function stopPlayOne(playerIndex: number) {
		const cut = store.playersStore[playerIndex].cut
		const startTime = cut ? cut.startTime : 0

		store.playersStore[playerIndex].playing = false
		store.playersStore[playerIndex].instance?.seekTo(startTime)
		store.playersStore[playerIndex].iframeStatus = IframeStatusType.Inactive
	}

	return (
		<div>
			{store.url ? (
				store.playersStore.map((item, index, array) => {
					const curIndex = array.length - 1 - index
					const playerStore = array[curIndex]
					const isShow = statusOptions[array[array.length - 1 - index].iframeStatus].isShow

					return (
						<div key={curIndex} style={{ visibility: isShow ? 'visible' : 'hidden' }}>
							<ReactPlayer
								ref={playerRef}
								playing={playerStore.playing}
								className={styles.player}
								url={playerStore.url}
								muted={playerStore.muted}
								width='100%'
								height='100%'
								onPlay={onPlay.bind(null, curIndex)}
								onProgress={onProgress.bind(null, curIndex)}
								onStart={onStart.bind(null, curIndex)}
								onPause={onPause.bind(null, curIndex)}
								onEnded={onEnded.bind(null, curIndex)}
								onReady={onReady.bind(null, curIndex)}
								onSeek={onSeek.bind(null, curIndex)}
								onBufferEnd={onBufferEnd.bind(null, curIndex)}
								onBuffer={onBuffer.bind(null, curIndex)}
								progressInterval={100}
								controls={true}
								config={{
									youtube: {
										playerVars: {},
									},
									// twitch: {
									// 	options: {
									// 		autoplay: true,
									// 		time: '0h0m0s',
									// 	},
									// },
								}}
							/>
						</div>
					)
				})
			) : (
				<div className={styles.playerPlaceholder} />
			)}
		</div>
	)
}

export default observer(MultiPlayer)
