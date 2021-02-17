import Link from "next/link";
function Header() {
	const navStyle =
		"py-5 px-10 md:p-5 hover:bg-gray-900 tracking-tighter h-full text-lg";
	return (
		<div>
			<nav className="flex flex-row flex-wrap items-center justify-evenly bg-gray-800 text-white md:px-5">
				<Link href="/operators">
					<a className={navStyle}>Operators</a>
				</Link>
				<Link href="/weapons">
					<a className={navStyle}>Weapons</a>
				</Link>
				<Link href="/maps">
					<a className={navStyle}>Maps</a>
				</Link>
				<Link href="/gamemodes">
					<a className={navStyle}>Game Modes</a>
				</Link>
			</nav>
		</div>
	);
}

export default Header;
