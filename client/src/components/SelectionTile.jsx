import { Link } from 'react-router-dom';

export default function SelectionTile({ imageUrl, location, time }) {
	const formatted = time
		.sort((a, b) => {
			return a.elapsedTime - b.elapsedTime;
		})
		.map((elem) => (
			<li key={elem.userName + elem.elapsedTime}>
				{elem.userName} - {elem.formattedTime}
			</li>
		));

	return (
		<>
			<div>
				<Link to={location}>
					<img
						className="border border-black border-solid w-80 h-80"
						src={imageUrl}
					></img>
				</Link>
				<ul className="list-decimal">{formatted}</ul>
			</div>
		</>
	);
}
