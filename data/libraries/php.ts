import type { Library } from '~/types'

export const phpLibraries: Library[] = [
  // フレームワーク
  { id: 'php-laravel', name: 'Laravel', category: 'framework', language: 'php', description: '最も人気のPHPフレームワーク。Eloquent ORM、Blade', packageName: 'laravel/laravel', officialUrl: 'https://laravel.com/', features: ['Eloquent', 'Blade', 'Artisan'] },
  { id: 'php-symfony', name: 'Symfony', category: 'framework', language: 'php', description: 'エンタープライズ向けフレームワーク。再利用可能コンポーネント', packageName: 'symfony/symfony', officialUrl: 'https://symfony.com/', features: ['コンポーネント', 'Flex', 'Twig'] },
  { id: 'php-codeigniter', name: 'CodeIgniter', category: 'framework', language: 'php', description: '軽量で高速なMVCフレームワーク', packageName: 'codeigniter4/framework', officialUrl: 'https://codeigniter.com/', features: ['軽量', '高速', 'シンプル'] },
  { id: 'php-cakephp', name: 'CakePHP', category: 'framework', language: 'php', description: 'Rails風の規約重視フレームワーク', packageName: 'cakephp/cakephp', officialUrl: 'https://cakephp.org/', features: ['規約重視', 'Bake', 'ORM'] },
  { id: 'php-slim', name: 'Slim', category: 'framework', language: 'php', description: 'マイクロフレームワーク。API構築向け', packageName: 'slim/slim', officialUrl: 'https://www.slimframework.com/', features: ['軽量', 'PSR-7', 'ミドルウェア'] },
  { id: 'php-lumen', name: 'Lumen', category: 'framework', language: 'php', description: 'Laravel製マイクロフレームワーク', packageName: 'laravel/lumen', officialUrl: 'https://lumen.laravel.com/', features: ['Laravel派生', 'マイクロ', 'API向け'] },

  // テスト関連
  { id: 'php-phpunit', name: 'PHPUnit', category: 'testing', language: 'php', description: 'PHP標準テストフレームワーク', packageName: 'phpunit/phpunit', officialUrl: 'https://phpunit.de/', features: ['ユニットテスト', 'モック', 'カバレッジ'] },
  { id: 'php-pest', name: 'Pest', category: 'testing', language: 'php', description: 'モダンで表現力豊かなテストFW', packageName: 'pestphp/pest', officialUrl: 'https://pestphp.com/', features: ['シンプル構文', 'PHPUnit互換', 'プラグイン'] },
  { id: 'php-mockery', name: 'Mockery', category: 'testing', language: 'php', description: 'モックオブジェクトライブラリ', packageName: 'mockery/mockery', officialUrl: 'https://github.com/mockery/mockery', features: ['モック', 'スタブ', '柔軟'] },

  // 画像関連
  { id: 'php-intervention', name: 'Intervention Image', category: 'image', language: 'php', description: '画像処理ライブラリ。GD/Imagick対応', packageName: 'intervention/image', officialUrl: 'https://image.intervention.io/', features: ['リサイズ', 'フィルター', 'GD/Imagick'] },
  { id: 'php-imagine', name: 'Imagine', category: 'image', language: 'php', description: 'OOP画像操作ライブラリ', packageName: 'imagine/imagine', github: 'https://github.com/php-imagine/Imagine', features: ['OOP', 'マルチドライバ', 'フィルター'] },
  { id: 'php-glide', name: 'Glide', category: 'image', language: 'php', description: 'オンデマンド画像操作API', packageName: 'league/glide', officialUrl: 'https://glide.thephpleague.com/', features: ['URL API', 'キャッシュ', 'セキュア'] },

  // スクレイピング関連
  { id: 'php-goutte', name: 'Goutte', category: 'scraping', language: 'php', description: 'スクレイピングライブラリ', packageName: 'fabpot/goutte', github: 'https://github.com/FriendsOfPHP/Goutte', features: ['DOM操作', 'フォーム送信', 'シンプル'] },
  { id: 'php-browserkit', name: 'BrowserKit', category: 'scraping', language: 'php', description: 'Symfony製ブラウザシミュレータ', packageName: 'symfony/browser-kit', officialUrl: 'https://symfony.com/components/BrowserKit', features: ['リクエスト模擬', 'Cookie', 'テスト向け'] },
  { id: 'php-domcrawler', name: 'DomCrawler', category: 'scraping', language: 'php', description: 'DOM操作・トラバーサル', packageName: 'symfony/dom-crawler', officialUrl: 'https://symfony.com/components/DomCrawler', features: ['CSS/XPath', 'フォーム', 'リンク抽出'] },

  // AI関連
  { id: 'php-openai', name: 'OpenAI PHP', category: 'ai', language: 'php', description: 'OpenAI API クライアント', packageName: 'openai-php/client', github: 'https://github.com/openai-php/client', features: ['GPT', 'DALL-E', 'Whisper'] },

  // DB操作関連
  { id: 'php-eloquent', name: 'Eloquent', category: 'database', language: 'php', description: 'Laravel標準ORM', packageName: 'illuminate/database', officialUrl: 'https://laravel.com/docs/eloquent', features: ['ActiveRecord', 'リレーション', 'マイグレーション'] },
  { id: 'php-doctrine', name: 'Doctrine ORM', category: 'database', language: 'php', description: 'エンタープライズORM。Data Mapper', packageName: 'doctrine/orm', officialUrl: 'https://www.doctrine-project.org/', features: ['Data Mapper', 'DQL', 'キャッシュ'] },
  { id: 'php-cycle', name: 'Cycle ORM', category: 'database', language: 'php', description: 'PHP 8対応の次世代ORM', packageName: 'cycle/orm', officialUrl: 'https://cycle-orm.dev/', features: ['PHP 8', 'スキーマ自動検出', 'シンプル'] },

  // タスク管理
  { id: 'php-laravel-queue', name: 'Laravel Queue', category: 'task-queue', language: 'php', description: 'Laravel標準ジョブキュー', officialUrl: 'https://laravel.com/docs/queues', features: ['マルチドライバ', 'リトライ', 'Horizon'] },
  { id: 'php-symfony-messenger', name: 'Symfony Messenger', category: 'task-queue', language: 'php', description: 'メッセージバス・キュー', packageName: 'symfony/messenger', officialUrl: 'https://symfony.com/components/Messenger', features: ['メッセージバス', 'トランスポート', '非同期'] },

  // 認証・認可
  { id: 'php-laravel-sanctum', name: 'Laravel Sanctum', category: 'auth', language: 'php', description: 'SPA/モバイル認証', packageName: 'laravel/sanctum', officialUrl: 'https://laravel.com/docs/sanctum', features: ['SPA', 'トークン', 'CSRF'] },
  { id: 'php-jwt-auth', name: 'PHP-JWT', category: 'auth', language: 'php', description: 'JWT実装ライブラリ', packageName: 'firebase/php-jwt', github: 'https://github.com/firebase/php-jwt', features: ['JWT', 'JWS', 'JWK'] },
  { id: 'php-socialite', name: 'Laravel Socialite', category: 'auth', language: 'php', description: 'ソーシャルログイン', packageName: 'laravel/socialite', officialUrl: 'https://laravel.com/docs/socialite', features: ['OAuth', 'マルチプロバイダ', 'シンプル'] },

  // HTTP通信
  { id: 'php-guzzle', name: 'Guzzle', category: 'http', language: 'php', description: 'PHP HTTPクライアント定番', packageName: 'guzzlehttp/guzzle', officialUrl: 'https://docs.guzzlephp.org/', features: ['PSR-7', '非同期', 'ミドルウェア'] },
  { id: 'php-symfony-http', name: 'Symfony HTTP Client', category: 'http', language: 'php', description: 'Symfony HTTPクライアント', packageName: 'symfony/http-client', officialUrl: 'https://symfony.com/components/HttpClient', features: ['PSR-18', '非同期', 'HTTP/2'] },

  // バリデーション
  { id: 'php-respect', name: 'Respect Validation', category: 'validation', language: 'php', description: '最も完全なバリデーション', packageName: 'respect/validation', officialUrl: 'https://respect-validation.readthedocs.io/', features: ['150+ルール', 'チェーン', 'カスタム'] },
  { id: 'php-valitron', name: 'Valitron', category: 'validation', language: 'php', description: 'シンプルなバリデーション', packageName: 'vlucas/valitron', github: 'https://github.com/vlucas/valitron', features: ['シンプル', '依存なし', '高速'] },

  // 日付・時間
  { id: 'php-carbon', name: 'Carbon', category: 'date', language: 'php', description: 'DateTime拡張ライブラリ', packageName: 'nesbot/carbon', officialUrl: 'https://carbon.nesbot.com/', features: ['DateTime拡張', 'ローカライズ', '差分計算'] },
  { id: 'php-chronos', name: 'Chronos', category: 'date', language: 'php', description: 'イミュータブル日付ライブラリ', packageName: 'cakephp/chronos', github: 'https://github.com/cakephp/chronos', features: ['イミュータブル', 'Carbon互換', '軽量'] },

  // ファイル操作
  { id: 'php-flysystem', name: 'Flysystem', category: 'file', language: 'php', description: 'ファイルシステム抽象化', packageName: 'league/flysystem', officialUrl: 'https://flysystem.thephpleague.com/', features: ['抽象化', 'S3/GCS対応', 'ローカル/クラウド'] },
  { id: 'php-csv', name: 'League CSV', category: 'file', language: 'php', description: 'CSV読み書きライブラリ', packageName: 'league/csv', officialUrl: 'https://csv.thephpleague.com/', features: ['CSV', 'ストリーム', 'フィルター'] },
  { id: 'php-spreadsheet', name: 'PhpSpreadsheet', category: 'file', language: 'php', description: 'Excel読み書き（PHPExcel後継）', packageName: 'phpoffice/phpspreadsheet', officialUrl: 'https://phpspreadsheet.readthedocs.io/', features: ['Excel', '多形式', '数式対応'] },

  // メール送信
  { id: 'php-swiftmailer', name: 'Symfony Mailer', category: 'email', language: 'php', description: 'Symfony製メール送信（SwiftMailer後継）', packageName: 'symfony/mailer', officialUrl: 'https://symfony.com/components/Mailer', features: ['SMTP', 'トランスポート', 'Twig連携'] },
  { id: 'php-phpmailer', name: 'PHPMailer', category: 'email', language: 'php', description: '古くからある定番メールライブラリ', packageName: 'phpmailer/phpmailer', github: 'https://github.com/PHPMailer/PHPMailer', features: ['SMTP', 'HTML', '添付'] },

  // 決済
  { id: 'php-stripe', name: 'Stripe PHP', category: 'payment', language: 'php', description: 'Stripe公式SDK', packageName: 'stripe/stripe-php', officialUrl: 'https://stripe.com/', features: ['決済', 'サブスク', 'Webhook'] },
  { id: 'php-omnipay', name: 'Omnipay', category: 'payment', language: 'php', description: '決済ゲートウェイ抽象化', packageName: 'omnipay/common', officialUrl: 'https://omnipay.thephpleague.com/', features: ['マルチゲートウェイ', '統一API', '拡張可能'] },

  // 検索
  { id: 'php-meilisearch', name: 'Meilisearch PHP', category: 'search', language: 'php', description: 'Meilisearch公式クライアント', packageName: 'meilisearch/meilisearch-php', officialUrl: 'https://www.meilisearch.com/', features: ['全文検索', 'ファセット', 'タイポ耐性'] },
  { id: 'php-elasticsearch', name: 'Elasticsearch PHP', category: 'search', language: 'php', description: 'Elasticsearch公式クライアント', packageName: 'elasticsearch/elasticsearch', officialUrl: 'https://www.elastic.co/', features: ['全文検索', 'クエリDSL', 'バルク'] },

  // ログ・監視
  { id: 'php-monolog', name: 'Monolog', category: 'logging', language: 'php', description: 'PSR-3準拠ロガー', packageName: 'monolog/monolog', github: 'https://github.com/Seldaek/monolog', features: ['PSR-3', 'ハンドラ', 'フォーマッタ'] },
  { id: 'php-sentry', name: 'Sentry PHP', category: 'logging', language: 'php', description: 'Sentryエラー追跡', packageName: 'sentry/sdk', officialUrl: 'https://sentry.io/', features: ['エラー追跡', 'パフォーマンス', 'Laravel連携'] },

  // PDF操作
  { id: 'php-dompdf', name: 'Dompdf', category: 'pdf', language: 'php', description: 'HTMLからPDF生成', packageName: 'dompdf/dompdf', github: 'https://github.com/dompdf/dompdf', features: ['HTML→PDF', 'CSS対応', '日本語対応'] },
  { id: 'php-tcpdf', name: 'TCPDF', category: 'pdf', language: 'php', description: 'PDF生成ライブラリ', packageName: 'tecnickcom/tcpdf', officialUrl: 'https://tcpdf.org/', features: ['PDF生成', '多機能', 'バーコード'] },
  { id: 'php-fpdf', name: 'FPDF', category: 'pdf', language: 'php', description: '軽量PDF生成', packageName: 'setasign/fpdf', officialUrl: 'http://www.fpdf.org/', features: ['軽量', 'シンプル', '依存なし'] },
  { id: 'php-snappy', name: 'Snappy', category: 'pdf', language: 'php', description: 'wkhtmltopdfラッパー', packageName: 'knplabs/knp-snappy', github: 'https://github.com/KnpLabs/snappy', features: ['wkhtmltopdf', '高品質', 'スクリーンショット'] },

  // ユーティリティ
  { id: 'php-collection', name: 'Laravel Collections', category: 'utility', language: 'php', description: '配列操作ユーティリティ', packageName: 'illuminate/collections', officialUrl: 'https://laravel.com/docs/collections', features: ['メソッドチェーン', '遅延評価', '豊富なメソッド'] },
  { id: 'php-uuid', name: 'Ramsey UUID', category: 'utility', language: 'php', description: 'UUID生成ライブラリ', packageName: 'ramsey/uuid', github: 'https://github.com/ramsey/uuid', features: ['UUID v1-v7', 'RFC準拠', '高品質'] },
  { id: 'php-faker', name: 'Faker', category: 'utility', language: 'php', description: 'ダミーデータ生成', packageName: 'fakerphp/faker', github: 'https://github.com/FakerPHP/Faker', features: ['ダミーデータ', 'ローカライズ', '多種類'] },

  // CLI作成
  { id: 'php-symfony-console', name: 'Symfony Console', category: 'cli', language: 'php', description: 'CLIアプリケーション構築', packageName: 'symfony/console', officialUrl: 'https://symfony.com/components/Console', features: ['コマンド', 'ヘルパー', 'プログレスバー'] },

  // CMS
  { id: 'php-wordpress', name: 'WordPress', category: 'cms', language: 'php', description: '世界シェアNo.1 CMS。豊富なプラグイン・テーマ', officialUrl: 'https://wordpress.org/', features: ['プラグイン', 'テーマ', 'REST API', 'ブロックエディタ'] },
  { id: 'php-drupal', name: 'Drupal', category: 'cms', language: 'php', description: 'エンタープライズ向け高機能CMS', officialUrl: 'https://www.drupal.org/', features: ['モジュール', 'マルチサイト', '多言語', 'セキュリティ'] },
  { id: 'php-joomla', name: 'Joomla', category: 'cms', language: 'php', description: '拡張性の高いオープンソースCMS', officialUrl: 'https://www.joomla.org/', features: ['エクステンション', 'ACL', '多言語'] },
  { id: 'php-typo3', name: 'TYPO3', category: 'cms', language: 'php', description: 'ドイツ発エンタープライズCMS', officialUrl: 'https://typo3.org/', features: ['エンタープライズ', 'マルチサイト', 'ワークフロー'] },
  { id: 'php-xoops', name: 'XOOPS', category: 'cms', language: 'php', description: '拡張性の高いオープンソースCMS', officialUrl: 'https://xoops.org/', features: ['エクステンション', 'ACL', '多言語'] },
  { id: 'php-craft', name: 'Craft CMS', category: 'cms', language: 'php', description: 'デベロッパーフレンドリーなCMS', packageName: 'craftcms/cms', officialUrl: 'https://craftcms.com/', features: ['カスタムフィールド', 'Twig', 'GraphQL', 'マルチサイト'] },
  { id: 'php-october', name: 'October CMS', category: 'cms', language: 'php', description: 'Laravel製モダンCMS', packageName: 'october/october', officialUrl: 'https://octobercms.com/', features: ['Laravelベース', 'プラグイン', 'マーケットプレイス'] },
  { id: 'php-concrete5', name: 'Concrete CMS', category: 'cms', language: 'php', description: 'インプレース編集が特徴のCMS', officialUrl: 'https://www.concretecms.org/', features: ['インプレース編集', 'ブロック', 'マーケットプレイス'] },
  { id: 'php-statamic', name: 'Statamic', category: 'cms', language: 'php', description: 'Laravelベースのフラットファイル/DB CMS', packageName: 'statamic/cms', officialUrl: 'https://statamic.com/', features: ['Laravelベース', 'フラットファイル', 'Git連携'] },
  { id: 'php-grav' , name:'Grav' , category:'cms' , language:'php' , description:'フラットファイルCMS。DB不要' , officialUrl:'https://getgrav.org/' , features:['フラットファイル','Markdownベース','高速'] },
  { id: 'php-pagekit', name: 'Pagekit', category: 'cms', language: 'php', description: 'モダンでモジュラーなCMS', github: 'https://github.com/pagekit/pagekit', officialUrl: 'https://pagekit.com/', features: ['Vue.js管理画面', 'モジュラー', 'UIKit'] },
  { id: 'php-processwire', name: 'ProcessWire', category: 'cms', language: 'php', description: 'フレキシブルなCMF/CMS', officialUrl: 'https://processwire.com/', features: ['API駆動', 'フィールドタイプ', '柔軟性'] },
]