import Image from "next/image";
import Link from "next/link";

function FloorPlanGrid(props) {
	return (
		<div className="grid">
			<div className="plan">
				<div className="1">
					<Link href={`/images/maps/${props.url}/${props.url}-1.jpg`}>
						<a>
							<Image
								src={`/images/maps/${props.url}/${props.url}-1.jpg`}
								width={1600}
								height={900}
								alt="Floor"
							/>
						</a>
					</Link>
				</div>
				<div className="2">
					<Link href={`/images/maps/${props.url}/${props.url}-2.jpg`}>
						<a>
							<Image
								src={`/images/maps/${props.url}/${props.url}-2.jpg`}
								width={1600}
								height={900}
								alt="Floor"
							/>
						</a>
					</Link>
				</div>
				<div className="3">
					<Link href={`/images/maps/${props.url}/${props.url}-3.jpg`}>
						<a>
							<Image
								src={`/images/maps/${props.url}/${props.url}-3.jpg`}
								width={1600}
								height={900}
								alt="Floor"
							/>
						</a>
					</Link>
				</div>
				<div className="4">
					<Link href={`/images/maps/${props.url}/${props.url}-4.jpg`}>
						<a>
							<Image
								src={`/images/maps/${props.url}/${props.url}-4.jpg`}
								width={1600}
								height={900}
								alt="Floor"
								onError={(e) => (e.target.style.display = "none")}
							/>
						</a>
					</Link>
				</div>
				<div className="5">
					<Link href={`/images/maps/${props.url}/${props.url}-5.jpg`}>
						<a>
							<Image
								src={`/images/maps/${props.url}/${props.url}-5.jpg`}
								width={1600}
								height={900}
								alt="Floor"
								onError={(e) => (e.target.style.display = "none")}
							/>
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default FloorPlanGrid;
