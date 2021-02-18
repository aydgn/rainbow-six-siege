import Link from "next/link";
function Header() {
	const navStyle =
		"py-5 px-10 md:p-5 hover:bg-gray-900 h-full text-lg box-border flex-1 text-center";
	return (
		<header className="bg-gray-800">
			<nav className="lg:container mx-auto flex flex-row flex-wrap text-white md:px-5">
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
		</header>
	);
}

export default Header;
