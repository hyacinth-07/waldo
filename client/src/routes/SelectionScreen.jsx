import SelectionTile from '../components/SelectionTile';

export default function SelectionScreen({ image1, image2, image3 }) {
	return (
		<div className="flex justify-evenly items-center w-full h-full">
			<SelectionTile imageUrl={image1} location={'/game/gameOne'} />
			<SelectionTile imageUrl={image2} location={'/game/gameTwo'} />
			<SelectionTile imageUrl={image3} location={'/game/gameThree'} />
		</div>
	);
}
