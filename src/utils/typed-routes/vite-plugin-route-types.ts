import * as child_process from "node:child_process";
import * as path from "node:path";
import type { Plugin } from "vite";

// ANSI カラーコード
const GREEN = "\x1b[32m";
const RESET = "\x1b[0m";
const CYAN = "\x1b[36m";

/**
 * routes.tsxファイルを監視し、変更があると自動的に型定義を生成するViteプラグイン
 */
export function routeTypesPlugin(): Plugin {
	let isBuild = false;
	const routesFile = "src/routes.tsx";
	const fullRoutesPath = path.resolve(process.cwd(), routesFile);

	return {
		name: "vite-plugin-route-types",
		configResolved(config) {
			isBuild = config.command === "build";
		},
		buildStart() {
			// ビルド時に一度だけ型定義を生成
			if (isBuild) {
				console.log(`${CYAN}ビルド時の型定義を生成します...${RESET}`);
				generateRouteTypes();
			}
		},
		configureServer(server) {
			// ファイル変更の監視をサーバーのファイルウォッチャーに統合
			let debounceTimer: NodeJS.Timeout | null = null;
			const DEBOUNCE_TIME = 300; // ms

			const watcher = server.watcher;

			// 初回実行
			generateRouteTypes();

			watcher.on("change", (file) => {
				if (file === fullRoutesPath) {
					if (debounceTimer) {
						clearTimeout(debounceTimer);
					}

					debounceTimer = setTimeout(() => {
						const now = new Date();
						const timestamp = `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}:${String(
							now.getSeconds(),
						).padStart(2, "0")}`;

						console.log(
							`${CYAN}[${timestamp}] routes.tsx が変更されました。型定義を更新します...${RESET}`,
						);
						generateRouteTypes();
					}, DEBOUNCE_TIME);
				}
			});
		},
	};
}

/**
 * 型定義を生成する関数
 */
function generateRouteTypes() {
	try {
		// 新しいラッパースクリプトを実行
		const cmd = "node src/utils/typed-routes/generate-routes.mjs";

		child_process.execSync(cmd, {
			stdio: "inherit",
			encoding: "utf-8",
		});
		console.log(`${GREEN}型定義の更新が完了しました！${RESET}`);
	} catch (error) {
		console.error("型定義の生成中にエラーが発生しました:", error);
	}
}
