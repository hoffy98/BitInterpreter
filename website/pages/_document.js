import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					{/* Fonts */}

					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
						rel="stylesheet"
					/>

					{/* Font Awesome */}
					<script
						src="https://kit.fontawesome.com/fdb802efa4.js"
						crossOrigin="anonymous"
					></script>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
