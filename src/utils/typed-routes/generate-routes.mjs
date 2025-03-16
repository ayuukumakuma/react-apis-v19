#!/usr/bin/env node

import * as fs from "node:fs";
import { createRequire } from "node:module";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

// ESMではimport.meta.urlを使用して現在のファイルパスを取得
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

// ルーティング定義ファイルのパス
const ROUTES_FILE_PATH = path.resolve(__dirname, "../../routes.tsx");
// 出力先のファイルパス
const OUTPUT_FILE_PATH = path.resolve(__dirname, "./generated-routes.ts");
// typescriptをrequireで取得
const ts = require("typescript");

/**
 * ルート型定義ファイルを生成する関数
 */
export function generateRouteTypes() {
	try {
		console.log("ルート型定義ファイルを生成します...");
		const routesContent = fs.readFileSync(ROUTES_FILE_PATH, "utf-8");

		// TypeScriptのソースファイルを解析
		const sourceFile = ts.createSourceFile(
			"routes.tsx",
			routesContent,
			ts.ScriptTarget.Latest,
			true,
		);

		// ルート定義の抽出
		const routesPaths = [];

		// Route要素を再帰的に処理する関数
		function extractRoutes(node, parentPath = "") {
			if (ts.isJsxElement(node) || ts.isJsxSelfClosingElement(node)) {
				const tagName = ts.isJsxElement(node)
					? node.openingElement.tagName.getText(sourceFile)
					: node.tagName.getText(sourceFile);

				if (tagName === "Route") {
					let path = "";
					let isIndex = false;

					// 属性を調査
					const attributes = ts.isJsxElement(node)
						? node.openingElement.attributes.properties
						: node.attributes.properties;

					for (const attr of attributes) {
						if (
							ts.isJsxAttribute(attr) &&
							attr.name.getText(sourceFile) === "path" &&
							attr.initializer
						) {
							path = attr.initializer.getText(sourceFile).replace(/['"]/g, "");
						}
						if (
							ts.isJsxAttribute(attr) &&
							attr.name.getText(sourceFile) === "index"
						) {
							isIndex = true;
						}
					}

					const fullPath = isIndex
						? parentPath || "/"
						: path
							? `${parentPath}/${path}`.replace(/\/+/g, "/")
							: parentPath;

					if (fullPath && !routesPaths.includes(fullPath)) {
						routesPaths.push(fullPath);
					}

					// 子ルートの処理
					if (ts.isJsxElement(node)) {
						for (const child of node.children) {
							extractRoutes(child, fullPath);
						}
					}
				}
			}

			// 再帰的に子ノードを処理
			ts.forEachChild(node, (child) => extractRoutes(child, parentPath));
		}

		// ルート抽出の開始
		extractRoutes(sourceFile);

		// パスをソート
		routesPaths.sort();

		// 型定義を生成
		let output = `/**
 * このファイルは自動生成されたものです。直接編集しないでください。
 * 生成元: src/utils/typed-routes/generate-routes.mjs
 */

// アプリケーションのルートパス型
export type AppPaths =\n`;

		// パスリテラル型の生成
		output += routesPaths.map((path) => `  | '${path}'`).join("\n");
		output += ";\n\n";

		// ネストされたルート構造の生成
		output += `// ネストされたルート構造
export type AppRoutes = `;

		// ルート構造を構築
		const routeStructure = {};
		for (const path of routesPaths) {
			const segments = path.split("/").filter(Boolean);
			let current = routeStructure;

			if (path === "/") {
				current["/"] = "string";
				continue;
			}

			let currentPath = "";
			for (let i = 0; i < segments.length; i++) {
				const segment = segments[i];
				currentPath += `/${segment}`;

				if (i === segments.length - 1) {
					current[`/${segment}`] = "string";
				} else {
					if (
						!current[`/${segment}`] ||
						typeof current[`/${segment}`] === "string"
					) {
						current[`/${segment}`] = {};
					}
					current = current[`/${segment}`];
				}
			}
		}

		// ネストされた構造をTypeScript型形式の文字列に変換
		function stringifyRouteStructure(structure, indent = 2) {
			const entries = Object.entries(structure);
			if (entries.length === 0) return "{}";

			const lines = entries.map(([key, value], index) => {
				const valueStr =
					typeof value === "string"
						? value
						: stringifyRouteStructure(value, indent + 2);

				// すべての行の末尾にセミコロンを追加
				return `${" ".repeat(indent)}'${key}': ${valueStr}`;
			});

			return `{\n${lines.join(";\n")};\n${" ".repeat(indent - 2)}}`;
		}

		output += stringifyRouteStructure(routeStructure);
		output += ";\n\n";

		// ヘルパー関数の追加
		output += `// パスを型安全に構築するためのヘルパー関数
export function createPath<
	T extends AppPaths,
	P extends T extends \`\${string}:\${infer P1}/\${string}\` | \`\${string}:\${infer P2}\` ? 
		{ [K in P1 | P2]: string } : 
		never
>(path: T, params?: P): string {
	if (!params) return path as string;
	
	let result = path as string;
	for (const [key, value] of Object.entries(params)) {
		result = result.replace(\`:\${key}\`, value);
	}
	
	return result;
}
`;

		// ファイルに書き込み
		fs.writeFileSync(OUTPUT_FILE_PATH, output);
		console.log(`ルート型定義が生成されました: ${OUTPUT_FILE_PATH}`);

		return true;
	} catch (error) {
		console.error("型定義の生成中にエラーが発生しました:", error);
		return false;
	}
}

// 直接実行された場合のみ実行
if (process.argv[1] === fileURLToPath(import.meta.url)) {
	generateRouteTypes();
}
