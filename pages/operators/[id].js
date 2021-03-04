import Layout from "../../components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Post(props) {
	// Router
	const router = useRouter();
	const { id } = router.query;
	return (
		<Layout>
			<Head>
				<title>{id.toUpperCase()}</title>
			</Head>

			<section className="flex justify-between items-center w-full md:justify-evenly ">
				<div className="left flex">
					<Image
						src={`/images/opicons/${id}.svg`}
						alt={id}
						title={id}
						height={96}
						width={96}
					/>
				</div>
				<div className="right flex float-right flex-col px-5 border-l-8">
					<h1 className="text-6xl capitalize">{id}</h1>
					<div className="text-center">
						Real Name:
						<span className="capitalize bg-black hover:bg-transparent rounded transition-all delay-75 ease-in-out	 p-1">
							{props.id[`${id}`].realname}
						</span>
					</div>
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
	console.log(paths);
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
