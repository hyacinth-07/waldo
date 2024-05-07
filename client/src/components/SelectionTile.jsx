import { Link } from 'react-router-dom';

export default function SelectionTile({ imageUrl, location }) {
	return (
		<>
			<Link to={location}>
				<img
					className="border border-black border-solid w-80 h-80"
					src={imageUrl}
				></img>
			</Link>
		</>
	);
}
