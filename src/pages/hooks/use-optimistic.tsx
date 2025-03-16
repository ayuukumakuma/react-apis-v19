import { startTransition, useOptimistic, useState } from "react";
import { Browser } from "../../components/browser";
import { Container } from "../../components/container";
import { Heading } from "../../components/heading";

const updateFn = async () => {
	console.log("通信中です...");

	await new Promise((resolve) => setTimeout(resolve, 3000));

	console.log("通信完了");

	return true;
};

export const UseOptimistic = () => {
	const [liked, setLiked] = useState(false);
	const [optimisticLiked, addOptimisticLiked] = useOptimistic<boolean, boolean>(
		liked,
		(_, newState) => newState,
	);

	const handleClick = () => {
		startTransition(async () => {
			addOptimisticLiked(!liked);

			await updateFn();
			setLiked(!liked);
		});
	};

	return (
		<Container>
			<Heading level="h1">useOptimistic</Heading>
			<p>楽観的UIを実装できる</p>
			<Browser toolbarText="コンソール画面を開いてボタンを押してみてください。UIはすぐに変わりますがコンソールには時間が経過してから表示されます。">
				<div className="flex flex-col justify-center gap-4 py-8">
					<div className="card bg-base-100 w-96 shadow-sm">
						<figure>
							<img
								src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
								alt="Shoes"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title">やべぇ</h2>
							<p>
								これまじでサイコーのシューズだわ！！！
								<br />
								おすすめです！！！
							</p>
							<div className="card-actions justify-end">
								<button
									type="button"
									className={`btn btn-secondary ${
										optimisticLiked ? "" : "btn-outline"
									}`}
									onClick={handleClick}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="2.5"
										stroke="currentColor"
										className="size-[1.2em]"
									>
										<title>いいねボタン</title>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
										/>
									</svg>
									{optimisticLiked ? "Unlike" : "Like"}
								</button>
							</div>
						</div>
					</div>
				</div>
			</Browser>
			<div className="mockup-code bg-base-300">
				<pre>
					<code>
						{
							'import { startTransition, useOptimistic, useState } from "react";'
						}
					</code>
				</pre>
				<pre>
					<code>{'import { Browser } from "../../components/browser";'}</code>
				</pre>
				<pre>
					<code>
						{'import { Container } from "../../components/container";'}
					</code>
				</pre>
				<pre>
					<code>{'import { Heading } from "../../components/heading";'}</code>
				</pre>
				<pre>
					<code>{""}</code>
				</pre>
				<pre>
					<code>{"const updateFn = async () => {"}</code>
				</pre>
				<pre>
					<code>{'  console.log("通信中です...");'}</code>
				</pre>
				<pre>
					<code>{""}</code>
				</pre>
				<pre>
					<code>
						{"  await new Promise((resolve) => setTimeout(resolve, 3000));"}
					</code>
				</pre>
				<pre>
					<code>{""}</code>
				</pre>
				<pre>
					<code>{'  console.log("通信完了");'}</code>
				</pre>
				<pre>
					<code>{""}</code>
				</pre>
				<pre>
					<code>{"  return true;"}</code>
				</pre>
				<pre>
					<code>{"};"}</code>
				</pre>
				<pre>
					<code>{""}</code>
				</pre>
				<pre>
					<code>{"export const UseOptimistic = () => {"}</code>
				</pre>
				<pre>
					<code>{"  const [liked, setLiked] = useState(false);"}</code>
				</pre>
				<pre>
					<code>
						{
							"  const [optimisticLiked, addOptimisticLiked] = useOptimistic<boolean, boolean>("
						}
					</code>
				</pre>
				<pre>
					<code>{"    liked,"}</code>
				</pre>
				<pre>
					<code>{"    (_, newState) => newState,"}</code>
				</pre>
				<pre>
					<code>{"  );"}</code>
				</pre>
				<pre>
					<code>{""}</code>
				</pre>
				<pre>
					<code>{"  const handleClick = () => {"}</code>
				</pre>
				<pre>
					<code>{"    startTransition(async () => {"}</code>
				</pre>
				<pre>
					<code>{"      addOptimisticLiked(!liked);"}</code>
				</pre>
				<pre>
					<code>{""}</code>
				</pre>
				<pre>
					<code>{"      await updateFn();"}</code>
				</pre>
				<pre>
					<code>{"      setLiked(!liked);"}</code>
				</pre>
				<pre>
					<code>{"    });"}</code>
				</pre>
				<pre>
					<code>{"  };"}</code>
				</pre>
				<pre>
					<code>{""}</code>
				</pre>
				<pre>
					<code>{"  return ("}</code>
				</pre>
				<pre>
					<code>{"    <Container>"}</code>
				</pre>
				<pre>
					<code>{'      <Heading level="h1">useOptimistic</Heading>'}</code>
				</pre>
				<pre>
					<code>{"      <p>楽観的UIを実装できる</p>"}</code>
				</pre>
				<pre>
					<code>
						{
							'      <Browser toolbarText="コンソール画面を開いてボタンを押してみてください。UIはすぐに変わりますがコンソールには時間が経過してから表示されます。">'
						}
					</code>
				</pre>
				<pre>
					<code>
						{
							'        <div className="flex flex-col justify-center gap-4 py-8">'
						}
					</code>
				</pre>
				<pre>
					<code>
						{'          <div className="card bg-base-100 w-96 shadow-sm">'}
					</code>
				</pre>
				<pre>
					<code>{"            <figure>"}</code>
				</pre>
				<pre>
					<code>{"              <img"}</code>
				</pre>
				<pre>
					<code>
						{
							'                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"'
						}
					</code>
				</pre>
				<pre>
					<code>{'                alt="Shoes"'}</code>
				</pre>
				<pre>
					<code>{"              />"}</code>
				</pre>
				<pre>
					<code>{"            </figure>"}</code>
				</pre>
				<pre>
					<code>{'            <div className="card-body">'}</code>
				</pre>
				<pre>
					<code>{'              <h2 className="card-title">やべぇ</h2>'}</code>
				</pre>
				<pre>
					<code>{"              <p>"}</code>
				</pre>
				<pre>
					<code>
						{"                これまじでサイコーのシューズだわ！！！"}
					</code>
				</pre>
				<pre>
					<code>{"                <br />"}</code>
				</pre>
				<pre>
					<code>{"                おすすめです！！！"}</code>
				</pre>
				<pre>
					<code>{"              </p>"}</code>
				</pre>
				<pre>
					<code>
						{'              <div className="card-actions justify-end">'}
					</code>
				</pre>
				<pre>
					<code>{"                <button"}</code>
				</pre>
				<pre>
					<code>{'                  type="button"'}</code>
				</pre>
				<pre>
					<code>{"                  className={`btn btn-secondary ${"}</code>
				</pre>
				<pre>
					<code>
						{'                    optimisticLiked ? "" : "btn-outline"'}
					</code>
				</pre>
				<pre>
					<code>{"                  }`}"}</code>
				</pre>
				<pre>
					<code>{"                  onClick={handleClick}"}</code>
				</pre>
				<pre>
					<code>{"                >"}</code>
				</pre>
				<pre>
					<code>{"                  <svg"}</code>
				</pre>
				<pre>
					<code>
						{'                    xmlns="http://www.w3.org/2000/svg"'}
					</code>
				</pre>
				<pre>
					<code>{'                    fill="none"'}</code>
				</pre>
				<pre>
					<code>{'                    viewBox="0 0 24 24"'}</code>
				</pre>
				<pre>
					<code>{'                    strokeWidth="2.5"'}</code>
				</pre>
				<pre>
					<code>{'                    stroke="currentColor"'}</code>
				</pre>
				<pre>
					<code>{'                    className="size-[1.2em]"'}</code>
				</pre>
				<pre>
					<code>{"                  >"}</code>
				</pre>
				<pre>
					<code>{"                    <title>いいねボタン</title>"}</code>
				</pre>
				<pre>
					<code>{"                    <path"}</code>
				</pre>
				<pre>
					<code>{'                      strokeLinecap="round"'}</code>
				</pre>
				<pre>
					<code>{'                      strokeLinejoin="round"'}</code>
				</pre>
				<pre>
					<code>
						{
							'                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"'
						}
					</code>
				</pre>
				<pre>
					<code>{"                    />"}</code>
				</pre>
				<pre>
					<code>{"                  </svg>"}</code>
				</pre>
				<pre>
					<code>
						{'                  {optimisticLiked ? "Unlike" : "Like"}'}
					</code>
				</pre>
				<pre>
					<code>{"                </button>"}</code>
				</pre>
				<pre>
					<code>{"              </div>"}</code>
				</pre>
				<pre>
					<code>{"            </div>"}</code>
				</pre>
				<pre>
					<code>{"          </div>"}</code>
				</pre>
				<pre>
					<code>{"        </div>"}</code>
				</pre>
				<pre>
					<code>{"      </Browser>"}</code>
				</pre>
				<pre>
					<code>{"    </Container>"}</code>
				</pre>
				<pre>
					<code>{"  );"}</code>
				</pre>
				<pre>
					<code>{"};"}</code>
				</pre>
			</div>
		</Container>
	);
};
