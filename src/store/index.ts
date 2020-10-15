import { observable, makeObservable, configure, computed } from 'mobx'

configure({ enforceActions: 'never' })

export interface Cut {
	startTime: number
	endTime: number
}

class Store {
	@observable url: string = 'https://www.youtube.com/watch?v=jrOxsjdeccw'
	@observable currentCut: Cut = {
		startTime: 0,
		endTime: 0,
	}

	@observable cuts: Cut[] = [
		{
			startTime: 0,
			endTime: 0,
		},
	]

	@computed get trailerLength() {
		return this.cuts.reduce((duration, cut) => duration + cut.endTime - cut.startTime, 0)
	}

	constructor() {
		makeObservable(this)
	}
}

const store = new Store()

export default store
