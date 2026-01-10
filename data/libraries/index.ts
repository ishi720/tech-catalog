import type { Library, LibraryCategoryInfo } from '~/types'

// 言語別ライブラリをインポート
import { phpLibraries } from './php'
import { jsLibraries } from './javascript'
import { pythonLibraries } from './python'
import { javaLibraries } from './java'
import { rubyLibraries } from './ruby'
import { rLibraries } from './r'
import { goLibraries } from './go'
import { csharpLibraries } from './csharp'
import { cppLibraries } from './cpp'
import { haskellLibraries } from './haskell'
import { kotlinLibraries } from './kotlin'
import { swiftLibraries } from './swift'

// カテゴリ情報
export const libraryCategories: LibraryCategoryInfo[] = [
  { id: 'cms', name: 'CMS', nameJa: 'CMS', icon: '📰', description: 'コンテンツ管理システム、ヘッドレスCMS' },
  { id: 'framework', name: 'Framework', nameJa: 'フレームワーク', icon: '🏗️', description: 'Webフレームワーク、アプリケーションフレームワーク' },
  { id: 'testing', name: 'Testing', nameJa: 'テスト', icon: '🧪', description: 'ユニットテスト、E2Eテスト、モック' },
  { id: 'image', name: 'Image', nameJa: '画像処理', icon: '🖼️', description: '画像変換、リサイズ、最適化' },
  { id: 'scraping', name: 'Scraping', nameJa: 'スクレイピング', icon: '🕷️', description: 'Webスクレイピング、クローリング' },
  { id: 'ai', name: 'AI/ML', nameJa: 'AI・機械学習', icon: '🤖', description: '機械学習、LLM、自然言語処理' },
  { id: 'database', name: 'Database', nameJa: 'DB操作', icon: '🗄️', description: 'ORM、クエリビルダー、マイグレーション' },
  { id: 'task-queue', name: 'Task Queue', nameJa: 'タスク管理', icon: '📋', description: 'ジョブキュー、バックグラウンド処理' },
  { id: 'auth', name: 'Auth', nameJa: '認証・認可', icon: '🔐', description: 'ログイン、JWT、OAuth' },
  { id: 'http', name: 'HTTP Client', nameJa: 'HTTP通信', icon: '📡', description: 'APIリクエスト、GraphQL' },
  { id: 'validation', name: 'Validation', nameJa: 'バリデーション', icon: '✅', description: '入力検証、スキーマ定義' },
  { id: 'date', name: 'Date/Time', nameJa: '日付・時間', icon: '📅', description: '日付操作、フォーマット、タイムゾーン' },
  { id: 'file', name: 'File', nameJa: 'ファイル操作', icon: '📁', description: 'アップロード、パース、ストレージ' },
  { id: 'email', name: 'Email', nameJa: 'メール送信', icon: '📧', description: 'SMTP、テンプレート' },
  { id: 'payment', name: 'Payment', nameJa: '決済', icon: '💳', description: 'Stripe、PayPal連携' },
  { id: 'search', name: 'Search', nameJa: '検索', icon: '🔍', description: '全文検索、あいまい検索' },
  { id: 'logging', name: 'Logging', nameJa: 'ログ・監視', icon: '📝', description: 'ロギング、エラートラッキング' },
  { id: 'ui', name: 'UI Components', nameJa: 'UIコンポーネント', icon: '🎨', description: 'コンポーネントライブラリ' },
  { id: 'state', name: 'State Management', nameJa: '状態管理', icon: '🔄', description: 'グローバルステート管理' },
  { id: 'i18n', name: 'i18n', nameJa: '国際化', icon: '🌐', description: '多言語対応、翻訳' },
  { id: 'realtime', name: 'Realtime', nameJa: 'リアルタイム通信', icon: '⚡', description: 'WebSocket、イベント駆動' },
  { id: 'pdf', name: 'PDF', nameJa: 'PDF操作', icon: '📄', description: 'PDF生成、パース、編集' },
  { id: 'video-audio', name: 'Media', nameJa: '動画・音声', icon: '🎬', description: 'メディア処理、ストリーミング' },
  { id: 'utility', name: 'Utility', nameJa: 'ユーティリティ', icon: '🔧', description: '汎用ヘルパー関数' },
  { id: 'cli', name: 'CLI', nameJa: 'CLI作成', icon: '🔌', description: 'コマンドラインツール作成' },
  { id: 'chart', name: 'Chart', nameJa: 'グラフ・可視化', icon: '📊', description: 'チャート、データ可視化' },
]

// 全ライブラリを統合
export const libraries: Library[] = [
  ...phpLibraries,
  ...jsLibraries,
  ...pythonLibraries,
  ...javaLibraries,
  ...rubyLibraries,
  ...rLibraries,
  ...goLibraries,
  ...csharpLibraries,
  ...cppLibraries,
  ...haskellLibraries,
  ...kotlinLibraries,
  ...swiftLibraries
]

// 言語でフィルターする関数
export function getLibrariesByLanguage(language: string): Library[] {
  return libraries.filter(lib => lib.language === language || lib.language === 'multi')
}

// カテゴリでフィルターする関数
export function getLibrariesByCategory(category: string): Library[] {
  return libraries.filter(lib => lib.category === category)
}

// 言語とカテゴリでフィルターする関数
export function getLibrary(language: string, category: string): Library | undefined {
  return libraries.find(lib =>
    (lib.language === language || lib.language === 'multi') &&
    lib.category === category
  )
}

// マトリックス用データ取得
export function getLibraryMatrix(languages: string[]): Record<string, Record<string, Library[]>> {
  const matrix: Record<string, Record<string, Library[]>> = {}

  languages.forEach(lang => {
    matrix[lang] = {}
    libraryCategories.forEach(cat => {
      matrix[lang][cat.id] = libraries.filter(
        lib => lib.language === lang && lib.category === cat.id
      )
    })
  })

  return matrix
}

// 言語別ライブラリも個別にエクスポート
export { phpLibraries }
export { jsLibraries }
export { pythonLibraries }
export { javaLibraries }
export { rubyLibraries }
export { rLibraries }
export { goLibraries }
export { csharpLibraries }
export { cppLibraries }
export { haskellLibraries }
export { kotlinLibraries }
export { swiftLibraries }