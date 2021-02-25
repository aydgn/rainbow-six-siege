import operators from "../r6operators.json";

const OpDetail = (props) => {
	return (
		<div>
			<h1>{operators["${props}"].realName}</h1>
		</div>
	);
};

export default OpDetail;
