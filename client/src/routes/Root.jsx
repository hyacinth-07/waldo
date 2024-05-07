import { Outlet, useLoaderData } from 'react-router-dom';

export default function Root() {
	const data = useLoaderData();
	return (
		<>
			<div className="h-screen w-screen bg-slate-400">
				<Outlet />
			</div>
		</>
	);
}
