import Link from "next/link";
function Header() {
	return (
		<div className="">
			<nav className="flex flex-row flex-wrap items-center justify-evenly bg-gray-800 text-white md:px-5 shadow-">
				<Link href="/operators">
					<a className="py-5 px-10 md:p-5 hover:bg-gray-900 tracking-tighter h-full text-lg ">
						Operators
					</a>
				</Link>
				<Link href="/weapons">
					<a className="py-5 px-10 md:p-5 hover:bg-gray-900 tracking-tighter h-full text-lg ">
						Weapons
					</a>
				</Link>
				<Link href="/maps">
					<a className="py-5 px-10 md:p-5 hover:bg-gray-900 tracking-tighter h-full text-lg ">
						Maps
					</a>
				</Link>
				<Link href="/gamemodes">
					<a className="py-5 px-10 md:p-5 hover:bg-gray-900 tracking-tighter h-full text-lg ">
						Operators
					</a>
				</Link>
			</nav>
		</div>
	);
}

export default Header;
