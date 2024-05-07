import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
	const error = useRouteError();
	console.log(error);

	return (
		<>
			<div className="h-screen w-screen bg-slate-400">
				<div className="flex flex-col justify-center items-center w-full h-full">
					<h1>Oh No!</h1>
					<p>Tragedy! Horses on the run!</p>
					<p>
						<i>{error.statusText || error.message}</i>
					</p>
				</div>
			</div>
		</>
	);
}
