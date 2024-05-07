export default async function loadData() {
	const res = await fetch('http://localhost:3000/data.json');
	const data = await res.json();

	return { data };
}
