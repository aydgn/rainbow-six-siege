function Header() {
	return (
		<div className="">
			<nav className="flex flex-row flex-wrap items-center justify-evenly bg-gray-800 text-white md:px-5">
				<a
					href=""
					className="py-5 px-10 md:p-5 hover:bg-gray-900 tracking-tighter h-full text-lg "
				>
					Operators
				</a>
				<a
					href=""
					className="py-5 px-10 md:p-5 hover:bg-gray-900 tracking-tighter h-full text-lg "
				>
					Weapons
				</a>
				<a
					href=""
					className="py-5 px-10 md:p-5 hover:bg-gray-900 tracking-tighter h-full text-lg "
				>
					Maps
				</a>
				<a
					href=""
					className="py-5 px-10 md:p-5 hover:bg-gray-900 tracking-tighter h-full text-lg "
				>
					Game Modes
				</a>
			</nav>
		</div>
	);
}

export default Header;
