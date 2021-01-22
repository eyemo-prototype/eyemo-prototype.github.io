import { observable, makeObservable, configure, computed, action } from 'mobx'

import parse from 'url-parse'
import ReactPlayer from 'react-player'

configure({ enforceActions: 'never' })

export interface Cut {
	startTime: number
	endTime: number
}

export enum IframeStatusType {
	Active = 'active',
	Inactive = 'inactive',
}

export interface PlayerStore {
	index: number
	playing: boolean
	iframeStatus: IframeStatusType
	muted: boolean
	url?: string
	cut?: Cut
	instance?: ReactPlayer
}

export enum Mode {
	Create = 'create',
	PlayOne = 'playOne',
	PlayAll = 'playAll',
	Show = 'show',
}

const url = parse(window.location.href, true)
let urlStory: PlayerStore[] | null = null

if (url.query.story) {
	const raw = decodeURIComponent(url.query.story)
	urlStory = raw.split(',').map((player) => {
		const parts = player.split('::')
		const index = parseFloat(parts[0])

		return {
			index,
			playing: false,
			iframeStatus: IframeStatusType.Active,
			muted: false,
			url: parts[1],
			cut: {
				startTime: parseFloat(parts[2]),
				endTime: parseFloat(parts[3]),
			},
		}
	})
}

const queryUrl = url.query.video ? decodeURIComponent(url.query.video) : null

class Store {
	@observable editMode = !queryUrl
	@observable url: string | null = queryUrl
	@observable mode: Mode = !queryUrl ? Mode.Create : Mode.Show
	@observable playersStore: PlayerStore[] = urlStory || [
		{
			index: 0,
			playing: false,
			url: this.url as string,
			iframeStatus: IframeStatusType.Active,
			muted: false,
		},
	]

	@computed get shareUrl() {
		if (!this.url) return null
		const baseUrl = window.location.href.split('?')[0]
		return `${baseUrl}?video=${encodeURIComponent(this.url)}&story=${encodeURIComponent(
			this.playersStore
				.map((player, i) => {
					return [player.index, player.url, player.cut?.startTime, player.cut?.endTime].join('::')
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

	@action
	addCut(cut: Cut) {
		this.playersStore.push({
			index: this.playersStore.length,
			playing: false,
			url: this.url as string,
			iframeStatus: IframeStatusType.Inactive,
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
			iframeStatus: IframeStatusType.Active,
			muted: false,
		})

		this.changeModeToCreate()
	}

	@action
	changeModeToCreate() {
		this.mode = Mode.Create
		console.log('--> In CREATE mode')

		for (let i = 0; i < this.playersStore.length; i += 1) {
			if (i === 0) {
				this.playersStore[i].iframeStatus = IframeStatusType.Active
			} else {
				this.playersStore[i].iframeStatus = IframeStatusType.Inactive
			}
		}

		this.playersStore[0].playing = false
	}

	@action
	changeModeToPlayOne(cutIndex: number) {
		this.mode = Mode.PlayOne
		console.log('--> In PLAYONE mode')

		for (let i = 0; i < this.playersStore.length; i += 1) {
			if (i === cutIndex) {
				this.playersStore[i].iframeStatus = IframeStatusType.Active
			} else {
				this.playersStore[i].iframeStatus = IframeStatusType.Inactive
			}
		}

		this.playersStore[cutIndex].playing = true
	}

	@action
	changeModeToPlayAll() {
		if (this.playersStore.length === 1) {
			this.changeModeToCreate()
			this.playersStore[0].playing = true
			return
		}

		this.mode = Mode.PlayAll
		console.log('--> In PLAYALL mode')

		for (let i = 0; i < this.playersStore.length; i += 1) {
			if (i === 0) {
				this.playersStore[i].iframeStatus = IframeStatusType.Inactive
			} else {
				this.playersStore[i].iframeStatus = IframeStatusType.Active
			}
		}

		this.playersStore[1].playing = true
	}

	constructor() {
		makeObservable(this)
	}
}

const store = new Store()

export default store
