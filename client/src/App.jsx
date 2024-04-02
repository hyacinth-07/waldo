import testImage from '../src/assets/test_waldo.png';

function App() {
	return (
		<>
			<div className="h-screen w-screen bg-slate-400 flex justify-center items-center">
				<img src={testImage} alt="the testing image" className="w-fit h-fit" />
			</div>
		</>
	);
}

export default App;
