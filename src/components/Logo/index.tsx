import React from 'react'

import { ReactComponent as EyemoLogo } from './logo.svg'

type LogoProps = {
	className?: string
}

const Logo = ({ className }: LogoProps) => {
	return (
		<div className={className}>
			<EyemoLogo />
		</div>
	)
}

export default Logo
