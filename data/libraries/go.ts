import type { Library } from '~/types'

export const goLibraries: Library[] = [
  // ==================== フレームワーク ====================
  { id: 'go-gin', name: 'Gin', category: 'framework', language: 'go', description: '高速HTTPフレームワーク', packageName: 'github.com/gin-gonic/gin', officialUrl: 'https://gin-gonic.com/', features: ['高速', 'ミドルウェア', 'JSON検証'] },
  { id: 'go-echo', name: 'Echo', category: 'framework', language: 'go', description: '高性能ミニマルフレームワーク', packageName: 'github.com/labstack/echo', officialUrl: 'https://echo.labstack.com/', features: ['高速', 'ミドルウェア', '自動TLS'] },
  { id: 'go-fiber', name: 'Fiber', category: 'framework', language: 'go', description: 'Express風高速フレームワーク', packageName: 'github.com/gofiber/fiber', officialUrl: 'https://gofiber.io/', features: ['Express風', 'fasthttp', '低メモリ'] },
  { id: 'go-chi', name: 'Chi', category: 'framework', language: 'go', description: '軽量ルーター', packageName: 'github.com/go-chi/chi', github: 'https://github.com/go-chi/chi', features: ['軽量', 'net/http互換', 'ミドルウェア'] },
  { id: 'go-gorilla-mux', name: 'Gorilla Mux', category: 'framework', language: 'go', description: 'HTTPルーター定番', packageName: 'github.com/gorilla/mux', officialUrl: 'https://gorilla.github.io/', features: ['ルーティング', '変数', 'サブルーター'] },
  { id: 'go-beego', name: 'Beego', category: 'framework', language: 'go', description: 'フルスタックフレームワーク', packageName: 'github.com/beego/beego', officialUrl: 'https://beego.wiki/', features: ['MVC', 'ORM', 'キャッシュ'] },
  { id: 'go-buffalo', name: 'Buffalo', category: 'framework', language: 'go', description: 'Rails風フルスタック', packageName: 'github.com/gobuffalo/buffalo', officialUrl: 'https://gobuffalo.io/', features: ['Rails風', 'ホットリロード', 'ジェネレータ'] },
  { id: 'go-iris', name: 'Iris', category: 'framework', language: 'go', description: '高機能Webフレームワーク', packageName: 'github.com/kataras/iris', officialUrl: 'https://www.iris-go.com/', features: ['MVC', 'WebSocket', '多機能'] },
  { id: 'go-revel', name: 'Revel', category: 'framework', language: 'go', description: 'フルスタックフレームワーク', packageName: 'github.com/revel/revel', officialUrl: 'https://revel.github.io/', features: ['フルスタック', 'ホットリロード', 'テスト'] },
  { id: 'go-kit', name: 'Go kit', category: 'framework', language: 'go', description: 'マイクロサービスツールキット', packageName: 'github.com/go-kit/kit', officialUrl: 'https://gokit.io/', features: ['マイクロサービス', 'トランスポート', 'ロギング'] },
  { id: 'go-kratos', name: 'Kratos', category: 'framework', language: 'go', description: 'クラウドネイティブフレームワーク', packageName: 'github.com/go-kratos/kratos', officialUrl: 'https://go-kratos.dev/', features: ['gRPC', 'マイクロサービス', 'Bilibili製'] },
  { id: 'go-micro', name: 'Go Micro', category: 'framework', language: 'go', description: 'マイクロサービスフレームワーク', packageName: 'go-micro.dev/v4', officialUrl: 'https://go-micro.dev/', features: ['サービスディスカバリ', 'RPC', 'イベント'] },

  // ==================== テスト ====================
  { id: 'go-testing', name: 'testing', category: 'testing', language: 'go', description: 'Go標準テストパッケージ', officialUrl: 'https://pkg.go.dev/testing', features: ['標準', 'ベンチマーク', 'サブテスト'] },
  { id: 'go-testify', name: 'Testify', category: 'testing', language: 'go', description: 'テストツールキット', packageName: 'github.com/stretchr/testify', github: 'https://github.com/stretchr/testify', features: ['アサーション', 'モック', 'スイート'] },
  { id: 'go-gomock', name: 'GoMock', category: 'testing', language: 'go', description: 'モックフレームワーク', packageName: 'go.uber.org/mock', github: 'https://github.com/uber-go/mock', features: ['モック生成', 'マッチャー', 'Uber製'] },
  { id: 'go-ginkgo', name: 'Ginkgo', category: 'testing', language: 'go', description: 'BDDテストフレームワーク', packageName: 'github.com/onsi/ginkgo', officialUrl: 'https://onsi.github.io/ginkgo/', features: ['BDD', 'Gomega', '並列'] },
  { id: 'go-goconvey', name: 'GoConvey', category: 'testing', language: 'go', description: 'BDDテスト＋Web UI', packageName: 'github.com/smartystreets/goconvey', officialUrl: 'http://goconvey.co/', features: ['BDD', 'Web UI', '自動実行'] },
  { id: 'go-httptest', name: 'httptest', category: 'testing', language: 'go', description: 'HTTPテスト標準', officialUrl: 'https://pkg.go.dev/net/http/httptest', features: ['標準', 'HTTPテスト', 'レコーダー'] },
  { id: 'go-go-cmp', name: 'go-cmp', category: 'testing', language: 'go', description: '値の比較ライブラリ', packageName: 'github.com/google/go-cmp', github: 'https://github.com/google/go-cmp', features: ['比較', 'diff', 'Google製'] },
  { id: 'go-mockery', name: 'mockery', category: 'testing', language: 'go', description: 'モック自動生成', packageName: 'github.com/vektra/mockery', github: 'https://github.com/vektra/mockery', features: ['自動生成', 'testify互換'] },
  { id: 'go-httpmock', name: 'httpmock', category: 'testing', language: 'go', description: 'HTTPモック', packageName: 'github.com/jarcoal/httpmock', github: 'https://github.com/jarcoal/httpmock', features: ['HTTPモック', 'レスポンダー'] },

  // ==================== 画像関連 ====================
  { id: 'go-image', name: 'image', category: 'image', language: 'go', description: 'Go標準画像パッケージ', officialUrl: 'https://pkg.go.dev/image', features: ['標準', 'PNG', 'JPEG', 'GIF'] },
  { id: 'go-imaging', name: 'imaging', category: 'image', language: 'go', description: '画像処理ライブラリ', packageName: 'github.com/disintegration/imaging', github: 'https://github.com/disintegration/imaging', features: ['リサイズ', 'クロップ', 'フィルタ'] },
  { id: 'go-bild', name: 'bild', category: 'image', language: 'go', description: '画像処理コレクション', packageName: 'github.com/anthonynsimon/bild', github: 'https://github.com/anthonynsimon/bild', features: ['フィルタ', 'ブレンド', 'エフェクト'] },
  { id: 'go-gg', name: 'gg', category: 'image', language: 'go', description: '2Dグラフィックス', packageName: 'github.com/fogleman/gg', github: 'https://github.com/fogleman/gg', features: ['2D描画', 'テキスト', 'ベクター'] },
  { id: 'go-imagick', name: 'imagick', category: 'image', language: 'go', description: 'ImageMagickバインディング', packageName: 'github.com/gographics/imagick', github: 'https://github.com/gographics/imagick', features: ['ImageMagick', '高機能', 'CGO'] },
  { id: 'go-webp', name: 'webp', category: 'image', language: 'go', description: 'WebPエンコード/デコード', packageName: 'github.com/chai2010/webp', github: 'https://github.com/chai2010/webp', features: ['WebP', 'エンコード', 'デコード'] },

  // ==================== スクレイピング ====================
  { id: 'go-goquery', name: 'goquery', category: 'scraping', language: 'go', description: 'jQuery風HTMLパーサー', packageName: 'github.com/PuerkitoBio/goquery', github: 'https://github.com/PuerkitoBio/goquery', features: ['jQuery風', 'CSSセレクタ', 'DOM操作'] },
  { id: 'go-colly', name: 'Colly', category: 'scraping', language: 'go', description: 'スクレイピングフレームワーク', packageName: 'github.com/gocolly/colly', officialUrl: 'http://go-colly.org/', features: ['高速', '並列', 'キャッシュ'] },
  { id: 'go-chromedp', name: 'chromedp', category: 'scraping', language: 'go', description: 'Chrome DevTools Protocol', packageName: 'github.com/chromedp/chromedp', github: 'https://github.com/chromedp/chromedp', features: ['ヘッドレス', 'CDP', 'スクリーンショット'] },
  { id: 'go-rod', name: 'Rod', category: 'scraping', language: 'go', description: '高レベルブラウザ自動化', packageName: 'github.com/go-rod/rod', officialUrl: 'https://go-rod.github.io/', features: ['DevTools', 'ステルス', '使いやすい'] },
  { id: 'go-surf', name: 'Surf', category: 'scraping', language: 'go', description: 'ブラウザライクHTTP', packageName: 'github.com/headzoo/surf', github: 'https://github.com/headzoo/surf', features: ['ブラウザ風', 'クッキー', 'フォーム'] },

  // ==================== AI/ML ====================
  { id: 'go-openai', name: 'go-openai', category: 'ai', language: 'go', description: 'OpenAI APIクライアント', packageName: 'github.com/sashabaranov/go-openai', github: 'https://github.com/sashabaranov/go-openai', features: ['GPT', 'DALL-E', 'Whisper'] },
  { id: 'go-langchaingo', name: 'LangChainGo', category: 'ai', language: 'go', description: 'LangChain Go版', packageName: 'github.com/tmc/langchaingo', github: 'https://github.com/tmc/langchaingo', features: ['LLM', 'チェーン', 'RAG'] },
  { id: 'go-ollama', name: 'ollama-go', category: 'ai', language: 'go', description: 'Ollamaクライアント', packageName: 'github.com/ollama/ollama', officialUrl: 'https://ollama.ai/', features: ['ローカルLLM', 'API'] },
  { id: 'go-golearn', name: 'GoLearn', category: 'ai', language: 'go', description: '機械学習ライブラリ', packageName: 'github.com/sjwhitworth/golearn', github: 'https://github.com/sjwhitworth/golearn', features: ['分類', '回帰', 'クラスタリング'] },
  { id: 'go-gorgonia', name: 'Gorgonia', category: 'ai', language: 'go', description: '機械学習/深層学習', packageName: 'gorgonia.org/gorgonia', officialUrl: 'https://gorgonia.org/', features: ['計算グラフ', 'ニューラルネット', 'GPU'] },
  { id: 'go-gonum', name: 'Gonum', category: 'ai', language: 'go', description: '数値計算ライブラリ', packageName: 'gonum.org/v1/gonum', officialUrl: 'https://www.gonum.org/', features: ['行列', '統計', '最適化'] },

  // ==================== DB操作 ====================
  { id: 'go-database-sql', name: 'database/sql', category: 'database', language: 'go', description: 'Go標準DBインターフェース', officialUrl: 'https://pkg.go.dev/database/sql', features: ['標準', '抽象化', 'コネクションプール'] },
  { id: 'go-gorm', name: 'GORM', category: 'database', language: 'go', description: 'Go ORM定番', packageName: 'gorm.io/gorm', officialUrl: 'https://gorm.io/', features: ['ORM', 'マイグレーション', 'フック'] },
  { id: 'go-sqlx', name: 'sqlx', category: 'database', language: 'go', description: 'database/sql拡張', packageName: 'github.com/jmoiron/sqlx', github: 'https://github.com/jmoiron/sqlx', features: ['構造体マッピング', 'Named Query', '軽量'] },
  { id: 'go-ent', name: 'ent', category: 'database', language: 'go', description: 'Facebookエンティティフレームワーク', packageName: 'entgo.io/ent', officialUrl: 'https://entgo.io/', features: ['コード生成', 'グラフ', 'Facebook製'] },
  { id: 'go-sqlc', name: 'sqlc', category: 'database', language: 'go', description: 'SQL→Goコード生成', packageName: 'github.com/sqlc-dev/sqlc', officialUrl: 'https://sqlc.dev/', features: ['コード生成', '型安全', 'SQL直書き'] },
  { id: 'go-bun', name: 'Bun', category: 'database', language: 'go', description: '軽量ORM', packageName: 'github.com/uptrace/bun', officialUrl: 'https://bun.uptrace.dev/', features: ['軽量', '高速', 'PostgreSQL'] },
  { id: 'go-pgx', name: 'pgx', category: 'database', language: 'go', description: 'PostgreSQLドライバ', packageName: 'github.com/jackc/pgx', github: 'https://github.com/jackc/pgx', features: ['PostgreSQL', '高速', 'ネイティブ'] },
  { id: 'go-mysql', name: 'go-sql-driver/mysql', category: 'database', language: 'go', description: 'MySQLドライバ', packageName: 'github.com/go-sql-driver/mysql', github: 'https://github.com/go-sql-driver/mysql', features: ['MySQL', 'database/sql', '純Go'] },
  { id: 'go-mongo', name: 'mongo-go-driver', category: 'database', language: 'go', description: 'MongoDB公式ドライバ', packageName: 'go.mongodb.org/mongo-driver', officialUrl: 'https://www.mongodb.com/docs/drivers/go/', features: ['MongoDB', '公式', 'BSON'] },
  { id: 'go-redis', name: 'go-redis', category: 'database', language: 'go', description: 'Redisクライアント', packageName: 'github.com/redis/go-redis', github: 'https://github.com/redis/go-redis', features: ['Redis', 'クラスタ', 'Pub/Sub'] },
  { id: 'go-badger', name: 'Badger', category: 'database', language: 'go', description: '組み込みKVS', packageName: 'github.com/dgraph-io/badger', github: 'https://github.com/dgraph-io/badger', features: ['KVS', '組み込み', 'LSMツリー'] },
  { id: 'go-bbolt', name: 'bbolt', category: 'database', language: 'go', description: '組み込みKVS（BoltDB後継）', packageName: 'go.etcd.io/bbolt', github: 'https://github.com/etcd-io/bbolt', features: ['KVS', 'B+ツリー', 'etcd使用'] },

  // ==================== タスク管理 ====================
  { id: 'go-asynq', name: 'Asynq', category: 'task-queue', language: 'go', description: 'Redisジョブキュー', packageName: 'github.com/hibiken/asynq', github: 'https://github.com/hibiken/asynq', features: ['Redis', 'リトライ', 'スケジュール'] },
  { id: 'go-machinery', name: 'Machinery', category: 'task-queue', language: 'go', description: '非同期タスクキュー', packageName: 'github.com/RichardKnop/machinery', github: 'https://github.com/RichardKnop/machinery', features: ['Celery風', 'マルチブローカー', 'ワークフロー'] },
  { id: 'go-gocraft-work', name: 'gocraft/work', category: 'task-queue', language: 'go', description: 'Redisジョブ処理', packageName: 'github.com/gocraft/work', github: 'https://github.com/gocraft/work', features: ['Redis', 'ミドルウェア', '並行処理'] },
  { id: 'go-gocron', name: 'gocron', category: 'task-queue', language: 'go', description: 'ジョブスケジューラ', packageName: 'github.com/go-co-op/gocron', github: 'https://github.com/go-co-op/gocron', features: ['Cron', 'スケジュール', 'シンプル'] },
  { id: 'go-cron', name: 'robfig/cron', category: 'task-queue', language: 'go', description: 'Cronライブラリ', packageName: 'github.com/robfig/cron', github: 'https://github.com/robfig/cron', features: ['Cron', '定番', '秒単位'] },
  { id: 'go-ants', name: 'ants', category: 'task-queue', language: 'go', description: 'ゴルーチンプール', packageName: 'github.com/panjf2000/ants', github: 'https://github.com/panjf2000/ants', features: ['プール', '並行制御', '低メモリ'] },

  // ==================== 認証・認可 ====================
  { id: 'go-jwt', name: 'golang-jwt', category: 'auth', language: 'go', description: 'JWT実装定番', packageName: 'github.com/golang-jwt/jwt', github: 'https://github.com/golang-jwt/jwt', features: ['JWT', '署名', '検証'] },
  { id: 'go-oauth2', name: 'oauth2', category: 'auth', language: 'go', description: 'OAuth2クライアント', packageName: 'golang.org/x/oauth2', officialUrl: 'https://pkg.go.dev/golang.org/x/oauth2', features: ['OAuth2', 'Google製', 'プロバイダ'] },
  { id: 'go-casbin', name: 'Casbin', category: 'auth', language: 'go', description: '認可ライブラリ', packageName: 'github.com/casbin/casbin', officialUrl: 'https://casbin.org/', features: ['RBAC', 'ABAC', 'ACL'] },
  { id: 'go-authelia', name: 'Authelia', category: 'auth', language: 'go', description: '認証サーバー', packageName: 'github.com/authelia/authelia', officialUrl: 'https://www.authelia.com/', features: ['SSO', '2FA', 'OIDC'] },
  { id: 'go-paseto', name: 'go-paseto', category: 'auth', language: 'go', description: 'PASETOトークン', packageName: 'github.com/o1egl/paseto', github: 'https://github.com/o1egl/paseto', features: ['PASETO', 'JWT代替', 'セキュア'] },
  { id: 'go-bcrypt', name: 'bcrypt', category: 'auth', language: 'go', description: 'パスワードハッシュ', packageName: 'golang.org/x/crypto/bcrypt', officialUrl: 'https://pkg.go.dev/golang.org/x/crypto/bcrypt', features: ['bcrypt', 'ハッシュ', '標準'] },
  { id: 'go-argon2', name: 'argon2', category: 'auth', language: 'go', description: 'Argon2ハッシュ', packageName: 'golang.org/x/crypto/argon2', officialUrl: 'https://pkg.go.dev/golang.org/x/crypto/argon2', features: ['Argon2', '最新', 'セキュア'] },

  // ==================== HTTP通信 ====================
  { id: 'go-net-http', name: 'net/http', category: 'http', language: 'go', description: 'Go標準HTTPパッケージ', officialUrl: 'https://pkg.go.dev/net/http', features: ['標準', 'クライアント', 'サーバー'] },
  { id: 'go-resty', name: 'Resty', category: 'http', language: 'go', description: 'HTTPクライアント', packageName: 'github.com/go-resty/resty', github: 'https://github.com/go-resty/resty', features: ['チェーン', 'リトライ', 'ミドルウェア'] },
  { id: 'go-grpc', name: 'gRPC-Go', category: 'http', language: 'go', description: 'gRPC実装', packageName: 'google.golang.org/grpc', officialUrl: 'https://grpc.io/', features: ['gRPC', 'Protocol Buffers', 'ストリーム'] },
  { id: 'go-fasthttp', name: 'fasthttp', category: 'http', language: 'go', description: '高速HTTPパッケージ', packageName: 'github.com/valyala/fasthttp', github: 'https://github.com/valyala/fasthttp', features: ['高速', '低アロケーション', 'net/http代替'] },
  { id: 'go-graphql', name: 'gqlgen', category: 'http', language: 'go', description: 'GraphQLサーバー', packageName: 'github.com/99designs/gqlgen', officialUrl: 'https://gqlgen.com/', features: ['GraphQL', 'コード生成', '型安全'] },
  { id: 'go-graphql-go', name: 'graphql-go', category: 'http', language: 'go', description: 'GraphQL実装', packageName: 'github.com/graphql-go/graphql', github: 'https://github.com/graphql-go/graphql', features: ['GraphQL', 'スキーマ', 'リゾルバ'] },
  { id: 'go-req', name: 'req', category: 'http', language: 'go', description: 'HTTPクライアント', packageName: 'github.com/imroc/req', github: 'https://github.com/imroc/req', features: ['シンプル', 'デバッグ', '自動デコード'] },

  // ==================== バリデーション ====================
  { id: 'go-validator', name: 'validator', category: 'validation', language: 'go', description: '構造体バリデーション', packageName: 'github.com/go-playground/validator', github: 'https://github.com/go-playground/validator', features: ['タグベース', 'カスタム', 'i18n'] },
  { id: 'go-ozzo', name: 'ozzo-validation', category: 'validation', language: 'go', description: 'バリデーションライブラリ', packageName: 'github.com/go-ozzo/ozzo-validation', github: 'https://github.com/go-ozzo/ozzo-validation', features: ['コードベース', 'カスタム', '構造体'] },
  { id: 'go-govalidator', name: 'govalidator', category: 'validation', language: 'go', description: 'バリデーター', packageName: 'github.com/asaskevich/govalidator', github: 'https://github.com/asaskevich/govalidator', features: ['文字列', 'フィルタ', 'サニタイズ'] },

  // ==================== 日付・時間 ====================
  { id: 'go-time', name: 'time', category: 'date', language: 'go', description: 'Go標準時間パッケージ', officialUrl: 'https://pkg.go.dev/time', features: ['標準', 'Duration', 'Location'] },
  { id: 'go-now', name: 'now', category: 'date', language: 'go', description: '時間ヘルパー', packageName: 'github.com/jinzhu/now', github: 'https://github.com/jinzhu/now', features: ['ヘルパー', '週初め', '月末'] },
  { id: 'go-carbon', name: 'carbon', category: 'date', language: 'go', description: '日付ライブラリ', packageName: 'github.com/golang-module/carbon', github: 'https://github.com/golang-module/carbon', features: ['Carbon風', 'パース', 'フォーマット'] },
  { id: 'go-dateparse', name: 'dateparse', category: 'date', language: 'go', description: '日付パース', packageName: 'github.com/araddon/dateparse', github: 'https://github.com/araddon/dateparse', features: ['自動パース', '多フォーマット'] },

  // ==================== ファイル操作 ====================
  { id: 'go-os', name: 'os', category: 'file', language: 'go', description: 'Go標準OSパッケージ', officialUrl: 'https://pkg.go.dev/os', features: ['標準', 'ファイル', '環境変数'] },
  { id: 'go-afero', name: 'Afero', category: 'file', language: 'go', description: 'ファイルシステム抽象化', packageName: 'github.com/spf13/afero', github: 'https://github.com/spf13/afero', features: ['抽象化', 'メモリFS', 'テスト'] },
  { id: 'go-excelize', name: 'Excelize', category: 'file', language: 'go', description: 'Excel読み書き', packageName: 'github.com/xuri/excelize', officialUrl: 'https://xuri.me/excelize/', features: ['Excel', 'スタイル', 'チャート'] },
  { id: 'go-csv', name: 'encoding/csv', category: 'file', language: 'go', description: 'Go標準CSV', officialUrl: 'https://pkg.go.dev/encoding/csv', features: ['標準', 'CSV', '読み書き'] },
  { id: 'go-gocsv', name: 'gocsv', category: 'file', language: 'go', description: 'CSV構造体マッピング', packageName: 'github.com/gocarina/gocsv', github: 'https://github.com/gocarina/gocsv', features: ['構造体', 'タグ', 'マッピング'] },
  { id: 'go-archive', name: 'archive', category: 'file', language: 'go', description: 'Go標準アーカイブ', officialUrl: 'https://pkg.go.dev/archive', features: ['標準', 'tar', 'zip'] },
  { id: 'go-viper', name: 'Viper', category: 'file', language: 'go', description: '設定ファイル管理', packageName: 'github.com/spf13/viper', github: 'https://github.com/spf13/viper', features: ['YAML', 'JSON', 'TOML', '環境変数'] },

  // ==================== メール送信 ====================
  { id: 'go-gomail', name: 'Gomail', category: 'email', language: 'go', description: 'メール送信', packageName: 'gopkg.in/gomail.v2', github: 'https://github.com/go-gomail/gomail', features: ['SMTP', '添付', 'HTML'] },
  { id: 'go-email', name: 'email', category: 'email', language: 'go', description: 'メールライブラリ', packageName: 'github.com/jordan-wright/email', github: 'https://github.com/jordan-wright/email', features: ['シンプル', 'SMTP', 'プール'] },
  { id: 'go-hermes', name: 'Hermes', category: 'email', language: 'go', description: 'HTMLメール生成', packageName: 'github.com/matcornic/hermes', github: 'https://github.com/matcornic/hermes', features: ['テンプレート', 'レスポンシブ', '美しい'] },

  // ==================== 決済 ====================
  { id: 'go-stripe', name: 'stripe-go', category: 'payment', language: 'go', description: 'Stripe公式SDK', packageName: 'github.com/stripe/stripe-go', officialUrl: 'https://stripe.com/', features: ['決済', 'サブスク', 'Webhook'] },

  // ==================== 検索 ====================
  { id: 'go-bleve', name: 'Bleve', category: 'search', language: 'go', description: '全文検索エンジン', packageName: 'github.com/blevesearch/bleve', officialUrl: 'https://blevesearch.com/', features: ['全文検索', 'インデックス', '純Go'] },
  { id: 'go-elasticsearch', name: 'go-elasticsearch', category: 'search', language: 'go', description: 'Elasticsearch公式', packageName: 'github.com/elastic/go-elasticsearch', officialUrl: 'https://www.elastic.co/', features: ['Elasticsearch', '公式', '型安全'] },
  { id: 'go-meilisearch', name: 'meilisearch-go', category: 'search', language: 'go', description: 'Meilisearchクライアント', packageName: 'github.com/meilisearch/meilisearch-go', officialUrl: 'https://www.meilisearch.com/', features: ['Meilisearch', '高速', 'シンプル'] },

  // ==================== ログ・監視 ====================
  { id: 'go-log', name: 'log', category: 'logging', language: 'go', description: 'Go標準ログ', officialUrl: 'https://pkg.go.dev/log', features: ['標準', 'シンプル'] },
  { id: 'go-slog', name: 'log/slog', category: 'logging', language: 'go', description: 'Go1.21構造化ログ', officialUrl: 'https://pkg.go.dev/log/slog', features: ['構造化', '標準', 'Go1.21+'] },
  { id: 'go-zap', name: 'Zap', category: 'logging', language: 'go', description: '高速構造化ロガー', packageName: 'go.uber.org/zap', github: 'https://github.com/uber-go/zap', features: ['高速', '構造化', 'Uber製'] },
  { id: 'go-zerolog', name: 'Zerolog', category: 'logging', language: 'go', description: 'ゼロアロケーションロガー', packageName: 'github.com/rs/zerolog', github: 'https://github.com/rs/zerolog', features: ['高速', 'JSON', '低メモリ'] },
  { id: 'go-logrus', name: 'Logrus', category: 'logging', language: 'go', description: '構造化ロガー定番', packageName: 'github.com/sirupsen/logrus', github: 'https://github.com/sirupsen/logrus', features: ['構造化', 'フック', 'フォーマッタ'] },
  { id: 'go-lumberjack', name: 'Lumberjack', category: 'logging', language: 'go', description: 'ログローテーション', packageName: 'gopkg.in/natefinch/lumberjack.v2', github: 'https://github.com/natefinch/lumberjack', features: ['ローテーション', 'サイズ', '日付'] },

  // ==================== UI/テンプレート ====================
  { id: 'go-html-template', name: 'html/template', category: 'ui', language: 'go', description: 'Go標準HTMLテンプレート', officialUrl: 'https://pkg.go.dev/html/template', features: ['標準', 'セキュア', 'XSS防止'] },
  { id: 'go-templ', name: 'templ', category: 'ui', language: 'go', description: '型安全HTMLテンプレート', packageName: 'github.com/a-h/templ', officialUrl: 'https://templ.guide/', features: ['型安全', 'コンポーネント', 'LSP'] },
  { id: 'go-pongo2', name: 'pongo2', category: 'ui', language: 'go', description: 'Django風テンプレート', packageName: 'github.com/flosch/pongo2', github: 'https://github.com/flosch/pongo2', features: ['Django風', 'フィルタ', '継承'] },
  { id: 'go-jet', name: 'Jet', category: 'ui', language: 'go', description: '高速テンプレート', packageName: 'github.com/CloudyKit/jet', github: 'https://github.com/CloudyKit/jet', features: ['高速', '継承', 'ブロック'] },

  // ==================== 状態管理 ====================
  { id: 'go-cache', name: 'go-cache', category: 'state', language: 'go', description: 'インメモリキャッシュ', packageName: 'github.com/patrickmn/go-cache', github: 'https://github.com/patrickmn/go-cache', features: ['インメモリ', 'TTL', 'シンプル'] },
  { id: 'go-bigcache', name: 'BigCache', category: 'state', language: 'go', description: '大規模キャッシュ', packageName: 'github.com/allegro/bigcache', github: 'https://github.com/allegro/bigcache', features: ['大規模', '高速', 'GC回避'] },
  { id: 'go-ristretto', name: 'Ristretto', category: 'state', language: 'go', description: '高性能キャッシュ', packageName: 'github.com/dgraph-io/ristretto', github: 'https://github.com/dgraph-io/ristretto', features: ['高性能', 'LRU', 'Dgraph製'] },
  { id: 'go-groupcache', name: 'groupcache', category: 'state', language: 'go', description: '分散キャッシュ', packageName: 'github.com/golang/groupcache', github: 'https://github.com/golang/groupcache', features: ['分散', 'memcached代替', 'Google製'] },

  // ==================== 国際化 ====================
  { id: 'go-i18n', name: 'go-i18n', category: 'i18n', language: 'go', description: '国際化ライブラリ', packageName: 'github.com/nicksnyder/go-i18n', github: 'https://github.com/nicksnyder/go-i18n', features: ['翻訳', '複数形', 'CLDR'] },
  { id: 'go-text', name: 'golang.org/x/text', category: 'i18n', language: 'go', description: 'テキスト処理', packageName: 'golang.org/x/text', officialUrl: 'https://pkg.go.dev/golang.org/x/text', features: ['Unicode', 'エンコーディング', '言語'] },

  // ==================== リアルタイム通信 ====================
  { id: 'go-websocket', name: 'gorilla/websocket', category: 'realtime', language: 'go', description: 'WebSocket実装定番', packageName: 'github.com/gorilla/websocket', github: 'https://github.com/gorilla/websocket', features: ['WebSocket', '定番', '安定'] },
  { id: 'go-melody', name: 'Melody', category: 'realtime', language: 'go', description: 'WebSocketフレームワーク', packageName: 'github.com/olahol/melody', github: 'https://github.com/olahol/melody', features: ['ブロードキャスト', 'gorilla/websocket'] },
  { id: 'go-centrifuge', name: 'Centrifuge', category: 'realtime', language: 'go', description: 'リアルタイムメッセージング', packageName: 'github.com/centrifugal/centrifuge', officialUrl: 'https://centrifugal.dev/', features: ['Pub/Sub', 'プレゼンス', 'スケール'] },
  { id: 'go-nhooyr-websocket', name: 'nhooyr/websocket', category: 'realtime', language: 'go', description: 'モダンWebSocket', packageName: 'nhooyr.io/websocket', github: 'https://github.com/nhooyr/websocket', features: ['モダン', 'コンテキスト', '軽量'] },
  { id: 'go-sse', name: 'go-sse', category: 'realtime', language: 'go', description: 'Server-Sent Events', packageName: 'github.com/r3labs/sse', github: 'https://github.com/r3labs/sse', features: ['SSE', 'サーバー', 'クライアント'] },

  // ==================== PDF操作 ====================
  { id: 'go-gofpdf', name: 'gofpdf', category: 'pdf', language: 'go', description: 'PDF生成', packageName: 'github.com/jung-kurt/gofpdf', github: 'https://github.com/jung-kurt/gofpdf', features: ['PDF生成', 'テキスト', '画像'] },
  { id: 'go-pdfcpu', name: 'pdfcpu', category: 'pdf', language: 'go', description: 'PDF処理ツール', packageName: 'github.com/pdfcpu/pdfcpu', officialUrl: 'https://pdfcpu.io/', features: ['マージ', '分割', '最適化'] },
  { id: 'go-unipdf', name: 'UniPDF', category: 'pdf', language: 'go', description: '商用PDF処理', packageName: 'github.com/unidoc/unipdf', officialUrl: 'https://unidoc.io/', features: ['生成', '編集', 'OCR'] },
  { id: 'go-maroto', name: 'Maroto', category: 'pdf', language: 'go', description: 'PDF生成（Bootstrap風）', packageName: 'github.com/johnfercher/maroto', github: 'https://github.com/johnfercher/maroto', features: ['グリッド', 'テーブル', 'シンプル'] },

  // ==================== 動画・音声 ====================
  { id: 'go-ffmpeg', name: 'ffmpeg-go', category: 'video-audio', language: 'go', description: 'FFmpegバインディング', packageName: 'github.com/u2takey/ffmpeg-go', github: 'https://github.com/u2takey/ffmpeg-go', features: ['FFmpeg', '動画', '音声'] },
  { id: 'go-beep', name: 'Beep', category: 'video-audio', language: 'go', description: 'オーディオ再生', packageName: 'github.com/faiface/beep', github: 'https://github.com/faiface/beep', features: ['再生', 'ストリーム', '合成'] },
  { id: 'go-oto', name: 'Oto', category: 'video-audio', language: 'go', description: '低レベルオーディオ', packageName: 'github.com/hajimehoshi/oto', github: 'https://github.com/hajimehoshi/oto', features: ['低レベル', 'クロスプラットフォーム', 'Ebiten使用'] },

  // ==================== ユーティリティ ====================
  { id: 'go-lo', name: 'lo', category: 'utility', language: 'go', description: 'Lodash風ジェネリクス', packageName: 'github.com/samber/lo', github: 'https://github.com/samber/lo', features: ['ジェネリクス', 'map/filter', 'Lodash風'] },
  { id: 'go-cast', name: 'cast', category: 'utility', language: 'go', description: '型変換', packageName: 'github.com/spf13/cast', github: 'https://github.com/spf13/cast', features: ['型変換', 'シンプル', 'エラー処理'] },
  { id: 'go-uuid', name: 'uuid', category: 'utility', language: 'go', description: 'UUID生成', packageName: 'github.com/google/uuid', github: 'https://github.com/google/uuid', features: ['UUID', 'v1-v7', 'Google製'] },
  { id: 'go-ulid', name: 'ulid', category: 'utility', language: 'go', description: 'ULID生成', packageName: 'github.com/oklog/ulid', github: 'https://github.com/oklog/ulid', features: ['ULID', 'ソート可能', '高速'] },
  { id: 'go-errors', name: 'pkg/errors', category: 'utility', language: 'go', description: 'エラーラッピング', packageName: 'github.com/pkg/errors', github: 'https://github.com/pkg/errors', features: ['スタックトレース', 'ラッピング'] },
  { id: 'go-copier', name: 'copier', category: 'utility', language: 'go', description: '構造体コピー', packageName: 'github.com/jinzhu/copier', github: 'https://github.com/jinzhu/copier', features: ['構造体コピー', 'マッピング', 'GORM作者'] },
  { id: 'go-mergo', name: 'mergo', category: 'utility', language: 'go', description: '構造体マージ', packageName: 'github.com/imdario/mergo', github: 'https://github.com/imdario/mergo', features: ['マージ', '上書き', 'マップ'] },

  // ==================== CLI作成 ====================
  { id: 'go-cobra', name: 'Cobra', category: 'cli', language: 'go', description: 'CLIフレームワーク定番', packageName: 'github.com/spf13/cobra', officialUrl: 'https://cobra.dev/', features: ['サブコマンド', 'フラグ', 'kubectl使用'] },
  { id: 'go-urfave-cli', name: 'urfave/cli', category: 'cli', language: 'go', description: 'CLIフレームワーク', packageName: 'github.com/urfave/cli', github: 'https://github.com/urfave/cli', features: ['シンプル', 'フラグ', 'サブコマンド'] },
  { id: 'go-bubbletea', name: 'Bubble Tea', category: 'cli', language: 'go', description: 'TUIフレームワーク', packageName: 'github.com/charmbracelet/bubbletea', officialUrl: 'https://charm.sh/', features: ['TUI', 'Elm風', '美しい'] },
  { id: 'go-lipgloss', name: 'Lip Gloss', category: 'cli', language: 'go', description: 'ターミナルスタイル', packageName: 'github.com/charmbracelet/lipgloss', github: 'https://github.com/charmbracelet/lipgloss', features: ['スタイル', 'レイアウト', 'カラー'] },
  { id: 'go-color', name: 'color', category: 'cli', language: 'go', description: 'ターミナル色付け', packageName: 'github.com/fatih/color', github: 'https://github.com/fatih/color', features: ['色', 'スタイル', 'シンプル'] },
  { id: 'go-promptui', name: 'promptui', category: 'cli', language: 'go', description: 'インタラクティブプロンプト', packageName: 'github.com/manifoldco/promptui', github: 'https://github.com/manifoldco/promptui', features: ['プロンプト', '選択', '入力'] },
  { id: 'go-survey', name: 'survey', category: 'cli', language: 'go', description: 'インタラクティブCLI', packageName: 'github.com/AlecAivazis/survey', github: 'https://github.com/AlecAivazis/survey', features: ['質問', '選択', 'バリデーション'] },
  { id: 'go-progressbar', name: 'progressbar', category: 'cli', language: 'go', description: 'プログレスバー', packageName: 'github.com/schollz/progressbar', github: 'https://github.com/schollz/progressbar', features: ['プログレス', 'シンプル', 'カスタム'] },

  // ==================== グラフ・可視化 ====================
  { id: 'go-echarts', name: 'go-echarts', category: 'chart', language: 'go', description: 'EChartsラッパー', packageName: 'github.com/go-echarts/go-echarts', officialUrl: 'https://go-echarts.github.io/', features: ['ECharts', 'インタラクティブ', 'HTML'] },
  { id: 'go-plot', name: 'gonum/plot', category: 'chart', language: 'go', description: 'プロットライブラリ', packageName: 'gonum.org/v1/plot', officialUrl: 'https://github.com/gonum/plot', features: ['科学', 'グラフ', '画像出力'] },
  { id: 'go-termui', name: 'termui', category: 'chart', language: 'go', description: 'ターミナルダッシュボード', packageName: 'github.com/gizak/termui', github: 'https://github.com/gizak/termui', features: ['TUI', 'ダッシュボード', 'ウィジェット'] },
  { id: 'go-asciigraph', name: 'asciigraph', category: 'chart', language: 'go', description: 'ASCIIグラフ', packageName: 'github.com/guptarohit/asciigraph', github: 'https://github.com/guptarohit/asciigraph', features: ['ASCII', 'ターミナル', 'シンプル'] },
]
