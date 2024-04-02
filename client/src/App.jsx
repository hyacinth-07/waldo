import testImage from '../src/assets/test_waldo.png';

function App() {
	function imageClick(e) {
		const rect = e.currentTarget.getBoundingClientRect();
		const xCoord = e.clientX - rect.left;
		const yCoord = e.clientY - rect.top;
		alert(`Click: X = ${xCoord}, Y = ${yCoord}`);
	}

	return (
		<>
			<div className="h-screen w-screen bg-slate-400 flex justify-center items-center">
				<img
					src={testImage}
					alt="the testing image"
					className="w-fit h-fit min-w-fit min-h-fit"
					onClick={imageClick}
				/>
			</div>
		</>
	);
}

export default App;
