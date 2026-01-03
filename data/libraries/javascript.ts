import type { Library } from '~/types'

export const jsLibraries: Library[] = [
// フレームワーク
  { id: 'js-react', name: 'React', category: 'framework', language: 'javascript', description: 'Meta製UIライブラリ。コンポーネントベース、仮想DOM', packageName: 'react', officialUrl: 'https://react.dev/', features: ['コンポーネント', '仮想DOM', 'フック'] },
  { id: 'js-vue', name: 'Vue.js', category: 'framework', language: 'javascript', description: 'プログレッシブフレームワーク。学習コスト低め', packageName: 'vue', officialUrl: 'https://vuejs.org/', features: ['リアクティブ', 'SFC', 'Composition API'] },
  { id: 'js-angular', name: 'Angular', category: 'framework', language: 'javascript', description: 'Google製フルスタックフレームワーク', packageName: '@angular/core', officialUrl: 'https://angular.dev/', features: ['TypeScript', 'DI', 'フルスタック'] },
  { id: 'js-svelte', name: 'Svelte', category: 'framework', language: 'javascript', description: 'コンパイル時最適化。ランタイムなし', packageName: 'svelte', officialUrl: 'https://svelte.dev/', features: ['コンパイル', '軽量', 'リアクティブ'] },
  { id: 'js-nextjs', name: 'Next.js', category: 'framework', language: 'javascript', description: 'Reactフルスタックフレームワーク。SSR/SSG対応', packageName: 'next', officialUrl: 'https://nextjs.org/', features: ['SSR', 'SSG', 'App Router'] },
  { id: 'js-nuxt', name: 'Nuxt', category: 'framework', language: 'javascript', description: 'Vueフルスタックフレームワーク', packageName: 'nuxt', officialUrl: 'https://nuxt.com/', features: ['SSR', 'SSG', '自動インポート'] },
  { id: 'js-express', name: 'Express.js', category: 'framework', language: 'javascript', description: 'Node.js定番Webフレームワーク。シンプル・柔軟', packageName: 'express', officialUrl: 'https://expressjs.com/', features: ['ミドルウェア', 'ルーティング', '軽量'] },
  { id: 'js-nestjs', name: 'NestJS', category: 'framework', language: 'javascript', description: 'エンタープライズNode.jsフレームワーク', packageName: '@nestjs/core', officialUrl: 'https://nestjs.com/', features: ['TypeScript', 'DI', 'モジュラー'] },
  { id: 'js-fastify', name: 'Fastify', category: 'framework', language: 'javascript', description: '高速Node.js Webフレームワーク', packageName: 'fastify', officialUrl: 'https://fastify.dev/', features: ['高速', 'スキーマ', 'プラグイン'] },
  { id: 'js-hono', name: 'Hono', category: 'framework', language: 'javascript', description: '軽量・高速Webフレームワーク。エッジ対応', packageName: 'hono', officialUrl: 'https://hono.dev/', features: ['軽量', 'エッジ対応', 'マルチランタイム'] },
  { id: 'js-remix', name: 'Remix', category: 'framework', language: 'javascript', description: 'Web標準重視のReactフレームワーク', packageName: '@remix-run/node', officialUrl: 'https://remix.run/', features: ['Web標準', 'ネスト', 'ローダー'] },
  { id: 'js-astro', name: 'Astro', category: 'framework', language: 'javascript', description: 'コンテンツ重視の静的サイトフレームワーク', packageName: 'astro', officialUrl: 'https://astro.build/', features: ['Islands', 'マルチFW', 'ゼロJS'] },

  // テスト関連
  { id: 'js-jest', name: 'Jest', category: 'testing', language: 'javascript', description: 'Facebook製テストフレームワーク。スナップショット、モック機能充実', packageName: 'jest', officialUrl: 'https://jestjs.io/', features: ['スナップショット', 'モック', 'カバレッジ'] },
  { id: 'js-vitest', name: 'Vitest', category: 'testing', language: 'javascript', description: 'Vite互換の高速テストフレームワーク', packageName: 'vitest', officialUrl: 'https://vitest.dev/', features: ['高速', 'Vite互換', 'Jest互換API'] },
  { id: 'js-playwright', name: 'Playwright', category: 'testing', language: 'javascript', description: 'MS製E2Eテスト。マルチブラウザ対応', packageName: '@playwright/test', officialUrl: 'https://playwright.dev/', features: ['E2E', 'マルチブラウザ', '自動待機'] },
  { id: 'js-cypress', name: 'Cypress', category: 'testing', language: 'javascript', description: 'モダンE2Eテスト。リアルタイムリロード', packageName: 'cypress', officialUrl: 'https://www.cypress.io/', features: ['E2E', 'タイムトラベル', 'ビデオ録画'] },

  // 画像関連
  { id: 'js-sharp', name: 'Sharp', category: 'image', language: 'javascript', description: '高速画像処理。リサイズ、変換、最適化', packageName: 'sharp', officialUrl: 'https://sharp.pixelplumbing.com/', features: ['高速', 'WebP対応', 'リサイズ'] },
  { id: 'js-jimp', name: 'Jimp', category: 'image', language: 'javascript', description: '純粋JSの画像処理。依存なし', packageName: 'jimp', officialUrl: 'https://jimp-dev.github.io/jimp/', features: ['依存なし', 'フィルター', 'テキスト合成'] },
  { id: 'js-canvas', name: 'node-canvas', category: 'image', language: 'javascript', description: 'Node.js用Canvas API実装', packageName: 'canvas', github: 'https://github.com/Automattic/node-canvas', features: ['Canvas API', 'SVG対応', 'PDF出力'] },
  { id: 'js-image-size', name: 'image-size', category: 'image', language: 'javascript', description: '画像サイズ取得（軽量）', packageName: 'image-size', github: 'https://github.com/image-size/image-size', features: ['軽量', '多形式対応'] },

  // スクレイピング関連
  { id: 'js-puppeteer', name: 'Puppeteer', category: 'scraping', language: 'javascript', description: 'Google製ヘッドレスChrome操作', packageName: 'puppeteer', officialUrl: 'https://pptr.dev/', features: ['Chrome操作', 'スクリーンショット', 'PDF生成'] },
  { id: 'js-cheerio', name: 'Cheerio', category: 'scraping', language: 'javascript', description: '高速HTMLパーサー。jQuery風API', packageName: 'cheerio', officialUrl: 'https://cheerio.js.org/', features: ['高速', 'jQuery風', '軽量'] },
  { id: 'js-crawlee', name: 'Crawlee', category: 'scraping', language: 'javascript', description: 'Webクローリング・スクレイピングフレームワーク', packageName: 'crawlee', officialUrl: 'https://crawlee.dev/', features: ['クローリング', 'キュー管理', 'プロキシ対応'] },
  { id: 'js-jsdom', name: 'jsdom', category: 'scraping', language: 'javascript', description: 'Node.js用DOM実装', packageName: 'jsdom', github: 'https://github.com/jsdom/jsdom', features: ['DOM実装', 'テスト用途'] },

  // AI関連
  { id: 'js-openai', name: 'OpenAI SDK', category: 'ai', language: 'javascript', description: 'OpenAI API公式クライアント', packageName: 'openai', officialUrl: 'https://platform.openai.com/', features: ['GPT', 'DALL-E', 'Whisper'] },
  { id: 'js-langchain', name: 'LangChain.js', category: 'ai', language: 'javascript', description: 'LLMアプリケーション構築フレームワーク', packageName: 'langchain', officialUrl: 'https://js.langchain.com/', features: ['チェーン', 'エージェント', 'RAG'] },
  { id: 'js-transformers', name: 'Transformers.js', category: 'ai', language: 'javascript', description: 'ブラウザで動くML。HuggingFace互換', packageName: '@xenova/transformers', officialUrl: 'https://huggingface.co/docs/transformers.js/', features: ['ブラウザ対応', 'ONNX', '多モデル'] },
  { id: 'js-tensorflow', name: 'TensorFlow.js', category: 'ai', language: 'javascript', description: 'ブラウザ/Node.js用機械学習', packageName: '@tensorflow/tfjs', officialUrl: 'https://www.tensorflow.org/js', features: ['ブラウザ対応', 'GPU対応', 'モデル変換'] },
  { id: 'js-vercel-ai', name: 'Vercel AI SDK', category: 'ai', language: 'javascript', description: 'AIチャットUI構築用SDK', packageName: 'ai', officialUrl: 'https://sdk.vercel.ai/', features: ['ストリーミング', 'React対応', 'マルチプロバイダ'] },

  // DB操作関連
  { id: 'js-prisma', name: 'Prisma', category: 'database', language: 'javascript', description: '次世代ORM。型安全、マイグレーション', packageName: 'prisma', officialUrl: 'https://www.prisma.io/', features: ['型安全', 'マイグレーション', 'GUI'] },
  { id: 'js-drizzle', name: 'Drizzle ORM', category: 'database', language: 'javascript', description: '軽量TypeScript ORM', packageName: 'drizzle-orm', officialUrl: 'https://orm.drizzle.team/', features: ['軽量', 'SQL風', 'エッジ対応'] },
  { id: 'js-typeorm', name: 'TypeORM', category: 'database', language: 'javascript', description: 'TypeScript ORM。Active Record/Data Mapper', packageName: 'typeorm', officialUrl: 'https://typeorm.io/', features: ['デコレータ', 'マイグレーション', '多DB対応'] },
  { id: 'js-sequelize', name: 'Sequelize', category: 'database', language: 'javascript', description: 'Node.js定番ORM', packageName: 'sequelize', officialUrl: 'https://sequelize.org/', features: ['多DB対応', 'マイグレーション', 'トランザクション'] },
  { id: 'js-knex', name: 'Knex.js', category: 'database', language: 'javascript', description: 'SQLクエリビルダー', packageName: 'knex', officialUrl: 'https://knexjs.org/', features: ['クエリビルダー', 'マイグレーション', '多DB対応'] },
  { id: 'js-mongoose', name: 'Mongoose', category: 'database', language: 'javascript', description: 'MongoDB ODM', packageName: 'mongoose', officialUrl: 'https://mongoosejs.com/', features: ['MongoDB専用', 'スキーマ', 'バリデーション'] },

  // タスク管理
  { id: 'js-bullmq', name: 'BullMQ', category: 'task-queue', language: 'javascript', description: 'Redis利用のジョブキュー', packageName: 'bullmq', officialUrl: 'https://bullmq.io/', features: ['Redis', 'リトライ', 'ダッシュボード'] },
  { id: 'js-agenda', name: 'Agenda', category: 'task-queue', language: 'javascript', description: 'MongoDB利用のジョブスケジューラ', packageName: 'agenda', github: 'https://github.com/agenda/agenda', features: ['MongoDB', 'スケジュール', 'Cron'] },
  { id: 'js-node-cron', name: 'node-cron', category: 'task-queue', language: 'javascript', description: '軽量Cronスケジューラ', packageName: 'node-cron', github: 'https://github.com/node-cron/node-cron', features: ['軽量', 'Cron構文', '依存なし'] },

  // 認証・認可
  { id: 'js-passport', name: 'Passport.js', category: 'auth', language: 'javascript', description: 'Node.js認証ミドルウェア', packageName: 'passport', officialUrl: 'https://www.passportjs.org/', features: ['戦略パターン', 'OAuth対応', 'Express連携'] },
  { id: 'js-nextauth', name: 'NextAuth.js', category: 'auth', language: 'javascript', description: 'Next.js用認証', packageName: 'next-auth', officialUrl: 'https://next-auth.js.org/', features: ['Next.js専用', 'OAuth', 'JWT'] },
  { id: 'js-jose', name: 'jose', category: 'auth', language: 'javascript', description: 'JWT/JWE/JWK実装', packageName: 'jose', github: 'https://github.com/panva/jose', features: ['JWT', 'JWE', 'Edge対応'] },
  { id: 'js-bcrypt', name: 'bcrypt', category: 'auth', language: 'javascript', description: 'パスワードハッシュ化', packageName: 'bcrypt', github: 'https://github.com/kelektiv/node.bcrypt.js', features: ['ハッシュ化', 'ソルト', '業界標準'] },

  // HTTP通信
  { id: 'js-axios', name: 'Axios', category: 'http', language: 'javascript', description: 'Promise型HTTPクライアント', packageName: 'axios', officialUrl: 'https://axios-http.com/', features: ['インターセプタ', 'キャンセル', 'ブラウザ/Node'] },
  { id: 'js-ky', name: 'ky', category: 'http', language: 'javascript', description: '軽量fetch wrapper', packageName: 'ky', github: 'https://github.com/sindresorhus/ky', features: ['軽量', 'リトライ', 'fetch互換'] },
  { id: 'js-got', name: 'got', category: 'http', language: 'javascript', description: 'Node.js用HTTPクライアント', packageName: 'got', github: 'https://github.com/sindresorhus/got', features: ['Node専用', 'ストリーム', 'リトライ'] },
  { id: 'js-trpc', name: 'tRPC', category: 'http', language: 'javascript', description: '型安全なAPI構築', packageName: '@trpc/server', officialUrl: 'https://trpc.io/', features: ['型安全', 'スキーマレス', 'React対応'] },
  { id: 'js-graphql', name: 'GraphQL.js', category: 'http', language: 'javascript', description: 'GraphQL参照実装', packageName: 'graphql', officialUrl: 'https://graphql.org/', features: ['GraphQL', 'スキーマ', 'リゾルバ'] },
  { id: 'js-apollo', name: 'Apollo Client', category: 'http', language: 'javascript', description: 'GraphQLクライアント', packageName: '@apollo/client', officialUrl: 'https://www.apollographql.com/', features: ['GraphQL', 'キャッシュ', 'React対応'] },

  // バリデーション
  { id: 'js-zod', name: 'Zod', category: 'validation', language: 'javascript', description: 'TypeScript-firstスキーマバリデーション', packageName: 'zod', officialUrl: 'https://zod.dev/', features: ['型推論', '軽量', 'チェーン'] },
  { id: 'js-yup', name: 'Yup', category: 'validation', language: 'javascript', description: 'スキーマバリデーション', packageName: 'yup', github: 'https://github.com/jquense/yup', features: ['スキーマ', 'Formik連携', '非同期'] },
  { id: 'js-joi', name: 'Joi', category: 'validation', language: 'javascript', description: 'オブジェクトスキーマバリデーション', packageName: 'joi', officialUrl: 'https://joi.dev/', features: ['スキーマ', '詳細エラー', '拡張可能'] },
  { id: 'js-valibot', name: 'Valibot', category: 'validation', language: 'javascript', description: '超軽量バリデーション', packageName: 'valibot', officialUrl: 'https://valibot.dev/', features: ['超軽量', 'Tree-shake', 'Zod互換'] },

  // 日付・時間
  { id: 'js-dayjs', name: 'Day.js', category: 'date', language: 'javascript', description: '軽量Moment.js代替', packageName: 'dayjs', officialUrl: 'https://day.js.org/', features: ['軽量(2KB)', 'Moment互換', 'プラグイン'] },
  { id: 'js-datefns', name: 'date-fns', category: 'date', language: 'javascript', description: 'モダン日付ライブラリ', packageName: 'date-fns', officialUrl: 'https://date-fns.org/', features: ['Tree-shake', '関数型', 'TypeScript'] },
  { id: 'js-luxon', name: 'Luxon', category: 'date', language: 'javascript', description: 'Moment.js作者の新ライブラリ', packageName: 'luxon', officialUrl: 'https://moment.github.io/luxon/', features: ['Intl API', 'イミュータブル', 'タイムゾーン'] },

  // ファイル操作
  { id: 'js-multer', name: 'Multer', category: 'file', language: 'javascript', description: 'Express用ファイルアップロード', packageName: 'multer', github: 'https://github.com/expressjs/multer', features: ['Express用', 'multipart', 'ストレージ'] },
  { id: 'js-formidable', name: 'Formidable', category: 'file', language: 'javascript', description: 'フォームデータパーサー', packageName: 'formidable', github: 'https://github.com/node-formidable/formidable', features: ['ストリーム', '大ファイル', 'multipart'] },
  { id: 'js-papaparse', name: 'Papa Parse', category: 'file', language: 'javascript', description: '高速CSVパーサー', packageName: 'papaparse', officialUrl: 'https://www.papaparse.com/', features: ['CSV', 'ストリーム', 'ブラウザ対応'] },
  { id: 'js-exceljs', name: 'ExcelJS', category: 'file', language: 'javascript', description: 'Excel読み書き', packageName: 'exceljs', github: 'https://github.com/exceljs/exceljs', features: ['Excel', 'スタイル', 'ストリーム'] },
  { id: 'js-archiver', name: 'Archiver', category: 'file', language: 'javascript', description: 'アーカイブ作成（ZIP等）', packageName: 'archiver', github: 'https://github.com/archiverjs/node-archiver', features: ['ZIP', 'TAR', 'ストリーム'] },

  // メール送信
  { id: 'js-nodemailer', name: 'Nodemailer', category: 'email', language: 'javascript', description: 'Node.js定番メール送信', packageName: 'nodemailer', officialUrl: 'https://nodemailer.com/', features: ['SMTP', 'HTML', '添付ファイル'] },
  { id: 'js-resend', name: 'Resend', category: 'email', language: 'javascript', description: 'モダンメールAPI', packageName: 'resend', officialUrl: 'https://resend.com/', features: ['API', 'React Email', 'テンプレート'] },

  // 決済
  { id: 'js-stripe', name: 'Stripe SDK', category: 'payment', language: 'javascript', description: 'Stripe公式SDK', packageName: 'stripe', officialUrl: 'https://stripe.com/', features: ['決済', 'サブスク', 'Webhook'] },

  // 検索
  { id: 'js-fusejs', name: 'Fuse.js', category: 'search', language: 'javascript', description: '軽量あいまい検索', packageName: 'fuse.js', officialUrl: 'https://fusejs.io/', features: ['あいまい検索', '軽量', 'ブラウザ対応'] },
  { id: 'js-lunr', name: 'Lunr.js', category: 'search', language: 'javascript', description: 'ブラウザ用全文検索', packageName: 'lunr', officialUrl: 'https://lunrjs.com/', features: ['全文検索', 'インデックス', '軽量'] },
  { id: 'js-minisearch', name: 'MiniSearch', category: 'search', language: 'javascript', description: '軽量全文検索エンジン', packageName: 'minisearch', github: 'https://github.com/lucaong/minisearch', features: ['軽量', '高速', '日本語対応'] },

  // ログ・監視
  { id: 'js-winston', name: 'Winston', category: 'logging', language: 'javascript', description: '多機能ロガー', packageName: 'winston', github: 'https://github.com/winstonjs/winston', features: ['複数出力', 'ログレベル', 'フォーマット'] },
  { id: 'js-pino', name: 'Pino', category: 'logging', language: 'javascript', description: '高速JSONロガー', packageName: 'pino', officialUrl: 'https://getpino.io/', features: ['高速', 'JSON', '低オーバーヘッド'] },
  { id: 'js-sentry', name: 'Sentry SDK', category: 'logging', language: 'javascript', description: 'エラートラッキング', packageName: '@sentry/node', officialUrl: 'https://sentry.io/', features: ['エラー追跡', 'パフォーマンス', 'アラート'] },

  // UIコンポーネント
  { id: 'js-shadcn', name: 'shadcn/ui', category: 'ui', language: 'javascript', description: 'コピペUIコンポーネント', officialUrl: 'https://ui.shadcn.com/', features: ['Radixベース', 'カスタマイズ', 'Tailwind'] },
  { id: 'js-radix', name: 'Radix UI', category: 'ui', language: 'javascript', description: 'ヘッドレスUIプリミティブ', packageName: '@radix-ui/react-dialog', officialUrl: 'https://www.radix-ui.com/', features: ['ヘッドレス', 'アクセシビリティ', '非スタイル'] },
  { id: 'js-headlessui', name: 'Headless UI', category: 'ui', language: 'javascript', description: 'Tailwind Labs製ヘッドレスUI', packageName: '@headlessui/react', officialUrl: 'https://headlessui.com/', features: ['ヘッドレス', 'Tailwind連携', 'Vue対応'] },
  { id: 'js-mui', name: 'MUI', category: 'ui', language: 'javascript', description: 'Material Design実装', packageName: '@mui/material', officialUrl: 'https://mui.com/', features: ['Material', 'テーマ', '豊富なコンポーネント'] },
  { id: 'js-antd', name: 'Ant Design', category: 'ui', language: 'javascript', description: 'エンタープライズUI', packageName: 'antd', officialUrl: 'https://ant.design/', features: ['企業向け', '多機能', '中国製'] },

  // 状態管理
  { id: 'js-zustand', name: 'Zustand', category: 'state', language: 'javascript', description: '軽量状態管理', packageName: 'zustand', github: 'https://github.com/pmndrs/zustand', features: ['軽量', 'フック', 'ミドルウェア'] },
  { id: 'js-jotai', name: 'Jotai', category: 'state', language: 'javascript', description: 'アトム型状態管理', packageName: 'jotai', officialUrl: 'https://jotai.org/', features: ['アトム', '軽量', 'ボトムアップ'] },
  { id: 'js-redux', name: 'Redux Toolkit', category: 'state', language: 'javascript', description: 'Redux公式ツールキット', packageName: '@reduxjs/toolkit', officialUrl: 'https://redux-toolkit.js.org/', features: ['Redux', 'RTK Query', 'DevTools'] },
  { id: 'js-pinia', name: 'Pinia', category: 'state', language: 'javascript', description: 'Vue公式状態管理', packageName: 'pinia', officialUrl: 'https://pinia.vuejs.org/', features: ['Vue専用', 'TypeScript', 'DevTools'] },
  { id: 'js-tanstack-query', name: 'TanStack Query', category: 'state', language: 'javascript', description: 'サーバー状態管理', packageName: '@tanstack/react-query', officialUrl: 'https://tanstack.com/query', features: ['サーバー状態', 'キャッシュ', '自動再取得'] },

  // 国際化
  { id: 'js-i18next', name: 'i18next', category: 'i18n', language: 'javascript', description: '多機能i18nフレームワーク', packageName: 'i18next', officialUrl: 'https://www.i18next.com/', features: ['多フレームワーク', 'プラグイン', 'バックエンド'] },
  { id: 'js-formatjs', name: 'FormatJS', category: 'i18n', language: 'javascript', description: 'ICU標準準拠i18n', packageName: 'react-intl', officialUrl: 'https://formatjs.io/', features: ['ICU準拠', 'React', 'フォーマット'] },

  // リアルタイム通信
  { id: 'js-socketio', name: 'Socket.IO', category: 'realtime', language: 'javascript', description: 'リアルタイム双方向通信', packageName: 'socket.io', officialUrl: 'https://socket.io/', features: ['WebSocket', 'フォールバック', 'ルーム'] },
  { id: 'js-ws', name: 'ws', category: 'realtime', language: 'javascript', description: '軽量WebSocketライブラリ', packageName: 'ws', github: 'https://github.com/websockets/ws', features: ['軽量', 'WebSocket', 'Node専用'] },
  { id: 'js-pusher', name: 'Pusher', category: 'realtime', language: 'javascript', description: 'リアルタイムマネージドサービス', packageName: 'pusher-js', officialUrl: 'https://pusher.com/', features: ['マネージド', 'チャンネル', 'プレゼンス'] },

  // PDF操作
  { id: 'js-pdfkit', name: 'PDFKit', category: 'pdf', language: 'javascript', description: 'PDF生成ライブラリ', packageName: 'pdfkit', officialUrl: 'http://pdfkit.org/', features: ['PDF生成', 'テキスト', '画像'] },
  { id: 'js-pdflib', name: 'pdf-lib', category: 'pdf', language: 'javascript', description: 'PDF作成・編集', packageName: 'pdf-lib', officialUrl: 'https://pdf-lib.js.org/', features: ['PDF編集', 'フォーム', '署名'] },
  { id: 'js-pdfjs', name: 'PDF.js', category: 'pdf', language: 'javascript', description: 'Mozilla製PDFビューア', packageName: 'pdfjs-dist', officialUrl: 'https://mozilla.github.io/pdf.js/', features: ['PDFレンダリング', 'ブラウザ', 'テキスト抽出'] },

  // 動画・音声
  { id: 'js-ffmpeg', name: 'fluent-ffmpeg', category: 'video-audio', language: 'javascript', description: 'FFmpegラッパー', packageName: 'fluent-ffmpeg', github: 'https://github.com/fluent-ffmpeg/node-fluent-ffmpeg', features: ['動画変換', '音声変換', 'ストリーム'] },
  { id: 'js-howler', name: 'Howler.js', category: 'video-audio', language: 'javascript', description: 'Web Audio API抽象化', packageName: 'howler', officialUrl: 'https://howlerjs.com/', features: ['オーディオ再生', 'スプライト', 'フェード'] },

  // ユーティリティ
  { id: 'js-lodash', name: 'Lodash', category: 'utility', language: 'javascript', description: '汎用ユーティリティ', packageName: 'lodash', officialUrl: 'https://lodash.com/', features: ['配列操作', 'オブジェクト操作', 'debounce'] },
  { id: 'js-ramda', name: 'Ramda', category: 'utility', language: 'javascript', description: '関数型ユーティリティ', packageName: 'ramda', officialUrl: 'https://ramdajs.com/', features: ['関数型', 'カリー化', 'イミュータブル'] },
  { id: 'js-uuid', name: 'uuid', category: 'utility', language: 'javascript', description: 'UUID生成', packageName: 'uuid', github: 'https://github.com/uuidjs/uuid', features: ['UUID v1-v7', 'RFC準拠'] },
  { id: 'js-nanoid', name: 'nanoid', category: 'utility', language: 'javascript', description: '軽量ID生成', packageName: 'nanoid', github: 'https://github.com/ai/nanoid', features: ['超軽量', 'URL-safe', 'カスタム'] },

  // CLI作成
  { id: 'js-commander', name: 'Commander.js', category: 'cli', language: 'javascript', description: 'CLIフレームワーク', packageName: 'commander', github: 'https://github.com/tj/commander.js', features: ['コマンド', 'オプション', 'ヘルプ'] },
  { id: 'js-inquirer', name: 'Inquirer.js', category: 'cli', language: 'javascript', description: 'インタラクティブCLI', packageName: 'inquirer', github: 'https://github.com/SBoudrias/Inquirer.js', features: ['プロンプト', '選択', '確認'] },
  { id: 'js-chalk', name: 'Chalk', category: 'cli', language: 'javascript', description: 'ターミナル文字装飾', packageName: 'chalk', github: 'https://github.com/chalk/chalk', features: ['色付け', 'スタイル', 'チェーン'] },
  { id: 'js-ora', name: 'Ora', category: 'cli', language: 'javascript', description: 'スピナー表示', packageName: 'ora', github: 'https://github.com/sindresorhus/ora', features: ['スピナー', 'プログレス', 'カスタム'] },

  // グラフ・可視化
  { id: 'js-chartjs', name: 'Chart.js', category: 'chart', language: 'javascript', description: 'シンプルなチャートライブラリ', packageName: 'chart.js', officialUrl: 'https://www.chartjs.org/', features: ['シンプル', 'レスポンシブ', '8種類'] },
  { id: 'js-d3', name: 'D3.js', category: 'chart', language: 'javascript', description: 'データ可視化の定番', packageName: 'd3', officialUrl: 'https://d3js.org/', features: ['自由度高', 'SVG', 'アニメーション'] },
  { id: 'js-recharts', name: 'Recharts', category: 'chart', language: 'javascript', description: 'React用チャート（D3ベース）', packageName: 'recharts', officialUrl: 'https://recharts.org/', features: ['React', 'D3ベース', '宣言的'] },
  { id: 'js-apexcharts', name: 'ApexCharts', category: 'chart', language: 'javascript', description: 'モダンチャートライブラリ', packageName: 'apexcharts', officialUrl: 'https://apexcharts.com/', features: ['インタラクティブ', 'アニメーション', '多種類'] },
  { id: 'js-echarts', name: 'ECharts', category: 'chart', language: 'javascript', description: 'Apache製可視化ライブラリ', packageName: 'echarts', officialUrl: 'https://echarts.apache.org/', features: ['高機能', '大規模データ', '3D対応'] },
]
