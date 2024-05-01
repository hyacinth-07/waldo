export default async function fetchData({
	setCircleCoord,
	setSquareCoord,
	setStarCoord,
}) {
	const res = await fetch('http://localhost:3000/data.json');
	const data = await res.json();

	setCircleCoord(data[2].circle_coord);
	setSquareCoord(data[2].square_coord);
	setStarCoord(data[2].star_coord);
}
