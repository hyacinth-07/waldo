// UTILS
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import loadData from './utils/loadData';
import scoreAction from './utils/scoreAction';
// ROUTES
import Root from './routes/Root';
import ErrorPage from './routes/ErrorPage';
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
		errorElement: <ErrorPage />,
		loader: loadData,
		children: [
			{
				index: true,
				element: (
					<SelectionScreen image1={image1} image2={image2} image3={image3} />
				),
				loader: loadData,
			},
			{
				path: 'game/gameOne',
				element: <GameBoard url={image1} index={0} />,
				loader: loadData,
				action: scoreAction,
			},
			{
				path: 'game/gameTwo',
				element: <GameBoard url={image2} index={1} />,
				loader: loadData,
			},
			{
				path: 'game/gameThree',
				element: <GameBoard url={image3} index={2} />,
				loader: loadData,
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
