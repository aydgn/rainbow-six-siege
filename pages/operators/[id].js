import Layout from "../../components/layout";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Post(props) {
	// Router
	const router = useRouter();
	const { id } = router.query;
	return (
		<Layout>
			<Head>
				<title>{id}</title>
			</Head>
			<h1 className="text-6xl">{id}</h1>
			Real Name: {props.id[`${id}`].realName}
		</Layout>
	);
}

// OTHERS
export async function getStaticPaths() {
	const paths = [
		{ params: { id: "Sledge" } },
		{ params: { id: "Thatcher" } },
		{ params: { id: "Ash" } },
		{ params: { id: "Thermite" } },
		{ params: { id: "Twitch" } },
		{ params: { id: "Montagne" } },
		{ params: { id: "Glaz" } },
		{ params: { id: "Fuze" } },
		{ params: { id: "Blitz" } },
		{ params: { id: "Iq" } },
		{ params: { id: "Buck" } },
		{ params: { id: "Blackbeard" } },
		{ params: { id: "Capitão" } },
		{ params: { id: "Hibana" } },
		{ params: { id: "Jackal" } },
		{ params: { id: "Ying" } },
		{ params: { id: "Zofia" } },
		{ params: { id: "Dokkaebi" } },
		{ params: { id: "Lion" } },
		{ params: { id: "Finka" } },
		{ params: { id: "Maverick" } },
		{ params: { id: "Nomad" } },
		{ params: { id: "Gridlock" } },
		{ params: { id: "Nøkk" } },
		{ params: { id: "Amaru" } },
		{ params: { id: "Kali" } },
		{ params: { id: "Iana" } },
		{ params: { id: "Ace" } },
		{ params: { id: "Zero" } },
		{ params: { id: "Smoke" } },
		{ params: { id: "Mute" } },
		{ params: { id: "Castle" } },
		{ params: { id: "Pulse" } },
		{ params: { id: "Doc" } },
		{ params: { id: "Rook" } },
		{ params: { id: "Kapkan" } },
		{ params: { id: "Tachanka" } },
		{ params: { id: "Jäger" } },
		{ params: { id: "Bandit" } },
		{ params: { id: "Frost" } },
		{ params: { id: "Valkyrie" } },
		{ params: { id: "Caveira" } },
		{ params: { id: "Echo" } },
		{ params: { id: "Mira" } },
		{ params: { id: "Lesion" } },
		{ params: { id: "Ela" } },
		{ params: { id: "Vigil" } },
		{ params: { id: "Maestro" } },
		{ params: { id: "Alibi" } },
		{ params: { id: "Clash" } },
		{ params: { id: "Kaid" } },
		{ params: { id: "Mozzie" } },
		{ params: { id: "Warden" } },
		{ params: { id: "Goyo" } },
		{ params: { id: "Wamai" } },
		{ params: { id: "Oryx" } },
		{ params: { id: "Melusi" } },
		{ params: { id: "Aruni" } },
		{ params: { id: "Flores" } },
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
