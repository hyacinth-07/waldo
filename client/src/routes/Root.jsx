import { Outlet } from 'react-router-dom';

export default function Root() {
	return (
		<>
			<div className="h-screen w-screen bg-slate-400">
				<Outlet />
			</div>
		</>
	);
}
