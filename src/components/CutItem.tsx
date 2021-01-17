import React from 'react'
import { observer } from 'mobx-react'
import store, { Cut } from '../store'
import styles from './CutItem.module.sass'
import { Button, Grid } from '@material-ui/core'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import TimeInput from './TimeInput'
import { formatTime } from '../utils/format-time'
import CloseIcon from '@material-ui/icons/Close'
// import playerService from '../services/player-service'

interface Props {
	cut: Cut
	idx: number
}

function CutItem(props: Props) {
	function play() {
		// playerService.playStory([props.cut])
		store.mode = 'playOne'

		store.playersStore.map((item) => {
			if (item.index === props.idx) {
				store.playersStore[item.index].iframeStatus = 'active'
				return
			}
			store.playersStore[item.index].iframeStatus = 'inactive'
		})
		// store.playersStore[props.idx].playing = true
	}

	function remove() {
		store.removeCut(props.idx)
	}

	function setStart(time: number) {
		props.cut.startTime = time
		if (props.cut.endTime < props.cut.startTime + 1) props.cut.endTime = props.cut.startTime + 1

		store.playersStore[props.idx].cut = {
			startTime: props.cut.startTime,
			endTime: props.cut.endTime,
		}
	}

	function setEnd(time: number) {
		props.cut.endTime = time
		if (props.cut.startTime > props.cut.endTime - 1) props.cut.startTime = props.cut.endTime - 1
		store.playersStore[props.idx].cut = {
			startTime: props.cut.startTime,
			endTime: props.cut.endTime,
		}
	}

	return (
		<Grid container className={styles.container}>
			<Grid item className={styles.idx}>
				{props.idx}
			</Grid>
			<Grid className={styles.block} container item lg>
				<Grid item>
					<Button className={styles.play} onClick={play}>
						<PlayArrowIcon />
					</Button>
				</Grid>
				<Grid item lg>
					<TimeInput value={props.cut.startTime} onChange={(time) => setStart(time)} />
				</Grid>
				<Grid item lg>
					<TimeInput value={props.cut.endTime} onChange={(time) => setEnd(time)} />
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
