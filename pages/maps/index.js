import Head from "next/head";
import Layout from "../../components/Layout";
import Map from "../../components/Map";
import Maps from "../maps.json";

function index() {
	return (
		<Layout>
			<Head>
				<title>Maps</title>
			</Head>
			<div className="p-2 lg:p-10 lg:max-w-screen-xl mx-auto">
				{Maps.map((x) => (
					<Map mapname={x.Name} key={x.Name} />
				))}
			</div>
		</Layout>
	);
}

export default index;
