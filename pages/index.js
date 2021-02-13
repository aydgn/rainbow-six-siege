import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
	return (
		<div className="app">
			<Head>
				<title>R6 Guide</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="Description" content="Rainbow Six Siege Guide " />
			</Head>
			<Header />
			<main className="main"></main>
			<footer className="footer"></footer>
		</div>
	);
}
