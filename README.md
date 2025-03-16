# React 19 API サンプル

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

## 型安全なルーティング

このプロジェクトではTSによる型安全なルーティングを実装しています。

### 使い方

1. ルーティング定義は `src/routes.tsx` で行います
2. ルートパスの型を生成するには以下のコマンドを実行します:

```bash
pnpm run generate-routes
```

3. 型安全なリンク作成には `AppLink` コンポーネントを使用します:

```tsx
import { AppLink } from './components/AppLink';

// 型安全なリンク
<AppLink to="/hooks/use-state">useState</AppLink>

// 動的パラメータを持つルートの場合
<AppLink 
  to="/user/:id" 
  params={{ id: "123" }}
>
  ユーザープロフィール
</AppLink>
```

4. 関数内でのナビゲーションには `navigateTo` 関数を使用します:

```tsx
import { navigateTo } from './components/AppLink';
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();
  
  function handleClick() {
    // 型安全なナビゲーション
    navigate(navigateTo('/hooks/use-state'));
    
    // パラメータを持つルートの場合
    navigate(navigateTo('/user/:id', { id: '123' }));
  }
  
  return <button onClick={handleClick}>移動</button>;
}
```

型システムによりタイプミスや存在しないルートへの参照が防止されます。

※このREADMEはAIによって生成されました。
