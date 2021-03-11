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
			<div className="container mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-8">
				{Maps.map((x) => (
					<Map mapname={x.name} key={x.id} url={x.id} />
				))}
			</div>
		</Layout>
	);
}

export default index;
