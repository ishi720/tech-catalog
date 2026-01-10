import type { Library } from '~/types'

export const swiftLibraries: Library[] = [
  // フレームワーク
  { id: 'swift-vapor', name: 'Vapor', category: 'framework', language: 'swift', description: 'Swift製Webフレームワーク', packageName: 'vapor/vapor', officialUrl: 'https://vapor.codes/', features: ['非同期', 'Fluent ORM', 'テンプレート', 'WebSocket'] },
  { id: 'swift-kitura', name: 'Kitura', category: 'framework', language: 'swift', description: 'IBM製Webフレームワーク', packageName: 'Kitura/Kitura', officialUrl: 'https://www.kitura.dev/', features: ['エンタープライズ', 'OpenAPI', 'ミドルウェア'] },
  { id: 'swift-perfect', name: 'Perfect', category: 'framework', language: 'swift', description: 'フルスタックWebフレームワーク', packageName: 'PerfectlySoft/Perfect', officialUrl: 'https://perfect.org/', features: ['フルスタック', 'ORM', 'WebSocket', 'SSL'] },
  { id: 'swift-hummingbird', name: 'Hummingbird', category: 'framework', language: 'swift', description: '軽量Webフレームワーク', packageName: 'hummingbird-project/hummingbird', github: 'https://github.com/hummingbird-project/hummingbird', features: ['軽量', 'Swift Concurrency', 'モジュラー'] },
  { id: 'swift-smoke', name: 'Smoke Framework', category: 'framework', language: 'swift', description: 'Amazon製サーバーレスフレームワーク', packageName: 'amzn/smoke-framework', github: 'https://github.com/amzn/smoke-framework', features: ['サーバーレス', 'AWS', 'OpenAPI'] },
  { id: 'swift-swiftnio', name: 'SwiftNIO', category: 'framework', language: 'swift', description: 'Apple製ノンブロッキングI/Oフレームワーク', packageName: 'apple/swift-nio', github: 'https://github.com/apple/swift-nio', features: ['ノンブロッキング', 'イベント駆動', 'プロトコル実装', 'Netty風'] },

  // テスト関連
  { id: 'swift-quick', name: 'Quick', category: 'testing', language: 'swift', description: 'BDDテストフレームワーク', packageName: 'Quick/Quick', github: 'https://github.com/Quick/Quick', features: ['BDD', 'describe/it', 'RSpec風', '非同期テスト'] },
  { id: 'swift-nimble', name: 'Nimble', category: 'testing', language: 'swift', description: 'マッチャーフレームワーク', packageName: 'Quick/Nimble', github: 'https://github.com/Quick/Nimble', features: ['マッチャー', '流暢API', '非同期', 'カスタムマッチャー'] },
  { id: 'swift-xctest', name: 'XCTest', category: 'testing', language: 'swift', description: 'Apple公式テストフレームワーク', officialUrl: 'https://developer.apple.com/documentation/xctest', features: ['公式', 'ユニットテスト', 'UIテスト', 'パフォーマンステスト'] },
  { id: 'swift-swiftcheck', name: 'SwiftCheck', category: 'testing', language: 'swift', description: 'プロパティベーステスト', packageName: 'typelift/SwiftCheck', github: 'https://github.com/typelift/SwiftCheck', features: ['プロパティテスト', 'QuickCheck風', 'ジェネレータ'] },
  { id: 'swift-snapshot', name: 'SnapshotTesting', category: 'testing', language: 'swift', description: 'Point-Free製スナップショットテスト', packageName: 'pointfreeco/swift-snapshot-testing', github: 'https://github.com/pointfreeco/swift-snapshot-testing', features: ['スナップショット', '多形式', 'カスタム戦略'] },
  { id: 'swift-cuckoo', name: 'Cuckoo', category: 'testing', language: 'swift', description: 'モックフレームワーク', packageName: 'Brightify/Cuckoo', github: 'https://github.com/Brightify/Cuckoo', features: ['モック', 'スタブ', 'コード生成', '検証'] },
  { id: 'swift-mockingbird', name: 'Mockingbird', category: 'testing', language: 'swift', description: 'モック生成ライブラリ', packageName: 'birdrides/mockingbird', github: 'https://github.com/birdrides/mockingbird', features: ['モック生成', 'プロトコル', 'クラス', 'Swift Concurrency'] },

  // スクレイピング・パーサー
  { id: 'swift-swiftsoup', name: 'SwiftSoup', category: 'scraping', language: 'swift', description: 'HTML/XMLパーサー（Jsoup移植）', packageName: 'scinfu/SwiftSoup', github: 'https://github.com/scinfu/SwiftSoup', features: ['HTMLパース', 'CSSセレクタ', 'DOM操作', 'Jsoup互換'] },
  { id: 'swift-kanna', name: 'Kanna', category: 'scraping', language: 'swift', description: 'HTML/XMLパーサー', packageName: 'tid-kijyun/Kanna', github: 'https://github.com/tid-kijyun/Kanna', features: ['XPath', 'CSSセレクタ', 'libxml2', '高速'] },
  { id: 'swift-fuzi', name: 'Fuzi', category: 'scraping', language: 'swift', description: '高速XML/HTMLパーサー', packageName: 'cezheng/Fuzi', github: 'https://github.com/cezheng/Fuzi', features: ['XPath', 'CSSセレクタ', 'libxml2', 'Swifty API'] },

  // AI・機械学習
  { id: 'swift-coreml', name: 'Core ML', category: 'ai', language: 'swift', description: 'Apple公式MLフレームワーク', officialUrl: 'https://developer.apple.com/documentation/coreml', features: ['オンデバイス', 'モデル変換', 'Vision連携', '高速推論'] },
  { id: 'swift-createml', name: 'Create ML', category: 'ai', language: 'swift', description: 'Apple公式ML学習フレームワーク', officialUrl: 'https://developer.apple.com/documentation/createml', features: ['学習', 'GUI', 'Swift Playgrounds', 'Core ML出力'] },
  { id: 'swift-tensorflow', name: 'Swift for TensorFlow', category: 'ai', language: 'swift', description: 'TensorFlowのSwift実装（アーカイブ）', github: 'https://github.com/tensorflow/swift', features: ['自動微分', 'Tensor', 'Python連携'] },
  { id: 'swift-mlx', name: 'MLX Swift', category: 'ai', language: 'swift', description: 'Apple Silicon向けMLフレームワーク', packageName: 'ml-explore/mlx-swift', github: 'https://github.com/ml-explore/mlx-swift', features: ['Apple Silicon', 'GPU', 'NumPy風', 'LLM'] },
  { id: 'swift-naturallanguage', name: 'NaturalLanguage', category: 'ai', language: 'swift', description: 'Apple公式NLPフレームワーク', officialUrl: 'https://developer.apple.com/documentation/naturallanguage', features: ['NLP', '言語検出', '形態素解析', '感情分析'] },

  // DB操作関連
  { id: 'swift-fluent', name: 'Fluent', category: 'database', language: 'swift', description: 'Vapor用ORM', packageName: 'vapor/fluent', github: 'https://github.com/vapor/fluent', features: ['ORM', 'マイグレーション', '複数DB', 'リレーション'] },
  { id: 'swift-grdb', name: 'GRDB.swift', category: 'database', language: 'swift', description: 'SQLiteツールキット', packageName: 'groue/GRDB.swift', github: 'https://github.com/groue/GRDB.swift', features: ['SQLite', 'タイプセーフ', 'マイグレーション', 'Combine'] },
  { id: 'swift-realm', name: 'Realm Swift', category: 'database', language: 'swift', description: 'モバイルデータベース', packageName: 'realm/realm-swift', officialUrl: 'https://realm.io/', features: ['モバイルDB', 'リアルタイム同期', 'オフライン', 'SwiftUI'] },
  { id: 'swift-coredata', name: 'Core Data', category: 'database', language: 'swift', description: 'Apple公式永続化フレームワーク', officialUrl: 'https://developer.apple.com/documentation/coredata', features: ['公式', 'オブジェクトグラフ', 'CloudKit連携', 'マイグレーション'] },
  { id: 'swift-sqlite', name: 'SQLite.swift', category: 'database', language: 'swift', description: 'タイプセーフSQLite', packageName: 'stephencelis/SQLite.swift', github: 'https://github.com/stephencelis/SQLite.swift', features: ['タイプセーフ', 'SQLite', '軽量', 'Swift風'] },
  { id: 'swift-swiftdata', name: 'SwiftData', category: 'database', language: 'swift', description: 'Apple公式データ永続化（iOS 17+）', officialUrl: 'https://developer.apple.com/documentation/swiftdata', features: ['公式', 'SwiftUI連携', 'マクロ', 'CloudKit'] },

  // HTTP通信
  { id: 'swift-alamofire', name: 'Alamofire', category: 'http', language: 'swift', description: 'HTTP通信ライブラリ定番', packageName: 'Alamofire/Alamofire', github: 'https://github.com/Alamofire/Alamofire', features: ['HTTPクライアント', 'チェーン', 'マルチパート', 'Combine'] },
  { id: 'swift-moya', name: 'Moya', category: 'http', language: 'swift', description: 'Alamofire抽象化レイヤー', packageName: 'Moya/Moya', github: 'https://github.com/Moya/Moya', features: ['抽象化', 'スタブ', 'RxSwift', 'Combine'] },
  { id: 'swift-urlsession', name: 'URLSession', category: 'http', language: 'swift', description: 'Apple公式HTTP API', officialUrl: 'https://developer.apple.com/documentation/foundation/urlsession', features: ['公式', 'async/await', 'バックグラウンド', 'WebSocket'] },
  { id: 'swift-async-http', name: 'AsyncHTTPClient', category: 'http', language: 'swift', description: 'SwiftNIO製HTTPクライアント', packageName: 'swift-server/async-http-client', github: 'https://github.com/swift-server/async-http-client', features: ['非同期', 'SwiftNIO', 'HTTP/2', 'サーバーサイド'] },
  { id: 'swift-get', name: 'Get', category: 'http', language: 'swift', description: 'モダンHTTPクライアント', packageName: 'kean/Get', github: 'https://github.com/kean/Get', features: ['async/await', 'シンプル', 'Codable', 'マクロ'] },

  // 認証・認可
  { id: 'swift-keychain', name: 'KeychainAccess', category: 'auth', language: 'swift', description: 'Keychainラッパー', packageName: 'kishikawakatsumi/KeychainAccess', github: 'https://github.com/kishikawakatsumi/KeychainAccess', features: ['Keychain', 'シンプルAPI', 'iCloud同期', 'Touch ID'] },
  { id: 'swift-jwt', name: 'Swift-JWT', category: 'auth', language: 'swift', description: 'IBM製JWTライブラリ', packageName: 'Kitura/Swift-JWT', github: 'https://github.com/Kitura/Swift-JWT', features: ['JWT', 'エンコード/デコード', '署名検証'] },
  { id: 'swift-authenticationservices', name: 'AuthenticationServices', category: 'auth', language: 'swift', description: 'Apple公式認証フレームワーク', officialUrl: 'https://developer.apple.com/documentation/authenticationservices', features: ['Sign in with Apple', 'パスキー', 'Web認証'] },
  { id: 'swift-oauthswift', name: 'OAuthSwift', category: 'auth', language: 'swift', description: 'OAuth 1.0/2.0ライブラリ', packageName: 'OAuthSwift/OAuthSwift', github: 'https://github.com/OAuthSwift/OAuthSwift', features: ['OAuth 1.0', 'OAuth 2.0', '多サービス対応'] },
  { id: 'swift-appauth', name: 'AppAuth', category: 'auth', language: 'swift', description: 'OpenID Foundation製認証', packageName: 'openid/AppAuth-iOS', github: 'https://github.com/openid/AppAuth-iOS', features: ['OAuth 2.0', 'OpenID Connect', 'PKCE'] },

  // バリデーション
  { id: 'swift-validator', name: 'Validator', category: 'validation', language: 'swift', description: '入力バリデーションライブラリ', packageName: 'adamwaite/Validator', github: 'https://github.com/adamwaite/Validator', features: ['ルールベース', 'UIKit連携', 'チェーン'] },
  { id: 'swift-validatekit', name: 'ValidatedPropertyKit', category: 'validation', language: 'swift', description: 'プロパティラッパーバリデーション', packageName: 'SvenTiigi/ValidatedPropertyKit', github: 'https://github.com/SvenTiigi/ValidatedPropertyKit', features: ['プロパティラッパー', '宣言的', 'Combine'] },

  // 日付・時間
  { id: 'swift-swiftdate', name: 'SwiftDate', category: 'date', language: 'swift', description: '日付操作ライブラリ', packageName: 'malcommac/SwiftDate', github: 'https://github.com/malcommac/SwiftDate', features: ['日付操作', 'タイムゾーン', 'フォーマット', '相対表現'] },
  { id: 'swift-time', name: 'Time', category: 'date', language: 'swift', description: 'タイプセーフ時間ライブラリ', packageName: 'davedelong/time', github: 'https://github.com/davedelong/time', features: ['タイプセーフ', 'カレンダー', '単位変換'] },
  { id: 'swift-chronology', name: 'Chronology', category: 'date', language: 'swift', description: '日付時間ライブラリ', packageName: 'davedelong/chronology', github: 'https://github.com/davedelong/chronology', features: ['日付', '時間', 'カレンダー操作'] },

  // ファイル操作
  { id: 'swift-files', name: 'Files', category: 'file', language: 'swift', description: 'ファイルシステムAPI', packageName: 'JohnSundell/Files', github: 'https://github.com/JohnSundell/Files', features: ['ファイル操作', 'Swifty API', 'タイプセーフ'] },
  { id: 'swift-zipfoundation', name: 'ZIPFoundation', category: 'file', language: 'swift', description: 'ZIP圧縮/解凍ライブラリ', packageName: 'weichsel/ZIPFoundation', github: 'https://github.com/weichsel/ZIPFoundation', features: ['ZIP', '圧縮', '解凍', 'ストリーミング'] },
  { id: 'swift-pathkit', name: 'PathKit', category: 'file', language: 'swift', description: 'ファイルパス操作', packageName: 'kylef/PathKit', github: 'https://github.com/kylef/PathKit', features: ['パス操作', 'オペレータ', 'シンプル'] },

  // ログ・監視
  { id: 'swift-cocoalumberjack', name: 'CocoaLumberjack', category: 'logging', language: 'swift', description: '高速ロギングフレームワーク', packageName: 'CocoaLumberjack/CocoaLumberjack', github: 'https://github.com/CocoaLumberjack/CocoaLumberjack', features: ['高速', '複数出力', 'ログレベル', 'ファイル出力'] },
  { id: 'swift-swiftlog', name: 'swift-log', category: 'logging', language: 'swift', description: 'Apple公式ロギングAPI', packageName: 'apple/swift-log', github: 'https://github.com/apple/swift-log', features: ['公式', 'サーバーサイド', 'プラガブル', '構造化'] },
  { id: 'swift-oslog', name: 'OSLog', category: 'logging', language: 'swift', description: 'Apple統合ロギングシステム', officialUrl: 'https://developer.apple.com/documentation/os/logging', features: ['公式', 'Unified Logging', 'プライバシー', 'パフォーマンス'] },
  { id: 'swift-willow', name: 'Willow', category: 'logging', language: 'swift', description: 'Nike製ロギングライブラリ', packageName: 'Nike-Inc/Willow', github: 'https://github.com/Nike-Inc/Willow', features: ['モジュラー', 'マルチスレッド', 'カスタマイズ'] },

  // UI
  { id: 'swift-swiftui', name: 'SwiftUI', category: 'ui', language: 'swift', description: 'Apple公式宣言的UIフレームワーク', officialUrl: 'https://developer.apple.com/xcode/swiftui/', features: ['宣言的', 'マルチプラットフォーム', 'プレビュー', 'アニメーション'] },
  { id: 'swift-snapkit', name: 'SnapKit', category: 'ui', language: 'swift', description: 'Auto Layout DSL', packageName: 'SnapKit/SnapKit', github: 'https://github.com/SnapKit/SnapKit', features: ['Auto Layout', 'DSL', 'チェーン', 'UIKit'] },
  { id: 'swift-hero', name: 'Hero', category: 'ui', language: 'swift', description: '画面遷移アニメーション', packageName: 'HeroTransitions/Hero', github: 'https://github.com/HeroTransitions/Hero', features: ['トランジション', 'アニメーション', '宣言的'] },
  { id: 'swift-lottie', name: 'Lottie', category: 'ui', language: 'swift', description: 'Airbnb製アニメーションライブラリ', packageName: 'airbnb/lottie-ios', github: 'https://github.com/airbnb/lottie-ios', features: ['After Effects', 'JSON', 'ベクターアニメーション'] },
  { id: 'swift-kingfisher', name: 'Kingfisher', category: 'ui', language: 'swift', description: '画像ダウンロード＆キャッシュ', packageName: 'onevcat/Kingfisher', github: 'https://github.com/onevcat/Kingfisher', features: ['画像キャッシュ', '非同期', 'SwiftUI', 'プレースホルダー'] },
  { id: 'swift-sdwebimage', name: 'SDWebImage', category: 'ui', language: 'swift', description: '画像ローディングライブラリ', packageName: 'SDWebImage/SDWebImage', github: 'https://github.com/SDWebImage/SDWebImage', features: ['画像キャッシュ', 'GIF', 'WebP', 'プログレッシブ'] },
  { id: 'swift-texture', name: 'Texture', category: 'ui', language: 'swift', description: 'Facebook製非同期UIフレームワーク', packageName: 'TextureGroup/Texture', github: 'https://github.com/TextureGroup/Texture', features: ['非同期レンダリング', '高パフォーマンス', 'UIKit代替'] },

  // 状態管理
  { id: 'swift-tca', name: 'The Composable Architecture', category: 'state', language: 'swift', description: 'Point-Free製状態管理', packageName: 'pointfreeco/swift-composable-architecture', github: 'https://github.com/pointfreeco/swift-composable-architecture', features: ['Reducer', 'Effect', 'テスタブル', 'SwiftUI'] },
  { id: 'swift-reswift', name: 'ReSwift', category: 'state', language: 'swift', description: 'Redux風状態管理', packageName: 'ReSwift/ReSwift', github: 'https://github.com/ReSwift/ReSwift', features: ['Redux', '単方向データフロー', 'ミドルウェア'] },
  { id: 'swift-rxswift', name: 'RxSwift', category: 'state', language: 'swift', description: 'リアクティブプログラミング', packageName: 'ReactiveX/RxSwift', github: 'https://github.com/ReactiveX/RxSwift', features: ['Observable', 'オペレータ', 'RxCocoa', 'バインディング'] },
  { id: 'swift-combine', name: 'Combine', category: 'state', language: 'swift', description: 'Apple公式リアクティブフレームワーク', officialUrl: 'https://developer.apple.com/documentation/combine', features: ['公式', 'Publisher', 'Subscriber', 'SwiftUI連携'] },
  { id: 'swift-reactiveswift', name: 'ReactiveSwift', category: 'state', language: 'swift', description: 'リアクティブライブラリ', packageName: 'ReactiveCocoa/ReactiveSwift', github: 'https://github.com/ReactiveCocoa/ReactiveSwift', features: ['Signal', 'Property', 'Action', 'Lifetime'] },

  // 国際化
  { id: 'swift-localize', name: 'Localize-Swift', category: 'i18n', language: 'swift', description: 'ローカライゼーションヘルパー', packageName: 'marmelroy/Localize-Swift', github: 'https://github.com/marmelroy/Localize-Swift', features: ['多言語', '動的切替', 'IBDesignable'] },
  { id: 'swift-babelfish', name: 'BabelFish', category: 'i18n', language: 'swift', description: '翻訳マネージャー', packageName: 'nicklockwood/BabelFish', github: 'https://github.com/nicklockwood/BabelFish', features: ['翻訳', 'Localizable.strings', '検証'] },
  { id: 'swift-swiftgen', name: 'SwiftGen', category: 'i18n', language: 'swift', description: 'リソースコード生成ツール', packageName: 'SwiftGen/SwiftGen', github: 'https://github.com/SwiftGen/SwiftGen', features: ['コード生成', 'タイプセーフ', '画像', '文字列'] },

  // リアルタイム
  { id: 'swift-starscream', name: 'Starscream', category: 'realtime', language: 'swift', description: 'WebSocketクライアント', packageName: 'daltoniam/Starscream', github: 'https://github.com/daltoniam/Starscream', features: ['WebSocket', 'RFC 6455', 'TLS', 'プロキシ'] },
  { id: 'swift-socketio', name: 'Socket.IO-Client-Swift', category: 'realtime', language: 'swift', description: 'Socket.IOクライアント', packageName: 'socketio/socket.io-client-swift', github: 'https://github.com/socketio/socket.io-client-swift', features: ['Socket.IO', 'イベント', '再接続'] },
  { id: 'swift-pusher', name: 'PusherSwift', category: 'realtime', language: 'swift', description: 'Pusherクライアント', packageName: 'pusher/pusher-websocket-swift', github: 'https://github.com/pusher/pusher-websocket-swift', features: ['Pusher', 'チャンネル', 'プレゼンス'] },

  // PDF操作
  { id: 'swift-pdfkit', name: 'PDFKit', category: 'pdf', language: 'swift', description: 'Apple公式PDFフレームワーク', officialUrl: 'https://developer.apple.com/documentation/pdfkit', features: ['公式', 'PDF表示', '編集', '検索'] },
  { id: 'swift-tppdf', name: 'TPPDF', category: 'pdf', language: 'swift', description: 'PDF生成ライブラリ', packageName: 'techprimate/TPPDF', github: 'https://github.com/techprimate/TPPDF', features: ['PDF生成', 'テーブル', '画像', '複数カラム'] },
  { id: 'swift-pdfgenerator', name: 'PDFGenerator', category: 'pdf', language: 'swift', description: 'ViewからPDF生成', packageName: 'nicklockwood/PDFGenerator', github: 'https://github.com/nicklockwood/PDFGenerator', features: ['View→PDF', 'シンプル', '複数ページ'] },

  // 画像処理
  { id: 'swift-nuke', name: 'Nuke', category: 'image', language: 'swift', description: '画像ローディングシステム', packageName: 'kean/Nuke', github: 'https://github.com/kean/Nuke', features: ['画像ロード', 'キャッシュ', 'プリフェッチ', 'SwiftUI'] },
  { id: 'swift-gpuimage', name: 'GPUImage3', category: 'image', language: 'swift', description: 'GPU画像処理', packageName: 'BradLarson/GPUImage3', github: 'https://github.com/BradLarson/GPUImage3', features: ['GPU', 'フィルタ', 'Metal', 'リアルタイム'] },
  { id: 'swift-vision', name: 'Vision', category: 'image', language: 'swift', description: 'Apple公式コンピュータビジョン', officialUrl: 'https://developer.apple.com/documentation/vision', features: ['公式', '顔検出', '文字認識', 'バーコード'] },
  { id: 'swift-accelerate', name: 'Accelerate', category: 'image', language: 'swift', description: 'Apple高性能計算フレームワーク', officialUrl: 'https://developer.apple.com/documentation/accelerate', features: ['公式', 'SIMD', 'vImage', 'DSP'] },

  // グラフ・可視化
  { id: 'swift-charts', name: 'Swift Charts', category: 'chart', language: 'swift', description: 'Apple公式チャートフレームワーク', officialUrl: 'https://developer.apple.com/documentation/charts', features: ['公式', 'SwiftUI', 'アクセシビリティ', 'アニメーション'] },
  { id: 'swift-charts-old', name: 'Charts', category: 'chart', language: 'swift', description: 'MPAndroidChart移植チャート', packageName: 'danielgindi/Charts', github: 'https://github.com/danielgindi/Charts', features: ['多種チャート', 'アニメーション', 'インタラクション'] },
  { id: 'swift-swiftcharts', name: 'SwiftCharts', category: 'chart', language: 'swift', description: 'チャートライブラリ', packageName: 'ivanschuetz/SwiftCharts', github: 'https://github.com/ivanschuetz/SwiftCharts', features: ['カスタマイズ', 'レイヤー', 'アニメーション'] },

  // CLI作成
  { id: 'swift-argument-parser', name: 'Swift Argument Parser', category: 'cli', language: 'swift', description: 'Apple公式CLIパーサー', packageName: 'apple/swift-argument-parser', github: 'https://github.com/apple/swift-argument-parser', features: ['公式', '宣言的', '自動ヘルプ', 'サブコマンド'] },
  { id: 'swift-commander', name: 'Commander', category: 'cli', language: 'swift', description: 'CLIフレームワーク', packageName: 'kylef/Commander', github: 'https://github.com/kylef/Commander', features: ['サブコマンド', 'タイプセーフ', 'シンプル'] },
  { id: 'swift-swiftline', name: 'Swiftline', category: 'cli', language: 'swift', description: 'CLI作成ヘルパー', packageName: 'nsomar/Swiftline', github: 'https://github.com/nsomar/Swiftline', features: ['インタラクティブ', 'カラー', 'プログレス'] },
  { id: 'swift-rainbow', name: 'Rainbow', category: 'cli', language: 'swift', description: 'ターミナルカラー出力', packageName: 'onevcat/Rainbow', github: 'https://github.com/onevcat/Rainbow', features: ['カラー出力', 'スタイル', 'シンプル'] },

  // ユーティリティ
  { id: 'swift-then', name: 'Then', category: 'utility', language: 'swift', description: 'オブジェクト初期化ヘルパー', packageName: 'devxoul/Then', github: 'https://github.com/devxoul/Then', features: ['初期化DSL', 'クロージャ', 'シンプル'] },
  { id: 'swift-swifterswift', name: 'SwifterSwift', category: 'utility', language: 'swift', description: '500+拡張コレクション', packageName: 'SwifterSwift/SwifterSwift', github: 'https://github.com/SwifterSwift/SwifterSwift', features: ['拡張', '多機能', 'ドキュメント'] },
  { id: 'swift-dollar', name: 'Dollar', category: 'utility', language: 'swift', description: '関数型ヘルパー', packageName: 'ankurp/Dollar', github: 'https://github.com/ankurp/Dollar', features: ['関数型', 'Lodash風', '配列操作'] },
  { id: 'swift-async-algorithms', name: 'Swift Async Algorithms', category: 'utility', language: 'swift', description: 'Apple公式非同期アルゴリズム', packageName: 'apple/swift-async-algorithms', github: 'https://github.com/apple/swift-async-algorithms', features: ['AsyncSequence', 'merge', 'zip', 'throttle'] },
  { id: 'swift-collections', name: 'Swift Collections', category: 'utility', language: 'swift', description: 'Apple公式コレクション拡張', packageName: 'apple/swift-collections', github: 'https://github.com/apple/swift-collections', features: ['Deque', 'OrderedSet', 'OrderedDictionary'] },
  { id: 'swift-algorithms', name: 'Swift Algorithms', category: 'utility', language: 'swift', description: 'Apple公式アルゴリズム', packageName: 'apple/swift-algorithms', github: 'https://github.com/apple/swift-algorithms', features: ['chunks', 'combinations', 'permutations', 'windows'] },
  { id: 'swift-identified-collections', name: 'Identified Collections', category: 'utility', language: 'swift', description: 'Point-Free製識別コレクション', packageName: 'pointfreeco/swift-identified-collections', github: 'https://github.com/pointfreeco/swift-identified-collections', features: ['IdentifiedArray', 'Identifiable', 'SwiftUI最適化'] },
  { id: 'swift-dependencies', name: 'Swift Dependencies', category: 'utility', language: 'swift', description: 'Point-Free製DI', packageName: 'pointfreeco/swift-dependencies', github: 'https://github.com/pointfreeco/swift-dependencies', features: ['DI', 'テスト', 'プレビュー', 'マクロ'] },

  // CMS・静的サイト
  { id: 'swift-publish', name: 'Publish', category: 'cms', language: 'swift', description: 'Swift製静的サイトジェネレータ', packageName: 'JohnSundell/Publish', github: 'https://github.com/JohnSundell/Publish', features: ['静的サイト', 'DSL', 'プラグイン', 'Markdown'] },
  { id: 'swift-ink', name: 'Ink', category: 'cms', language: 'swift', description: 'Markdownパーサー', packageName: 'JohnSundell/Ink', github: 'https://github.com/JohnSundell/Ink', features: ['Markdown', '高速', 'カスタマイズ', 'Publish連携'] },
  { id: 'swift-ignite', name: 'Ignite', category: 'cms', language: 'swift', description: 'SwiftUI風静的サイト生成', packageName: 'twostraws/Ignite', github: 'https://github.com/twostraws/Ignite', features: ['SwiftUI風', '静的サイト', 'コンポーネント'] },
]
