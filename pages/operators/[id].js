import Layout from "../../components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import Grid from "../../components/Grid";

export default function Post(props) {
	// Router
	const router = useRouter();
	const { id } = router.query;
	return (
		<Layout>
			<Head>
				<title>{id.toUpperCase()}</title>
			</Head>

			{/* First section */}

			<section className="container mx-auto flex bg-gray-700 text-white p-5 -mt-8 justify-between sm:justify-evenly items-center">
				<div className="leftCol flex flex-col sm:flex-row sm:space-x-8 justify-between sm:place-items-center">
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

			{/* Stats / Second section */}

			<section className="container mx-auto flex bg-gray-700 text-white px-5 pb-5">
				<div className="grid grid-cols-3 gap-1 text-center mx-auto w-full md:w-auto">
					<span className="border rounded px-3 border-gray-600">
						Armor: {props.id[`${id}`].armor}
					</span>
					<span className="border rounded px-3 border-gray-600">
						Speed: {props.id[`${id}`].speed}
					</span>
					<span
						className={
							props.id[`${id}`].difficulty
								? "border rounded px-3 border-gray-600"
								: "hidden"
						}
					>
						Difficulty: {props.id[`${id}`].difficulty}
					</span>
				</div>
			</section>

			{/* OP DETAILS GRID */}

			<section className="container mx-auto grid grid-cols-2 md:grid-cols-4 bg-gray-700 text-white rounded-b-3xl pb-3 px-3">
				<Grid title="Side" contentClass="capitalize">
					{props.id[`${id}`].side}
				</Grid>
				<Grid title="Country" contentClass="capitalize">
					{props.id[`${id}`].country}
				</Grid>
				<Grid title="Role" contentClass="capitalize">
					{props.id[`${id}`].role}
				</Grid>
				<Grid title="Company" contentClass="uppercase">
					{props.id[`${id}`].company}
				</Grid>
			</section>
			<div className="loadout container mx-auto py-5">
				<h2 className="text-3xl border-l-8 border-gray-50 pl-3">Loadout</h2>
			</div>

			{/* GUNS */}

			<div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
				<Grid title="Primary Weapon" contentClass="uppercase">
					<div className="primary1 ">{props.id[`${id}`].primaryweapon1}</div>
					<div className="primary2">{props.id[`${id}`].primaryweapon2}</div>
					<div className="primary3">{props.id[`${id}`].primaryweapon3}</div>
				</Grid>
				<Grid title="Secondary Weapon" contentClass="uppercase">
					<div className="secondaryweapon1">
						{props.id[`${id}`].secondaryweapon1}
					</div>
					<div className="secondaryweapon2">
						{props.id[`${id}`].secondaryweapon2}
					</div>
				</Grid>

				{/* GADGETS */}

				<Grid title="Gadget" contentClass="capitalize">
					<div className="gagdet1">{props.id[`${id}`].gadget1}</div>
					<div className="gagdet2">{props.id[`${id}`].gadget2}</div>
				</Grid>

				{/* UNIQUE ABILITY */}

				<Grid title="Unique Ability" contentClass="uppercase">
					<div className="unique">{props.id[`${id}`].uniqueability}</div>
				</Grid>
			</div>
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
