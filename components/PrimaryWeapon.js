function PrimaryWeapon({ props }) {
	return (
		<div className="rounded m-3 shadow hover:shadow-lg hover:border-gray-600">
			<div className="text-center flex flex-col">
				<span class="font-bold text-xl">Primary Weapon</span>
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
