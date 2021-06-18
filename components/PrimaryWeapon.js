function PrimaryWeapon({ props }) {
	return (
		<div className="m-3 rounded shadow hover:shadow-lg hover:border-gray-600">
			<div className="flex flex-col text-center">
				<span className="text-xl font-bold">Primary Weapon</span>
				<div className="primary1 ">{props.id[`${id}`].primaryweapon1}</div>
			</div>
		</div>
	);
}

export const getStaticProps = async () => {
	const res = (await import("../pages/r6operators.json")).default;

	return {
		props: { id: res },
	};
};

export default PrimaryWeapon;
