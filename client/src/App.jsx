import { useEffect, useState } from 'react';

function App() {
	const [coord, setCoord] = useState('X: ??? | X: ???');
	const [message, setMessage] = useState('... playing ...');
	const [bgImage, setBgImage] = useState('');
	const [circleCoord, setCirlceCoord] = useState('');
	const [squareCoord, setSquareCoord] = useState('');
	const [starCoord, setStarCoord] = useState('');

	function imageClick(e) {
		const rect = e.currentTarget.getBoundingClientRect();
		const xCoord = e.clientX - rect.left;
		const yCoord = e.clientY - rect.top;
		setCoord(`X: ${xCoord} | Y: ${yCoord}`);

		const detector = document.querySelector('#detector');
		detector.style.left = `${e.pageX - 40}px`;
		detector.style.top = `${e.pageY - 40}px`;
		detector.style.display = 'block';
		setMessage('... playing');

		console.log(circleCoord);
		console.log(squareCoord);
		console.log(starCoord);
	}

	async function fetchImage(url) {
		const res = await fetch(url, {
			mode: 'cors',
		});
		setBgImage(res.url);
	}

	async function fetchData() {
		const res = await fetch('http://localhost:3000/data.json');
		const data = await res.json();

		setCirlceCoord(data[0].circle_coord);
		setSquareCoord(data[0].square_coord);
		setStarCoord(data[0].star_coord);
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
							<button onClick={() => setMessage('checking if square...')}>
								square
							</button>
							<button onClick={() => setMessage('checking if circle...')}>
								circle
							</button>
							<button onClick={() => setMessage('checking if star...')}>
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
