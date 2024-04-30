export default async function fetchData({
	setCircleCoord,
	setSquareCoord,
	setStarCoord,
}) {
	const res = await fetch('http://localhost:3000/data.json');
	const data = await res.json();

	setCircleCoord(data[0].circle_coord);
	setSquareCoord(data[0].square_coord);
	setStarCoord(data[0].star_coord);
}
