import { when } from 'mobx'
import ReactPlayer from 'react-player'
import store, { Cut } from '../store'

interface PlayerControl {
	player: ReactPlayer
	start(): void
	stop(): void
}

export class PlayerService {
	control: PlayerControl | null = null
	playingStory: Cut[] | null = null
	currentCutIdx = 0
	currentCutSeekDone = false
	trackingTimer: number | null = null

	get ready() {
		return !!this.control
	}

	get currentCut() {
		return this.playingStory?.[this.currentCutIdx] || null
	}

	get currentTime() {
		if (!this.control) return 0
		return this.control.player.getCurrentTime()
	}

	get player() {
		if (!this.control) return 0
		return this.control.player
	}

	setPlayer(player: PlayerControl | null) {
		this.control = player
		console.log('--> player set', player)
	}

	async playStory(cuts: Cut[] = store.cuts) {
		if (!this.control) return
		console.log('---> playStory <---', JSON.stringify(cuts))
		this.playingStory = cuts
		this.currentCutIdx = 0
		await this.stop()
		this.playCurrentCut()
		await this.start()
	}

	getPlayerState() {
		let internalPlayer = this.control?.player.getInternalPlayer() as any
		return internalPlayer?.getPlayerState()
	}

	async stop() {
		if (!store.playing || !this.control) return
		this.stopTracking()
		this.control.stop()
		await when(() => !store.playing)
	}

	async start() {
		if (store.playing || !this.control) return
		this.startTracking()
		this.control.start()
		await when(() => store.playing)
	}

	async playCurrentCut() {
		if (!this.playingStory || !this.control || !this.currentCut) return
		this.currentCutSeekDone = false
		console.log('---> playCurrentCut <---', JSON.stringify(this.currentCut))
		this.control.player.seekTo(this.currentCut.startTime)
	}

	startTracking() {
		if (this.trackingTimer) return
		this.trackingTimer = (setInterval(this.checkTiming, 20) as any) as number
	}

	stopTracking() {
		if (!this.trackingTimer) return
		clearInterval(this.trackingTimer)
		this.trackingTimer = null
	}

	checkTiming = () => {
		if (!this.playingStory || !this.currentCut?.endTime) return

		if (!this.currentCutSeekDone) {
			if (this.currentTime < this.currentCut.endTime && this.currentTime >= this.currentCut.startTime) {
				this.currentCutSeekDone = true
				console.log('--> got into current cut')
			}
			return
		}
		if (this.currentTime < this.currentCut.endTime) return

		console.log('---> checkTiming <---', this.currentTime, this.currentCut.endTime)
		this.currentCutIdx++
		if (this.currentCut) {
			this.playCurrentCut()
		} else {
			this.stop()
		}
	}

	preloadStory(cuts: Cut[] = store.cuts) {
		const player = this.player

		if (!player || !this.control) return

		cuts.forEach((cut) => {
			player.seekTo(cut.startTime)
			this.control?.start()
			setTimeout(() => this.control?.stop())
		})
	}
}

// const playerService = new PlayerService();

// export default playerService
