import { useEffect, useState } from 'react';
import SelectionTile from '../components/SelectionTile';

export default function SelectionScreen({ image1, image2, image3 }) {
	const [waldo1, setWaldo1] = useState('');
	const [waldo2, setWaldo2] = useState('');
	const [waldo3, setWaldo3] = useState('');

	useEffect(() => {
		fetch(image1, {
			mode: 'cors',
		})
			.then((response) => setWaldo1(response.url))
			.catch((err) => console.log(err));

		fetch(image2, {
			mode: 'cors',
		})
			.then((response) => setWaldo2(response.url))
			.catch((err) => console.log(err));
		fetch(image3, {
			mode: 'cors',
		})
			.then((response) => setWaldo3(response.url))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="flex justify-evenly items-center w-full h-full">
			<SelectionTile imageUrl={waldo1} location={'/game/gameOne'} />
			<SelectionTile imageUrl={waldo2} location={'/game/gameTwo'} />
			<SelectionTile imageUrl={waldo3} location={'/game/gameThree'} />
		</div>
	);
}
