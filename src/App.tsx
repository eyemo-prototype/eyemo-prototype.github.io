import React from 'react'
import './App.css'
import PlayerPanel from './components/PlayerPanel'
import CutsPanel from './components/CutsPanel'
import Logo from './components/Logo'
import styles from './App.module.css'
import { Container, createMuiTheme, Grid, ThemeProvider } from '@material-ui/core'
import DateFnsAdapter from '@material-ui/pickers/adapter/date-fns'
import { LocalizationProvider } from '@material-ui/pickers'
import store from './store'
import { observer } from 'mobx-react'

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
					<Grid className={styles.header} container alignContent='center'>
						<Logo />
					</Grid>
					<Grid container wrap={'nowrap'}>
						<Grid item lg className={'padded'}>
							<PlayerPanel />
						</Grid>
						{store.editMode && (
							<Grid item className={styles.rightCol} lg>
								<CutsPanel />
							</Grid>
						)}
					</Grid>
				</Container>
			</LocalizationProvider>
		</ThemeProvider>
	)
}

export default observer(App)
