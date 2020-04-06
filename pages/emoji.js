import Layout from '../components/MyLayout';
import styled from 'styled-components';
import MainEmoji from '../components/emoji/mainEmoji.js';

// test styled-components librairie
const H2todo = styled.h2`
	margin-top: 320px;
	border: 1px solid grey;
	background: lightgrey;
	border-radius: 4px;
	padding: 4px;
	width: 280px;
	@media (max-width: 400px) {
		margin-top: 150px;
	}
`;

export default function Todo() {
	return (
		<Layout>
			<H2todo>EMOJI EXERCICE :</H2todo>
			<MainEmoji />
		</Layout>
	);
}
