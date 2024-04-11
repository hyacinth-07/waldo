import { useEffect, useRef, useState } from 'react';

export default function Timer() {
	const [isRunning, setIsRunning] = useState(false);
	const [elapsedTime, setElapsedTime] = useState(0);
	const intervalRef = useRef(null);
	const startTimeRef = useRef(0);

	useEffect(() => {
		if (isRunning) {
			intervalRef.current = setInterval(() => {
				setElapsedTime(Date.now() - startTimeRef.current);
			}, 10);
		}

		return () => {
			clearInterval(intervalRef.current);
		};
	}, [isRunning]);

	function start() {
		setIsRunning(true);
		startTimeRef.current = Date.now() - elapsedTime;
	}

	function stop() {
		setIsRunning(false);
	}

	function reset() {
		setElapsedTime(0);
		setIsRunning(false);
	}

	function format() {
		let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
		let seconds = Math.floor((elapsedTime / 1000) % 60);
		let milliSeconds = Math.floor((elapsedTime % 1000) / 10);

		minutes = String(minutes).padStart(2, '0');
		seconds = String(seconds).padStart(2, '0');
		milliSeconds = String(milliSeconds).padStart(2, '0');

		return `${minutes} : ${seconds} : ${milliSeconds}`;
	}

	return (
		<>
			<div>
				<div>{format()}</div>
				<div>
					<button onClick={start}>Start</button>
					<button onClick={stop}>Stop</button>
					<button onClick={reset}>Reset</button>
				</div>
			</div>
		</>
	);
}
