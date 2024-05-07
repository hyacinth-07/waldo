import { useEffect, useState, useRef } from 'react';
import Timer from '../components/Timer';
import { startTimer, stopTimer, resetTimer } from '../utils/timerFunctions';
import DropdownButton from '../components/DropdownButton';
import imageClick from '../utils/imageClick';
import fetchData from '../utils/fetchData';
import fetchImage from '../utils/fetchImage';
import gameReset from '../utils/gameReset';

// game / ui state

export default function GameBoard({ url, index }) {
	const [uiCoord, setUiCoord] = useState('X: ??? | X: ???');
	const [coords, setCoords] = useState({ xCoord: '', yCoord: '' });
	const [message, setMessage] = useState('... playing ...');
	const [bgImage, setBgImage] = useState('');
	const [circleCoord, setCircleCoord] = useState('');
	const [squareCoord, setSquareCoord] = useState('');
	const [starCoord, setStarCoord] = useState('');

	const x = url;

	// timer state

	const [isRunning, setIsRunning] = useState(false);
	const [elapsedTime, setElapsedTime] = useState(0);
	const intervalRef = useRef(null);
	const startTimeRef = useRef(0);

	// INIT

	useEffect(() => {
		fetchImage(x, setBgImage);
		fetchData({ setCircleCoord, setSquareCoord, setStarCoord, index });
	}, [x]);

	return (
		<>
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div>
					<Timer
						isRunning={isRunning}
						elapsedTime={elapsedTime}
						setElapsedTime={setElapsedTime}
						intervalRef={intervalRef}
						startTimeRef={startTimeRef}
					/>
					<img
						src={bgImage}
						alt="the testing image"
						className="w-fit h-fit min-w-fit min-h-fit"
						onClick={(e) =>
							imageClick({
								e,
								coords,
								setCoords,
								setUiCoord,
								setMessage,
								startTimer,
								setIsRunning,
								startTimeRef,
								elapsedTime,
							})
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
								setIsRunning={setIsRunning}
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
								setIsRunning={setIsRunning}
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
								setIsRunning={setIsRunning}
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
									resetTimer,
									setElapsedTime,
									setIsRunning,
								})
							}
						>
							Game Reset
						</button>
						<button onClick={() => stopTimer({ setIsRunning })}>stop</button>
					</div>
				</div>
			</div>
		</>
	);
}
