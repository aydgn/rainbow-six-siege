import Head from "next/head";
import Layout from "../../components/Layout";
import Op from "../../components/Op";

export const getStaticProps = async () => {
	const res = (await import("../operators.json")).default;

	return {
		props: { operators: res },
	};
};

function index({ operators }) {
	return (
		<Layout>
			<Head>
				<title>Operators</title>
			</Head>
			<div className="container mx-auto">
				<h2 className="text-xl font-bold mb-3 border-b">
					Atackers ({operators.attackers.length})
				</h2>
				<div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 lg:gap-5">
					{operators.attackers.map((op) => {
						return <Op name={op} key={op} />;
					})}
				</div>
				<h2 className="text-xl font-bold my-5 border-b">
					Defenders ({operators.defenders.length})
				</h2>
				<div className="grid grid-cols-3 md:grid-cols-10 gap-4">
					{operators.defenders.map((op) => {
						return <Op name={op} key={op} />;
					})}
				</div>
			</div>
		</Layout>
	);
}
export default index;
