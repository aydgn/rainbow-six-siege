import Layout from "../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import FloorPlanGrid from "../../components/FloorPlanGrid";

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
				className="header bg-cover bg-black p-3 text-white shadow-2xl"
			>
				<Link href="/maps">
					<button className="p-3 border rounded border-black bg-gray-900 bg-opacity-30 hover:bg-yellow-500 hover:border-white">
						Back
					</button>
				</Link>
				{/* ---- HEADER CONTENT ---- */}
				<div className="contentContainer flex flex-col py-5 sm:container sm:mx-auto md:flex-row items-center">
					<div className="video w-full h-full">
						<iframe
							className="w-full h-48 sm:h-96"
							width="720"
							height="405"
							src={`https://www.youtube.com/embed/${a.video}`}
							srcdoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/${a.video}?autoplay=1><img src=https://img.youtube.com/vi/${a.video}/maxresdefault.jpg alt='${a.name}'><span>▶</span></a>`}
							frameborder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
							loading="lazy"
						></iframe>
					</div>
					<div className="content mt-3 p-3 rounded bg-black bg-opacity-50 sm:mt-0 sm: ml-3">
						<div className="title">
							<h1 className="text-5xl font-black">{a.name}</h1>
						</div>
						<div className="location">Location: {a.location}</div>
						<div className="playlist">Playlist: {a.playlist.join(", ")}</div>
						<p className="desc pt-3">{a.desc}</p>
					</div>
				</div>
			</div>
			{/* ---- MAP PLANS ---- */}
			<div className="floorPlansContainer sm:container mx-auto p-3 sm:p-0 sm:py-3">
				<h2 class="text-3xl font-bold">Map Floor Plans</h2>
				<div className="PLANS">
					<FloorPlanGrid url={a.id} />
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
		{ params: { id: "yacht" } },
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
