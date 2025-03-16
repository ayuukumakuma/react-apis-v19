import { Outlet } from "react-router";

export const Layout = () => {
	return (
		<div className="p-6">
			<Outlet />
		</div>
	);
};
