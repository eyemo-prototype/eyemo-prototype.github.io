import React, { ChangeEvent, WheelEvent } from 'react'

import { IconButton, InputAdornment, TextField } from '@material-ui/core'
import RemoveIcon from '@material-ui/icons/Remove'
import AddIcon from '@material-ui/icons/Add'

import styles from './TimeInput.module.sass'
import { formatTime } from "../utils/format-time";

interface Props {
	value: number
	label?: string
	onChange: (value: number) => void
}

function Adornment({ onClick, position }: { position: 'start' | 'end'; onClick: () => void }) {
	return (
		<InputAdornment position={position}>
			<IconButton edge={position} onClick={onClick} className={styles.changeButton}>
				{position === 'start' ? <RemoveIcon style={{ fontSize: 12 }} /> : <AddIcon style={{ fontSize: 12 }} />}
			</IconButton>
		</InputAdornment>
	)
}

export default function TimeInput(props: Props) {

	function onChange(e: ChangeEvent<HTMLInputElement>) {
	}

	function onWheel(e: WheelEvent<HTMLInputElement>): void {
		e.preventDefault();

		if (e.deltaY) {
			onAdd();
		} else {
			onRemove();
		}
	}

	function onRemove() {
		if (!props.value) return
		props.onChange(props.value - 0.1)
	}

	function onAdd() {
		if (!props.value) return
		props.onChange(props.value + 0.1)
	}

	const formattedProps = {
		...props,
		value: formatTime(props.value, true)
	};

	return (
		<TextField
			{...formattedProps}
			className={styles.timeInput}
			size={'small'}
			helperText={null}
			variant='outlined'
			onChange={onChange}
			onWheel={onWheel}
			InputProps={{
				startAdornment: <Adornment position='start' onClick={onRemove} />,
				endAdornment: <Adornment position='end' onClick={onAdd} />,
				readOnly: true,
			}}
		/>
	)
}
