import { observable, makeObservable, configure } from 'mobx'

configure({ enforceActions: 'never' })

export interface Cut {
	startTime: number
	endTime: number
}

class Store {
	@observable url: string = 'https://www.youtube.com/watch?v=jrOxsjdeccw'
	@observable currentCut: Cut | null = null
	@observable cuts: Cut[] = [
		{
			startTime: 0,
			endTime: 0,
		},
	]

	constructor() {
		makeObservable(this)
	}
}

const store = new Store()

export default store
