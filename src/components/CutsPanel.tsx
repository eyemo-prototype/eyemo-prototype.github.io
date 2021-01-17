import React from 'react'
import store, { Cut } from '../store'
import styles from './CutsPanel.module.sass'
import { observer } from 'mobx-react'
import CutItem from './CutItem'
import { Button, Grid } from '@material-ui/core'
import { formatTime } from '../utils/format-time'
import playerService from '../services/player-service'
import CopyToClipboard from 'react-copy-to-clipboard'
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined'
import { useState } from 'react'
import classNames from 'classnames'

export function CutsPanel() {
	const [showCopied, setShowCopied] = useState(false)

	function playAll() {
		playerService.playStory()
	}

	function onUrlCopy() {
		setShowCopied(true)
		setTimeout(() => setShowCopied(false), 3000)
		gtag('event', 'url-copy', {
			url: store.shareUrl,
		})
	}

	return (
		<Grid className={styles.cutsPanel}>
			{store.url ? (
				<>
					<Grid container direction='column'>
						{store.players.map(
							(item, idx) => idx !== 0 && <CutItem key={idx} idx={idx - 1} cut={item.cut as Cut} />
						)}
					</Grid>
					<Grid container className={styles.infoLine} item>
						<Grid item lg>
							Trailer duration: {formatTime(store.trailerLength)}
						</Grid>
						<Grid item lg>
							Number of frames: {store.players.length - 1}
						</Grid>
					</Grid>
					<Grid>
						<Button variant='contained' disableElevation onClick={playAll} fullWidth color='primary'>
							Play all
						</Button>
					</Grid>
					<Grid className={styles.shareUrlBlock}>
						<div className={styles.shareUrl}>
							<span className={styles.shareUrlText}>{store.shareUrl}</span>
							<CopyToClipboard text={store.shareUrl || ''} onCopy={onUrlCopy}>
								<AssignmentTurnedInOutlinedIcon />
							</CopyToClipboard>
							<div className={classNames(styles.copiedText, { [styles.copiedTextShown]: showCopied })}>
								Copied
							</div>
						</div>
					</Grid>
				</>
			) : (
				<Grid container className={styles.cutsPanelBlank}>
					Please select video for trailer editing
				</Grid>
			)}
		</Grid>
	)
}

export default observer(CutsPanel)
