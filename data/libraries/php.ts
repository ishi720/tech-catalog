import type { Library } from '~/types'

export const phpLibraries: Library[] = [
  // フレームワーク
  { id: 'php-laravel', name: 'Laravel', category: 'framework', language: 'php', description: 'PHP人気No.1フレームワーク。フルスタック', packageName: 'laravel/laravel', officialUrl: 'https://laravel.com/', features: ['Eloquent', 'Blade', 'Artisan'] },
  { id: 'php-symfony', name: 'Symfony', category: 'framework', language: 'php', description: 'エンタープライズPHPフレームワーク', packageName: 'symfony/symfony', officialUrl: 'https://symfony.com/', features: ['コンポーネント', 'Flex', 'Twig'] },
  { id: 'php-slim', name: 'Slim', category: 'framework', language: 'php', description: '軽量マイクロフレームワーク', packageName: 'slim/slim', officialUrl: 'https://www.slimframework.com/', features: ['軽量', 'PSR-7', 'ミドルウェア'] },
  { id: 'php-lumen', name: 'Lumen', category: 'framework', language: 'php', description: 'Laravel製マイクロフレームワーク', packageName: 'laravel/lumen', officialUrl: 'https://lumen.laravel.com/', features: ['軽量', 'Laravel互換', 'API向け'] },
  { id: 'php-cakephp', name: 'CakePHP', category: 'framework', language: 'php', description: '規約重視のフレームワーク', packageName: 'cakephp/cakephp', officialUrl: 'https://cakephp.org/', features: ['規約', 'Bake', 'ORM'] },
  { id: 'php-codeigniter', name: 'CodeIgniter', category: 'framework', language: 'php', description: '軽量・高速フレームワーク', packageName: 'codeigniter4/framework', officialUrl: 'https://codeigniter.com/', features: ['軽量', '高速', 'シンプル'] },
  { id: 'php-yii', name: 'Yii', category: 'framework', language: 'php', description: '高性能PHPフレームワーク', packageName: 'yiisoft/yii2', officialUrl: 'https://www.yiiframework.com/', features: ['Gii', 'RBAC', 'キャッシュ'] },

  // テスト関連
  { id: 'php-phpunit', name: 'PHPUnit', category: 'testing', language: 'php', description: 'PHP標準テストフレームワーク', packageName: 'phpunit/phpunit', officialUrl: 'https://phpunit.de/', features: ['ユニットテスト', 'モック', 'カバレッジ'] },
  { id: 'php-pest', name: 'Pest', category: 'testing', language: 'php', description: 'モダンPHPテストフレームワーク', packageName: 'pestphp/pest', officialUrl: 'https://pestphp.com/', features: ['シンプル構文', 'PHPUnit互換', 'プラグイン'] },
  { id: 'php-codeception', name: 'Codeception', category: 'testing', language: 'php', description: 'フルスタックテストフレームワーク', packageName: 'codeception/codeception', officialUrl: 'https://codeception.com/', features: ['E2E', 'API', 'ユニット'] },
  { id: 'php-mockery', name: 'Mockery', category: 'testing', language: 'php', description: 'モックオブジェクトフレームワーク', packageName: 'mockery/mockery', officialUrl: 'http://docs.mockery.io/', features: ['モック', 'スタブ', 'PHPUnit連携'] },

  // 画像関連
  { id: 'php-intervention', name: 'Intervention Image', category: 'image', language: 'php', description: 'PHP画像処理ライブラリ', packageName: 'intervention/image', officialUrl: 'https://image.intervention.io/', features: ['GD/Imagick', 'リサイズ', 'フィルター'] },
  { id: 'php-imagine', name: 'Imagine', category: 'image', language: 'php', description: 'OOP画像処理', packageName: 'imagine/imagine', github: 'https://github.com/php-imagine/Imagine', features: ['OOP', 'マルチドライバ', 'エフェクト'] },
  { id: 'php-glide', name: 'Glide', category: 'image', language: 'php', description: 'HTTPベース画像処理', packageName: 'league/glide', officialUrl: 'https://glide.thephpleague.com/', features: ['オンデマンド', 'URL API', 'キャッシュ'] },

  // スクレイピング関連
  { id: 'php-goutte', name: 'Goutte', category: 'scraping', language: 'php', description: 'Webスクレイピングライブラリ', packageName: 'fabpot/goutte', github: 'https://github.com/FriendsOfPHP/Goutte', features: ['DOMクローラ', 'HTTPクライアント', 'フォーム'] },
  { id: 'php-browsershot', name: 'Browsershot', category: 'scraping', language: 'php', description: 'Puppeteerラッパー', packageName: 'spatie/browsershot', github: 'https://github.com/spatie/browsershot', features: ['スクリーンショット', 'PDF', 'Puppeteer'] },
  { id: 'php-domcrawler', name: 'DomCrawler', category: 'scraping', language: 'php', description: 'Symfony DOM操作', packageName: 'symfony/dom-crawler', officialUrl: 'https://symfony.com/doc/current/components/dom_crawler.html', features: ['DOM操作', 'CSSセレクタ', 'XPath'] },
  { id: 'php-httpclient', name: 'HTTP Client', category: 'scraping', language: 'php', description: 'Symfony HTTPクライアント', packageName: 'symfony/http-client', officialUrl: 'https://symfony.com/doc/current/http_client.html', features: ['非同期', 'ストリーム', 'リトライ'] },

  // AI関連
  { id: 'php-openai', name: 'OpenAI PHP', category: 'ai', language: 'php', description: 'OpenAI API クライアント', packageName: 'openai-php/client', github: 'https://github.com/openai-php/client', features: ['GPT', 'DALL-E', 'Whisper'] },
  { id: 'php-anthropic', name: 'Anthropic PHP', category: 'ai', language: 'php', description: 'Anthropic Claude API', packageName: 'anthropic-ai/anthropic-sdk-php', github: 'https://github.com/anthropics/anthropic-sdk-php', features: ['Claude', 'ストリーム'] },
  { id: 'php-langchain', name: 'LLPhant', category: 'ai', language: 'php', description: 'PHP用LLMフレームワーク', packageName: 'theodo-group/llphant', github: 'https://github.com/theodo-group/LLPhant', features: ['エージェント', 'RAG', 'チャット'] },

  // DB操作関連
  { id: 'php-eloquent', name: 'Eloquent', category: 'database', language: 'php', description: 'Laravel ORM（単体利用可）', packageName: 'illuminate/database', officialUrl: 'https://laravel.com/docs/eloquent', features: ['Active Record', 'リレーション', 'マイグレーション'] },
  { id: 'php-doctrine', name: 'Doctrine ORM', category: 'database', language: 'php', description: 'エンタープライズORM', packageName: 'doctrine/orm', officialUrl: 'https://www.doctrine-project.org/', features: ['Data Mapper', 'DQL', 'キャッシュ'] },
  { id: 'php-pdo', name: 'PDO', category: 'database', language: 'php', description: 'PHP標準DBアクセス', officialUrl: 'https://www.php.net/manual/en/book.pdo.php', features: ['標準', '多DB対応', 'プリペアド'] },
  { id: 'php-cycle', name: 'Cycle ORM', category: 'database', language: 'php', description: 'Data Mapper ORM', packageName: 'cycle/orm', officialUrl: 'https://cycle-orm.dev/', features: ['Data Mapper', '高速', 'スキーマ推論'] },

  // タスク管理
  { id: 'php-queue', name: 'Laravel Queue', category: 'task-queue', language: 'php', description: 'Laravelキューシステム', packageName: 'illuminate/queue', officialUrl: 'https://laravel.com/docs/queues', features: ['Redis', 'SQS', 'リトライ'] },
  { id: 'php-symfony-messenger', name: 'Symfony Messenger', category: 'task-queue', language: 'php', description: 'Symfonyメッセージバス', packageName: 'symfony/messenger', officialUrl: 'https://symfony.com/doc/current/messenger.html', features: ['メッセージバス', '非同期', 'トランスポート'] },
  { id: 'php-bernard', name: 'Bernard', category: 'task-queue', language: 'php', description: '軽量ジョブキュー', packageName: 'bernard/bernard', github: 'https://github.com/bernardphp/bernard', features: ['軽量', '複数ドライバ'] },

  // 認証・認可
  { id: 'php-jwt', name: 'firebase/php-jwt', category: 'auth', language: 'php', description: 'JWT エンコード/デコード', packageName: 'firebase/php-jwt', github: 'https://github.com/firebase/php-jwt', features: ['JWT', 'シンプル', '軽量'] },
  { id: 'php-passport', name: 'Laravel Passport', category: 'auth', language: 'php', description: 'Laravel OAuth2サーバー', packageName: 'laravel/passport', officialUrl: 'https://laravel.com/docs/passport', features: ['OAuth2', 'JWT', 'Laravel'] },
  { id: 'php-sanctum', name: 'Laravel Sanctum', category: 'auth', language: 'php', description: '軽量API認証', packageName: 'laravel/sanctum', officialUrl: 'https://laravel.com/docs/sanctum', features: ['APIトークン', 'SPA認証', '軽量'] },
  { id: 'php-password-hash', name: 'password_hash', category: 'auth', language: 'php', description: 'PHP標準パスワードハッシュ', officialUrl: 'https://www.php.net/manual/en/function.password-hash.php', features: ['標準', 'bcrypt', 'argon2'] },

  // HTTP通信
  { id: 'php-guzzle', name: 'Guzzle', category: 'http', language: 'php', description: 'PHP HTTPクライアント定番', packageName: 'guzzlehttp/guzzle', officialUrl: 'https://docs.guzzlephp.org/', features: ['PSR-7', '非同期', 'ミドルウェア'] },
  { id: 'php-http-client', name: 'Symfony HttpClient', category: 'http', language: 'php', description: 'Symfony HTTPクライアント', packageName: 'symfony/http-client', officialUrl: 'https://symfony.com/doc/current/http_client.html', features: ['非同期', 'ストリーム', 'リトライ'] },
  { id: 'php-curl', name: 'cURL', category: 'http', language: 'php', description: 'PHP標準cURL', officialUrl: 'https://www.php.net/manual/en/book.curl.php', features: ['標準', '低レベル', '高機能'] },

  // バリデーション
  { id: 'php-validator', name: 'Symfony Validator', category: 'validation', language: 'php', description: 'Symfonyバリデーション', packageName: 'symfony/validator', officialUrl: 'https://symfony.com/doc/current/validation.html', features: ['アノテーション', '制約', 'カスタム'] },
  { id: 'php-respect', name: 'Respect Validation', category: 'validation', language: 'php', description: '流暢なバリデーション', packageName: 'respect/validation', officialUrl: 'https://respect-validation.readthedocs.io/', features: ['チェーン', '多ルール', 'i18n'] },
  { id: 'php-rakit', name: 'Rakit Validation', category: 'validation', language: 'php', description: '軽量バリデーション', packageName: 'rakit/validation', github: 'https://github.com/rakit/validation', features: ['軽量', 'Laravel風', 'カスタムルール'] },

  // 日付・時間
  { id: 'php-carbon', name: 'Carbon', category: 'date', language: 'php', description: 'DateTime拡張', packageName: 'nesbot/carbon', officialUrl: 'https://carbon.nesbot.com/', features: ['DateTime拡張', '多言語', 'イミュータブル'] },
  { id: 'php-chronos', name: 'Chronos', category: 'date', language: 'php', description: 'CakePHP日付ライブラリ', packageName: 'cakephp/chronos', github: 'https://github.com/cakephp/chronos', features: ['イミュータブル', 'Carbon互換', '軽量'] },

  // ファイル操作
  { id: 'php-flysystem', name: 'Flysystem', category: 'file', language: 'php', description: 'ファイルシステム抽象化', packageName: 'league/flysystem', officialUrl: 'https://flysystem.thephpleague.com/', features: ['S3', 'ローカル', 'FTP'] },
  { id: 'php-csv', name: 'League CSV', category: 'file', language: 'php', description: 'CSV処理ライブラリ', packageName: 'league/csv', officialUrl: 'https://csv.thephpleague.com/', features: ['読み書き', 'ストリーム', 'フィルタ'] },
  { id: 'php-phpspreadsheet', name: 'PhpSpreadsheet', category: 'file', language: 'php', description: 'Excel読み書き', packageName: 'phpoffice/phpspreadsheet', officialUrl: 'https://phpspreadsheet.readthedocs.io/', features: ['Excel', 'スタイル', 'チャート'] },
  { id: 'php-ziparchive', name: 'ZipArchive', category: 'file', language: 'php', description: 'PHP標準ZIP操作', officialUrl: 'https://www.php.net/manual/en/class.ziparchive.php', features: ['標準', 'ZIP', '圧縮'] },

  // メール送信
  { id: 'php-symfony-mailer', name: 'Symfony Mailer', category: 'email', language: 'php', description: 'Symfonyメール送信', packageName: 'symfony/mailer', officialUrl: 'https://symfony.com/doc/current/mailer.html', features: ['SMTP', 'テンプレート', '非同期'] },
  { id: 'php-phpmailer', name: 'PHPMailer', category: 'email', language: 'php', description: '定番メールライブラリ', packageName: 'phpmailer/phpmailer', github: 'https://github.com/PHPMailer/PHPMailer', features: ['SMTP', 'HTML', '添付'] },

  // 決済
  { id: 'php-stripe', name: 'Stripe PHP', category: 'payment', language: 'php', description: 'Stripe公式SDK', packageName: 'stripe/stripe-php', officialUrl: 'https://stripe.com/', features: ['決済', 'サブスク', 'Webhook'] },
  { id: 'php-omnipay', name: 'Omnipay', category: 'payment', language: 'php', description: '決済ゲートウェイ抽象化', packageName: 'omnipay/omnipay', officialUrl: 'https://omnipay.thephpleague.com/', features: ['マルチゲートウェイ', '統一API'] },

  // 検索
  { id: 'php-elasticsearch', name: 'Elasticsearch PHP', category: 'search', language: 'php', description: 'Elasticsearch公式クライアント', packageName: 'elasticsearch/elasticsearch', officialUrl: 'https://www.elastic.co/', features: ['Elasticsearch', '全文検索'] },
  { id: 'php-scout', name: 'Laravel Scout', category: 'search', language: 'php', description: 'Laravel全文検索', packageName: 'laravel/scout', officialUrl: 'https://laravel.com/docs/scout', features: ['Eloquent連携', 'Algolia', 'Meilisearch'] },
  { id: 'php-tnt', name: 'TNTSearch', category: 'search', language: 'php', description: '純PHP全文検索', packageName: 'teamtnt/tntsearch', github: 'https://github.com/teamtnt/tntsearch', features: ['純PHP', '軽量', 'インデックス'] },

  // ログ・監視
  { id: 'php-monolog', name: 'Monolog', category: 'logging', language: 'php', description: 'PHP定番ロガー（PSR-3）', packageName: 'monolog/monolog', github: 'https://github.com/Seldaek/monolog', features: ['PSR-3', 'ハンドラ', 'フォーマッタ'] },
  { id: 'php-sentry', name: 'Sentry PHP', category: 'logging', language: 'php', description: 'エラートラッキング', packageName: 'sentry/sentry', officialUrl: 'https://sentry.io/', features: ['エラー追跡', 'パフォーマンス'] },

  // UIコンポーネント（PHPテンプレート）
  { id: 'php-blade', name: 'Blade', category: 'ui', language: 'php', description: 'Laravelテンプレートエンジン', packageName: 'illuminate/view', officialUrl: 'https://laravel.com/docs/blade', features: ['コンポーネント', 'スロット', '継承'] },
  { id: 'php-twig', name: 'Twig', category: 'ui', language: 'php', description: 'Symfonyテンプレートエンジン', packageName: 'twig/twig', officialUrl: 'https://twig.symfony.com/', features: ['サンドボックス', '継承', 'マクロ'] },
  { id: 'php-livewire', name: 'Livewire', category: 'ui', language: 'php', description: 'Laravelフルスタックコンポーネント', packageName: 'livewire/livewire', officialUrl: 'https://livewire.laravel.com/', features: ['リアクティブ', 'JS不要', 'コンポーネント'] },

  // 状態管理（PHPセッション等）
  { id: 'php-session', name: 'Symfony Session', category: 'state', language: 'php', description: 'Symfonyセッション管理', packageName: 'symfony/http-foundation', officialUrl: 'https://symfony.com/doc/current/session.html', features: ['セッション', 'フラッシュ', 'ストレージ'] },
  { id: 'php-cache', name: 'Symfony Cache', category: 'state', language: 'php', description: 'PSR-6/16キャッシュ', packageName: 'symfony/cache', officialUrl: 'https://symfony.com/doc/current/cache.html', features: ['PSR-6/16', 'アダプタ', 'タグ'] },

  // 国際化
  { id: 'php-translator', name: 'Symfony Translation', category: 'i18n', language: 'php', description: 'Symfony翻訳コンポーネント', packageName: 'symfony/translation', officialUrl: 'https://symfony.com/doc/current/translation.html', features: ['翻訳', 'ICU', 'プルラル'] },

  // リアルタイム通信
  { id: 'php-ratchet', name: 'Ratchet', category: 'realtime', language: 'php', description: 'PHP WebSocketサーバー', packageName: 'cboden/ratchet', officialUrl: 'http://socketo.me/', features: ['WebSocket', 'WAMP', 'イベント'] },
  { id: 'php-pusher', name: 'Pusher PHP', category: 'realtime', language: 'php', description: 'Pusherサーバーサイド', packageName: 'pusher/pusher-php-server', officialUrl: 'https://pusher.com/', features: ['Pusher', 'チャンネル', 'イベント'] },
  { id: 'php-broadcasting', name: 'Laravel Broadcasting', category: 'realtime', language: 'php', description: 'Laravelイベントブロードキャスト', officialUrl: 'https://laravel.com/docs/broadcasting', features: ['Pusher', 'Redis', 'Socket.io'] },

  // PDF操作
  { id: 'php-dompdf', name: 'Dompdf', category: 'pdf', language: 'php', description: 'HTML→PDF変換', packageName: 'dompdf/dompdf', github: 'https://github.com/dompdf/dompdf', features: ['HTML→PDF', 'CSS対応', '日本語'] },
  { id: 'php-tcpdf', name: 'TCPDF', category: 'pdf', language: 'php', description: '高機能PDF生成', packageName: 'tecnickcom/tcpdf', officialUrl: 'https://tcpdf.org/', features: ['高機能', 'バーコード', 'フォント'] },
  { id: 'php-snappy', name: 'Snappy', category: 'pdf', language: 'php', description: 'wkhtmltopdfラッパー', packageName: 'knplabs/knp-snappy', github: 'https://github.com/KnpLabs/snappy', features: ['wkhtmltopdf', 'スクリーンショット'] },
  { id: 'php-fpdf', name: 'FPDF', category: 'pdf', language: 'php', description: '軽量PDF生成', packageName: 'setasign/fpdf', officialUrl: 'http://www.fpdf.org/', features: ['軽量', 'シンプル', '依存なし'] },

  // 動画・音声
  { id: 'php-ffmpeg', name: 'PHP-FFMpeg', category: 'video-audio', language: 'php', description: 'FFmpegラッパー', packageName: 'php-ffmpeg/php-ffmpeg', github: 'https://github.com/PHP-FFMpeg/PHP-FFMpeg', features: ['動画変換', '音声変換', 'サムネイル'] },
  { id: 'php-getid3', name: 'getID3', category: 'video-audio', language: 'php', description: 'メディアメタデータ取得', packageName: 'james-heinrich/getid3', github: 'https://github.com/JamesHeinrich/getID3', features: ['メタデータ', 'ID3タグ', '多形式'] },

  // ユーティリティ
  { id: 'php-collection', name: 'Laravel Collections', category: 'utility', language: 'php', description: '配列操作ラッパー', packageName: 'illuminate/collections', officialUrl: 'https://laravel.com/docs/collections', features: ['チェーン', 'map/filter', 'イミュータブル'] },
  { id: 'php-str', name: 'Laravel Str', category: 'utility', language: 'php', description: '文字列操作ヘルパー', packageName: 'illuminate/support', officialUrl: 'https://laravel.com/docs/strings', features: ['文字列操作', 'slug', 'UUID'] },
  { id: 'php-uuid', name: 'ramsey/uuid', category: 'utility', language: 'php', description: 'UUID生成', packageName: 'ramsey/uuid', github: 'https://github.com/ramsey/uuid', features: ['UUID v1-v7', 'RFC準拠'] },

  // CLI作成
  { id: 'php-console', name: 'Symfony Console', category: 'cli', language: 'php', description: 'CLI作成コンポーネント', packageName: 'symfony/console', officialUrl: 'https://symfony.com/doc/current/console.html', features: ['コマンド', 'オプション', 'プログレス'] },
  { id: 'php-artisan', name: 'Artisan', category: 'cli', language: 'php', description: 'Laravel CLI', officialUrl: 'https://laravel.com/docs/artisan', features: ['Laravel', 'コマンド生成', 'スケジュール'] },

  // グラフ・可視化
  { id: 'php-chart', name: 'Chart.js via CDN', category: 'chart', language: 'php', description: 'PHPからChart.js利用', officialUrl: 'https://www.chartjs.org/', notes: 'JavaScript CDNを利用', features: ['フロント連携'] },
  { id: 'php-jpgraph', name: 'JpGraph', category: 'chart', language: 'php', description: 'PHP画像グラフ生成', officialUrl: 'https://jpgraph.net/', features: ['画像出力', 'サーバーサイド', '多種類'] },
]
