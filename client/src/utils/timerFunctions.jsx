function startTimer({ setIsRunning, startTimeRef, elapsedTime }) {
	setIsRunning(true);
	startTimeRef.current = Date.now() - elapsedTime;
}

function stopTimer({ setIsRunning }) {
	setIsRunning(false);
}

function resetTimer({ setElapsedTime, setIsRunning }) {
	setElapsedTime(0);
	setIsRunning(false);
}

function formatTimer({ elapsedTime }) {
	let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
	let seconds = Math.floor((elapsedTime / 1000) % 60);
	let milliSeconds = Math.floor((elapsedTime % 1000) / 10);

	minutes = String(minutes).padStart(2, '0');
	seconds = String(seconds).padStart(2, '0');
	milliSeconds = String(milliSeconds).padStart(2, '0');

	console.log(minutes, seconds, milliSeconds, elapsedTime);

	return { minutes, seconds, milliSeconds, elapsedTime };
}

export { startTimer, stopTimer, resetTimer, formatTimer };
