import type { JSX } from "react";

type Props = {
	children: React.ReactNode;
	level: "h1" | "h2" | "h3";
};

const sizeClasses = {
	h1: "text-4xl",
	h2: "text-2xl",
	h3: "text-xl",
};

export const Heading = ({ children, level }: Props) => {
	const Tag = level as keyof JSX.IntrinsicElements;

	return (
		<Tag className={`${sizeClasses[level]} font-bold py-4`}>{children}</Tag>
	);
};
