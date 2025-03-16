import { Route, Routes as RouterRoutes } from "react-router";
import { Index } from "./pages";
import { UseActionState } from "./pages/hooks/use-action-state";
import { UseId } from "./pages/hooks/use-id";
import { UseOptimistic } from "./pages/hooks/use-optimistic";
import { Layout } from "./pages/layout";

export const Routes = () => {
	return (
		<RouterRoutes>
			<Route element={<Layout />}>
				<Route index element={<Index />} />
				<Route path="hooks">
					<Route path="use-id" element={<UseId />} />
					<Route path="use-optimistic" element={<UseOptimistic />} />
					<Route path="use-action-state" element={<UseActionState />} />
				</Route>
			</Route>
		</RouterRoutes>
	);
};
