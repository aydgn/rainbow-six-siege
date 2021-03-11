function Grid({ children, title, contentClass }) {
	return (
		<div className="rounded m-3 p-3 shadow hover:shadow-lg hover:border-gray-600">
			<div className="text-center flex flex-col">
				<span className="font-bold text-xl">{title}</span>
				<span className={contentClass}>{children}</span>
			</div>
		</div>
	);
}

export default Grid;
