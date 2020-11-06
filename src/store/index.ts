import { observable, makeObservable, configure, computed, action } from 'mobx'

import parse from 'url-parse'

configure({ enforceActions: 'never' })

export interface Cut {
	startTime: number
	endTime: number
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

	@computed get shareUrl() {
		if (!this.url) return null
		const baseUrl = window.location.href.split('?')[0]
		return `${baseUrl}?video=${encodeURIComponent(this.url)}&story=${encodeURIComponent(
			this.cuts.map((cut) => [cut.startTime, cut.endTime].join(':')).join(',')
		)}`
	}

	@computed get trailerLength() {
		return this.cuts.reduce((duration, cut) => duration + cut.endTime - cut.startTime, 0)
	}

	@action
	addCut(cut: Cut) {
		this.cuts.push(cut)
	}

	@action
	removeCut(cut: Cut) {
		this.cuts = this.cuts.filter((c) => c !== cut)
	}

	constructor() {
		makeObservable(this)
	}
}

const store = new Store()

export default store
