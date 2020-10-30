import React from 'react'
import { observer } from 'mobx-react'
import store, { Cut } from '../store'
import styles from './CutItem.module.sass'
import { Button, Grid } from '@material-ui/core'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import TimeInput from './TimeInput'
import { formatTime } from '../utils/format-time'
import CloseIcon from '@material-ui/icons/Close'
import playerService from '../services/player-service'

interface Props {
	cut: Cut
	idx: number
}

function CutItem(props: Props) {
	function play() {
		playerService.playStory([props.cut])
	}

	function remove() {
		store.removeCut(props.cut)
	}

	return (
		<Grid container className={styles.container}>
			<Grid item className={styles.idx}>
				{props.idx + 1}
			</Grid>
			<Grid className={styles.block} container item lg>
				<Grid item>
					<Button className={styles.play} onClick={play}>
						<PlayArrowIcon />
					</Button>
				</Grid>
				<Grid item lg>
					<TimeInput value={props.cut.startTime} label='Start time' onChange={() => {}} />
				</Grid>
				<Grid item lg>
					<TimeInput value={props.cut.endTime} label='Start time' onChange={() => {}} />
				</Grid>
				<Grid item className={styles.rightBlock}>
					<CloseIcon className={styles.remove} fontSize='small' onClick={remove} />
					<div className={styles.timeTotal}>{formatTime(props.cut.endTime - props.cut.startTime)}</div>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default observer(CutItem)
