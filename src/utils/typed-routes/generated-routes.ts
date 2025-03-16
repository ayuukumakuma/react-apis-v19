/**
 * このファイルは自動生成されたものです。直接編集しないでください。
 * 生成元: src/utils/typed-routes/generate-routes.mjs
 */

// アプリケーションのルートパス型
export type AppPaths =
  | '/'
  | '/hooks'
  | '/hooks/use-effect'
  | '/hooks/use-state'
  | '/use-effect'
  | '/use-state';

// ネストされたルート構造
export type AppRoutes = {
  '/': string;
  '/hooks': {
    '/use-effect': string;
    '/use-state': string;
  };
  '/use-effect': string;
  '/use-state': string;
};

// パスを型安全に構築するためのヘルパー関数
export function createPath<
	T extends AppPaths,
	P extends T extends `${string}:${infer P1}/${string}` | `${string}:${infer P2}` ? 
		{ [K in P1 | P2]: string } : 
		never
>(path: T, params?: P): string {
	if (!params) return path as string;
	
	let result = path as string;
	for (const [key, value] of Object.entries(params)) {
		result = result.replace(`:${key}`, value);
	}
	
	return result;
}
