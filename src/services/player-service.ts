import ReactPlayer from 'react-player'
import { Cut } from '../store'

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

	setPlayer(player: PlayerControl | null) {
		this.control = player
		console.log('--> player set', player)
	}

	playStory(cuts: Cut[]) {
		if (!this.control) return
		console.log('---> playStory <---', JSON.stringify(cuts))
		this.playingStory = cuts
		this.currentCutIdx = 0
		this.playCurrentCut()
	}

	getPlayerState() {
		let internalPlayer = this.control?.player.getInternalPlayer() as any
		return internalPlayer?.getPlayerState()
	}

	async playCurrentCut() {
		if (!this.playingStory || !this.control || !this.currentCut) return
		this.currentCutSeekDone = false
		console.log('---> playCurrentCut <---', JSON.stringify(this.currentCut))
		this.control.player.seekTo(this.currentCut.startTime)
		this.control.start()
		this.startTracking()
	}

	stop() {
		console.log('---> stop <---')
		this.control?.stop()
		this.stopTracking()
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

	get currentTime() {
		if (!this.control) return 0
		return this.control.player.getCurrentTime()
	}
}

const playerService = new PlayerService()

export default playerService
