/**
 * このファイルは自動生成されたものです。直接編集しないでください。
 * 生成元: src/utils/typed-routes/generate-routes.mjs
 */

// アプリケーションのルートパス型
export type AppPaths =
  | '/'
  | '/hooks'
  | '/hooks/use-action-state'
  | '/hooks/use-id'
  | '/hooks/use-optimistic'
  | '/use-action-state'
  | '/use-id'
  | '/use-optimistic';

// ネストされたルート構造
export type AppRoutes = {
  '/': string;
  '/hooks': {
    '/use-action-state': string;
    '/use-id': string;
    '/use-optimistic': string;
  };
  '/use-action-state': string;
  '/use-id': string;
  '/use-optimistic': string;
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
