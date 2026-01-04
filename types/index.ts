// プログラミング言語
export interface ProgrammingLanguage {
  id: string
  name: string
  birthYear: number
  latestVersion: string
  extensions: string[]
  type: string
  paradigms: string[]
  officialUrl: string
  notes: string
  icon?: string
}

// データベース
export interface Database {
  id: string
  name: string
  queryLanguage: string
  dependencyLanguages: string[]
  latestVersion: string
  type: string
  birthYear: number
  officialUrl?: string
  notes?: string
  icon?: string
}

// フレームワーク
export interface Framework {
  id: string
  name: string
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'css' | 'testing' | 'other'
  language: string
  latestVersion: string
  birthYear: number
  officialUrl: string
  stars?: number
  notes?: string
  icon?: string
}

// 開発ツール
export interface DevTool {
  id: string
  name: string
  category: 'ide' | 'editor' | 'vcs' | 'ci-cd' | 'containerization' | 'package-manager' | 'bundler' | 'other'
  platform: string[]
  latestVersion: string
  license: string
  officialUrl: string
  notes?: string
  icon?: string
}

// ライブラリ
export interface Library {
  id: string
  name: string
  category: LibraryCategory
  language: 'javascript' | 'php' | 'python' | 'ruby' | 'java' | 'go' | 'rust' | 'csharp' | 'r' | 'cobol' | 'cpp' | 'multi'
  description: string
  latestVersion?: string
  officialUrl?: string
  packageName?: string
  github?: string
  features?: string[]
  notes?: string
}

// ライブラリカテゴリ
export type LibraryCategory =
  | 'framework'
  | 'testing'
  | 'image'
  | 'scraping'
  | 'ai'
  | 'database'
  | 'task-queue'
  | 'auth'
  | 'http'
  | 'validation'
  | 'date'
  | 'file'
  | 'email'
  | 'payment'
  | 'search'
  | 'logging'
  | 'ui'
  | 'state'
  | 'i18n'
  | 'realtime'
  | 'pdf'
  | 'video-audio'
  | 'utility'
  | 'cli'
  | 'chart'

// ライブラリカテゴリ情報
export interface LibraryCategoryInfo {
  id: LibraryCategory
  name: string
  nameJa: string
  icon: string
  description: string
}

// カテゴリ情報
export interface Category {
  id: string
  name: string
  nameJa: string
  description: string
  icon: string
  color: string
}

// 統一された技術アイテム型
export type TechItem = ProgrammingLanguage | Database | Framework | DevTool

// フィルター状態
export interface FilterState {
  search: string
  category: string
  tags: string[]
  sortBy: string
  sortOrder: 'asc' | 'desc'
}
