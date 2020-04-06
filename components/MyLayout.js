import Header from './Header';

const layoutStyle = {
	padding:"20px",
	height: '120vh',
	display: 'block',
	backgroundImage: "url('coding.png')",
	backgroundSize: '85%',
	backgroundPosition: 'right top',
	backgroundRepeat: 'no-repeat'
};

const footerStyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '30px 0',
	marginTop: '200px',
	position: 'sticky',
	bottom: '0'
};
const footerDiv = {
	backgroundColor: '#f2f7f9',
	color: 'grey',
	borderRadius: '6px',
	padding: '12px 20px',
	width: '340px',
	display: 'flex',
	justifyContent: 'space-between',
	fontSize: '15px'
};
const footerLink = {
	textDecoration: 'inherit',
	color: 'inherit',
	cursor: 'pointer',
	fontWeight: 'bold'
};
const Layout = (props) => (
	<div style={layoutStyle}>
		<Header />
		{props.children}
		<Footer />
	</div>
);

export default Layout;

const Footer = () => {
	return (
		<footer style={footerStyle}>
			<div style={footerDiv}>
				<span>Made with </span>
				<a style={footerLink} target="blank" href="https://nextjs.org/">
					Next.JS
				</a>
				<span> by </span>
				<a style={footerLink} target="blank" href="https://github.com/Regisnut">
					Myself
				</a>
				{` with ♥️ - `}
				<span>@2020</span>
			</div>
		</footer>
	);
};
