import { AppLink } from "../utils/typed-routes/AppLink";
import type { AppPaths } from "../utils/typed-routes/generated-routes";

type Props = {
	title: string;
	documentHref: string;
	href: AppPaths;
};

export const Card = (props: Props) => {
	return (
		<div className="card bg-base-300">
			<div className="card-body min-h-40 justify-between">
				<div className="card-title">
					<p className="text-2xl font-bold">{props.title}</p>
				</div>
				<div className="card-actions flex justify-end">
					<a
						href={props.documentHref}
						target="_blank"
						className="btn btn-secondary btn-outline"
						rel="noreferrer"
					>
						Go to Document
					</a>
					<AppLink to={props.href} className="btn btn-primary btn-outline">
						Watch
					</AppLink>
				</div>
			</div>
		</div>
	);
};
