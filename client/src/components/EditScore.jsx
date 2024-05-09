import { useEffect, useState } from 'react';
import { formatTimer } from '../utils/timerFunctions';

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
			<p>
				{time.minutes}:{time.seconds}:{time.milliSeconds} || {time.elapsedTime}
			</p>
		</>
	);
}
