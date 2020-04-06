import Layout from '../components/MyLayout';
import Link from 'next/link';
import Card from '../components/util/card';
import Grid from '@material-ui/core/Grid';

export default function Index() {
	return (
		<Layout>
			<div
				style={{
					marginTop: '100px',
					marginBottom: '80px',
					display: 'flex'
				}}
			>
				<div>
					<h1
						style={{
							fontSize: '54px',
							fontWeight: '900',
							lineHeight: '1',
							marginBottom: '30px'
						}}
					>
						Learn <br />React
					</h1>
					<p style={{ fontSize: '18px', maxWidth: '300px', marginBottom: '40px', lineHeight: '1.4' }}>
						Learning coding with framework <b>REACT</b> and especially REACT with HOOKS, with some must-do
						exercices.
					</p>
					<button
						style={{
							padding: '10px 16px',
							color: 'lightyellow',
							backgroundColor: 'darkblue',
							borderRadius: '8px',
							fontSize: '16px',
							fontStyle: 'inherit'
						}}
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
