import Image from "next/image";
import Link from "next/link";
export default function Map(props) {
	return (
		<section className="border rounded-lg hover:shadow-lg hover:bg-gray-100 transition-all duration-500">
			<Link href="#">
				<a>
					<span className="block text-center text-xl font-semibold">
						{props.mapname}
					</span>
					<Image
						src={`/images/maps/${props.mapname
							.replace(/ +/g, "")
							.toLowerCase()}.webp`}
						width={384}
						height={214}
						alt={props.mapname}
						title={props.mapname}
						layout="responsive"
					/>
				</a>
			</Link>
		</section>
	);
}

/* shadow-small hover:shadow-medium transition-shadow duration-200 */
