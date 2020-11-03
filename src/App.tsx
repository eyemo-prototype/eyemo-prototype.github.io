import React from 'react'
import './App.css'
import PlayerPanel from './components/PlayerPanel'
import CutsPanel from './components/CutsPanel'
import styles from './App.module.css'
import { Container, createMuiTheme, Grid, ThemeProvider } from '@material-ui/core'
import DateFnsAdapter from '@material-ui/pickers/adapter/date-fns'
import { LocalizationProvider } from '@material-ui/pickers'

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#4d6ddf',
		},
		secondary: {
			main: '#314eb7',
		},
	},
})

function App() {
	return (
		<ThemeProvider theme={theme}>
			<LocalizationProvider dateAdapter={DateFnsAdapter}>
				<Container className={styles.container}>
					<Grid container wrap={'nowrap'}>
						<Grid item>
							<PlayerPanel />
						</Grid>
						<Grid item className={styles.rightCol}>
							<CutsPanel />
						</Grid>
					</Grid>
				</Container>
			</LocalizationProvider>
		</ThemeProvider>
	)
}

export default App
