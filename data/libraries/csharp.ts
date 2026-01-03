import type { Library } from '~/types'

export const csharpLibraries: Library[] = [
  // ==================== フレームワーク ====================
  { id: 'cs-aspnetcore', name: 'ASP.NET Core', category: 'framework', language: 'csharp', description: 'クロスプラットフォームWebフレームワーク', packageName: 'Microsoft.AspNetCore.App', officialUrl: 'https://dotnet.microsoft.com/apps/aspnet', features: ['MVC', 'Razor Pages', 'Minimal APIs'] },
  { id: 'cs-blazor', name: 'Blazor', category: 'framework', language: 'csharp', description: 'C#でSPA開発。WebAssembly/Server', packageName: 'Microsoft.AspNetCore.Components', officialUrl: 'https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor', features: ['WebAssembly', 'Server', 'コンポーネント'] },
  { id: 'cs-maui', name: '.NET MAUI', category: 'framework', language: 'csharp', description: 'クロスプラットフォームUI', packageName: 'Microsoft.Maui.Controls', officialUrl: 'https://dotnet.microsoft.com/apps/maui', features: ['iOS', 'Android', 'Windows', 'macOS'] },
  { id: 'cs-orleans', name: 'Orleans', category: 'framework', language: 'csharp', description: '分散アクターフレームワーク', packageName: 'Microsoft.Orleans.Server', officialUrl: 'https://dotnet.github.io/orleans/', features: ['アクター', '分散', 'スケーラブル'] },
  { id: 'cs-abp', name: 'ABP Framework', category: 'framework', language: 'csharp', description: 'アプリケーションフレームワーク', packageName: 'Volo.Abp.Core', officialUrl: 'https://abp.io/', features: ['モジュラー', 'DDD', 'マルチテナント'] },
  { id: 'cs-servicestack', name: 'ServiceStack', category: 'framework', language: 'csharp', description: '高性能Webサービスフレームワーク', packageName: 'ServiceStack', officialUrl: 'https://servicestack.net/', features: ['REST', 'gRPC', 'MQ'] },
  { id: 'cs-nancy', name: 'Nancy', category: 'framework', language: 'csharp', description: '軽量Webフレームワーク', packageName: 'Nancy', github: 'https://github.com/NancyFx/Nancy', features: ['軽量', 'Sinatra風', 'ルーティング'] },

  // ==================== テスト ====================
  { id: 'cs-xunit', name: 'xUnit', category: 'testing', language: 'csharp', description: '.NET標準テストフレームワーク', packageName: 'xunit', officialUrl: 'https://xunit.net/', features: ['ファクト', 'セオリー', 'パラレル'] },
  { id: 'cs-nunit', name: 'NUnit', category: 'testing', language: 'csharp', description: '定番テストフレームワーク', packageName: 'NUnit', officialUrl: 'https://nunit.org/', features: ['アサーション', 'セットアップ', 'パラメータ化'] },
  { id: 'cs-mstest', name: 'MSTest', category: 'testing', language: 'csharp', description: 'Microsoft公式テストフレームワーク', packageName: 'MSTest.TestFramework', officialUrl: 'https://docs.microsoft.com/dotnet/core/testing/', features: ['VS統合', 'DataRow', 'クラス初期化'] },
  { id: 'cs-moq', name: 'Moq', category: 'testing', language: 'csharp', description: 'モックライブラリ定番', packageName: 'Moq', github: 'https://github.com/moq/moq4', features: ['モック', 'スタブ', 'ラムダ'] },
  { id: 'cs-nsubstitute', name: 'NSubstitute', category: 'testing', language: 'csharp', description: 'フレンドリーなモックライブラリ', packageName: 'NSubstitute', officialUrl: 'https://nsubstitute.github.io/', features: ['シンプル', '読みやすい', 'モック'] },
  { id: 'cs-fluentassertions', name: 'FluentAssertions', category: 'testing', language: 'csharp', description: '流暢なアサーション', packageName: 'FluentAssertions', officialUrl: 'https://fluentassertions.com/', features: ['可読性', 'チェーン', 'メッセージ'] },
  { id: 'cs-bogus', name: 'Bogus', category: 'testing', language: 'csharp', description: 'フェイクデータ生成', packageName: 'Bogus', github: 'https://github.com/bchavez/Bogus', features: ['Faker', 'ローカライズ', 'シード'] },
  { id: 'cs-autofixture', name: 'AutoFixture', category: 'testing', language: 'csharp', description: 'テストデータ自動生成', packageName: 'AutoFixture', github: 'https://github.com/AutoFixture/AutoFixture', features: ['自動生成', 'カスタマイズ', 'xUnit統合'] },
  { id: 'cs-specflow', name: 'SpecFlow', category: 'testing', language: 'csharp', description: 'BDDテストフレームワーク', packageName: 'SpecFlow', officialUrl: 'https://specflow.org/', features: ['Gherkin', 'BDD', 'シナリオ'] },
  { id: 'cs-playwright-dotnet', name: 'Playwright .NET', category: 'testing', language: 'csharp', description: 'E2Eテスト・ブラウザ自動化', packageName: 'Microsoft.Playwright', officialUrl: 'https://playwright.dev/dotnet/', features: ['E2E', 'マルチブラウザ', '自動待機'] },

  // ==================== 画像関連 ====================
  { id: 'cs-imagesharp', name: 'ImageSharp', category: 'image', language: 'csharp', description: 'クロスプラットフォーム画像処理', packageName: 'SixLabors.ImageSharp', officialUrl: 'https://sixlabors.com/products/imagesharp/', features: ['リサイズ', 'フィルタ', 'フォーマット変換'] },
  { id: 'cs-skiasharp', name: 'SkiaSharp', category: 'image', language: 'csharp', description: 'Skia 2Dグラフィックス', packageName: 'SkiaSharp', github: 'https://github.com/mono/SkiaSharp', features: ['2D描画', 'GPU', 'クロスプラットフォーム'] },
  { id: 'cs-magicknet', name: 'Magick.NET', category: 'image', language: 'csharp', description: 'ImageMagick .NETラッパー', packageName: 'Magick.NET-Q8-AnyCPU', github: 'https://github.com/dlemstra/Magick.NET', features: ['ImageMagick', '高機能', '多フォーマット'] },

  // ==================== スクレイピング ====================
  { id: 'cs-htmlagilitypack', name: 'HtmlAgilityPack', category: 'scraping', language: 'csharp', description: 'HTML パーサー定番', packageName: 'HtmlAgilityPack', officialUrl: 'https://html-agility-pack.net/', features: ['XPath', 'LINQ', 'DOM操作'] },
  { id: 'cs-anglesharp', name: 'AngleSharp', category: 'scraping', language: 'csharp', description: 'W3C準拠HTMLパーサー', packageName: 'AngleSharp', officialUrl: 'https://anglesharp.github.io/', features: ['W3C準拠', 'CSS', 'JavaScript'] },
  { id: 'cs-puppeteersharp', name: 'PuppeteerSharp', category: 'scraping', language: 'csharp', description: 'Puppeteer .NET版', packageName: 'PuppeteerSharp', github: 'https://github.com/hardkoded/puppeteer-sharp', features: ['ヘッドレス', 'Chrome', 'スクリーンショット'] },

  // ==================== AI/ML ====================
  { id: 'cs-mlnet', name: 'ML.NET', category: 'ai', language: 'csharp', description: 'Microsoft機械学習フレームワーク', packageName: 'Microsoft.ML', officialUrl: 'https://dotnet.microsoft.com/apps/machinelearning-ai/ml-dotnet', features: ['分類', '回帰', 'AutoML'] },
  { id: 'cs-semantickernel', name: 'Semantic Kernel', category: 'ai', language: 'csharp', description: 'LLMオーケストレーション', packageName: 'Microsoft.SemanticKernel', github: 'https://github.com/microsoft/semantic-kernel', features: ['LLM', 'プラグイン', 'プランナー'] },
  { id: 'cs-openai', name: 'Azure OpenAI SDK', category: 'ai', language: 'csharp', description: 'Azure OpenAI公式SDK', packageName: 'Azure.AI.OpenAI', officialUrl: 'https://azure.microsoft.com/products/cognitive-services/openai-service/', features: ['GPT', 'DALL-E', 'Whisper'] },
  { id: 'cs-openai-community', name: 'OpenAI .NET', category: 'ai', language: 'csharp', description: 'OpenAI公式.NET SDK', packageName: 'OpenAI', officialUrl: 'https://platform.openai.com/', features: ['GPT', 'Assistants', 'ストリーム'] },
  { id: 'cs-llamasharp', name: 'LLamaSharp', category: 'ai', language: 'csharp', description: 'LLaMA .NETバインディング', packageName: 'LLamaSharp', github: 'https://github.com/SciSharp/LLamaSharp', features: ['ローカルLLM', 'llama.cpp', 'GPU'] },
  { id: 'cs-torchsharp', name: 'TorchSharp', category: 'ai', language: 'csharp', description: 'PyTorch .NETバインディング', packageName: 'TorchSharp', github: 'https://github.com/dotnet/TorchSharp', features: ['深層学習', 'PyTorch', 'GPU'] },

  // ==================== DB操作 ====================
  { id: 'cs-efcore', name: 'Entity Framework Core', category: 'database', language: 'csharp', description: '.NET公式ORM', packageName: 'Microsoft.EntityFrameworkCore', officialUrl: 'https://docs.microsoft.com/ef/core/', features: ['ORM', 'LINQ', 'マイグレーション'] },
  { id: 'cs-dapper', name: 'Dapper', category: 'database', language: 'csharp', description: '軽量マイクロORM', packageName: 'Dapper', github: 'https://github.com/DapperLib/Dapper', features: ['高速', '軽量', 'SQL直書き'] },
  { id: 'cs-nhibernate', name: 'NHibernate', category: 'database', language: 'csharp', description: '成熟したORM', packageName: 'NHibernate', officialUrl: 'https://nhibernate.info/', features: ['Hibernate移植', 'HQL', 'キャッシュ'] },
  { id: 'cs-linq2db', name: 'linq2db', category: 'database', language: 'csharp', description: 'LINQ to SQL実装', packageName: 'linq2db', github: 'https://github.com/linq2db/linq2db', features: ['高速', 'LINQ', 'マルチDB'] },
  { id: 'cs-npgsql', name: 'Npgsql', category: 'database', language: 'csharp', description: 'PostgreSQLドライバ', packageName: 'Npgsql', officialUrl: 'https://www.npgsql.org/', features: ['PostgreSQL', 'EF Core対応', '非同期'] },
  { id: 'cs-mongodb-driver', name: 'MongoDB Driver', category: 'database', language: 'csharp', description: 'MongoDB公式ドライバ', packageName: 'MongoDB.Driver', officialUrl: 'https://www.mongodb.com/docs/drivers/csharp/', features: ['MongoDB', 'LINQ', '非同期'] },
  { id: 'cs-stackexchange-redis', name: 'StackExchange.Redis', category: 'database', language: 'csharp', description: 'Redisクライアント', packageName: 'StackExchange.Redis', github: 'https://github.com/StackExchange/StackExchange.Redis', features: ['Redis', 'Pub/Sub', '高性能'] },
  { id: 'cs-litedb', name: 'LiteDB', category: 'database', language: 'csharp', description: '組み込みNoSQLデータベース', packageName: 'LiteDB', officialUrl: 'https://www.litedb.org/', features: ['組み込み', 'ドキュメント', 'サーバーレス'] },

  // ==================== タスク管理 ====================
  { id: 'cs-hangfire', name: 'Hangfire', category: 'task-queue', language: 'csharp', description: 'バックグラウンドジョブ処理', packageName: 'Hangfire', officialUrl: 'https://www.hangfire.io/', features: ['ダッシュボード', 'リトライ', 'スケジュール'] },
  { id: 'cs-quartz', name: 'Quartz.NET', category: 'task-queue', language: 'csharp', description: 'ジョブスケジューラ', packageName: 'Quartz', officialUrl: 'https://www.quartz-scheduler.net/', features: ['Cron', 'クラスタ', 'トリガー'] },
  { id: 'cs-coravel', name: 'Coravel', category: 'task-queue', language: 'csharp', description: '軽量タスクスケジューラ', packageName: 'Coravel', github: 'https://github.com/jamesmh/coravel', features: ['軽量', 'キュー', 'イベント'] },

  // ==================== 認証・認可 ====================
  { id: 'cs-identity', name: 'ASP.NET Core Identity', category: 'auth', language: 'csharp', description: '標準認証システム', packageName: 'Microsoft.AspNetCore.Identity.EntityFrameworkCore', officialUrl: 'https://docs.microsoft.com/aspnet/core/security/authentication/identity', features: ['ユーザー管理', 'ロール', '2FA'] },
  { id: 'cs-identityserver', name: 'Duende IdentityServer', category: 'auth', language: 'csharp', description: 'OpenID Connect/OAuth2サーバー', packageName: 'Duende.IdentityServer', officialUrl: 'https://duendesoftware.com/products/identityserver', features: ['OIDC', 'OAuth2', 'SSO'] },
  { id: 'cs-jwt', name: 'System.IdentityModel.Tokens.Jwt', category: 'auth', language: 'csharp', description: 'JWT処理ライブラリ', packageName: 'System.IdentityModel.Tokens.Jwt', officialUrl: 'https://github.com/AzureAD/azure-activedirectory-identitymodel-extensions-for-dotnet', features: ['JWT', '署名', '検証'] },
  { id: 'cs-bcrypt', name: 'BCrypt.Net', category: 'auth', language: 'csharp', description: 'パスワードハッシュ', packageName: 'BCrypt.Net-Next', github: 'https://github.com/BcryptNet/bcrypt.net', features: ['bcrypt', 'ハッシュ', 'ソルト'] },

  // ==================== HTTP通信 ====================
  { id: 'cs-httpclient', name: 'HttpClient', category: 'http', language: 'csharp', description: '.NET標準HTTPクライアント', officialUrl: 'https://docs.microsoft.com/dotnet/api/system.net.http.httpclient', features: ['標準', '非同期', 'IHttpClientFactory'] },
  { id: 'cs-restsharp', name: 'RestSharp', category: 'http', language: 'csharp', description: 'REST APIクライアント', packageName: 'RestSharp', officialUrl: 'https://restsharp.dev/', features: ['REST', 'シリアライズ', '認証'] },
  { id: 'cs-refit', name: 'Refit', category: 'http', language: 'csharp', description: '型安全REST APIクライアント', packageName: 'Refit', github: 'https://github.com/reactiveui/refit', features: ['インターフェース', '自動生成', '型安全'] },
  { id: 'cs-flurl', name: 'Flurl', category: 'http', language: 'csharp', description: '流暢なHTTPクライアント', packageName: 'Flurl.Http', officialUrl: 'https://flurl.dev/', features: ['流暢', 'URLビルダー', 'テスト'] },
  { id: 'cs-grpc', name: 'gRPC for .NET', category: 'http', language: 'csharp', description: 'gRPC公式実装', packageName: 'Grpc.Net.Client', officialUrl: 'https://grpc.io/docs/languages/csharp/', features: ['gRPC', 'Protocol Buffers', 'ストリーム'] },
  { id: 'cs-graphql-client', name: 'GraphQL.Client', category: 'http', language: 'csharp', description: 'GraphQLクライアント', packageName: 'GraphQL.Client', github: 'https://github.com/graphql-dotnet/graphql-client', features: ['GraphQL', 'サブスクリプション', 'WebSocket'] },
  { id: 'cs-hotchocolate', name: 'Hot Chocolate', category: 'http', language: 'csharp', description: 'GraphQLサーバー', packageName: 'HotChocolate.AspNetCore', officialUrl: 'https://chillicream.com/docs/hotchocolate/', features: ['GraphQL', 'スキーマ', 'リゾルバ'] },

  // ==================== バリデーション ====================
  { id: 'cs-fluentvalidation', name: 'FluentValidation', category: 'validation', language: 'csharp', description: '流暢なバリデーションライブラリ', packageName: 'FluentValidation', officialUrl: 'https://docs.fluentvalidation.net/', features: ['流暢', 'ルール', 'カスタム'] },
  { id: 'cs-dataannotations', name: 'DataAnnotations', category: 'validation', language: 'csharp', description: '.NET標準バリデーション', officialUrl: 'https://docs.microsoft.com/dotnet/api/system.componentmodel.dataannotations', features: ['属性', '標準', 'モデル'] },

  // ==================== 日付・時間 ====================
  { id: 'cs-nodatime', name: 'NodaTime', category: 'date', language: 'csharp', description: '高機能日付・時間ライブラリ', packageName: 'NodaTime', officialUrl: 'https://nodatime.org/', features: ['タイムゾーン', 'イミュータブル', '精密'] },
  { id: 'cs-humanizer', name: 'Humanizer', category: 'date', language: 'csharp', description: '日付/文字列の人間可読化', packageName: 'Humanizer', github: 'https://github.com/Humanizr/Humanizer', features: ['相対時間', '複数形', '多言語'] },

  // ==================== ファイル操作 ====================
  { id: 'cs-npoi', name: 'NPOI', category: 'file', language: 'csharp', description: 'Excel/Word操作', packageName: 'NPOI', github: 'https://github.com/nissl-lab/npoi', features: ['Excel', 'Word', 'POI移植'] },
  { id: 'cs-epplus', name: 'EPPlus', category: 'file', language: 'csharp', description: 'Excel操作（xlsx）', packageName: 'EPPlus', officialUrl: 'https://epplussoftware.com/', features: ['Excel', 'チャート', 'ピボット'] },
  { id: 'cs-closedxml', name: 'ClosedXML', category: 'file', language: 'csharp', description: 'シンプルなExcel操作', packageName: 'ClosedXML', github: 'https://github.com/ClosedXML/ClosedXML', features: ['Excel', 'シンプル', 'スタイル'] },
  { id: 'cs-csvhelper', name: 'CsvHelper', category: 'file', language: 'csharp', description: 'CSV読み書き', packageName: 'CsvHelper', officialUrl: 'https://joshclose.github.io/CsvHelper/', features: ['CSV', 'マッピング', '高速'] },
  { id: 'cs-sharpziplib', name: 'SharpZipLib', category: 'file', language: 'csharp', description: '圧縮・解凍ライブラリ', packageName: 'SharpZipLib', github: 'https://github.com/icsharpcode/SharpZipLib', features: ['ZIP', 'GZip', 'TAR'] },

  // ==================== メール送信 ====================
  { id: 'cs-mailkit', name: 'MailKit', category: 'email', language: 'csharp', description: '高機能メールライブラリ', packageName: 'MailKit', officialUrl: 'http://www.mimekit.net/', features: ['SMTP', 'IMAP', 'POP3'] },
  { id: 'cs-fluentemail', name: 'FluentEmail', category: 'email', language: 'csharp', description: '流暢なメール送信', packageName: 'FluentEmail.Core', github: 'https://github.com/lukencode/FluentEmail', features: ['流暢', 'テンプレート', 'マルチプロバイダ'] },
  { id: 'cs-sendgrid', name: 'SendGrid C#', category: 'email', language: 'csharp', description: 'SendGrid公式SDK', packageName: 'SendGrid', officialUrl: 'https://sendgrid.com/', features: ['API', 'テンプレート', 'Webhook'] },

  // ==================== 決済 ====================
  { id: 'cs-stripe', name: 'Stripe.net', category: 'payment', language: 'csharp', description: 'Stripe公式SDK', packageName: 'Stripe.net', officialUrl: 'https://stripe.com/', features: ['決済', 'サブスク', 'Webhook'] },

  // ==================== 検索 ====================
  { id: 'cs-elasticsearch', name: 'Elasticsearch.Net', category: 'search', language: 'csharp', description: 'Elasticsearch低レベルクライアント', packageName: 'Elasticsearch.Net', officialUrl: 'https://www.elastic.co/', features: ['Elasticsearch', '低レベル', '柔軟'] },
  { id: 'cs-nest', name: 'NEST', category: 'search', language: 'csharp', description: 'Elasticsearch高レベルクライアント', packageName: 'NEST', officialUrl: 'https://www.elastic.co/', features: ['Elasticsearch', '型安全', 'LINQ風'] },
  { id: 'cs-lucene', name: 'Lucene.NET', category: 'search', language: 'csharp', description: '全文検索エンジン', packageName: 'Lucene.Net', officialUrl: 'https://lucenenet.apache.org/', features: ['全文検索', 'インデックス', 'Lucene移植'] },

  // ==================== ログ・監視 ====================
  { id: 'cs-serilog', name: 'Serilog', category: 'logging', language: 'csharp', description: '構造化ロギング', packageName: 'Serilog', officialUrl: 'https://serilog.net/', features: ['構造化', 'シンク', 'エンリッチ'] },
  { id: 'cs-nlog', name: 'NLog', category: 'logging', language: 'csharp', description: '柔軟なロギングライブラリ', packageName: 'NLog', officialUrl: 'https://nlog-project.org/', features: ['ターゲット', 'レイアウト', '設定'] },
  { id: 'cs-log4net', name: 'log4net', category: 'logging', language: 'csharp', description: 'Apache log4j移植', packageName: 'log4net', officialUrl: 'https://logging.apache.org/log4net/', features: ['log4j', 'アペンダー', '成熟'] },
  { id: 'cs-applicationinsights', name: 'Application Insights', category: 'logging', language: 'csharp', description: 'Azure APM', packageName: 'Microsoft.ApplicationInsights', officialUrl: 'https://docs.microsoft.com/azure/azure-monitor/app/app-insights-overview', features: ['APM', 'テレメトリ', 'Azure'] },

  // ==================== UI/テンプレート ====================
  { id: 'cs-razor', name: 'Razor', category: 'ui', language: 'csharp', description: 'ASP.NET標準テンプレートエンジン', officialUrl: 'https://docs.microsoft.com/aspnet/core/mvc/views/razor', features: ['標準', 'C#埋め込み', 'タグヘルパー'] },
  { id: 'cs-mudblazor', name: 'MudBlazor', category: 'ui', language: 'csharp', description: 'Blazor Material Designコンポーネント', packageName: 'MudBlazor', officialUrl: 'https://mudblazor.com/', features: ['Material', 'Blazor', 'コンポーネント'] },
  { id: 'cs-radzen', name: 'Radzen Blazor', category: 'ui', language: 'csharp', description: 'Blazor UIコンポーネント', packageName: 'Radzen.Blazor', officialUrl: 'https://blazor.radzen.com/', features: ['Blazor', '70+コンポーネント', '無料'] },
  { id: 'cs-avalonia', name: 'Avalonia', category: 'ui', language: 'csharp', description: 'クロスプラットフォームUI', packageName: 'Avalonia', officialUrl: 'https://avaloniaui.net/', features: ['XAML', 'クロスプラットフォーム', 'WPF風'] },

  // ==================== 状態管理 ====================
  { id: 'cs-fluxor', name: 'Fluxor', category: 'state', language: 'csharp', description: 'Blazor用Flux/Redux', packageName: 'Fluxor', github: 'https://github.com/mrpmorris/Fluxor', features: ['Redux', 'Blazor', 'ミドルウェア'] },
  { id: 'cs-memcache', name: 'Microsoft.Extensions.Caching.Memory', category: 'state', language: 'csharp', description: 'インメモリキャッシュ', packageName: 'Microsoft.Extensions.Caching.Memory', officialUrl: 'https://docs.microsoft.com/dotnet/core/extensions/caching', features: ['インメモリ', '標準', 'DI'] },

  // ==================== 国際化 ====================
  { id: 'cs-localization', name: 'ASP.NET Core Localization', category: 'i18n', language: 'csharp', description: '標準ローカライゼーション', packageName: 'Microsoft.Extensions.Localization', officialUrl: 'https://docs.microsoft.com/aspnet/core/fundamentals/localization', features: ['リソース', 'カルチャ', 'ミドルウェア'] },

  // ==================== リアルタイム通信 ====================
  { id: 'cs-signalr', name: 'SignalR', category: 'realtime', language: 'csharp', description: 'リアルタイム通信ライブラリ', packageName: 'Microsoft.AspNetCore.SignalR', officialUrl: 'https://dotnet.microsoft.com/apps/aspnet/signalr', features: ['WebSocket', 'ハブ', 'グループ'] },
  { id: 'cs-websocket', name: 'System.Net.WebSockets', category: 'realtime', language: 'csharp', description: '.NET標準WebSocket', officialUrl: 'https://docs.microsoft.com/dotnet/api/system.net.websockets', features: ['標準', 'WebSocket', '低レベル'] },

  // ==================== PDF操作 ====================
  { id: 'cs-questpdf', name: 'QuestPDF', category: 'pdf', language: 'csharp', description: 'モダンPDF生成', packageName: 'QuestPDF', officialUrl: 'https://www.questpdf.com/', features: ['Fluent API', 'レイアウト', 'ホットリロード'] },
  { id: 'cs-pdfsharp', name: 'PdfSharp', category: 'pdf', language: 'csharp', description: 'PDF作成・編集', packageName: 'PdfSharp', officialUrl: 'http://www.pdfsharp.net/', features: ['PDF生成', 'テキスト', '画像'] },
  { id: 'cs-itext7', name: 'iText 7', category: 'pdf', language: 'csharp', description: '高機能PDF操作', packageName: 'itext7', officialUrl: 'https://itextpdf.com/', features: ['PDF操作', 'フォーム', '署名'] },
  { id: 'cs-docx', name: 'DocX', category: 'pdf', language: 'csharp', description: 'Word文書操作', packageName: 'DocXCore', github: 'https://github.com/xceedsoftware/DocX', features: ['Word', 'テーブル', '画像'] },

  // ==================== 動画・音声 ====================
  { id: 'cs-ffmpeg', name: 'FFMpegCore', category: 'video-audio', language: 'csharp', description: 'FFmpegラッパー', packageName: 'FFMpegCore', github: 'https://github.com/rosenbjerg/FFMpegCore', features: ['FFmpeg', '動画変換', '音声変換'] },
  { id: 'cs-naudio', name: 'NAudio', category: 'video-audio', language: 'csharp', description: 'オーディオライブラリ', packageName: 'NAudio', github: 'https://github.com/naudio/NAudio', features: ['再生', '録音', 'ミキシング'] },

  // ==================== ユーティリティ ====================
  { id: 'cs-automapper', name: 'AutoMapper', category: 'utility', language: 'csharp', description: 'オブジェクトマッピング', packageName: 'AutoMapper', officialUrl: 'https://automapper.org/', features: ['マッピング', 'プロファイル', 'DI'] },
  { id: 'cs-mediatr', name: 'MediatR', category: 'utility', language: 'csharp', description: 'メディエーターパターン実装', packageName: 'MediatR', github: 'https://github.com/jbogard/MediatR', features: ['CQRS', 'メディエーター', 'パイプライン'] },
  { id: 'cs-polly', name: 'Polly', category: 'utility', language: 'csharp', description: '回復力・障害処理', packageName: 'Polly', github: 'https://github.com/App-vNext/Polly', features: ['リトライ', 'サーキットブレーカー', 'タイムアウト'] },
  { id: 'cs-newtonsoft', name: 'Newtonsoft.Json', category: 'utility', language: 'csharp', description: 'JSON処理の定番', packageName: 'Newtonsoft.Json', officialUrl: 'https://www.newtonsoft.com/json', features: ['JSON', 'シリアライズ', 'LINQ to JSON'] },
  { id: 'cs-systemtextjson', name: 'System.Text.Json', category: 'utility', language: 'csharp', description: '.NET標準JSON処理', officialUrl: 'https://docs.microsoft.com/dotnet/standard/serialization/system-text-json-overview', features: ['標準', '高速', 'ソース生成'] },
  { id: 'cs-mapster', name: 'Mapster', category: 'utility', language: 'csharp', description: '高速オブジェクトマッピング', packageName: 'Mapster', github: 'https://github.com/MapsterMapper/Mapster', features: ['高速', 'コード生成', 'AutoMapper代替'] },
  { id: 'cs-benchmark', name: 'BenchmarkDotNet', category: 'utility', language: 'csharp', description: 'ベンチマークフレームワーク', packageName: 'BenchmarkDotNet', officialUrl: 'https://benchmarkdotnet.org/', features: ['ベンチマーク', '統計', 'レポート'] },

  // ==================== CLI作成 ====================
  { id: 'cs-commandline', name: 'System.CommandLine', category: 'cli', language: 'csharp', description: 'Microsoft公式CLIライブラリ', packageName: 'System.CommandLine', github: 'https://github.com/dotnet/command-line-api', features: ['コマンド', 'オプション', 'ヘルプ'] },
  { id: 'cs-spectre', name: 'Spectre.Console', category: 'cli', language: 'csharp', description: '美しいコンソール出力', packageName: 'Spectre.Console', officialUrl: 'https://spectreconsole.net/', features: ['カラー', 'テーブル', 'プログレス'] },
  { id: 'cs-cocona', name: 'Cocona', category: 'cli', language: 'csharp', description: 'マイクロフレームワーク風CLI', packageName: 'Cocona', github: 'https://github.com/mayuki/Cocona', features: ['DI', 'ミドルウェア', 'シンプル'] },
  { id: 'cs-cliprompt', name: 'CliFx', category: 'cli', language: 'csharp', description: '宣言的CLIフレームワーク', packageName: 'CliFx', github: 'https://github.com/Tyrrrz/CliFx', features: ['宣言的', 'テスト可能', '依存注入'] },

  // ==================== グラフ・可視化 ====================
  { id: 'cs-livecharts', name: 'LiveCharts2', category: 'chart', language: 'csharp', description: 'クロスプラットフォームチャート', packageName: 'LiveChartsCore.SkiaSharpView', officialUrl: 'https://lvcharts.com/', features: ['アニメーション', 'リアルタイム', 'MAUI対応'] },
  { id: 'cs-scottplot', name: 'ScottPlot', category: 'chart', language: 'csharp', description: '科学用プロットライブラリ', packageName: 'ScottPlot', officialUrl: 'https://scottplot.net/', features: ['科学', '高速', 'インタラクティブ'] },
  { id: 'cs-oxyplot', name: 'OxyPlot', category: 'chart', language: 'csharp', description: 'クロスプラットフォームプロット', packageName: 'OxyPlot.Core', officialUrl: 'https://oxyplot.github.io/', features: ['2D', 'エクスポート', '多プラットフォーム'] },
]
