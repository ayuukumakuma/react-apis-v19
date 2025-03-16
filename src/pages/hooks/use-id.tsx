import { useId } from "react";
import { Browser } from "../../components/browser";
import { Container } from "../../components/container";
import { Heading } from "../../components/heading";

const FixedIdInput = () => {
	const id = "name";

	return (
		<div>
			<label htmlFor={id}>名前</label>
			<input
				className="input block"
				placeholder="名前を入力してください"
				id={id}
			/>
		</div>
	);
};

const DynamicIdInput = () => {
	const id = useId();

	return (
		<div>
			<label htmlFor={id}>名前</label>
			<input
				className="input block"
				placeholder="名前を入力してください"
				id={id}
			/>
		</div>
	);
};

export const UseId = () => {
	return (
		<Container>
			<Heading level="h1">useId</Heading>
			<p>
				idには固定の値を使用すると、コンポーネントとして再利用した際に同じidを参照してしまい正しく動作しない。
			</p>
			<Browser toolbarText="ラベルをクリックしてみてください。">
				<div className="flex flex-col justify-center gap-4 h-60">
					<FixedIdInput />
					<FixedIdInput />
				</div>
			</Browser>
			<p>useIdを使用すると、一意のidを生成するため正しく動作する</p>
			<Browser toolbarText="ラベルをクリックしてみてください。">
				<div className="flex flex-col justify-center gap-4 h-60">
					<DynamicIdInput />
					<DynamicIdInput />
				</div>
			</Browser>
			<div className="mockup-code">
				<pre>
					<code>{'import { useId } from "react";'}</code>
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
					<code>{"const FixedIdInput = () => {"}</code>
				</pre>
				<pre>
					<code>{'  const id = "name";'}</code>
				</pre>
				<pre>
					<code>{""}</code>
				</pre>
				<pre>
					<code>{"  return ("}</code>
				</pre>
				<pre>
					<code>{"    <div>"}</code>
				</pre>
				<pre>
					<code>{"      <label htmlFor={id}>名前</label>"}</code>
				</pre>
				<pre>
					<code>{"      <input"}</code>
				</pre>
				<pre>
					<code>{'        className="input block"'}</code>
				</pre>
				<pre>
					<code>{'        placeholder="名前を入力してください"'}</code>
				</pre>
				<pre>
					<code>{"        id={id}"}</code>
				</pre>
				<pre>
					<code>{"      />"}</code>
				</pre>
				<pre>
					<code>{"    </div>"}</code>
				</pre>
				<pre>
					<code>{"  );"}</code>
				</pre>
				<pre>
					<code>{"};"}</code>
				</pre>
				<pre>
					<code>{""}</code>
				</pre>
				<pre>
					<code>{"const DynamicIdInput = () => {"}</code>
				</pre>
				<pre>
					<code>{"  const id = useId();"}</code>
				</pre>
				<pre>
					<code>{""}</code>
				</pre>
				<pre>
					<code>{"  return ("}</code>
				</pre>
				<pre>
					<code>{"    <div>"}</code>
				</pre>
				<pre>
					<code>{"      <label htmlFor={id}>名前</label>"}</code>
				</pre>
				<pre>
					<code>{"      <input"}</code>
				</pre>
				<pre>
					<code>{'        className="input block"'}</code>
				</pre>
				<pre>
					<code>{'        placeholder="名前を入力してください"'}</code>
				</pre>
				<pre>
					<code>{"        id={id}"}</code>
				</pre>
				<pre>
					<code>{"      />"}</code>
				</pre>
				<pre>
					<code>{"    </div>"}</code>
				</pre>
				<pre>
					<code>{"  );"}</code>
				</pre>
				<pre>
					<code>{"};"}</code>
				</pre>
				<pre>
					<code>{""}</code>
				</pre>
				<pre>
					<code>{"export const UseId = () => {"}</code>
				</pre>
				<pre>
					<code>{"  return ("}</code>
				</pre>
				<pre>
					<code>{"    <Container>"}</code>
				</pre>
				<pre>
					<code>{'      <Heading level="h1">useId</Heading>'}</code>
				</pre>
				<pre>
					<code>{"      <p>"}</code>
				</pre>
				<pre>
					<code>
						{
							"        idには固定の値を使用すると、コンポーネントとして再利用した際に同じidを参照してしまい正しく動作しない。"
						}
					</code>
				</pre>
				<pre>
					<code>{"      </p>"}</code>
				</pre>
				<pre>
					<code>
						{'      <Browser toolbarText="ラベルをクリックしてみてください。">'}
					</code>
				</pre>
				<pre>
					<code>
						{
							'        <div className="flex flex-col justify-center gap-4 h-60">'
						}
					</code>
				</pre>
				<pre>
					<code>{"          <FixedIdInput />"}</code>
				</pre>
				<pre>
					<code>{"          <FixedIdInput />"}</code>
				</pre>
				<pre>
					<code>{"        </div>"}</code>
				</pre>
				<pre>
					<code>{"      </Browser>"}</code>
				</pre>
				<pre>
					<code>
						{
							"      <p>useIdを使用すると、一意のidを生成するため正しく動作する</p>"
						}
					</code>
				</pre>
				<pre>
					<code>
						{'      <Browser toolbarText="ラベルをクリックしてみてください。">'}
					</code>
				</pre>
				<pre>
					<code>
						{
							'        <div className="flex flex-col justify-center gap-4 h-60">'
						}
					</code>
				</pre>
				<pre>
					<code>{"          <DynamicIdInput />"}</code>
				</pre>
				<pre>
					<code>{"          <DynamicIdInput />"}</code>
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
