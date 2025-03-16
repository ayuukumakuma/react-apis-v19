# React 19 API エクスプローラー

## 目的
- React 19 までの様々な API を実践的に探索
- 新機能・既存 API の機能と特性の理解

## 技術スタック
- **React 19.0.0** - 最新の React バージョン
- **TypeScript** - 型安全なコード開発
- **Vite** - 高速な開発環境と最適化されたビルド
- **React Router 7.3.0** - 最新のルーティング機能
- **DaisyUI** - UIコンポーネントライブラリ
- **Biome** - コード品質とフォーマットのためのツール

## 開発コマンド
```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm run dev

# プロジェクトのビルド
pnpm run build

# ビルドしたプロジェクトのプレビュー
pnpm run preview
```

## プロジェクト構成
- `src/main.tsx` - アプリケーションのエントリーポイント
- `src/routes.tsx` - ルート定義
- `src/pages/` - ページコンポーネント
- `src/components/` - 再利用可能なコンポーネント

## Biome 設定
```json
{
	"formatter": {
		"enabled": true,
		"indentStyle": "tab"
	},
	"organizeImports": {
		"enabled": true
	},
	"linter": {
		"enabled": true,
		"rules": {
			"recommended": true
		}
	}
}
```

## TypeScript 設定
- 厳格な設定採用
- 詳細は `tsconfig.app.json` と `tsconfig.node.json` を参照

※このREADMEはAIによって生成されました。
