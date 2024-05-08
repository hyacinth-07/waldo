export default function gameReset({
	circleCoord,
	squareCoord,
	starCoord,
	setCircleCoord,
	setSquareCoord,
	setStarCoord,
	setMessage,
	resetTimer,
	setElapsedTime,
	setIsRunning,
}) {
	setCircleCoord({ ...circleCoord, found: false });
	setSquareCoord({ ...squareCoord, found: false });
	setStarCoord({ ...starCoord, found: false });

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
