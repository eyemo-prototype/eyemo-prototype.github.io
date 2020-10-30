import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import PlayerPanel from './components/PlayerPanel'
import CutsPanel from './components/CutsPanel'
import styles from './App.module.css'
import { Container, createMuiTheme, Grid, ThemeProvider } from '@material-ui/core'

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
			<Container>
				<Grid container wrap={'nowrap'}>
					<Grid item>
						<PlayerPanel />
					</Grid>
					<Grid item className={styles.rightCol}>
						<CutsPanel />
					</Grid>
				</Grid>
			</Container>
		</ThemeProvider>
	)
}

export default App
