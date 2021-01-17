import React from 'react'
import ReactPlayer from 'react-player'
import { observer } from 'mobx-react'

import store from '../../store'
import styles from './Player.module.sass'

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
		isShow: true,
	},
}

function MultiPlayer(props: Props) {
	const { updatePosition } = props
	const playerRef = React.createRef<ReactPlayer>()

	// function onReady(index: number, player: ReactPlayer) {
	// 	store.addPlayer(index, player)
	// 	playerService.setPlayer({
	// 		player,
	// 		start: () => store.players[index].playing = true,
	// 		stop: () => store.players[index].playing = false,
	// 	})
	// }

	function onStart(playerIndex: number) {
		store.players[playerIndex].playing = true
	}

	// function onPlay(playerIndex: number) {
	// 	store.players[playerIndex].playing = true
	// }

	function onPause(playerIndex: number) {
		store.players[playerIndex].playing = false
	}

	function onEnded(playerIndex: number) {
		store.players[playerIndex].playing = false
	}

	function onProgress({ playedSeconds }: { playedSeconds: number }) {
		updatePosition(playedSeconds)
	}

	return (
		<div>
			{store.url ? (
				store.players.map(
					(item, index, array) =>
						statusOptions[array[array.length - 1 - index].status].isShow && (
							<ReactPlayer
								key={array.length - 1 - index}
								ref={playerRef}
								playing={array[array.length - 1 - index].playing}
								className={styles.player}
								url={array[array.length - 1 - index].url}
								width='100%'
								height='100%'
								// onPlay={onPlay.bind(null, i)}
								onProgress={onProgress}
								onStart={onStart.bind(null, array.length - 1 - index)}
								onPause={onPause.bind(null, array.length - 1 - index)}
								onEnded={onEnded.bind(null, array.length - 1 - index)}
								// onReady={onReady.bind(null, i)}
								// onBuffer={() => console.log('start')}
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
			) : (
				<div className={styles.playerPlaceholder} />
			)}
		</div>
	)
}

export default observer(MultiPlayer)
