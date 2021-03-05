import Header from "./Header";
import Head from "next/head";
function Layout({ children }) {
	return (
		<div>
			<Head>
				<title>R6 Guide</title>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />

				<meta name="Description" content="Rainbow Six Siege Guide " />
			</Head>
			<Header />
			{children}
		</div>
	);
}

export default Layout;
