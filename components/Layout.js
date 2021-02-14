import Header from "./Header";
import Head from "next/head";
function Layout({ children }) {
	return (
		<div>
			<Head>
				<title>R6 Guide</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="Description" content="Rainbow Six Siege Guide " />
			</Head>
			<Header />
			{children}
		</div>
	);
}

export default Layout;
