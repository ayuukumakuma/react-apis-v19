import { Route, Routes as RouterRoutes } from "react-router";
import { Index } from "./pages";

export const Routes = () => {
	return (
		<RouterRoutes>
			<Route path="/" element={<Index />} />
		</RouterRoutes>
	);
};
