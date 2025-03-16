type Props = {
	children: React.ReactNode;
	toolbarText?: string;
};

export const Browser = ({ children, toolbarText }: Props) => {
	return (
		<div className="mockup-browser border-base-300 border">
			<div className="mockup-browser-toolbar">
				<div className="text-sm text-base-content pl-8">{toolbarText}</div>
			</div>
			<div className="mockup-browser-body flex justify-center items-center">
				{children}
			</div>
		</div>
	);
};
