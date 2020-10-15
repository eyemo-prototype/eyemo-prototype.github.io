import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PlayerPanel from './components/PlayerPanel'
import CutsPanel from './components/CutsPanel'
import styles from './App.module.css'
import { Container, createMuiTheme, ThemeProvider } from '@material-ui/core'

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
				<Row>
					<Col>
						<PlayerPanel />
					</Col>
					<Col className={styles.rightCol}>
						<CutsPanel />
					</Col>
				</Row>
			</Container>
		</ThemeProvider>
	)
}

export default App
