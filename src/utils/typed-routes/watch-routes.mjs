#!/usr/bin/env node

import { createRequire } from "node:module";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { generateRouteTypes } from "./generate-routes.mjs";

// ESMではimport.meta.urlを使用して現在のファイルパスを取得
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

// chokidarを動的インポート
const chokidar = require("chokidar");

// ルーティング定義ファイルのパス
const ROUTES_FILE_PATH = path.resolve(__dirname, "../../routes.tsx");

// ANSI カラーコード
const GREEN = "\x1b[32m";
const RESET = "\x1b[0m";
const CYAN = "\x1b[36m";

console.log(`${CYAN}routes.tsx監視スクリプトを起動しています...${RESET}`);

// ファイル変更監視を設定
const watcher = chokidar.watch(ROUTES_FILE_PATH, {
	persistent: true,
	ignoreInitial: false,
});

// タイマーを使って連続した変更をまとめる
let debounceTimer = null;
const DEBOUNCE_TIME = 300; // ms

// 初回実行と変更検知時の処理
watcher
	.on("add", handleRouteChange)
	.on("change", handleRouteChange)
	.on("error", (error) => console.error(`Watcher error: ${error}`));

function handleRouteChange() {
	// すでにタイマーがセットされていればクリア
	if (debounceTimer) {
		clearTimeout(debounceTimer);
	}

	// 新しいタイマーをセット
	debounceTimer = setTimeout(() => {
		const now = new Date();
		const timestamp = `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}:${String(
			now.getSeconds(),
		).padStart(2, "0")}`;

		console.log(
			`${CYAN}[${timestamp}] routes.tsx が変更されました。型定義を更新します...${RESET}`,
		);

		try {
			// 型定義を生成
			generateRouteTypes();
			console.log(`${GREEN}型定義の更新が完了しました！${RESET}`);
		} catch (error) {
			console.error("型定義の生成中にエラーが発生しました:", error);
		}
	}, DEBOUNCE_TIME);
}

// プロセス終了時にクリーンアップ
process.on("SIGINT", () => {
	console.log(`${CYAN}監視を終了します...${RESET}`);
	watcher.close();
	process.exit(0);
});

console.log(
	`${GREEN}routes.tsx の監視を開始しました。編集すると自動的に型定義が更新されます。${RESET}`,
);
