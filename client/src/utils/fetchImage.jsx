export default async function fetchImage(url, func) {
	try {
		const res = await fetch(url, {
			mode: 'cors',
		});
		func(res.url);
	} catch (err) {
		console.log(err);
	}
}
