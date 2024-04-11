import { useEffect, useState, useRef } from 'react';
// import Timer from './components/Timer';

function App() {
	const [coord, setCoord] = useState('X: ??? | X: ???');
	const [xCoord, setXCoord] = useState('');
	const [yCoord, setYCoord] = useState('');
	const [message, setMessage] = useState('... playing ...');
	const [bgImage, setBgImage] = useState('');
	const [circleCoord, setCircleCoord] = useState('');
	const [squareCoord, setSquareCoord] = useState('');
	const [starCoord, setStarCoord] = useState('');

	function imageClick(e) {
		const rect = e.currentTarget.getBoundingClientRect();
		setXCoord(e.clientX - rect.left);
		setYCoord(e.clientY - rect.top);
		setCoord(`X: ${xCoord} | Y: ${yCoord}`);

		const detector = document.querySelector('#detector');
		detector.style.left = `${e.pageX - 40}px`;
		detector.style.top = `${e.pageY - 40}px`;
		detector.style.display = 'block';
		setMessage('... playing ...');
	}

	async function fetchImage(url) {
		try {
			const res = await fetch(url, {
				mode: 'cors',
			});
			setBgImage(res.url);
		} catch (err) {
			console.log(err);
		}
	}

	async function fetchData() {
		const res = await fetch('http://localhost:3000/data.json');
		const data = await res.json();

		setCircleCoord(data[0].circle_coord);
		setSquareCoord(data[0].square_coord);
		setStarCoord(data[0].star_coord);
	}

	// GAME RESET

	function gameReset() {
		fetchData();

		const image = document.querySelector('img');
		image.style.pointerEvents = 'auto';

		const detector = document.querySelector('#detector');
		detector.style.display = 'none';

		setMessage('game restart!');
		setTimeout(() => {
			setMessage('... playing ...');
		}, 1000);
	}

	// CHECK COORDINATES

	function checkCoordinates(x, y, shape) {
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

		gameState();
	}

	// CHECK GAMESTATE

	function gameState() {
		if (!circleCoord.found == true) return;
		if (!squareCoord.found == true) return;
		if (!starCoord.found == true) return;

		const detector = document.querySelector('#detector');
		detector.style.display = 'none';

		const image = document.querySelector('img');
		image.style.pointerEvents = 'none';

		setMessage('congrats, game won');
	}

	// UI

	function DropdownButton({ name, found, shape }) {
		if (found === false) {
			return (
				<button onClick={() => checkCoordinates(xCoord, yCoord, shape)}>
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

	// TIMER

	function Timer() {
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

	// startup init

	useEffect(() => {
		fetchImage('http://localhost:3000/images/test_waldo.png');
		fetchData();
	}, []);

	return (
		<>
			<div className="h-screen w-screen bg-slate-400 flex flex-col justify-center items-center">
				<div>
					<Timer />
					<img
						src={bgImage}
						alt="the testing image"
						className="w-fit h-fit min-w-fit min-h-fit"
						onClick={imageClick}
					/>
					<div id="detector" className="hidden absolute">
						<div className="flex">
							<div className="bg-transparent border-black border-4 w-20 h-20"></div>
							<button
								className="self-start ml-1"
								onClick={() => {
									const detector = document.querySelector('#detector');
									detector.style.display = 'none';
									setMessage('... playing');
								}}
							>
								X
							</button>
						</div>
						<div className="flex flex-col w-20">
							<DropdownButton
								name={squareCoord.name}
								found={squareCoord.found}
								shape={squareCoord}
							/>
							<DropdownButton
								name={circleCoord.name}
								found={circleCoord.found}
								shape={circleCoord}
							/>
							<DropdownButton
								name={starCoord.name}
								found={starCoord.found}
								shape={starCoord}
							/>
						</div>
					</div>
				</div>

				<div className="flex justify-around w-[500px]">
					<p>{coord}</p>
					<p>{message}</p>
					<div className="*:mx-2">
						<button onClick={() => gameReset()}>Game Reset</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
