import React from 'react'
import ReactPlayer from 'react-player'
import { observer } from 'mobx-react'
import { when } from 'mobx'

import store, { PlayerStore } from '../../store'
import styles from './MultiPlayer.module.sass'

interface Props {
	updatePosition: (playedSeconds: number) => void
	// onStart: () => void
	// onPlay: () => void
	// onPause: () => void
	// onReady: () => void
}

const statusOptions: any = {
	active: {
		isShow: true,
	},
	preload: {
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
		const cut = store.playersStore[index].cut
		preloadVideo(index).then(() => {
			if (!cut) return
			player.seekTo(cut.startTime)
			if (index === 1 && store.mode === 'playAll') {
				store.playersStore[index].iframeStatus = 'active'
				store.playersStore[index].playing = true
			} else if (store.mode === 'playOne') {
				store.playersStore[index].playing = true
			}
		})
	}

	async function preloadVideo(index: number) {
		store.playersStore[index].muted = true
		await when(() => store.playersStore[index].muted)
		store.playersStore[index].playing = true
		setTimeout(() => (store.playersStore[index].playing = false), 1000)
		await when(() => !store.playersStore[index].playing)
		store.playersStore[index].muted = false
		await when(() => !store.playersStore[index].muted)
	}

	function onStart(playerIndex: number) {
		store.playersStore[playerIndex].playing = true
	}

	// function onPlay(playerIndex: number) {
	// 	store.players[playerIndex].playing = true
	// }

	function onPause(playerIndex: number) {
		store.playersStore[playerIndex].playing = false
	}

	function onEnded(playerIndex: number) {
		store.playersStore[playerIndex].playing = false
	}

	function onProgress(index: number, { playedSeconds }: { playedSeconds: number }) {
		const playerStore = store.playersStore[index]

		if (playerStore.iframeStatus === 'preload') return

		if (index === 0) updatePosition(playedSeconds)
		else {
			if (!isInCut(playerStore, playedSeconds)) goToNextCut(index)
		}
	}

	function isInCut(playerStore: PlayerStore, playedSeconds: number) {
		const cut = playerStore.cut

		if (!cut) return false
		if (playedSeconds >= cut.startTime && playedSeconds <= cut.endTime) return true
		return false
	}

	function goToNextCut(curentIndex: number) {
		store.playersStore[curentIndex].playing = false
		store.playersStore[curentIndex].iframeStatus = 'inactive'
		if (curentIndex === store.playersStore.length - 1) {
			store.playersStore[0].iframeStatus = 'active'
			store.mode = 'create'
			return
		}
		store.playersStore[curentIndex + 1].iframeStatus = 'active'
		store.playersStore[curentIndex + 1].playing = true
	}

	return (
		<div>
			{store.url ? (
				store.playersStore.map((item, index, array) => {
					const curIndex = array.length - 1 - index
					const playerStore = array[curIndex]

					return (
						statusOptions[array[array.length - 1 - index].iframeStatus].isShow && (
							<ReactPlayer
								key={curIndex}
								ref={playerRef}
								playing={playerStore.playing}
								className={styles.player}
								url={playerStore.url}
								muted={playerStore.muted}
								width='100%'
								height='100%'
								// onPlay={onPlay.bind(null, i)}
								onProgress={onProgress.bind(null, curIndex)}
								onStart={onStart.bind(null, curIndex)}
								onPause={onPause.bind(null, curIndex)}
								onEnded={onEnded.bind(null, curIndex)}
								onReady={onReady.bind(null, curIndex)}
								// onBuffer={onBuffer.bind(null, curIndex)}
								// onBufferEnd={() => console.log('end')}
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
						)
					)
				})
			) : (
				<div className={styles.playerPlaceholder} />
			)}
		</div>
	)
}

export default observer(MultiPlayer)
