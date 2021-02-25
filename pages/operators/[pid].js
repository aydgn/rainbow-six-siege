import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/Layout";
import { Zero } from "../r6operators";

const OperatorPage = () => {
	const router = useRouter();
	const { pid } = router.query;

	return (
		<Layout>
			<Head>
				<title>{pid}</title>
			</Head>
		</Layout>
	);
};

<h1>{Zero.realName}</h1>;

export default OperatorPage;
