import { useEffect, useState } from 'react';
import SelectionTile from './SelectionTile';

export default function SelectionScreen() {
	const [waldo1, setWaldo1] = useState('');
	const [waldo2, setWaldo2] = useState('');
	const [waldo3, setWaldo3] = useState('');

	useEffect(() => {
		fetch('http://localhost:3000/images/test_waldo_1.png', {
			mode: 'cors',
		})
			.then((response) => setWaldo1(response.url))
			.catch((err) => console.log(err));

		fetch('http://localhost:3000/images/test_waldo_2.png', {
			mode: 'cors',
		})
			.then((response) => setWaldo2(response.url))
			.catch((err) => console.log(err));
		fetch('http://localhost:3000/images/test_waldo_3.png', {
			mode: 'cors',
		})
			.then((response) => setWaldo3(response.url))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="flex justify-evenly items-center w-full h-full">
			<SelectionTile imageUrl={waldo1} />
			<SelectionTile imageUrl={waldo2} />
			<SelectionTile imageUrl={waldo3} />
		</div>
	);
}
