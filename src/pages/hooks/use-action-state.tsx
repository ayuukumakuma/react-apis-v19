import { useActionState, useId } from "react";
import { Browser } from "../../components/browser";
import { Container } from "../../components/container";
import { Heading } from "../../components/heading";

export const UseActionState = () => {
	const textId = useId();
	const [message, formAction, isPending] = useActionState(
		async (_: string, formData: FormData) => {
			"use server";
			const text = formData.get("text");

			await new Promise((resolve) => setTimeout(resolve, 3000));

			if (text?.toString().includes("hoge")) {
				return "hogeは禁止です";
			}

			return `送信されたテキスト: ${text}`;
		},
		"",
	);

	return (
		<Container>
			<Heading level="h1">useActionState</Heading>
			<p>フォームアクションの結果に基づいてstateを更新できる</p>
			<Browser toolbarText="">
				<div className="toast toast-bottom toast-end">
					{message && (
						<div className="alert alert-info">
							<span>{message}</span>
						</div>
					)}
				</div>
				<div className="flex flex-col justify-center gap-4 py-8">
					<form className="flex flex-col gap-4 w-full" action={formAction}>
						<label htmlFor={textId}>
							<p>テキスト</p>
							<input required id={textId} name="text" className="input" />
						</label>
						<button
							disabled={isPending}
							type="submit"
							className="btn btn-primary"
						>
							{isPending ? (
								<span className="loading loading-ring loading-md" />
							) : (
								"送信"
							)}
						</button>
					</form>
				</div>
			</Browser>
		</Container>
	);
};
