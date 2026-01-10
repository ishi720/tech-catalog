import type { Library } from '~/types'

export const haskellLibraries: Library[] = [
  // フレームワーク
  { id: 'hs-yesod', name: 'Yesod', category: 'framework', language: 'haskell', description: 'フルスタックWebフレームワーク。型安全', packageName: 'yesod', officialUrl: 'https://www.yesodweb.com/', features: ['型安全', 'テンプレート', 'ルーティング', 'Persistent'] },
  { id: 'hs-servant', name: 'Servant', category: 'framework', language: 'haskell', description: '型レベルAPIフレームワーク', packageName: 'servant', officialUrl: 'https://docs.servant.dev/', features: ['型レベルAPI', 'クライアント生成', 'OpenAPI', 'コンビネータ'] },
  { id: 'hs-scotty', name: 'Scotty', category: 'framework', language: 'haskell', description: 'Sinatra風軽量Webフレームワーク', packageName: 'scotty', github: 'https://github.com/scotty-web/scotty', features: ['軽量', 'シンプル', 'Sinatra風', 'WAI'] },
  { id: 'hs-spock', name: 'Spock', category: 'framework', language: 'haskell', description: '軽量で型安全なWebフレームワーク', packageName: 'Spock', officialUrl: 'https://www.spock.li/', features: ['型安全', 'セッション', 'ルーティング', 'ミドルウェア'] },
  { id: 'hs-ihp', name: 'IHP', category: 'framework', language: 'haskell', description: 'Rails風フルスタックHaskellフレームワーク', packageName: 'ihp', officialUrl: 'https://ihp.digitallyinduced.com/', features: ['Rails風', 'ホットリロード', 'コード生成', 'PostgreSQL'] },
  { id: 'hs-snap', name: 'Snap', category: 'framework', language: 'haskell', description: 'Webフレームワーク＋サーバー', packageName: 'snap', officialUrl: 'http://snapframework.com/', features: ['高速', 'Snaplets', 'Heist', 'セッション'] },

  // テスト関連
  { id: 'hs-hspec', name: 'HSpec', category: 'testing', language: 'haskell', description: 'BDDスタイルテストフレームワーク', packageName: 'hspec', officialUrl: 'https://hspec.github.io/', features: ['BDD', 'describe/it', '自動探索', 'QuickCheck連携'] },
  { id: 'hs-quickcheck', name: 'QuickCheck', category: 'testing', language: 'haskell', description: 'プロパティベーステスト', packageName: 'QuickCheck', officialUrl: 'http://hackage.haskell.org/package/QuickCheck', features: ['プロパティテスト', 'ランダム生成', 'シュリンク', '先駆的'] },
  { id: 'hs-tasty', name: 'Tasty', category: 'testing', language: 'haskell', description: 'モダンテストフレームワーク', packageName: 'tasty', github: 'https://github.com/UnkindPartition/tasty', features: ['統合テスト', 'プロバイダ', '並列実行', 'レポート'] },
  { id: 'hs-hunit', name: 'HUnit', category: 'testing', language: 'haskell', description: 'ユニットテストライブラリ', packageName: 'HUnit', officialUrl: 'http://hackage.haskell.org/package/HUnit', features: ['ユニットテスト', 'アサーション', 'JUnit風'] },
  { id: 'hs-hedgehog', name: 'Hedgehog', category: 'testing', language: 'haskell', description: '次世代プロパティテスト', packageName: 'hedgehog', github: 'https://github.com/hedgehogqa/haskell-hedgehog', features: ['プロパティテスト', '統合シュリンク', 'State Machine', 'カバレッジ'] },

  // パーサー・スクレイピング
  { id: 'hs-parsec', name: 'Parsec', category: 'scraping', language: 'haskell', description: 'パーサーコンビネータライブラリ', packageName: 'parsec', officialUrl: 'http://hackage.haskell.org/package/parsec', features: ['パーサーコンビネータ', 'モナディック', 'エラーメッセージ'] },
  { id: 'hs-megaparsec', name: 'Megaparsec', category: 'scraping', language: 'haskell', description: 'Parsec後継。高機能パーサー', packageName: 'megaparsec', officialUrl: 'https://megaparsec.readthedocs.io/', features: ['パーサーコンビネータ', '高速', 'エラー改善', 'Text/ByteString'] },
  { id: 'hs-attoparsec', name: 'Attoparsec', category: 'scraping', language: 'haskell', description: '高速パーサーコンビネータ', packageName: 'attoparsec', github: 'https://github.com/haskell/attoparsec', features: ['高速', 'バイナリ', 'インクリメンタル', 'ByteString'] },
  { id: 'hs-scalpel', name: 'Scalpel', category: 'scraping', language: 'haskell', description: 'HTMLスクレイピングライブラリ', packageName: 'scalpel', github: 'https://github.com/fimad/scalpel', features: ['HTMLスクレイピング', 'CSSセレクタ', 'コンビネータ'] },
  { id: 'hs-tagsoup', name: 'TagSoup', category: 'scraping', language: 'haskell', description: 'HTML/XMLパーサー', packageName: 'tagsoup', officialUrl: 'http://hackage.haskell.org/package/tagsoup', features: ['HTMLパース', '寛容', 'タグベース'] },

  // AI・機械学習
  { id: 'hs-hmatrix', name: 'HMatrix', category: 'ai', language: 'haskell', description: '数値線形代数ライブラリ', packageName: 'hmatrix', github: 'https://github.com/haskell-numerics/hmatrix', features: ['行列演算', 'BLAS/LAPACK', 'NumPy風'] },
  { id: 'hs-grenade', name: 'Grenade', category: 'ai', language: 'haskell', description: '型安全ニューラルネットワーク', packageName: 'grenade', github: 'https://github.com/HuwCampbell/grenade', features: ['型安全', 'ニューラルネット', '静的検証'] },
  { id: 'hs-hasktorch', name: 'HaskTorch', category: 'ai', language: 'haskell', description: 'PyTorchのHaskellバインディング', packageName: 'hasktorch', github: 'https://github.com/hasktorch/hasktorch', features: ['PyTorchバインディング', 'Tensor', '自動微分'] },

  // DB操作関連
  { id: 'hs-persistent', name: 'Persistent', category: 'database', language: 'haskell', description: '型安全ORM', packageName: 'persistent', officialUrl: 'https://www.yesodweb.com/book/persistent', features: ['型安全', 'マイグレーション', '複数DB', 'Esqueleto連携'] },
  { id: 'hs-esqueleto', name: 'Esqueleto', category: 'database', language: 'haskell', description: 'Persistent用型安全SQLライブラリ', packageName: 'esqueleto', github: 'https://github.com/bitemyapp/esqueleto', features: ['型安全SQL', 'JOIN', 'サブクエリ', 'Persistent連携'] },
  { id: 'hs-beam', name: 'Beam', category: 'database', language: 'haskell', description: '型安全データベースライブラリ', packageName: 'beam-core', github: 'https://github.com/haskell-beam/beam', features: ['型安全', '複数DB', 'マイグレーション', 'SQL生成'] },
  { id: 'hs-opaleye', name: 'Opaleye', category: 'database', language: 'haskell', description: 'PostgreSQL用型安全クエリビルダー', packageName: 'opaleye', github: 'https://github.com/tomjaguarpaw/haskell-opaleye', features: ['型安全', 'PostgreSQL', 'コンポーザブル'] },
  { id: 'hs-hasql', name: 'Hasql', category: 'database', language: 'haskell', description: '高効率PostgreSQLライブラリ', packageName: 'hasql', github: 'https://github.com/nikita-volkov/hasql', features: ['高速', 'PostgreSQL', 'プリペアドステートメント', '接続プール'] },
  { id: 'hs-postgresql-simple', name: 'postgresql-simple', category: 'database', language: 'haskell', description: 'PostgreSQLシンプルアクセス', packageName: 'postgresql-simple', github: 'https://github.com/haskellari/postgresql-simple', features: ['シンプル', 'PostgreSQL', 'クエリ', 'トランザクション'] },

  // HTTP通信
  { id: 'hs-http-client', name: 'http-client', category: 'http', language: 'haskell', description: 'HTTPクライアントライブラリ', packageName: 'http-client', github: 'https://github.com/snoyberg/http-client', features: ['HTTPクライアント', 'コネクションプール', 'TLS対応'] },
  { id: 'hs-wreq', name: 'Wreq', category: 'http', language: 'haskell', description: '使いやすいHTTPクライアント', packageName: 'wreq', officialUrl: 'http://www.serpentine.com/wreq/', features: ['簡単API', 'レンズ', 'JSON', 'セッション'] },
  { id: 'hs-req', name: 'Req', category: 'http', language: 'haskell', description: 'シンプルHTTPクライアント', packageName: 'req', github: 'https://github.com/mrkkrp/req', features: ['型安全', 'シンプル', 'モダン'] },

  // 認証・認可
  { id: 'hs-jose', name: 'jose', category: 'auth', language: 'haskell', description: 'JOSE (JWT/JWS/JWE) ライブラリ', packageName: 'jose', github: 'https://github.com/frasertweedale/hs-jose', features: ['JWT', 'JWS', 'JWE', '暗号化'] },
  { id: 'hs-yesod-auth', name: 'yesod-auth', category: 'auth', language: 'haskell', description: 'Yesod認証プラグイン', packageName: 'yesod-auth', officialUrl: 'https://www.yesodweb.com/book/authentication-and-authorization', features: ['認証', 'OAuth', 'OpenID', 'プラガブル'] },

  // バリデーション
  { id: 'hs-digestive-functors', name: 'digestive-functors', category: 'validation', language: 'haskell', description: 'フォームバリデーション', packageName: 'digestive-functors', github: 'https://github.com/jaspervdj/digestive-functors', features: ['フォーム', 'バリデーション', 'コンポーザブル', 'Web連携'] },
  { id: 'hs-validity', name: 'validity', category: 'validation', language: 'haskell', description: '型レベルバリデーション', packageName: 'validity', github: 'https://github.com/NorfairKing/validity', features: ['型クラス', '自動テスト', 'genvalidity'] },

  // 日付・時間
  { id: 'hs-time', name: 'time', category: 'date', language: 'haskell', description: '標準日付時間ライブラリ', packageName: 'time', officialUrl: 'http://hackage.haskell.org/package/time', features: ['日付', '時間', 'タイムゾーン', 'フォーマット'] },
  { id: 'hs-thyme', name: 'thyme', category: 'date', language: 'haskell', description: '高速日付時間ライブラリ', packageName: 'thyme', github: 'https://github.com/liyang/thyme', features: ['高速', 'レンズ', 'time互換'] },
  { id: 'hs-chronos', name: 'chronos', category: 'date', language: 'haskell', description: '高性能日付時間ライブラリ', packageName: 'chronos', github: 'https://github.com/byorgey/chronos', features: ['高性能', 'パース', 'フォーマット'] },

  // ファイル操作
  { id: 'hs-directory', name: 'directory', category: 'file', language: 'haskell', description: 'ファイルシステム操作', packageName: 'directory', officialUrl: 'http://hackage.haskell.org/package/directory', features: ['ディレクトリ操作', 'パス', '標準'] },
  { id: 'hs-filepath', name: 'filepath', category: 'file', language: 'haskell', description: 'ファイルパス操作', packageName: 'filepath', officialUrl: 'http://hackage.haskell.org/package/filepath', features: ['パス操作', 'クロスプラットフォーム', '標準'] },
  { id: 'hs-conduit', name: 'Conduit', category: 'file', language: 'haskell', description: 'ストリーミングデータ処理', packageName: 'conduit', officialUrl: 'https://github.com/snoyberg/conduit', features: ['ストリーミング', 'リソース安全', 'コンポーザブル'] },
  { id: 'hs-pipes', name: 'Pipes', category: 'file', language: 'haskell', description: 'ストリーミングライブラリ', packageName: 'pipes', officialUrl: 'https://hackage.haskell.org/package/pipes', features: ['ストリーミング', 'コンポーザブル', 'エフェクト'] },

  // ログ・監視
  { id: 'hs-katip', name: 'Katip', category: 'logging', language: 'haskell', description: '構造化ロギングライブラリ', packageName: 'katip', github: 'https://github.com/Soostone/katip', features: ['構造化ログ', 'コンテキスト', 'スクライブ', 'モナド'] },
  { id: 'hs-monad-logger', name: 'monad-logger', category: 'logging', language: 'haskell', description: 'モナドベースロギング', packageName: 'monad-logger', github: 'https://github.com/snoyberg/monad-logger', features: ['モナド', 'ロギング', 'テンプレート', 'Yesod連携'] },
  { id: 'hs-fast-logger', name: 'fast-logger', category: 'logging', language: 'haskell', description: '高速ロガー', packageName: 'fast-logger', github: 'https://github.com/kazu-yamamoto/logger', features: ['高速', 'バッファリング', 'シンプル'] },

  // グラフ・可視化
  { id: 'hs-chart', name: 'Chart', category: 'chart', language: 'haskell', description: '2Dチャートライブラリ', packageName: 'Chart', github: 'https://github.com/timbod7/haskell-chart', features: ['2Dチャート', '多形式出力', 'カスタマイズ'] },
  { id: 'hs-diagrams', name: 'Diagrams', category: 'chart', language: 'haskell', description: '宣言的ベクター図形ライブラリ', packageName: 'diagrams', officialUrl: 'https://diagrams.github.io/', features: ['ベクター', '宣言的', 'コンポーザブル', '多バックエンド'] },
  { id: 'hs-gnuplot', name: 'gnuplot', category: 'chart', language: 'haskell', description: 'Gnuplotバインディング', packageName: 'gnuplot', officialUrl: 'http://hackage.haskell.org/package/gnuplot', features: ['Gnuplotラッパー', 'プロット', 'シンプル'] },

  // CLI作成
  { id: 'hs-optparse', name: 'optparse-applicative', category: 'cli', language: 'haskell', description: 'CLIパーサー（定番）', packageName: 'optparse-applicative', github: 'https://github.com/pcapriotti/optparse-applicative', features: ['コマンドライン', 'Applicative', 'ヘルプ生成', 'サブコマンド'] },
  { id: 'hs-cmdargs', name: 'cmdargs', category: 'cli', language: 'haskell', description: 'コマンドライン引数処理', packageName: 'cmdargs', officialUrl: 'http://hackage.haskell.org/package/cmdargs', features: ['コマンドライン', '複数モード', '自動ヘルプ'] },
  { id: 'hs-turtle', name: 'Turtle', category: 'cli', language: 'haskell', description: 'シェルスクリプティング', packageName: 'turtle', github: 'https://github.com/Gabriella439/turtle', features: ['シェルスクリプト', 'ストリーミング', 'パターンマッチ'] },
  { id: 'hs-brick', name: 'Brick', category: 'cli', language: 'haskell', description: '宣言的TUIライブラリ', packageName: 'brick', github: 'https://github.com/jtdaugherty/brick', features: ['TUI', '宣言的', 'ウィジェット', 'イベント駆動'] },

  // PDF操作
  { id: 'hs-pdf-toolbox', name: 'pdf-toolbox', category: 'pdf', language: 'haskell', description: 'PDF処理ツールボックス', packageName: 'pdf-toolbox', github: 'https://github.com/Yuras/pdf-toolbox', features: ['PDF解析', '生成', '操作'] },
  { id: 'hs-pandoc', name: 'Pandoc', category: 'pdf', language: 'haskell', description: 'ドキュメント変換ツール', packageName: 'pandoc', officialUrl: 'https://pandoc.org/', features: ['ドキュメント変換', '多形式', 'Markdown', 'PDF生成'] },

  // 画像処理
  { id: 'hs-juicypixels', name: 'JuicyPixels', category: 'image', language: 'haskell', description: '画像読み書きライブラリ', packageName: 'JuicyPixels', github: 'https://github.com/Twinside/Juicy.Pixels', features: ['画像IO', '複数形式', 'ピクセル操作'] },
  { id: 'hs-hip', name: 'HIP', category: 'image', language: 'haskell', description: 'Haskell画像処理ライブラリ', packageName: 'hip', github: 'https://github.com/lehins/hip', features: ['画像処理', 'フィルタ', '変換', '並列'] },
  { id: 'hs-friday', name: 'friday', category: 'image', language: 'haskell', description: '画像処理フレームワーク', packageName: 'friday', github: 'https://github.com/RaphaelJ/friday', features: ['画像処理', 'SIMD最適化', 'OpenCV風'] },

  // ユーティリティ
  { id: 'hs-lens', name: 'lens', category: 'utility', language: 'haskell', description: 'レンズライブラリ（定番）', packageName: 'lens', github: 'https://github.com/ekmett/lens', features: ['レンズ', 'プリズム', 'トラバーサル', 'ゲッター/セッター'] },
  { id: 'hs-mtl', name: 'mtl', category: 'utility', language: 'haskell', description: 'モナド変換子ライブラリ', packageName: 'mtl', officialUrl: 'http://hackage.haskell.org/package/mtl', features: ['モナド変換子', 'State', 'Reader', 'Writer'] },
  { id: 'hs-aeson', name: 'Aeson', category: 'utility', language: 'haskell', description: 'JSON処理ライブラリ', packageName: 'aeson', github: 'https://github.com/haskell/aeson', features: ['JSON', 'エンコード/デコード', '高速', 'Generics'] },
  { id: 'hs-text', name: 'text', category: 'utility', language: 'haskell', description: 'Unicode文字列ライブラリ', packageName: 'text', github: 'https://github.com/haskell/text', features: ['Unicode', '効率的', 'String置き換え'] },
  { id: 'hs-bytestring', name: 'bytestring', category: 'utility', language: 'haskell', description: 'バイト列ライブラリ', packageName: 'bytestring', officialUrl: 'http://hackage.haskell.org/package/bytestring', features: ['バイト列', '高速', 'Lazy/Strict'] },
  { id: 'hs-containers', name: 'containers', category: 'utility', language: 'haskell', description: 'コンテナデータ構造', packageName: 'containers', officialUrl: 'http://hackage.haskell.org/package/containers', features: ['Map', 'Set', 'Seq', '効率的'] },
  { id: 'hs-async', name: 'async', category: 'utility', language: 'haskell', description: '非同期処理ライブラリ', packageName: 'async', github: 'https://github.com/simonmar/async', features: ['非同期', '並行', 'キャンセル', '例外処理'] },
  { id: 'hs-stm', name: 'stm', category: 'utility', language: 'haskell', description: 'ソフトウェアトランザクショナルメモリ', packageName: 'stm', officialUrl: 'http://hackage.haskell.org/package/stm', features: ['STM', 'TVar', 'TChan', '並行安全'] },
  { id: 'hs-uuid', name: 'uuid', category: 'utility', language: 'haskell', description: 'UUID生成・操作', packageName: 'uuid', officialUrl: 'http://hackage.haskell.org/package/uuid', features: ['UUID', '生成', 'パース'] },

  // リアルタイム
  { id: 'hs-websockets', name: 'websockets', category: 'realtime', language: 'haskell', description: 'WebSocketライブラリ', packageName: 'websockets', github: 'https://github.com/jaspervdj/websockets', features: ['WebSocket', 'クライアント/サーバー', 'WAI連携'] },
  { id: 'hs-warp', name: 'Warp', category: 'realtime', language: 'haskell', description: '高速Webサーバー', packageName: 'warp', github: 'https://github.com/yesodweb/wai', features: ['高速', 'HTTP/2', 'WAI', 'TLS'] },

  // CMS・静的サイト
  { id: 'hs-hakyll', name: 'Hakyll', category: 'cms', language: 'haskell', description: 'Haskell製静的サイトジェネレータ', packageName: 'hakyll', officialUrl: 'https://jaspervdj.be/hakyll/', features: ['静的サイト', 'Pandoc連携', 'DSL', 'ブログ向け'] },
  { id: 'hs-slick', name: 'Slick', category: 'cms', language: 'haskell', description: 'シンプルな静的サイトジェネレータ', packageName: 'slick', github: 'https://github.com/ChrisPenner/slick', features: ['静的サイト', 'Shake', 'Pandoc', 'シンプル'] },
]
