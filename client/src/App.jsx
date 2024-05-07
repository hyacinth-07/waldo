// UTILS
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// ROUTES
import Root from './routes/Root';
import SelectionScreen from './routes/SelectionScreen';
import GameBoard from './routes/GameBoard';
// IMAGES
const image1 = 'http://localhost:3000/images/test_waldo_1.png';
const image2 = 'http://localhost:3000/images/test_waldo_2.png';
const image3 = 'http://localhost:3000/images/test_waldo_3.png';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				index: true,
				element: (
					<SelectionScreen image1={image1} image2={image2} image3={image3} />
				),
			},
			{
				path: 'game/gameOne',
				element: <GameBoard url={image1} />,
			},
			{
				path: 'game/gameTwo',
				element: <GameBoard url={image2} />,
			},
			{
				path: 'game/gameThree',
				element: <GameBoard url={image3} />,
			},
		],
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router}></RouterProvider>
		</>
	);
}

export default App;
