import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PlayerPanel from './components/PlayerPanel'
import CutsPanel from './components/CutsPanel'
import styles from './App.module.css'
import { Container } from '@material-ui/core'

function App() {
	return (
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
	)
}

export default App
