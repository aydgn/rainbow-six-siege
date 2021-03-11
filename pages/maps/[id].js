import Layout from "../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function maps(props) {
	const router = useRouter();
	const { id } = router.query;
	const index = props.id.findIndex((x) => x.id === id);
	const a = props.id[index];

	return (
		<Layout>
			<Head>
				<title>{a.name}</title>
			</Head>
			{/* ---- HEADER ---- */}
			<div
				style={{ backgroundImage: `url("/images/header/header-${a.id}.jpg")` }}
				className="header bg-cover p-3 text-white shadow-2xl"
			>
				<Link href="/maps">
					<button className="p-3 border rounded border-black bg-gray-900 bg-opacity-30 hover:bg-opacity-100 hover:border-white">
						Back
					</button>
				</Link>
				{/* ---- HEADER CONTENT ---- */}
				<div className="contentContainer flex flex-col py-5 sm:container sm:mx-auto md:flex-row items-center">
					<div className="video border border-gray-700 text-center">
						*buraya video gelecek*
						<img
							src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/29slajjHhuKyxSabBGGag4/d4bf02709469786297d780fefc78f59a/r6-maps-video-favela_352566.jpg"
							height={410}
							width={730}
						/>
					</div>
					<div className="content m-3 p-3 rounded bg-black bg-opacity-50">
						<div className="title">
							<h1 className="text-5xl font-black">{a.name}</h1>
						</div>
						<div className="location">Location: {a.location}</div>
						<div className="playlist">Playlist: {a.playlist.join(", ")}</div>
						<p className="desc pt-3">{a.desc}</p>
					</div>
				</div>
			</div>
		</Layout>
	);
}

// OTHERS
export async function getStaticPaths() {
	const res = (await import("../maps.json")).default;

	const path = [
		res.map((x) => {
			{
				params: {
					id: x.id;
				}
			}
		}),
	];

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
}

export const getStaticProps = async () => {
	const res = (await import("../maps.json")).default;

	return {
		props: { id: res },
	};
};
