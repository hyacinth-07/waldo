import { useEffect, useState } from 'react';
import { formatTimer } from '../utils/timerFunctions';
import { Form } from 'react-router-dom';

export default function EditScore({ elapsedTime, isModal, setIsModal }) {
	const [time, setTime] = useState([]);

	useEffect(() => {
		const x = formatTimer({ elapsedTime });
		setTime(x);
	}, [isModal]);

	setIsModal(false);

	return (
		<>
			<p>Here you shall write your name</p>

			<Form method="post">
				<input type="text" name="userName" required />
				<input
					type="hidden"
					name="elapsedTime"
					value={time.elapsedTime}
					required
				/>
				<input
					type="hidden"
					name="formattedTime"
					value={`${time.minutes}:${time.seconds}:${time.milliSeconds}`}
					required
				/>
				<button>Submit</button>
			</Form>
			<p>
				{time.minutes}:{time.seconds}:{time.milliSeconds}
			</p>
		</>
	);
}
