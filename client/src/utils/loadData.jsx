export default async function loadData() {
	let data;

	try {
		const res = await fetch('http://localhost:3000/data.json');
		data = await res.json();
	} catch (error) {
		console.log(error);
	}

	return { data };
}
