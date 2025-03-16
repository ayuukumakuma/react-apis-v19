import { Card } from "../components/card";

export const Index = () => {
	return (
		<div>
			<div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6">
				<Card
					title="useId"
					documentHref="https://react.dev/reference/react/useId"
					href="/hooks/use-id"
				/>
				<Card
					title="useOptimistic"
					documentHref="https://react.dev/reference/react/useOptimistic"
					href="/hooks/use-optimistic"
				/>
				<Card
					title="useActionState"
					documentHref="https://react.dev/reference/react/useActionState"
					href="/hooks/use-action-state"
				/>
			</div>
		</div>
	);
};
