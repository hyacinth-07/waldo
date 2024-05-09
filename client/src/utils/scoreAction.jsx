export default async function scoreAction({ request }) {
	const data = await request.formData();

	const submission = {
		userName: data.get('userName'),
		elapsedTime: data.get('elapsedTime'),
		formattedTime: data.get('formattedTime'),
	};

	console.log(submission);
	return { submission };

	// send post request

	// redirect the user/close modal
}
