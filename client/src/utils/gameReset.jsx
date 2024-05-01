import fetchData from './fetchData';

export default function gameReset({
	setCircleCoord,
	setSquareCoord,
	setStarCoord,
	setMessage,
	resetTimer,
	setElapsedTime,
	setIsRunning,
}) {
	fetchData({ setCircleCoord, setSquareCoord, setStarCoord });

	const image = document.querySelector('img');
	image.style.pointerEvents = 'auto';

	const detector = document.querySelector('#detector');
	detector.style.display = 'none';

	resetTimer({ setElapsedTime, setIsRunning });
	setMessage('game restart!');
	setTimeout(() => {
		setMessage('... playing ...');
	}, 1000);
}
