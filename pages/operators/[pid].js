/* https://static-dm.akamaized.net/rainbow6/siege-g2w/prod/r6s-operator-aruni.png */

import { useRouter } from "next/router";
import Image from "next/image";

const OperatorPage = () => {
	const router = useRouter();
	const { pid } = router.query;

	return (
		<div>
			Operator: {pid}
			<Image src={`/images/opicons/${pid}.svg`} layout="fill" />
		</div>
	);
};

export default OperatorPage;
