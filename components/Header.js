import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import Setting from '../components/util/setting';

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
						<HomeOutlinedIcon className="headerHome" style={{ fontSize: 45 }} color="action" />
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
					<button onClick={() => {
						setSetting(true);
					}} >
						
						<Setting setting={setting} />
					</button>
				)}
			</div>
		</header>
	);
}
