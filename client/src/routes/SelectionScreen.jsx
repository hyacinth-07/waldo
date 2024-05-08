import SelectionTile from '../components/SelectionTile';
import { useLoaderData } from 'react-router-dom';

export default function SelectionScreen({ image1, image2, image3 }) {
	const data = useLoaderData();

	return (
		<div className="flex justify-evenly items-center w-full h-full">
			<SelectionTile
				imageUrl={image1}
				location={'/game/gameOne'}
				time={data.data[0].time}
			/>
			<SelectionTile
				imageUrl={image2}
				location={'/game/gameTwo'}
				time={data.data[1].time}
			/>
			<SelectionTile
				imageUrl={image3}
				location={'/game/gameThree'}
				time={data.data[2].time}
			/>
		</div>
	);
}
