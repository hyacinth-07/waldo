export default function SelectionTile({ imageUrl }) {
	return (
		<>
			<img
				className="border border-black border-solid w-80 h-80"
				src={imageUrl}
				onClick={() => console.log(imageUrl)}
			></img>
		</>
	);
}
