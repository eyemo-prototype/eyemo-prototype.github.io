import { Grid, TextField } from '@material-ui/core'
import React from 'react'
import styles from './UrlInput.module.sass'
import store from '../store'

export default function UrlInput() {
	return (
		<>
			{store.editMode && (
				<Grid className={styles.searchLine} container direction='column' justify={'flex-end'}>
					<TextField
						fullWidth
						placeholder='Paste a YouTube url'
						value={store.url || ''}
						onChange={(e) => (store.url = e.target.value)}
					/>
				</Grid>
			)}
		</>
	)
}
