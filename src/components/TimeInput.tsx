import React, { ChangeEvent } from 'react'
import styles from './CutsPanel.module.css'
import { Button, Col, FormControl, InputGroup } from 'react-bootstrap'
import { formatTime } from '../utils/format-time'

interface Props {
	value: number | null
	label: string
	onChange: (value: number) => void
}

export default function TimeInput(props: Props) {
	const formattedValue = formatTime(props.value)

	function onChange(e: ChangeEvent) {
		console.log('--> ')
	}
	return (
		<Col className={styles.timeInput}>
			<div className={styles.label}>{props.label}</div>
			<InputGroup>
				<InputGroup.Prepend>
					<Button variant='outline-dark' className={styles.stepBtn}>
						-
					</Button>
				</InputGroup.Prepend>
				<FormControl className={styles.input} value={formattedValue} onChange={onChange} />
				<InputGroup.Append>
					<Button variant='outline-dark' className={styles.stepBtn}>
						+
					</Button>
				</InputGroup.Append>
			</InputGroup>
		</Col>
	)
}
