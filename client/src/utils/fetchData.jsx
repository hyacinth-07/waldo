export default async function fetchData({
	setCircleCoord,
	setSquareCoord,
	setStarCoord,
	index,
}) {
	const res = await fetch('http://localhost:3000/data.json');
	const data = await res.json();

	setCircleCoord(data[index].circle_coord);
	setSquareCoord(data[index].square_coord);
	setStarCoord(data[index].star_coord);
}
