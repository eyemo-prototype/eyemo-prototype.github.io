import React, { useEffect, useRef, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { observer } from 'mobx-react'
import store from '../store'
import ReactPlayer from 'react-player'
import { formatTime } from '../utils/format-time'

function PlayerPanel() {
	const ref = useRef<ReactPlayer>(null)
	const [playing, setPlaying] = useState(true)
	const [position, setPosition] = useState<number | null>(null)

	useEffect(() => {
		let stopped = false
		function getPosition() {
			if (stopped || !ref.current) return
			setPosition(ref.current.getCurrentTime())
			requestAnimationFrame(getPosition)
		}
		requestAnimationFrame(getPosition)
		return () => {
			stopped = true
		}
	}, [])

	function startFrame() {
		const time = ref.current?.getCurrentTime()!
		store.currentCut = store.currentCut || {
			startTime: 0,
			endTime: 0,
		}
		store.currentCut.startTime = time
		if (store.currentCut.endTime < time) store.currentCut.endTime = time + 5
	}

	function endFrame() {
		const time = ref.current?.getCurrentTime()!
		store.currentCut = store.currentCut || {
			startTime: 0,
			endTime: 0,
		}
		store.currentCut.endTime = time
		if (store.currentCut.startTime > time) store.currentCut.startTime = time - 5
	}

	return (
		<>
			<Row className='padded'>
				<InputGroup className='mb-3'>
					<FormControl
						placeholder='Copy YouTube url'
						value={store.url}
						onChange={(e) => (store.url = e.target.value)}
					/>
					<InputGroup.Append>
						<Button>Search</Button>
					</InputGroup.Append>
				</InputGroup>
			</Row>
			<Row className='padded justify-content-center'>
				<ReactPlayer
					ref={ref}
					playing={playing}
					url={store.url}
					//onProgress={(e) => console.log(e)}
					onPlay={() => setPlaying(true)}
					onPause={() => setPlaying(false)}
					controls={true}
					config={{
						youtube: {
							playerVars: {
								//autoplay: 1,
							},
						},
					}}
				/>
			</Row>
			<Row className='justify-content-center'>{formatTime(position, true)}</Row>
			<Row>
				<Col className='padded'>
					<Button block onClick={startFrame}>
						Start of frame
					</Button>
				</Col>
				<Col className='padded'>
					<Button block onClick={endFrame}>
						End of frame
					</Button>
				</Col>
			</Row>
			<Row>
				<Col className='padded'>
					<Button
						block
						variant={'outline-info'}
						onClick={() => {
							//ref.current?.seekTo(3)
							setPlaying(!playing)
						}}
					>
						Continue Watching
					</Button>
				</Col>
			</Row>
		</>
	)
}

export default observer(PlayerPanel)
