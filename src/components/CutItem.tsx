import React from 'react'
import { observer } from 'mobx-react'
import { Cut } from '../store'
import styles from './CutItem.module.css'
import { Button, Grid } from '@material-ui/core'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import TimeInput from './TimeInput'

interface Props {
	cut: Cut
}

function CutItem(props: Props) {
	return (
		<Grid item className={styles.container} container>
			<Grid item alignItems='stretch'>
				<Button className={styles.play}>
					<PlayArrowIcon />
				</Button>
			</Grid>
			<Grid item>
				<TimeInput value={props.cut.startTime} label='Start time' onChange={() => {}} />
			</Grid>
			<Grid item>
				<TimeInput value={props.cut.endTime} label='Start time' onChange={() => {}} />
			</Grid>
		</Grid>
	)
}

export default observer(CutItem)
