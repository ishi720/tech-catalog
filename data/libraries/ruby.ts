import type { Library } from '~/types'

export const rubyLibraries: Library[] = [
  // フレームワーク
  { id: 'ruby-rails', name: 'Ruby on Rails', category: 'framework', language: 'ruby', description: 'フルスタックWebフレームワーク。CoC・DRY原則', packageName: 'rails', officialUrl: 'https://rubyonrails.org/', features: ['Active Record', 'Action Pack', 'MVC'] },
  { id: 'ruby-sinatra', name: 'Sinatra', category: 'framework', language: 'ruby', description: '軽量DSLフレームワーク', packageName: 'sinatra', officialUrl: 'https://sinatrarb.com/', features: ['軽量', 'DSL', 'ミニマル'] },
  { id: 'ruby-hanami', name: 'Hanami', category: 'framework', language: 'ruby', description: 'モダンWebフレームワーク', packageName: 'hanami', officialUrl: 'https://hanamirb.org/', features: ['クリーンアーキテクチャ', 'モジュラー', '高速'] },
  { id: 'ruby-grape', name: 'Grape', category: 'framework', language: 'ruby', description: 'REST API用マイクロフレームワーク', packageName: 'grape', github: 'https://github.com/ruby-grape/grape', features: ['API特化', 'DSL', 'Swagger'] },
  { id: 'ruby-roda', name: 'Roda', category: 'framework', language: 'ruby', description: 'ルーティングツリー型フレームワーク', packageName: 'roda', officialUrl: 'https://roda.jeremyevans.net/', features: ['高速', 'プラグイン', '軽量'] },
  { id: 'ruby-padrino', name: 'Padrino', category: 'framework', language: 'ruby', description: 'Sinatra拡張フレームワーク', packageName: 'padrino', officialUrl: 'https://padrinorb.com/', features: ['Sinatraベース', 'ジェネレータ', 'Admin'] },

  // テスト関連
  { id: 'ruby-rspec', name: 'RSpec', category: 'testing', language: 'ruby', description: 'BDDテストフレームワーク', packageName: 'rspec', officialUrl: 'https://rspec.info/', features: ['BDD', 'マッチャー', 'モック'] },
  { id: 'ruby-minitest', name: 'Minitest', category: 'testing', language: 'ruby', description: 'Ruby標準テストライブラリ', packageName: 'minitest', github: 'https://github.com/minitest/minitest', features: ['標準', '軽量', 'シンプル'] },
  { id: 'ruby-capybara', name: 'Capybara', category: 'testing', language: 'ruby', description: '統合テスト・E2Eテスト', packageName: 'capybara', github: 'https://github.com/teamcapybara/capybara', features: ['E2E', 'DSL', 'マルチドライバ'] },
  { id: 'ruby-factory-bot', name: 'FactoryBot', category: 'testing', language: 'ruby', description: 'テストデータファクトリ', packageName: 'factory_bot', github: 'https://github.com/thoughtbot/factory_bot', features: ['ファクトリ', 'トレイト', 'シーケンス'] },
  { id: 'ruby-faker', name: 'Faker', category: 'testing', language: 'ruby', description: 'ダミーデータ生成', packageName: 'faker', github: 'https://github.com/faker-ruby/faker', features: ['ダミーデータ', '多言語', '多カテゴリ'] },
  { id: 'ruby-vcr', name: 'VCR', category: 'testing', language: 'ruby', description: 'HTTPリクエスト記録・再生', packageName: 'vcr', github: 'https://github.com/vcr/vcr', features: ['HTTPモック', '記録', '再生'] },
  { id: 'ruby-webmock', name: 'WebMock', category: 'testing', language: 'ruby', description: 'HTTPリクエストスタブ', packageName: 'webmock', github: 'https://github.com/bblimke/webmock', features: ['HTTPスタブ', 'マッチング'] },

  // 画像関連
  { id: 'ruby-mini-magick', name: 'MiniMagick', category: 'image', language: 'ruby', description: 'ImageMagick軽量ラッパー', packageName: 'mini_magick', github: 'https://github.com/minimagick/minimagick', features: ['ImageMagick', '軽量', 'コマンドライン'] },
  { id: 'ruby-image-processing', name: 'ImageProcessing', category: 'image', language: 'ruby', description: '高レベル画像処理', packageName: 'image_processing', github: 'https://github.com/janko/image_processing', features: ['Vips', 'MiniMagick', '高レベルAPI'] },
  { id: 'ruby-carrierwave', name: 'CarrierWave', category: 'image', language: 'ruby', description: 'ファイルアップロード', packageName: 'carrierwave', github: 'https://github.com/carrierwaveuploader/carrierwave', features: ['アップロード', 'リサイズ', 'ストレージ'] },
  { id: 'ruby-shrine', name: 'Shrine', category: 'image', language: 'ruby', description: 'モダンファイルアップロード', packageName: 'shrine', officialUrl: 'https://shrinerb.com/', features: ['プラグイン', 'ダイレクトアップロード', 'バリデーション'] },

  // スクレイピング関連
  { id: 'ruby-nokogiri', name: 'Nokogiri', category: 'scraping', language: 'ruby', description: 'HTML/XMLパーサー定番', packageName: 'nokogiri', officialUrl: 'https://nokogiri.org/', features: ['XPath', 'CSS', '高速'] },
  { id: 'ruby-mechanize', name: 'Mechanize', category: 'scraping', language: 'ruby', description: 'Webスクレイピング自動化', packageName: 'mechanize', github: 'https://github.com/sparklemotion/mechanize', features: ['フォーム', 'クッキー', '履歴'] },
  { id: 'ruby-watir', name: 'Watir', category: 'scraping', language: 'ruby', description: 'ブラウザ自動化', packageName: 'watir', officialUrl: 'http://watir.com/', features: ['ブラウザ操作', 'Selenium', 'DSL'] },
  { id: 'ruby-ferrum', name: 'Ferrum', category: 'scraping', language: 'ruby', description: 'Chrome DevTools Protocol', packageName: 'ferrum', github: 'https://github.com/rubycdp/ferrum', features: ['ヘッドレス', 'CDP', '高速'] },

  // AI関連
  { id: 'ruby-ruby-openai', name: 'Ruby OpenAI', category: 'ai', language: 'ruby', description: 'OpenAI APIクライアント', packageName: 'ruby-openai', github: 'https://github.com/alexrudall/ruby-openai', features: ['GPT', 'DALL-E', 'Whisper'] },
  { id: 'ruby-anthropic', name: 'Anthropic Ruby', category: 'ai', language: 'ruby', description: 'Anthropic Claude API', packageName: 'anthropic', github: 'https://github.com/alexrudall/anthropic', features: ['Claude', 'ストリーム'] },
  { id: 'ruby-langchainrb', name: 'Langchain.rb', category: 'ai', language: 'ruby', description: 'LLMアプリケーション構築', packageName: 'langchainrb', github: 'https://github.com/patterns-ai-core/langchainrb', features: ['チェーン', 'RAG', 'エージェント'] },

  // DB操作関連
  { id: 'ruby-activerecord', name: 'Active Record', category: 'database', language: 'ruby', description: 'Rails標準ORM', packageName: 'activerecord', officialUrl: 'https://guides.rubyonrails.org/active_record_basics.html', features: ['ORM', 'マイグレーション', 'バリデーション'] },
  { id: 'ruby-sequel', name: 'Sequel', category: 'database', language: 'ruby', description: '軽量データベースツールキット', packageName: 'sequel', officialUrl: 'https://sequel.jeremyevans.net/', features: ['軽量', 'プラグイン', 'スレッドセーフ'] },
  { id: 'ruby-rom', name: 'ROM', category: 'database', language: 'ruby', description: 'Ruby Object Mapper', packageName: 'rom', officialUrl: 'https://rom-rb.org/', features: ['Data Mapper', 'アダプタ', '関数型'] },
  { id: 'ruby-mongoid', name: 'Mongoid', category: 'database', language: 'ruby', description: 'MongoDB ODM', packageName: 'mongoid', officialUrl: 'https://www.mongodb.com/docs/mongoid/', features: ['MongoDB', 'ODM', 'Rails連携'] },
  { id: 'ruby-redis', name: 'redis-rb', category: 'database', language: 'ruby', description: 'Redisクライアント', packageName: 'redis', github: 'https://github.com/redis/redis-rb', features: ['Redis', 'パイプライン', 'Pub/Sub'] },

  // タスク管理
  { id: 'ruby-sidekiq', name: 'Sidekiq', category: 'task-queue', language: 'ruby', description: 'バックグラウンドジョブ定番', packageName: 'sidekiq', officialUrl: 'https://sidekiq.org/', features: ['Redis', 'マルチスレッド', 'Web UI'] },
  { id: 'ruby-resque', name: 'Resque', category: 'task-queue', language: 'ruby', description: 'Redisバックエンドジョブ', packageName: 'resque', github: 'https://github.com/resque/resque', features: ['Redis', 'フォーク', 'プラグイン'] },
  { id: 'ruby-delayed-job', name: 'Delayed Job', category: 'task-queue', language: 'ruby', description: 'データベースバックエンドジョブ', packageName: 'delayed_job', github: 'https://github.com/collectiveidea/delayed_job', features: ['DB', 'シンプル', 'Active Job'] },
  { id: 'ruby-good-job', name: 'GoodJob', category: 'task-queue', language: 'ruby', description: 'PostgreSQLバックエンドジョブ', packageName: 'good_job', github: 'https://github.com/bensheldon/good_job', features: ['PostgreSQL', 'Active Job', 'Cron'] },
  { id: 'ruby-whenever', name: 'Whenever', category: 'task-queue', language: 'ruby', description: 'Cron管理DSL', packageName: 'whenever', github: 'https://github.com/javan/whenever', features: ['Cron', 'DSL', 'スケジュール'] },

  // 認証・認可
  { id: 'ruby-devise', name: 'Devise', category: 'auth', language: 'ruby', description: 'Rails認証ソリューション定番', packageName: 'devise', github: 'https://github.com/heartcombo/devise', features: ['認証', 'OmniAuth', 'モジュラー'] },
  { id: 'ruby-omniauth', name: 'OmniAuth', category: 'auth', language: 'ruby', description: 'OAuth認証ライブラリ', packageName: 'omniauth', github: 'https://github.com/omniauth/omniauth', features: ['OAuth', 'マルチプロバイダ', 'ストラテジー'] },
  { id: 'ruby-pundit', name: 'Pundit', category: 'auth', language: 'ruby', description: '認可ライブラリ', packageName: 'pundit', github: 'https://github.com/varvet/pundit', features: ['ポリシー', '認可', 'シンプル'] },
  { id: 'ruby-cancancan', name: 'CanCanCan', category: 'auth', language: 'ruby', description: '認可ライブラリ', packageName: 'cancancan', github: 'https://github.com/CanCanCommunity/cancancan', features: ['Ability', '認可', 'Rails'] },
  { id: 'ruby-jwt', name: 'ruby-jwt', category: 'auth', language: 'ruby', description: 'JWT実装', packageName: 'jwt', github: 'https://github.com/jwt/ruby-jwt', features: ['JWT', 'エンコード', 'デコード'] },
  { id: 'ruby-bcrypt', name: 'bcrypt-ruby', category: 'auth', language: 'ruby', description: 'パスワードハッシュ', packageName: 'bcrypt', github: 'https://github.com/bcrypt-ruby/bcrypt-ruby', features: ['bcrypt', 'ハッシュ', 'ソルト'] },
  { id: 'ruby-rodauth', name: 'Rodauth', category: 'auth', language: 'ruby', description: '高機能認証フレームワーク', packageName: 'rodauth', officialUrl: 'https://rodauth.jeremyevans.net/', features: ['2FA', 'WebAuthn', 'JWT'] },

  // HTTP通信
  { id: 'ruby-faraday', name: 'Faraday', category: 'http', language: 'ruby', description: 'HTTPクライアント定番', packageName: 'faraday', github: 'https://github.com/lostisland/faraday', features: ['ミドルウェア', 'アダプタ', '柔軟'] },
  { id: 'ruby-httparty', name: 'HTTParty', category: 'http', language: 'ruby', description: 'シンプルHTTPクライアント', packageName: 'httparty', github: 'https://github.com/jnunemaker/httparty', features: ['シンプル', 'JSON', 'XML'] },
  { id: 'ruby-rest-client', name: 'REST Client', category: 'http', language: 'ruby', description: 'RESTクライアント', packageName: 'rest-client', github: 'https://github.com/rest-client/rest-client', features: ['REST', 'シンプル', 'ファイル'] },
  { id: 'ruby-typhoeus', name: 'Typhoeus', category: 'http', language: 'ruby', description: '並列HTTPクライアント', packageName: 'typhoeus', github: 'https://github.com/typhoeus/typhoeus', features: ['並列', 'libcurl', '高速'] },
  { id: 'ruby-graphql', name: 'graphql-ruby', category: 'http', language: 'ruby', description: 'GraphQL実装', packageName: 'graphql', officialUrl: 'https://graphql-ruby.org/', features: ['GraphQL', 'スキーマ', 'Rails連携'] },

  // バリデーション
  { id: 'ruby-dry-validation', name: 'dry-validation', category: 'validation', language: 'ruby', description: '関数型バリデーション', packageName: 'dry-validation', officialUrl: 'https://dry-rb.org/gems/dry-validation/', features: ['スキーマ', 'ルール', '関数型'] },
  { id: 'ruby-dry-schema', name: 'dry-schema', category: 'validation', language: 'ruby', description: 'スキーマ定義・バリデーション', packageName: 'dry-schema', officialUrl: 'https://dry-rb.org/gems/dry-schema/', features: ['スキーマ', '型', 'コアーション'] },
  { id: 'ruby-activemodel', name: 'ActiveModel', category: 'validation', language: 'ruby', description: 'Rails標準バリデーション', packageName: 'activemodel', officialUrl: 'https://guides.rubyonrails.org/active_model_basics.html', features: ['バリデーション', 'コールバック', 'シリアライズ'] },

  // 日付・時間
  { id: 'ruby-activesupport-time', name: 'ActiveSupport Time', category: 'date', language: 'ruby', description: 'Rails時間拡張', packageName: 'activesupport', officialUrl: 'https://guides.rubyonrails.org/active_support_core_extensions.html', features: ['タイムゾーン', '計算', 'フォーマット'] },
  { id: 'ruby-ice-cube', name: 'IceCube', category: 'date', language: 'ruby', description: '繰り返しルールライブラリ', packageName: 'ice_cube', github: 'https://github.com/ice-cube-ruby/ice_cube', features: ['繰り返し', 'iCal', 'スケジュール'] },
  { id: 'ruby-chronic', name: 'Chronic', category: 'date', language: 'ruby', description: '自然言語日付パース', packageName: 'chronic', github: 'https://github.com/mojombo/chronic', features: ['自然言語', 'パース'] },

  // ファイル操作
  { id: 'ruby-activestorage', name: 'Active Storage', category: 'file', language: 'ruby', description: 'Rails標準ファイルアップロード', packageName: 'activestorage', officialUrl: 'https://guides.rubyonrails.org/active_storage_overview.html', features: ['S3', 'GCS', 'ダイレクトアップロード'] },
  { id: 'ruby-paperclip', name: 'Paperclip', category: 'file', language: 'ruby', description: 'ファイル添付（非推奨）', packageName: 'paperclip', github: 'https://github.com/thoughtbot/paperclip', features: ['添付', 'リサイズ', 'S3'], notes: 'Active Storage推奨' },
  { id: 'ruby-roo', name: 'Roo', category: 'file', language: 'ruby', description: 'スプレッドシート読み込み', packageName: 'roo', github: 'https://github.com/roo-rb/roo', features: ['Excel', 'CSV', 'Google'] },
  { id: 'ruby-caxlsx', name: 'Caxlsx', category: 'file', language: 'ruby', description: 'Excel生成', packageName: 'caxlsx', github: 'https://github.com/caxlsx/caxlsx', features: ['Excel', 'スタイル', 'チャート'] },
  { id: 'ruby-rubyzip', name: 'Rubyzip', category: 'file', language: 'ruby', description: 'ZIP操作', packageName: 'rubyzip', github: 'https://github.com/rubyzip/rubyzip', features: ['ZIP', '圧縮', '展開'] },
  { id: 'ruby-csv', name: 'CSV', category: 'file', language: 'ruby', description: 'Ruby標準CSVライブラリ', officialUrl: 'https://ruby-doc.org/stdlib/libdoc/csv/rdoc/CSV.html', features: ['標準', '読み書き', 'パース'] },

  // メール送信
  { id: 'ruby-actionmailer', name: 'Action Mailer', category: 'email', language: 'ruby', description: 'Rails標準メール', packageName: 'actionmailer', officialUrl: 'https://guides.rubyonrails.org/action_mailer_basics.html', features: ['テンプレート', 'マルチパート', '添付'] },
  { id: 'ruby-mail', name: 'Mail', category: 'email', language: 'ruby', description: 'メールライブラリ', packageName: 'mail', github: 'https://github.com/mikel/mail', features: ['SMTP', 'パース', '生成'] },
  { id: 'ruby-letter-opener', name: 'Letter Opener', category: 'email', language: 'ruby', description: '開発用メールプレビュー', packageName: 'letter_opener', github: 'https://github.com/ryanb/letter_opener', features: ['開発用', 'プレビュー', 'ブラウザ'] },

  // 決済
  { id: 'ruby-stripe', name: 'Stripe Ruby', category: 'payment', language: 'ruby', description: 'Stripe公式SDK', packageName: 'stripe', officialUrl: 'https://stripe.com/', features: ['決済', 'サブスク', 'Webhook'] },
  { id: 'ruby-pay', name: 'Pay', category: 'payment', language: 'ruby', description: 'Rails決済統合', packageName: 'pay', github: 'https://github.com/pay-rails/pay', features: ['Stripe', 'Paddle', 'サブスク'] },
  { id: 'ruby-activemerchant', name: 'Active Merchant', category: 'payment', language: 'ruby', description: '決済ゲートウェイ抽象化', packageName: 'activemerchant', github: 'https://github.com/activemerchant/active_merchant', features: ['マルチゲートウェイ', '統一API'] },

  // 検索
  { id: 'ruby-elasticsearch', name: 'elasticsearch-ruby', category: 'search', language: 'ruby', description: 'Elasticsearch公式クライアント', packageName: 'elasticsearch', officialUrl: 'https://www.elastic.co/', features: ['Elasticsearch', '全文検索'] },
  { id: 'ruby-searchkick', name: 'Searchkick', category: 'search', language: 'ruby', description: 'Rails用Elasticsearch', packageName: 'searchkick', github: 'https://github.com/ankane/searchkick', features: ['Rails', 'Elasticsearch', 'シンプル'] },
  { id: 'ruby-ransack', name: 'Ransack', category: 'search', language: 'ruby', description: 'オブジェクトベース検索', packageName: 'ransack', github: 'https://github.com/activerecord-hackery/ransack', features: ['検索フォーム', 'ソート', 'Active Record'] },
  { id: 'ruby-pg-search', name: 'pg_search', category: 'search', language: 'ruby', description: 'PostgreSQL全文検索', packageName: 'pg_search', github: 'https://github.com/Casecommons/pg_search', features: ['PostgreSQL', '全文検索', 'トリグラム'] },
  { id: 'ruby-meilisearch', name: 'Meilisearch Rails', category: 'search', language: 'ruby', description: 'Meilisearch統合', packageName: 'meilisearch-rails', github: 'https://github.com/meilisearch/meilisearch-rails', features: ['Meilisearch', '高速', 'Rails'] },

  // ログ・監視
  { id: 'ruby-rails-logger', name: 'Rails Logger', category: 'logging', language: 'ruby', description: 'Rails標準ロガー', officialUrl: 'https://guides.rubyonrails.org/debugging_rails_applications.html', features: ['標準', 'ログレベル'] },
  { id: 'ruby-lograge', name: 'Lograge', category: 'logging', language: 'ruby', description: 'Railsログ整形', packageName: 'lograge', github: 'https://github.com/roidrage/lograge', features: ['整形', 'JSON', 'シンプル'] },
  { id: 'ruby-semantic-logger', name: 'Semantic Logger', category: 'logging', language: 'ruby', description: '高機能ロガー', packageName: 'semantic_logger', officialUrl: 'https://logger.rocketjob.io/', features: ['構造化', 'マルチ出力', 'メトリクス'] },
  { id: 'ruby-sentry', name: 'Sentry Ruby', category: 'logging', language: 'ruby', description: 'エラートラッキング', packageName: 'sentry-ruby', officialUrl: 'https://sentry.io/', features: ['エラー追跡', 'パフォーマンス'] },
  { id: 'ruby-newrelic', name: 'New Relic', category: 'logging', language: 'ruby', description: 'APMモニタリング', packageName: 'newrelic_rpm', officialUrl: 'https://newrelic.com/', features: ['APM', 'トレース', 'メトリクス'] },

  // UIコンポーネント（テンプレート）
  { id: 'ruby-erb', name: 'ERB', category: 'ui', language: 'ruby', description: 'Ruby標準テンプレート', officialUrl: 'https://ruby-doc.org/stdlib/libdoc/erb/rdoc/ERB.html', features: ['標準', 'HTML', 'Ruby埋め込み'] },
  { id: 'ruby-haml', name: 'Haml', category: 'ui', language: 'ruby', description: '簡潔なテンプレートエンジン', packageName: 'haml', officialUrl: 'https://haml.info/', features: ['簡潔', 'インデント', 'Ruby'] },
  { id: 'ruby-slim', name: 'Slim', category: 'ui', language: 'ruby', description: '軽量テンプレートエンジン', packageName: 'slim', officialUrl: 'http://slim-lang.com/', features: ['軽量', '高速', 'ミニマル'] },
  { id: 'ruby-viewcomponent', name: 'ViewComponent', category: 'ui', language: 'ruby', description: 'Railsビューコンポーネント', packageName: 'view_component', officialUrl: 'https://viewcomponent.org/', features: ['コンポーネント', 'テスタブル', 'Rails'] },
  { id: 'ruby-phlex', name: 'Phlex', category: 'ui', language: 'ruby', description: 'Rubyオブジェクトビュー', packageName: 'phlex', officialUrl: 'https://www.phlex.fun/', features: ['Ruby', '高速', 'コンポーネント'] },

  // 状態管理
  { id: 'ruby-rails-cache', name: 'Rails Cache', category: 'state', language: 'ruby', description: 'Rails標準キャッシュ', officialUrl: 'https://guides.rubyonrails.org/caching_with_rails.html', features: ['フラグメント', 'ロシアンドール', 'Memcached'] },
  { id: 'ruby-kredis', name: 'Kredis', category: 'state', language: 'ruby', description: 'Redis高レベルAPI', packageName: 'kredis', github: 'https://github.com/rails/kredis', features: ['Redis', '型付き', 'Rails'] },

  // 国際化
  { id: 'ruby-i18n', name: 'I18n', category: 'i18n', language: 'ruby', description: 'Ruby国際化標準', packageName: 'i18n', github: 'https://github.com/ruby-i18n/i18n', features: ['翻訳', 'ロケール', 'フォールバック'] },
  { id: 'ruby-rails-i18n', name: 'rails-i18n', category: 'i18n', language: 'ruby', description: 'Rails翻訳ファイル集', packageName: 'rails-i18n', github: 'https://github.com/svenfuchs/rails-i18n', features: ['翻訳', '多言語', 'Rails'] },
  { id: 'ruby-globalize', name: 'Globalize', category: 'i18n', language: 'ruby', description: 'モデル翻訳', packageName: 'globalize', github: 'https://github.com/globalize/globalize', features: ['モデル翻訳', 'Active Record'] },

  // リアルタイム通信
  { id: 'ruby-actioncable', name: 'Action Cable', category: 'realtime', language: 'ruby', description: 'Rails WebSocket', packageName: 'actioncable', officialUrl: 'https://guides.rubyonrails.org/action_cable_overview.html', features: ['WebSocket', 'チャンネル', 'Rails'] },
  { id: 'ruby-anycable', name: 'AnyCable', category: 'realtime', language: 'ruby', description: '高性能WebSocket', packageName: 'anycable', officialUrl: 'https://anycable.io/', features: ['高性能', 'Go', 'Action Cable互換'] },
  { id: 'ruby-faye', name: 'Faye', category: 'realtime', language: 'ruby', description: 'Pub/Subメッセージング', packageName: 'faye', officialUrl: 'https://faye.jcoglan.com/', features: ['Pub/Sub', 'WebSocket', 'Bayeux'] },

  // PDF操作
  { id: 'ruby-prawn', name: 'Prawn', category: 'pdf', language: 'ruby', description: 'PDF生成ライブラリ', packageName: 'prawn', officialUrl: 'https://prawnpdf.org/', features: ['PDF生成', 'テキスト', '画像'] },
  { id: 'ruby-wicked-pdf', name: 'Wicked PDF', category: 'pdf', language: 'ruby', description: 'HTML→PDF変換', packageName: 'wicked_pdf', github: 'https://github.com/mileszs/wicked_pdf', features: ['wkhtmltopdf', 'HTML', 'Rails'] },
  { id: 'ruby-pdfkit', name: 'PDFKit', category: 'pdf', language: 'ruby', description: 'HTML→PDF変換', packageName: 'pdfkit', github: 'https://github.com/pdfkit/pdfkit', features: ['wkhtmltopdf', 'HTML'] },
  { id: 'ruby-hexapdf', name: 'HexaPDF', category: 'pdf', language: 'ruby', description: 'PDF操作ライブラリ', packageName: 'hexapdf', officialUrl: 'https://hexapdf.gettalong.org/', features: ['PDF操作', '編集', '最適化'] },
  { id: 'ruby-combinepdf', name: 'CombinePDF', category: 'pdf', language: 'ruby', description: 'PDFマージ', packageName: 'combine_pdf', github: 'https://github.com/boazsegev/combine_pdf', features: ['マージ', '分割', '透かし'] },

  // 動画・音声
  { id: 'ruby-streamio-ffmpeg', name: 'Streamio FFMPEG', category: 'video-audio', language: 'ruby', description: 'FFmpegラッパー', packageName: 'streamio-ffmpeg', github: 'https://github.com/streamio/streamio-ffmpeg', features: ['動画変換', 'メタデータ', 'サムネイル'] },

  // ユーティリティ
  { id: 'ruby-activesupport', name: 'ActiveSupport', category: 'utility', language: 'ruby', description: 'Railsコア拡張', packageName: 'activesupport', officialUrl: 'https://guides.rubyonrails.org/active_support_core_extensions.html', features: ['拡張', 'ヘルパー', 'コア'] },
  { id: 'ruby-hashie', name: 'Hashie', category: 'utility', language: 'ruby', description: 'Hash拡張ライブラリ', packageName: 'hashie', github: 'https://github.com/hashie/hashie', features: ['Hash拡張', 'Mash', 'メソッドアクセス'] },
  { id: 'ruby-dry-types', name: 'dry-types', category: 'utility', language: 'ruby', description: '型システム', packageName: 'dry-types', officialUrl: 'https://dry-rb.org/gems/dry-types/', features: ['型', 'コアーション', '制約'] },
  { id: 'ruby-dry-struct', name: 'dry-struct', category: 'utility', language: 'ruby', description: '型付き構造体', packageName: 'dry-struct', officialUrl: 'https://dry-rb.org/gems/dry-struct/', features: ['構造体', '型', 'イミュータブル'] },

  // CLI作成
  { id: 'ruby-thor', name: 'Thor', category: 'cli', language: 'ruby', description: 'CLIツールキット', packageName: 'thor', github: 'https://github.com/rails/thor', features: ['CLI', 'ジェネレータ', 'Rails使用'] },
  { id: 'ruby-tty', name: 'TTY', category: 'cli', language: 'ruby', description: 'CLI作成ツールキット', packageName: 'tty', officialUrl: 'https://ttytoolkit.org/', features: ['プロンプト', 'テーブル', 'プログレス'] },
  { id: 'ruby-gli', name: 'GLI', category: 'cli', language: 'ruby', description: 'Git風CLIフレームワーク', packageName: 'gli', github: 'https://github.com/davetron5000/gli', features: ['サブコマンド', 'Git風', 'DSL'] },
  { id: 'ruby-colorize', name: 'Colorize', category: 'cli', language: 'ruby', description: '文字色付け', packageName: 'colorize', github: 'https://github.com/fazibear/colorize', features: ['色', 'スタイル', 'シンプル'] },

  // グラフ・可視化
  { id: 'ruby-chartkick', name: 'Chartkick', category: 'chart', language: 'ruby', description: 'Rails用チャート', packageName: 'chartkick', officialUrl: 'https://chartkick.com/', features: ['Chart.js', 'Highcharts', 'Rails'] },
  { id: 'ruby-gruff', name: 'Gruff', category: 'chart', language: 'ruby', description: 'グラフ生成', packageName: 'gruff', github: 'https://github.com/topfunky/gruff', features: ['画像', 'グラフ', 'サーバーサイド'] },
]
