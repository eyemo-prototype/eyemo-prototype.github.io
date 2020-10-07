import React from 'react'
import { Row } from 'react-bootstrap'
import store from '../store'
import TimeInput from './TimeInput'
import styles from './CutsPanel.module.css'
import { observer } from 'mobx-react'
import CutItem from './CutItem'
import { Button, Grid } from '@material-ui/core'

export function CutsPanel() {
	function changeStart() {}

	function changeEnd() {}

	function add() {
		if (!store.currentCut) return
		store.cuts.push(store.currentCut)
		store.currentCut = null
	}

	return (
		<>
			<Grid container justify='center' className={styles.timeRow} alignContent='center'>
				{store.currentCut ? (
					<>
						<Grid item>
							<TimeInput value={store.currentCut.startTime} label='Start time' onChange={changeStart} />
						</Grid>
						<Grid item>
							<TimeInput value={store.currentCut?.endTime} label='End time' onChange={changeEnd} />
						</Grid>
						<Grid item className={styles.buttons} xs>
							<Button variant='contained'>Play</Button>
							<Button variant='contained' onClick={add}>
								Add
							</Button>
						</Grid>
					</>
				) : (
					<Grid item>No current episode</Grid>
				)}
			</Grid>
			{store.cuts.length === 0 && <Row>Add your first episode (~5 sec). Max time of trailer - 60 sec.</Row>}
			<Grid container direction='column'>
				{store.cuts.map((cut, idx) => (
					<CutItem key={idx} cut={cut} />
				))}
			</Grid>
		</>
	)
}

export default observer(CutsPanel)
