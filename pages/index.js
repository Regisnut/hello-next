import Layout from '../components/MyLayout';
import Link from 'next/link';
import Card from '../components/util/card';
import Grid from '@material-ui/core/Grid';

export default function Index() {
	return (
		<Layout>
			<div
			className="hero"
			>
				<div>
					<h1
					className="heroH1"
					>
						Learn <br />React
					</h1>
					<p className="heroParagraph">
						Learning coding with framework <b>REACT</b> and especially REACT with HOOKS, with some must-do
						exercices.
					</p>
					{/* button with gradient shift on hover */}
					<button
						className="heroButton"
					>
						<Link href="/todo">
							<span>GET STARTED</span>
						</Link>
					</button>
				</div>
			</div>
			<Grid container spacing={2} justify="center">
				<Grid item xs={12} sm={4}>
					<Card title="TODO-LIST" letter="T" linkCard="/todo" pic="checklist.png" />
				</Grid>
				<Grid item xs={12} sm={4}>
					<Card title="EMOJI SEARCH" letter="E" linkCard="/emoji" pic="emoji.png" />
				</Grid>
				<Grid item xs={12} sm={4}>
					<Card title="NETFLIX DISPLAY" letter="N" linkCard="/netflix" pic="netflix.png" />
				</Grid>
			</Grid>
		</Layout>
	);
}
