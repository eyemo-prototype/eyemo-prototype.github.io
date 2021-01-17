import { observable, makeObservable, configure, computed, action } from 'mobx'

import parse from 'url-parse'
// import ReactPlayer from 'react-player'

configure({ enforceActions: 'never' })

export interface Cut {
	startTime: number
	endTime: number
}

export interface Player {
	index: number
	playing: boolean
	status: 'active' | 'inactive' | 'preload'
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
	@observable players: Player[] = [
		{
			index: 0,
			playing: false,
			url: this.url as string,
			status: 'active',
			position: 0,
		},
	]

	@computed get shareUrl() {
		if (!this.url) return null
		const baseUrl = window.location.href.split('?')[0]
		return `${baseUrl}?video=${encodeURIComponent(this.url)}&story=${encodeURIComponent(
			this.players
				.map((player, i) => {
					if (i === 0) return
					return [player.cut?.startTime, player.cut?.endTime].join(':')
				})
				.join(',')
		)}`
	}

	@computed get trailerLength() {
		return this.players.reduce((duration, player, index) => {
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
		this.players.push({
			index: this.players.length,
			playing: false,
			url: this.url as string,
			status: 'inactive',
			cut: {
				startTime: cut.startTime,
				endTime: cut.endTime,
			},
		})
	}

	@action
	removeCut(cut: Cut) {
		this.cuts = this.cuts.filter((c) => c !== cut)
	}

	@action
	changeUrl(url: string) {
		this.url = url
		this.players = []
		this.players.push({
			index: 0,
			playing: false,
			url,
			status: 'active',
			position: 0,
		})
	}

	constructor() {
		makeObservable(this)
	}
}

const store = new Store()

export default store
