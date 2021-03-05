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
	const titleStyles =
		"text-xl font-bold my-5 border-b text-center md:text-left";
	const gridDivStyles =
		"grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 lg:gap-5";
	return (
		<Layout>
			<Head>
				<title>Operators</title>
			</Head>
			<div className="container mx-auto px-5 md:px-0 pb-5">
				<h2 className={titleStyles}>Atackers ({operators.attackers.length})</h2>
				<div className={gridDivStyles}>
					{operators.attackers.map((op) => {
						return <Op name={op} key={op} />;
					})}
				</div>
				<h2 className={titleStyles}>
					Defenders ({operators.defenders.length})
				</h2>
				<div className={gridDivStyles}>
					{operators.defenders.map((op) => {
						return <Op name={op} key={op} />;
					})}
				</div>
			</div>
		</Layout>
	);
}
export default index;
