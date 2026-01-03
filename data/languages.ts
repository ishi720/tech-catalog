import type { ProgrammingLanguage } from '~/types'

export const programmingLanguages: ProgrammingLanguage[] = [
  {
    id: 'python',
    name: 'Python',
    birthYear: 1991,
    latestVersion: '3.14.2',
    extensions: ['.py', '.pyw', '.pyx'],
    type: 'インタプリタ',
    paradigms: ['オブジェクト指向', '手続き型', '関数型'],
    officialUrl: 'https://www.python.org/',
    notes: '汎用、AI/ML、Web開発で人気'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    birthYear: 1995,
    latestVersion: 'ES2025',
    extensions: ['.js', '.mjs', '.cjs'],
    type: 'インタプリタ',
    paradigms: ['オブジェクト指向', '関数型', 'イベント駆動'],
    officialUrl: 'https://ecma-international.org/',
    notes: 'Web開発の標準言語'
  },
  {
    id: 'java',
    name: 'Java',
    birthYear: 1995,
    latestVersion: '25',
    extensions: ['.java', '.class', '.jar'],
    type: 'コンパイル（JVM）',
    paradigms: ['オブジェクト指向'],
    officialUrl: 'https://www.java.com/',
    notes: 'エンタープライズ向け'
  },
  {
    id: 'c',
    name: 'C',
    birthYear: 1972,
    latestVersion: 'C23',
    extensions: ['.c', '.h'],
    type: 'コンパイル',
    paradigms: ['手続き型'],
    officialUrl: 'https://www.iso.org/standard/74528.html',
    notes: 'システムプログラミングの基盤'
  },
  {
    id: 'cpp',
    name: 'C++',
    birthYear: 1983,
    latestVersion: 'C++23',
    extensions: ['.cpp', '.cc', '.cxx', '.hpp', '.h'],
    type: 'コンパイル',
    paradigms: ['オブジェクト指向', '手続き型', 'ジェネリック'],
    officialUrl: 'https://isocpp.org/',
    notes: 'C言語の拡張'
  },
  {
    id: 'csharp',
    name: 'C#',
    birthYear: 2000,
    latestVersion: '13.0',
    extensions: ['.cs', '.csx'],
    type: 'コンパイル（CLR）',
    paradigms: ['オブジェクト指向', '関数型'],
    officialUrl: 'https://learn.microsoft.com/dotnet/csharp/',
    notes: 'Microsoft .NET 9'
  },
  {
    id: 'ruby',
    name: 'Ruby',
    birthYear: 1995,
    latestVersion: '3.4.7',
    extensions: ['.rb', '.rbw'],
    type: 'インタプリタ',
    paradigms: ['オブジェクト指向', '関数型'],
    officialUrl: 'https://www.ruby-lang.org/',
    notes: '日本発、Rails人気'
  },
  {
    id: 'php',
    name: 'PHP',
    birthYear: 1995,
    latestVersion: '8.5.0',
    extensions: ['.php', '.phtml', '.php3-7'],
    type: 'インタプリタ',
    paradigms: ['オブジェクト指向', '手続き型'],
    officialUrl: 'https://www.php.net/',
    notes: 'Web開発向け'
  },
  {
    id: 'swift',
    name: 'Swift',
    birthYear: 2014,
    latestVersion: '6.2',
    extensions: ['.swift'],
    type: 'コンパイル',
    paradigms: ['オブジェクト指向', '関数型', 'プロトコル指向'],
    officialUrl: 'https://www.swift.org/',
    notes: 'Apple開発'
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    birthYear: 2011,
    latestVersion: '2.2.20',
    extensions: ['.kt', '.kts'],
    type: 'コンパイル（JVM）',
    paradigms: ['オブジェクト指向', '関数型'],
    officialUrl: 'https://kotlinlang.org/',
    notes: 'Android公式言語'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    birthYear: 2012,
    latestVersion: '5.7',
    extensions: ['.ts', '.tsx'],
    type: 'コンパイル（トランスパイル）',
    paradigms: ['オブジェクト指向', '関数型'],
    officialUrl: 'https://www.typescriptlang.org/',
    notes: 'JavaScript + 型'
  },
  {
    id: 'go',
    name: 'Go',
    birthYear: 2009,
    latestVersion: '1.24',
    extensions: ['.go'],
    type: 'コンパイル',
    paradigms: ['手続き型', '並行処理'],
    officialUrl: 'https://go.dev/',
    notes: 'Google開発、シンプル高速'
  },
  {
    id: 'rust',
    name: 'Rust',
    birthYear: 2010,
    latestVersion: '1.84',
    extensions: ['.rs'],
    type: 'コンパイル',
    paradigms: ['関数型', '手続き型', '並行処理'],
    officialUrl: 'https://www.rust-lang.org/',
    notes: 'メモリ安全、高性能'
  },
  {
    id: 'r',
    name: 'R',
    birthYear: 1993,
    latestVersion: '4.4.2',
    extensions: ['.r', '.R'],
    type: 'インタプリタ',
    paradigms: ['関数型', 'オブジェクト指向', '統計分析'],
    officialUrl: 'https://www.r-project.org/',
    notes: '統計分析、データ可視化に特化'
  },
  {
    id: 'scala',
    name: 'Scala',
    birthYear: 2004,
    latestVersion: '3.6.4',
    extensions: ['.scala', '.sc'],
    type: 'コンパイル（JVM）',
    paradigms: ['オブジェクト指向', '関数型'],
    officialUrl: 'https://www.scala-lang.org/',
    notes: 'JVM上の関数型言語'  
  },
  {
    id: 'perl',
    name: 'Perl',
    birthYear: 1987,
    latestVersion: '5.38.0',
    extensions: ['.pl', '.pm'],
    type: 'インタプリタ',
    paradigms: ['手続き型', 'オブジェクト指向', '関数型'],
    officialUrl: 'https://www.perl.org/',
    notes: 'テキスト処理向け'
  },
  {
    id: 'lua',
    name: 'Lua',
    birthYear: 1993,
    latestVersion: '5.4.6',
    extensions: ['.lua'],
    type: 'インタプリタ',
    paradigms: ['手続き型', 'オブジェクト指向', '関数型'],
    officialUrl: 'https://www.lua.org/',
    notes: '組み込み用軽量言語'
  },
  {
    id: 'haskell',
    name: 'Haskell',
    birthYear: 1990,
    latestVersion: '9.4.5',
    extensions: ['.hs', '.lhs'],
    type: 'コンパイル',
    paradigms: ['関数型', '遅延評価'],
    officialUrl: 'https://www.haskell.org/',
    notes: '純粋関数型言語'
  },
  {
    id: 'dart',
    name: 'Dart',
    birthYear: 2011,
    latestVersion: '3.11',
    extensions: ['.dart'],
    type: 'コンパイル（AOT/JIT）',
    paradigms: ['オブジェクト指向', '関数型'],
    officialUrl: 'https://dart.dev/',
    notes: 'Flutterの主要言語'
  },
  {
    id: 'cobol',
    name: 'COBOL',
    birthYear: 1959,
    latestVersion: '2014',
    extensions: ['.cob', '.cbl'],
    type: 'コンパイル',
    paradigms: ['手続き型', 'オブジェクト指向'],
    officialUrl: '',
    notes: 'ビジネス・金融向け'
  },
  {
    id: 'lisp',
    name: 'Lisp',
    birthYear: 1958,
    latestVersion: '2.4',
    extensions: ['.lisp', '.lsp'],
    type: 'インタプリタ',
    paradigms: ['関数型', 'マクロ'],
    officialUrl: 'https://lisp-lang.org/',
    notes: '関数型言語の祖先'
  }
]
