import checkCoordinates from '../utils/checkCoordinates';

export default function DropdownButton({
	name,
	found,
	shape,
	mouseCoords,
	setMessage,
	circle,
	square,
	star,
	setIsRunning,
}) {
	if (found === false) {
		return (
			<button
				onClick={() =>
					checkCoordinates(
						mouseCoords,
						shape,
						setMessage,
						circle,
						square,
						star,
						setIsRunning
					)
				}
			>
				{name}
			</button>
		);
	} else {
		return (
			<button className="line-through" disabled>
				{name}
			</button>
		);
	}
}
