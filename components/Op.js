import Image from "next/image";
import Link from "next/link";
const Op = (props) => {
	return (
		<Link href={`/operators/${props.name}`}>
			<a>
				<div className="border rounded flex flex-col font-medium bg-gray-100 hover:shadow hover:bg-gray-200 ">
					<span className="flex justify-center">{props.name}</span>
					<Image
						src={`/images/opicons/${props.name.toLowerCase()}.svg`}
						alt={props.name}
						title={props.name}
						height={64}
						width={64}
						className="mx-auto"
					/>
				</div>
			</a>
		</Link>
	);
};

export default Op;
