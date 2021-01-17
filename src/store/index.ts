import { observable, makeObservable, configure, computed, action } from 'mobx'

import parse from 'url-parse'
// import ReactPlayer from 'react-player'

configure({ enforceActions: 'never' })

export interface Cut {
	startTime: number
	endTime: number
}

export interface PlayerStore {
	index: number
	playing: boolean
	iframeStatus: 'active' | 'inactive' | 'preload'
	muted: boolean
	position?: number
	url?: string
	cut?: Cut
}

const url = parse(window.location.href, true)
let urlStory: Cut[] | null = null

if (url.query.story) {
	const raw = decodeURIComponent(url.query.story)
	urlStory = raw.split(',').map((cut) => {
		const parts = cut.split(':')
		return {
			startTime: parseFloat(parts[0]),
			endTime: parseFloat(parts[1]),
		}
	})
}

const queryUrl = url.query.video ? decodeURIComponent(url.query.video) : null

class Store {
	@observable editMode = !queryUrl
	@observable playing = false
	@observable url: string | null = queryUrl
	@observable cuts: Cut[] = urlStory || []
	@observable mode: 'create' | 'playOne' | 'playAll' = 'create'
	@observable playersStore: PlayerStore[] = [
		{
			index: 0,
			playing: false,
			url: this.url as string,
			iframeStatus: 'active',
			position: 0,
			muted: false,
		},
	]

	@computed get shareUrl() {
		if (!this.url) return null
		const baseUrl = window.location.href.split('?')[0]
		return `${baseUrl}?video=${encodeURIComponent(this.url)}&story=${encodeURIComponent(
			this.playersStore
				.map((player, i) => {
					if (i === 0) return
					return [player.cut?.startTime, player.cut?.endTime].join(':')
				})
				.join(',')
		)}`
	}

	@computed get trailerLength() {
		return this.playersStore.reduce((duration, player, index) => {
			if (index === 0 || !player.cut) return duration
			return duration + player.cut.endTime - player.cut.startTime
		}, 0)
	}

	// @action
	// addPlayer(index: number, player: ReactPlayer) {
	// 	this.players[index] = {
	// 		...this.players[index],
	// 		player,
	// 		// url: this.url as string,
	// 	}
	// }

	@action
	addCut(cut: Cut) {
		// this.cuts.push(cut)
		this.playersStore.push({
			index: this.playersStore.length,
			playing: false,
			url: this.url as string,
			iframeStatus: 'inactive',
			muted: false,
			cut: {
				startTime: cut.startTime,
				endTime: cut.endTime,
			},
		})
	}

	@action
	removeCut(index: number) {
		this.playersStore = this.playersStore.filter((item) => item.index !== index)
	}

	@action
	changeUrl(url: string) {
		this.url = url
		this.playersStore = []
		this.playersStore.push({
			index: 0,
			playing: false,
			url,
			iframeStatus: 'active',
			position: 0,
			muted: false,
		})
	}

	constructor() {
		makeObservable(this)
	}
}

const store = new Store()

export default store
