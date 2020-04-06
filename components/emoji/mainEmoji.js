import React, { useState, useEffect } from 'react';
import data from './data.json';
import axios from 'axios';

export default function MainEmoji() {
	const [ state, setState ] = useState();
	const [ value, setValue ] = useState('');
	const [ loading, setLoading ] = useState(false);
	const handleChange = (event) => {
		setValue(event.target.value);
	};

	async function fetchAPI() {
		try {
			const response = await axios.get('https://unpkg.com/emoji.json@12.1.1/emoji.json');
			setLoading(true);
			if (response.status) {
				setLoading(false);
				if (response.status === 200) {
					setState(response.data);
				} else {
					setState(data);
				}
			}
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		fetchAPI();
	}, []);

	return (
		<div>
			<h2>Search for an Emoji</h2>
			<fieldset>
				<form>
					<legend />
					<label>😀Emoji List 🕹</label>
					<input placeholder="search here" type="text" name="emoji" onChange={handleChange} />
				</form>
			</fieldset>
			{loading ? (
				<p>En cours de chargement ...</p>
			) : (
				<div className="line">
					{state &&
						state.map((item, index) => {
							if (item.name) {
								if (item.name.indexOf(value) !== -1) {
									return (
										<button className="eachLine" key={index}>
											<span>{item.char}</span>
											<span>{item.name}</span>
										</button>
									);
								}
							} else {
								if (item.keywords.indexOf(value) !== -1) {
									return (
										<button className="eachLine" key={index}>
											<span>{item.symbol}</span>
											<span>{item.title}</span>
										</button>
									);
								}
							}
						})}
				</div>
			)}
		</div>
	);
}
