function Grid({ children, title, contentClass }) {
	return (
		<div className="">
			<div className="text-center flex flex-col">
				<span class="font-bold ">{title}</span>
				<span className={contentClass}>{children}</span>
			</div>
		</div>
	);
}

export default Grid;
