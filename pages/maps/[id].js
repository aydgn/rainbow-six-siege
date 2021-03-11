import Layout from "../../components/Layout";
import Head from "next/head";
import Image from "next/image";
import Grid from "../../components/Grid";
import { useRouter } from "next/router";

export default function maps(props) {
	const router = useRouter();
	const { id } = router.query;
	const index = props.id.findIndex((x) => x.id === id);
	const array = props.id[index];
	console.log(index);

	return (
		<Layout>
			<Head>
				<title>{id.toUpperCase()}</title>
			</Head>
			{/* First section */}
			{array.name}
		</Layout>
	);
}

// OTHERS
export async function getStaticPaths() {
	const res = (await import("../maps.json")).default;
	const paths = [
		{ params: { id: "bank" } },
		{ params: { id: "border" } },
		{ params: { id: "chalet" } },
		{ params: { id: "clubhouse" } },
		{ params: { id: "consulate" } },
		{ params: { id: "coastline" } },
		{ params: { id: "favela" } },
		{ params: { id: "fortress" } },
		{ params: { id: "hereford-base" } },
		{ params: { id: "house" } },
		{ params: { id: "kafe-dostoyevsky" } },
		{ params: { id: "kanal" } },
		{ params: { id: "oregon" } },
		{ params: { id: "outback" } },
		{ params: { id: "presidential-plane" } },
		{ params: { id: "skyscraper" } },
		{ params: { id: "theme-park" } },
		{ params: { id: "tower" } },
		{ params: { id: "villa" } },
		{ params: { id: "yacth" } },
	];

	return {
		paths,
		fallback: false,
	};
	/* 
	const paths = [
		{ params: { id: "sledge" } },
		{ params: { id: "thatcher" } },
	*/
}

export const getStaticProps = async () => {
	const res = (await import("../maps.json")).default;

	return {
		props: { id: res },
	};
};
