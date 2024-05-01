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

export { startTimer, stopTimer, resetTimer };
