import { useEffect, useState } from 'react';

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
		setMessage('... playing');
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

	// GAME LOGIC

	function checkCoordinates(x, y, shape) {
		setMessage(`checking if ${shape.name}`);

		if (
			x >= shape.leftX &&
			x <= shape.rightX &&
			y >= shape.topY &&
			y <= shape.bottomY
		) {
			console.log('Yes!');
		} else {
			console.log('No!');
		}
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
							<button
								onClick={() => checkCoordinates(xCoord, yCoord, squareCoord)}
							>
								square
							</button>
							<button
								onClick={() => checkCoordinates(xCoord, yCoord, circleCoord)}
							>
								circle
							</button>
							<button
								onClick={() => checkCoordinates(xCoord, yCoord, starCoord)}
							>
								star
							</button>
						</div>
					</div>
				</div>

				<p>{coord}</p>
				<p>{message}</p>
				<div className="*:mx-2">
					<button
						onClick={() =>
							fetchImage('http://localhost:3000/images/test_waldo_alt.png')
						}
					>
						Get Alt Image
					</button>
					<button
						onClick={() =>
							fetchImage('http://localhost:3000/images/test_waldo.png')
						}
					>
						Get OG Image
					</button>
				</div>
			</div>
		</>
	);
}

export default App;
