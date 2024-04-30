export default function imageClick({
	e,
	coords,
	setCoords,
	setUiCoord,
	setMessage,
}) {
	const rect = e.currentTarget.getBoundingClientRect();
	setCoords({
		...coords,
		xCoord: e.clientX - rect.left,
		yCoord: e.clientY - rect.top,
	});
	setUiCoord(`X: ${coords.xCoord} | Y: ${coords.yCoord}`);

	const detector = document.querySelector('#detector');
	detector.style.left = `${e.pageX - 40}px`;
	detector.style.top = `${e.pageY - 40}px`;
	detector.style.display = 'block';
	setMessage('... playing ...');
}
