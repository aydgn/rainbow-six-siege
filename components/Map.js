import Image from "next/image";
export default function Map(props) {
	return (
		<div>
			<div>{props.mapname}</div>
			<Image
				src={`/images/maps/${props.mapname.toLowerCase()}.webp`}
				height={216}
				width={384}
				alt={props.mapname}
				title={props.mapname}
			/>
		</div>
	);
}
