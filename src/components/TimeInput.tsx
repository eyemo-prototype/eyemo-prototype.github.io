import React, { ChangeEvent, useEffect, useRef, WheelEvent } from 'react'

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

	const textFieldRef = useRef(null);

	function onChange(e: ChangeEvent<HTMLInputElement>) {
	}

	function onWheel(e: WheelEvent<HTMLElement>): void {
		e.preventDefault();

		if (e.deltaY > 0) {
			onAdd();
		} else {
			onRemove();
		}
	}

	function onRemove() {
		if (!props.value) return;

		let newVal = props.value - 0.1;

		if (newVal < 0) newVal = 0;

		props.onChange(newVal);
	}

	function onAdd() {
		console.log(props.value);
		props.onChange(props.value + 0.1);
	}

	useEffect(() => {
		const textField = textFieldRef.current;

		(textField as any)?.addEventListener('wheel', onWheel);
		return () => {
			(textField as any)?.removeEventListener("wheel", onWheel);
		};
	}, [props.value]);

	const formattedProps = {
		...props,
		value: formatTime(props.value, true)
	};

	const textField = <TextField
		{...formattedProps}
		className={styles.timeInput}
		size={'small'}
		helperText={null}
		variant='outlined'
		onChange={onChange}
		ref={textFieldRef}
		InputProps={{
			startAdornment: <Adornment position='start' onClick={onRemove} />,
			endAdornment: <Adornment position='end' onClick={onAdd} />,
			readOnly: true,
		}}
	/>;

	return (
		textField
	)
}
