export default function DropdownButton({ name, found, onClick }) {
	if (found === false) {
		return <button>{name}</button>;
	} else {
		return (
			<button className="line-through" disabled>
				{name}
			</button>
		);
	}
}
