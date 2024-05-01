import { useEffect } from 'react';

export default function Timer({
	isRunning,
	elapsedTime,
	setElapsedTime,
	intervalRef,
	startTimeRef,
}) {
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
			</div>
		</>
	);
}
