import testImage from '../src/assets/test_waldo.png';
import { useState } from 'react';

function App() {
	const [coord, setCoord] = useState('X: ??? | X: ???');
	const [message, setMessage] = useState('... playing ...');

	// function imageClick(e) {
	// 	const rect = e.currentTarget.getBoundingClientRect();
	// 	const xCoord = e.clientX - rect.left;
	// 	const yCoord = e.clientY - rect.top;
	// 	setCoord(
	// 		`X: ${xCoord} | Y: ${yCoord} | absX ${e.screenX} | absY ${e.screenY}`
	// 	);

	// 	const dialog = document.querySelector('dialog');
	// 	dialog.style.marginLeft = `${e.screenX}px`;
	// 	dialog.style.marginTop = `${e.screenY}px`;
	// 	dialog.show();
	// }

	function imageClick(e) {
		const rect = e.currentTarget.getBoundingClientRect();
		const xCoord = e.clientX - rect.left;
		const yCoord = e.clientY - rect.top;
		setCoord(`X: ${xCoord} | Y: ${yCoord}`);

		const detector = document.querySelector('#detector');
		detector.style.left = `${e.pageX - 40}px`;
		detector.style.top = `${e.pageY - 40}px`;
		detector.style.display = 'block';
	}

	return (
		<>
			<div className="h-screen w-screen bg-slate-400 flex flex-col justify-center items-center">
				<div>
					<img
						src={testImage}
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
							<button onClick={() => setMessage('checking if triangle...')}>
								star
							</button>
						</div>
					</div>
				</div>

				<p>{coord}</p>
				<p>{message}</p>
			</div>
		</>
	);
}

export default App;
