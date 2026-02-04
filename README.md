# Tech Catalog - 技術情報カタログ

NuxtJSで構築された技術情報をまとめたカタログサイトです。

## コンテンツ

- **プログラミング言語** - Python, JavaScript, Java, C++等
- **データベース** - MySQL, PostgreSQL, MongoDB, Redis等
- **フレームワーク** - React, Vue, Next.js, Django等
- **開発ツール** - VS Code, Git, Docker, npm等
- **言語の関係性グラフ** - 言語間の派生・影響関係を可視化

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# 静的サイト生成
npm run generate
```

## プロジェクト構成

```
tech-catalog/
├── app.vue                 # アプリケーションエントリー
├── nuxt.config.ts          # Nuxt設定
├── components/             # 再利用可能コンポーネント
│   ├── TechIcon.vue        # アイコン表示
│   └── SearchBox.vue       # 検索ボックス
├── data/                   # データファイル
│   ├── Libraries/          # 言語ごとのライブラリ
│   ├── index.ts            # データエクスポート
│   ├── languages.ts        # プログラミング言語
│   ├── databases.ts        # データベース
│   ├── devtools.ts         # 開発ツール
│   └── language-relations.ts # 言語の関係性データ
├── layouts/
│   └── default.vue         # デフォルトレイアウト
├── pages/                  # ページコンポーネント
│   ├── index.vue           # ホーム
│   ├── tech.vue            # 技術一覧
│   ├── libraries.vue       # マトリックス表
│   └── language-graph.vue  # 言語関係性グラフ
└── types/
    └── index.ts            # TypeScript型定義
```

## データの追加・編集

### 新しい技術を追加する

1. 該当する `data/*.ts` ファイルを開く
2. 配列に新しいオブジェクトを追加

例: 新しいプログラミング言語を追加

```typescript
// data/languages.ts
{
  id: 'zig',
  name: 'Zig',
  birthYear: 2016,
  latestVersion: '0.13',
  extensions: ['.zig'],
  type: 'コンパイル',
  paradigms: ['手続き型', 'ジェネリック'],
  officialUrl: 'https://ziglang.org/',
  notes: 'C代替を目指す言語'
}
```

### 言語の関係性を追加する

`data/language-relations.ts` に関係性を追加します。

```typescript
// data/language-relations.ts
{ from: 'javascript', to: 'typescript', type: 'transpile' },
```

**関係性タイプ:**
- `transpile` - トランスパイル型（変換）: 元言語のコードがそのまま動く
- `derived` - 派生型（後継）: 同じVM/ランタイム上で動く後継言語
- `influenced` - 影響型（思想継承）: 設計思想やアイデアを参考にした

### 型定義

各カテゴリの型は `types/index.ts` で定義されています：

- `ProgrammingLanguage` - プログラミング言語
- `Database` - データベース
- `DevTool` - 開発ツール
- `LanguageRelation` - 言語の関係性

## カスタマイズ

### テーマカラー

`tailwind.config.js` でカスタムカラーを設定できます。

### アイコン

各ページの `getXxxIcon()` 関数でアイコン（絵文字）をカスタマイズできます。


## 技術スタック

- [Nuxt 3](https://nuxt.com/) - Vue.jsフレームワーク
- [Tailwind CSS](https://tailwindcss.com/) - CSSフレームワーク
- [TypeScript](https://www.typescriptlang.org/) - 型安全なJavaScript
