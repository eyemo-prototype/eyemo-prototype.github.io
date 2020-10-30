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

class Store {
	@observable url: string = url.query.video
		? decodeURIComponent(url.query.video)
		: 'https://www.youtube.com/watch?v=jrOxsjdeccw'

	@observable cuts: Cut[] = urlStory || [
		{
			startTime: 900,
			endTime: 905,
		},
		{
			startTime: 1900,
			endTime: 1915,
		},
	]

	@computed get shareUrl() {
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
