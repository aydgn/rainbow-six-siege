import Layout from "../../components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Post(props) {
	// Router
	const router = useRouter();
	const { id } = router.query;
	const detailStyle = "text-center border rounded  flex flex-col";
	return (
		<Layout>
			<Head>
				<title>{id.toUpperCase()}</title>
			</Head>
			{/* First section */}
			<section className="flex w-full bg-gray-50 p-5 -mt-8 justify-between sm:justify-evenly items-center">
				<div className="leftCol flex flex-col sm:flex-row sm:space-x-8 justify-between px-5 sm:place-items-center">
					<h1
						className="opName text-4xl xl:text-6xl capitalize pb-3 font-bold"
						title={id}
					>
						{id}
					</h1>
					<span className="capitalize font-thin" title="Real Name">
						{props.id[`${id}`].realname}
					</span>
				</div>
				{/* Right Col */}
				<div className="right flex">
					<Image
						src={`/images/opicons/${id}.svg`}
						alt={id}
						title={id}
						height={96}
						width={96}
					/>
				</div>
			</section>
			{/* Second section */}
			<section className="flex w-full bg-gray-50 px-5 pb-5">
				<div className="grid grid-cols-3 text-center mx-auto">
					<span className="border rounded px-3">
						Armor: {props.id[`${id}`].armor}
					</span>
					<span className="border rounded px-3">
						Speed: {props.id[`${id}`].speed}
					</span>
					<span
						className={
							props.id[`${id}`].difficulty ? "border rounded px-3" : "hidden"
						}
					>
						Difficulty: {props.id[`${id}`].difficulty}
					</span>
				</div>
			</section>
			{/* OP details Grid */}
			<section className="grid grid-cols-2 md:grid-cols-4 border-t-4 py-5 justify-items-stretch">
				<div className={detailStyle}>
					<span class="font-bold">Side</span>
					<span class="capitalize">{props.id[`${id}`].side}</span>
				</div>
				<div className={detailStyle}>
					<span class="font-bold">Country</span>
					<span class="uppercase">{props.id[`${id}`].country}</span>
				</div>
				<div className={detailStyle}>
					<span class="font-bold">Role</span>
					<span class="capitalize">{props.id[`${id}`].role}</span>
				</div>
				<div className={detailStyle}>
					<span className="font-bold">Company</span>
					<span className="uppercase">{props.id[`${id}`].company}</span>
				</div>
			</section>
		</Layout>
	);
}

// OTHERS
export async function getStaticPaths() {
	const paths = [
		{ params: { id: "sledge" } },
		{ params: { id: "thatcher" } },
		{ params: { id: "ash" } },
		{ params: { id: "thermite" } },
		{ params: { id: "twitch" } },
		{ params: { id: "montagne" } },
		{ params: { id: "glaz" } },
		{ params: { id: "fuze" } },
		{ params: { id: "blitz" } },
		{ params: { id: "iq" } },
		{ params: { id: "buck" } },
		{ params: { id: "blackbeard" } },
		{ params: { id: "capitão" } },
		{ params: { id: "hibana" } },
		{ params: { id: "jackal" } },
		{ params: { id: "ying" } },
		{ params: { id: "zofia" } },
		{ params: { id: "dokkaebi" } },
		{ params: { id: "lion" } },
		{ params: { id: "finka" } },
		{ params: { id: "maverick" } },
		{ params: { id: "nomad" } },
		{ params: { id: "gridlock" } },
		{ params: { id: "nøkk" } },
		{ params: { id: "amaru" } },
		{ params: { id: "kali" } },
		{ params: { id: "iana" } },
		{ params: { id: "ace" } },
		{ params: { id: "zero" } },
		{ params: { id: "smoke" } },
		{ params: { id: "mute" } },
		{ params: { id: "castle" } },
		{ params: { id: "pulse" } },
		{ params: { id: "doc" } },
		{ params: { id: "rook" } },
		{ params: { id: "kapkan" } },
		{ params: { id: "tachanka" } },
		{ params: { id: "jäger" } },
		{ params: { id: "bandit" } },
		{ params: { id: "frost" } },
		{ params: { id: "valkyrie" } },
		{ params: { id: "caveira" } },
		{ params: { id: "echo" } },
		{ params: { id: "mira" } },
		{ params: { id: "lesion" } },
		{ params: { id: "ela" } },
		{ params: { id: "vigil" } },
		{ params: { id: "maestro" } },
		{ params: { id: "alibi" } },
		{ params: { id: "clash" } },
		{ params: { id: "kaid" } },
		{ params: { id: "mozzie" } },
		{ params: { id: "warden" } },
		{ params: { id: "goyo" } },
		{ params: { id: "wamai" } },
		{ params: { id: "oryx" } },
		{ params: { id: "melusi" } },
		{ params: { id: "aruni" } },
		{ params: { id: "flores" } },
	];
	return {
		paths,
		fallback: false,
	};
}

export const getStaticProps = async () => {
	const res = (await import("../r6operators.json")).default;

	return {
		props: { id: res },
	};
};
