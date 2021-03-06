import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = responsiveFontSizes(createMuiTheme());

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta charSet="utf-8" />
					<meta
						name="viewport"
						content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
					/>
					<meta name="theme-color" content={theme.palette.primary.main} />
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css2?family=Courgette&family=Lato:wght@400;700;900&family=Montserrat:wght@400;500;700&family=Roboto:wght@400;500;700&family=Ubuntu:wght@400;500;700&display=swap"
					/>
					<style jsx global>
						{`
							html,
							body {
								height: 100%;
								width: 100%;
							}
							*,
							*:after,
							*:before {
								box-sizing: border-box;
							}
							body {
								font-family: 'Roboto', 'Lato', 'Montserrat','Ubuntu', sans-serif;
								font-size: 1rem;
								max-width: 1024px;
								margin: 0 auto;
							}
						`}
					</style>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

MyDocument.getInitialProps = async (ctx) => {
	// Render app and page and get the context of the page with collected side effects.
	const sheets = new ServerStyleSheets();
	const originalRenderPage = ctx.renderPage;

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
		});

	const initialProps = await Document.getInitialProps(ctx);

	return {
		...initialProps,
		// Styles fragment is rendered after the app and page rendering finish.
		styles: [
			<React.Fragment key="styles">
				{initialProps.styles}
				{sheets.getStyleElement()}
			</React.Fragment>
		]
	};
};

export default MyDocument;
