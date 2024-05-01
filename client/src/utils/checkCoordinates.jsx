import { stopTimer } from './timerFunctions';

function gameState(circle, square, star, setMessage, setIsRunning) {
	if (!circle.found == true) return;
	if (!square.found == true) return;
	if (!star.found == true) return;

	const detector = document.querySelector('#detector');
	detector.style.display = 'none';

	const image = document.querySelector('img');
	image.style.pointerEvents = 'none';

	stopTimer({ setIsRunning });
	setMessage('congrats, game won');
}

export default function checkCoordinates(
	mouseCoords,
	shape,
	setMessage,
	circle,
	square,
	star,
	setIsRunning
) {
	const x = mouseCoords.xCoord;
	const y = mouseCoords.yCoord;

	if (
		x >= shape.leftX &&
		x <= shape.rightX &&
		y >= shape.topY &&
		y <= shape.bottomY
	) {
		shape.found = true;
		setMessage('YES!');
		setTimeout(() => {
			setMessage('... playing ...');
		}, 1000);
	} else {
		setMessage('NO!');
		setTimeout(() => {
			setMessage('... playing ...');
		}, 1000);
	}
	gameState(circle, square, star, setMessage, setIsRunning);
}
