import { Link, type LinkProps } from "react-router";
import { type AppPaths, createPath } from "./generated-routes";

type AppLinkProps<T extends AppPaths> = Omit<LinkProps, "to"> & {
	to: T;
	params?: T extends `${string}:${infer P1}/${string}` | `${string}:${infer P2}`
		? { [K in P1 | P2]: string }
		: never;
};

/**
 * 型安全なルーティングを提供するLinkコンポーネント
 * アプリケーションのルートパスが自動的に型チェックされます
 */
export function AppLink<T extends AppPaths>({
	to,
	params,
	...rest
}: AppLinkProps<T>) {
	const resolvedPath = createPath(to, params);
	return <Link to={resolvedPath} {...rest} />;
}

/**
 * 型安全なナビゲーション関数
 * 例: navigateTo('/user/:id', { id: '123' })
 */
export function navigateTo<T extends AppPaths>(
	path: T,
	params?: T extends `${string}:${infer P1}/${string}` | `${string}:${infer P2}`
		? { [K in P1 | P2]: string }
		: never,
): string {
	return createPath(path, params);
}
