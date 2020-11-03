import React from 'react'

import { TimePicker } from '@material-ui/pickers'
import { IconButton, InputAdornment, TextField } from '@material-ui/core'
import set from 'date-fns/set'
import RemoveIcon from '@material-ui/icons/Remove'
import AddIcon from '@material-ui/icons/Add'

import styles from './TimeInput.module.sass'
import { getHours, getMilliseconds, getMinutes, getSeconds } from 'date-fns'

interface Props {
	value: number | null
	label: string
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
	const value = set(new Date(2000, 1, 1), {
		seconds: props.value ?? undefined,
	})

	function onChange(date: Date | null) {
		if (!date) return
		const hours = getHours(date)
		const mins = getMinutes(date)
		const seconds = getSeconds(date)
		const millis = getMilliseconds(date)
		let res = hours * 3600 + mins * 60 + seconds + millis / 1000
		props.onChange(res)
		console.log('--> ', res)
	}

	function onRemove() {
		if (!props.value) return
		props.onChange(props.value - 1)
	}
	function onAdd() {
		if (!props.value) return
		props.onChange(props.value + 1)
	}

	return (
		<TimePicker
			disableOpenPicker
			ampm={false}
			value={value}
			onChange={onChange}
			inputFormat={'HH:mm:ss.S'}
			mask='__:__:__._'
			views={['hours', 'minutes', 'seconds']}
			renderInput={(props) => (
				<TextField
					{...props}
					className={styles.timeInput}
					size={'small'}
					helperText={null}
					variant='outlined'
					InputProps={{
						startAdornment: <Adornment position='start' onClick={onRemove} />,
						endAdornment: <Adornment position='end' onClick={onAdd} />,
					}}
				/>
			)}
		/>
	)
}
