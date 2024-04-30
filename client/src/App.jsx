import { useEffect, useState } from 'react';
import Timer from './components/Timer';
import DropdownButton from './components/DropdownButton';

function App() {
	const [uiCoord, setUiCoord] = useState('X: ??? | X: ???');
	const [coords, setCoords] = useState({ xCoord: '', yCoord: '' });
	const [message, setMessage] = useState('... playing ...');
	const [bgImage, setBgImage] = useState('');
	const [circleCoord, setCircleCoord] = useState('');
	const [squareCoord, setSquareCoord] = useState('');
	const [starCoord, setStarCoord] = useState('');

	function imageClick(e) {
		const rect = e.currentTarget.getBoundingClientRect();
		setCoords({
			...coords,
			xCoord: e.clientX - rect.left,
			yCoord: e.clientY - rect.top,
		});
		setUiCoord(`X: ${coords.xCoord} | Y: ${coords.yCoord}`);

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
								mouseCoords={coords}
								setMessage={setMessage}
								circle={circleCoord}
								square={squareCoord}
								star={starCoord}
							/>
							<DropdownButton
								name={circleCoord.name}
								found={circleCoord.found}
								shape={circleCoord}
								mouseCoords={coords}
								setMessage={setMessage}
								circle={circleCoord}
								square={squareCoord}
								star={starCoord}
							/>
							<DropdownButton
								name={starCoord.name}
								found={starCoord.found}
								shape={starCoord}
								mouseCoords={coords}
								setMessage={setMessage}
								circle={circleCoord}
								square={squareCoord}
								star={starCoord}
							/>
						</div>
					</div>
				</div>

				<div className="flex justify-around w-[500px]">
					<p>{uiCoord}</p>
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
