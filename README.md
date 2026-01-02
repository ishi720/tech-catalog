# Tech Catalog - 技術情報カタログ

NuxtJSで構築された技術情報をまとめたカタログサイトです。

## コンテンツ

- **プログラミング言語** - Python, JavaScript, Java, C++等
- **データベース** - MySQL, PostgreSQL, MongoDB, Redis等
- **フレームワーク** - React, Vue, Next.js, Django等
- **開発ツール** - VS Code, Git, Docker, npm等

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
│   ├── TechCard.vue        # カード表示
│   └── SearchFilter.vue    # 検索・フィルター
├── data/                   # データファイル
│   ├── index.ts            # データエクスポート
│   ├── languages.ts        # プログラミング言語
│   ├── databases.ts        # データベース
│   ├── frameworks.ts       # フレームワーク
│   └── devtools.ts         # 開発ツール
├── layouts/
│   └── default.vue         # デフォルトレイアウト
├── pages/                  # ページコンポーネント
│   ├── index.vue           # ホーム
│   ├── languages.vue       # 言語一覧
│   ├── databases.vue       # DB一覧
│   ├── frameworks.vue      # FW一覧
│   └── devtools.vue        # ツール一覧
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

### 型定義

各カテゴリの型は `types/index.ts` で定義されています：

- `ProgrammingLanguage` - プログラミング言語
- `Database` - データベース
- `Framework` - フレームワーク
- `DevTool` - 開発ツール

## カスタマイズ

### テーマカラー

`tailwind.config.js` でカスタムカラーを設定できます。

### アイコン

各ページの `getXxxIcon()` 関数でアイコン（絵文字）をカスタマイズできます。


## 技術スタック

- [Nuxt 3](https://nuxt.com/) - Vue.jsフレームワーク
- [Tailwind CSS](https://tailwindcss.com/) - CSSフレームワーク
- [TypeScript](https://www.typescriptlang.org/) - 型安全なJavaScript
