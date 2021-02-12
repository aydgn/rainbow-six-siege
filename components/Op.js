const Op = (props) => {
	return (
		<a href="#">
			<div className="border rounded-lg flex flex-col font-medium bg-gray-100 hover:shadow-lg hover:bg-gray-200">
				{/* op sayfasına link */}
				<span className="flex justify-center">{props.name}</span>
				<img
					src={`../images/opicons/${props.name.toLowerCase()}.svg`}
					alt={`${props.name}`}
					title={`${props.name}`}
					height="64"
					width="64"
					className="mx-auto"
				/>
			</div>
		</a>
	);
};

export default Op;
