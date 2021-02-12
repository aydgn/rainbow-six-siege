import Head from "next/head";
import Header from "../../components/Header";
import Op from "../../components/Op";

function index() {
	const attackers = [
		"Sledge",
		"Thatcher",
		"Ash",
		"Thermite",
		"Twitch",
		"Montagne",
		"Glaz",
		"Fuze",
		"Blitz",
		"Iq",
		"Buck",
		"Blackbeard",
		"Capitao",
		"Hibana",
		"Jackal",
		"Ying",
		"Zofia",
		"Dokkaebi",
		"Lion",
		"Finka",
		"Maverick",
		"Nomad",
		"Gridlock",
		"Nokk",
		"Amaru",
		"Kali",
		"Iana",
		"Ace",
		"Zero",
	];
	const defenders = [
		"Smoke",
		"Mute",
		"Castle",
		"Pulse",
		"Doc",
		"Rook",
		"Kapkan",
		"Tachanka",
		"Jager",
		"Bandit",
		"Frost",
		"Valkyrie",
		"Caveira",
		"Echo",
		"Mira",
		"Lesion",
		"Ela",
		"Vigil",
		"Maestro",
		"Alibi",
		"Clash",
		"Kaid",
		"Mozzie",
		"Warden",
		"Goyo",
		"Wamai",
		"Oryx",
		"Melusi",
		"Aruni",
	];

	return (
		<div>
			<Head>
				<title>Operators</title>
			</Head>
			<Header />
			<div className="p-2 lg:p-10 lg:max-w-screen-xl mx-auto">
				<h2 className="text-xl font-bold my-5 border-b">
					Atackers ({attackers.length})
				</h2>
				<div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 lg:gap-5">
					{attackers.map((op) => {
						return <Op name={op} key={op} />;
					})}
				</div>
				<h2 className="text-xl font-bold my-5 border-b">
					Defenders ({defenders.length})
				</h2>
				<div className="grid grid-cols-3 md:grid-cols-10 gap-4">
					{defenders.map((op) => {
						return <Op name={op} key={op} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default index;
