import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import Setting from '../components/util/setting';

import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function Header() {
	const [ setting, setSetting ] = useState('');
	const [ windowSizeState, setWindowSizeState ] = useState({
		width: null,
		height: null
	});

	useEffect(() => {
		setWindowSizeState({
			width: window.innerWidth,
			height: window.innerHeight
		});
		window.addEventListener('resize', updateWindowDimensions);
		return function cleanup() {
			window.removeEventListener('resize', updateWindowDimensions);
		};
	}, []);

	const updateWindowDimensions = () => {
		setWindowSizeState({
			width: window.innerWidth,
			height: window.innerHeight
		});
	};

	return (
		<header>
			<div>
				<Link href="/">
					<a>
						<HomeOutlinedIcon style={{ fontSize: 40 }} color="action" />
					</a>
				</Link>
			</div>

			<div className="secondaryheader">
				{windowSizeState.width > 560 ? (
					<div>
						<Link href="/todo">
							<a className="headerTitle">Todo</a>
						</Link>
						<Link href="/emoji">
							<a className="headerTitle">Emoji</a>
						</Link>
						<Link href="/netflix">
							<a className="headerTitle">Netflix</a>
						</Link>
					</div>
				) : (
					<IconButton aria-label="settings">
						<MoreVertIcon
							onClick={() => {
								setSetting(true);
							}}
						/>
						<Setting setting={setting} />
					</IconButton>
				)}
			</div>
		</header>
	);
}
