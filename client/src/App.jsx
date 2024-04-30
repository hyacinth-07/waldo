import { useEffect, useState } from 'react';
import Timer from './components/Timer';
import DropdownButton from './components/DropdownButton';
import fetchData from './utils/fetchData';
import gameReset from './utils/gameReset';
import imageClick from './utils/imageClick';

function App() {
	const [uiCoord, setUiCoord] = useState('X: ??? | X: ???');
	const [coords, setCoords] = useState({ xCoord: '', yCoord: '' });
	const [message, setMessage] = useState('... playing ...');
	const [bgImage, setBgImage] = useState('');
	const [circleCoord, setCircleCoord] = useState('');
	const [squareCoord, setSquareCoord] = useState('');
	const [starCoord, setStarCoord] = useState('');

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

	// startup init

	useEffect(() => {
		fetchImage('http://localhost:3000/images/test_waldo.png');
		fetchData({ setCircleCoord, setSquareCoord, setStarCoord });
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
						onClick={(e) =>
							imageClick({ e, coords, setCoords, setUiCoord, setMessage })
						}
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
						<button
							onClick={() =>
								gameReset({
									setCircleCoord,
									setSquareCoord,
									setStarCoord,
									setMessage,
								})
							}
						>
							Game Reset
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
