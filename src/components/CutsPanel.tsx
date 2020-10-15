import React from 'react'
import store from '../store'
import TimeInput from './TimeInput'
import styles from './CutsPanel.module.sass'
import { observer } from 'mobx-react'
import CutItem from './CutItem'
import { Button, Grid } from '@material-ui/core'
import { formatTime } from '../utils/format-time'

export function CutsPanel() {
	function changeStart() {}

	function changeEnd() {}

	function play() {}

	function add() {
		if (!store.currentCut) return
		store.cuts.push(store.currentCut)
		store.currentCut = {
			startTime: 0,
			endTime: 0,
		}
	}

	return (
		<>
			<Grid className={styles.header} />
			<Grid container justify='center' className={styles.timeRow} alignContent='flex-end'>
				<Grid item>
					<TimeInput value={store.currentCut.startTime} label='Start time' onChange={changeStart} />
				</Grid>
				<Grid item>
					<TimeInput value={store.currentCut?.endTime} label='End time' onChange={changeEnd} />
				</Grid>
				<Grid item className={styles.buttons} xs>
					<Button variant='outlined' disableElevation onClick={play}>
						Play
					</Button>
					<Button variant='contained' color='primary' disableElevation onClick={add}>
						Add
					</Button>
				</Grid>
			</Grid>
			<Grid container direction='column'>
				{store.cuts.map((cut, idx) => (
					<CutItem key={idx} idx={idx} cut={cut} />
				))}
			</Grid>
			<Grid container className={styles.infoLine} item>
				<Grid item lg>
					Trailer duration: {formatTime(store.trailerLength)}
				</Grid>
				<Grid item lg>
					Number of frames: {store.cuts.length}
				</Grid>
			</Grid>
		</>
	)
}

export default observer(CutsPanel)
