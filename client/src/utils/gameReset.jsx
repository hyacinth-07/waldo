import fetchData from './fetchData';

export default function gameReset({
	setCircleCoord,
	setSquareCoord,
	setStarCoord,
	setMessage,
}) {
	fetchData({ setCircleCoord, setSquareCoord, setStarCoord });

	const image = document.querySelector('img');
	image.style.pointerEvents = 'auto';

	const detector = document.querySelector('#detector');
	detector.style.display = 'none';

	setMessage('game restart!');
	setTimeout(() => {
		setMessage('... playing ...');
	}, 1000);
}
