import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
	return (
		<div className="app">
			<Head>
				<title>R6</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className="main"></main>
			<footer className="footer"></footer>
		</div>
	);
}
