import React from 'react';
import data from './data.json';
import styled from 'styled-components';

const H3Netflix = styled.h3`
	width: 90px;
	color: red;
	background: black;
	padding: 4px 10px;
	margin-top: 50px;
`;
const SectionNetflix = styled.section`
	background: black;
	color: white;
	padding: 2px 10px;
`;
const Scroll = styled.div`
	margin: 10px 0;
	display: flex;
	overflow: hidden;
	overflow-X: scroll;
`;

export default function MainNetflix() {
	return (
		<main>
			<H3Netflix>NETFLIX</H3Netflix>
			<SectionNetflix>
				{data.map((item, index) => {
					return (
						<div key={index}>
							<div>
								<h3>{item.category}</h3>

								<Scroll>
									{item.images.map((el, i) => {
										return (
											<div key={i}>
												{' '}
												<img src={el} />
											</div>
										);
									})}
								</Scroll>
							</div>
						</div>
					);
				})}
			</SectionNetflix>
		</main>
	);
}
