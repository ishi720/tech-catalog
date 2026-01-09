import type { Library } from '~/types'

export const javaLibraries: Library[] = [
  // フレームワーク
  { id: 'java-spring', name: 'Spring Boot', category: 'framework', language: 'java', description: 'Javaエンタープライズ標準', packageName: 'org.springframework.boot', officialUrl: 'https://spring.io/projects/spring-boot', features: ['DI', 'Auto-config'] },
  { id: 'java-quarkus', name: 'Quarkus', category: 'framework', language: 'java', description: 'クラウドネイティブJava', packageName: 'io.quarkus', officialUrl: 'https://quarkus.io/', features: ['高速起動', 'GraalVM'] },
  { id: 'java-micronaut', name: 'Micronaut', category: 'framework', language: 'java', description: '軽量マイクロサービスFW', packageName: 'io.micronaut', officialUrl: 'https://micronaut.io/', features: ['AOT', '軽量'] },

  // テスト関連
  { id: 'java-junit', name: 'JUnit 5', category: 'testing', language: 'java', description: 'Javaテスト標準', packageName: 'org.junit.jupiter', officialUrl: 'https://junit.org/junit5/', features: ['ユニットテスト', 'パラメータ化'] },
  { id: 'java-mockito', name: 'Mockito', category: 'testing', language: 'java', description: 'モックフレームワーク', packageName: 'org.mockito', officialUrl: 'https://site.mockito.org/', features: ['モック', 'スタブ'] },
  { id: 'java-testcontainers', name: 'Testcontainers', category: 'testing', language: 'java', description: 'Dockerコンテナテスト', packageName: 'org.testcontainers', officialUrl: 'https://testcontainers.com/', features: ['Docker', 'DB'] },

  // 画像関連
  { id: 'java-thumbnailator', name: 'Thumbnailator', category: 'image', language: 'java', description: 'サムネイル生成', packageName: 'net.coobird.thumbnailator', github: 'https://github.com/coobird/thumbnailator', features: ['サムネイル', 'リサイズ'] },

  // スクレイピング関連
  { id: 'java-jsoup', name: 'Jsoup', category: 'scraping', language: 'java', description: 'HTML パーサー', packageName: 'org.jsoup', officialUrl: 'https://jsoup.org/', features: ['HTMLパース', 'CSSセレクタ'] },
  { id: 'java-selenium', name: 'Selenium Java', category: 'scraping', language: 'java', description: 'ブラウザ自動化', packageName: 'org.seleniumhq.selenium', officialUrl: 'https://www.selenium.dev/', features: ['E2E', 'マルチブラウザ'] },

  // AI関連
  { id: 'java-deeplearning4j', name: 'Deeplearning4j', category: 'ai', language: 'java', description: 'Java深層学習', packageName: 'org.deeplearning4j', officialUrl: 'https://deeplearning4j.konduit.ai/', features: ['深層学習', 'GPU'] },
  { id: 'java-langchain4j', name: 'LangChain4j', category: 'ai', language: 'java', description: 'Java用LLMフレームワーク', packageName: 'dev.langchain4j', officialUrl: 'https://docs.langchain4j.dev/', features: ['LLM', 'RAG'] },

  // DB操作関連
  { id: 'java-hibernate', name: 'Hibernate', category: 'database', language: 'java', description: 'Java ORM定番', packageName: 'org.hibernate', officialUrl: 'https://hibernate.org/', features: ['JPA', 'ORM'] },
  { id: 'java-jpa', name: 'Spring Data JPA', category: 'database', language: 'java', description: 'Spring JPA抽象化', packageName: 'org.springframework.data', officialUrl: 'https://spring.io/projects/spring-data-jpa', features: ['リポジトリ', 'クエリメソッド'] },
  { id: 'java-mybatis', name: 'MyBatis', category: 'database', language: 'java', description: 'SQLマッパー', packageName: 'org.mybatis', officialUrl: 'https://mybatis.org/', features: ['SQLマッピング', 'XML'] },
  { id: 'java-jooq', name: 'jOOQ', category: 'database', language: 'java', description: '型安全SQLビルダー', packageName: 'org.jooq', officialUrl: 'https://www.jooq.org/', features: ['型安全', 'DSL'] },

  // タスク管理
  { id: 'java-quartz', name: 'Quartz', category: 'task-queue', language: 'java', description: 'ジョブスケジューラ', packageName: 'org.quartz-scheduler', officialUrl: 'https://www.quartz-scheduler.org/', features: ['スケジュール', 'Cron'] },
  { id: 'java-spring-batch', name: 'Spring Batch', category: 'task-queue', language: 'java', description: 'バッチ処理FW', packageName: 'org.springframework.batch', officialUrl: 'https://spring.io/projects/spring-batch', features: ['バッチ', 'チャンク'] },

  // 認証・認可
  { id: 'java-spring-security', name: 'Spring Security', category: 'auth', language: 'java', description: 'Java認証認可標準', packageName: 'org.springframework.security', officialUrl: 'https://spring.io/projects/spring-security', features: ['認証', 'OAuth2'] },
  { id: 'java-jwt', name: 'Java JWT', category: 'auth', language: 'java', description: 'JWT実装', packageName: 'com.auth0.java-jwt', github: 'https://github.com/auth0/java-jwt', features: ['JWT', 'RS256'] },

  // HTTP通信
  { id: 'java-okhttp', name: 'OkHttp', category: 'http', language: 'java', description: 'HTTPクライアント', packageName: 'com.squareup.okhttp3', officialUrl: 'https://square.github.io/okhttp/', features: ['HTTP/2', 'インターセプタ'] },
  { id: 'java-retrofit', name: 'Retrofit', category: 'http', language: 'java', description: '型安全HTTPクライアント', packageName: 'com.squareup.retrofit2', officialUrl: 'https://square.github.io/retrofit/', features: ['型安全', 'アノテーション'] },
  { id: 'java-webclient', name: 'WebClient', category: 'http', language: 'java', description: 'Spring リアクティブHTTP', packageName: 'org.springframework.web.reactive', officialUrl: 'https://spring.io/', features: ['リアクティブ', '非同期'] },

  // バリデーション
  { id: 'java-beanvalidation', name: 'Bean Validation', category: 'validation', language: 'java', description: 'Java標準バリデーション', packageName: 'jakarta.validation', officialUrl: 'https://beanvalidation.org/', features: ['アノテーション', '標準'] },

  // 日付・時間
  { id: 'java-datetime', name: 'java.time', category: 'date', language: 'java', description: 'Java標準日付API', officialUrl: 'https://docs.oracle.com/javase/8/docs/api/java/time/package-summary.html', features: ['標準', 'イミュータブル'] },

  // ファイル操作
  { id: 'java-poi', name: 'Apache POI', category: 'file', language: 'java', description: 'Microsoft Office操作', packageName: 'org.apache.poi', officialUrl: 'https://poi.apache.org/', features: ['Excel', 'Word'] },
  { id: 'java-opencsv', name: 'OpenCSV', category: 'file', language: 'java', description: 'CSV操作', packageName: 'com.opencsv', officialUrl: 'https://opencsv.sourceforge.net/', features: ['CSV', '読み書き'] },

  // メール送信
  { id: 'java-javamail', name: 'Jakarta Mail', category: 'email', language: 'java', description: 'Java標準メールAPI', packageName: 'jakarta.mail', officialUrl: 'https://jakartaee.github.io/mail-api/', features: ['SMTP', 'IMAP'] },

  // 決済
  { id: 'java-stripe', name: 'Stripe Java', category: 'payment', language: 'java', description: 'Stripe公式SDK', packageName: 'com.stripe', officialUrl: 'https://stripe.com/', features: ['決済', 'サブスク'] },

  // 検索
  { id: 'java-lucene', name: 'Apache Lucene', category: 'search', language: 'java', description: '全文検索エンジン', packageName: 'org.apache.lucene', officialUrl: 'https://lucene.apache.org/', features: ['全文検索', 'インデックス'] },
  { id: 'java-elasticsearch', name: 'Elasticsearch Java', category: 'search', language: 'java', description: 'Elasticsearch公式', packageName: 'co.elastic.clients', officialUrl: 'https://www.elastic.co/', features: ['Elasticsearch', 'REST'] },

  // ログ・監視
  { id: 'java-slf4j', name: 'SLF4J', category: 'logging', language: 'java', description: 'ロギングファサード', packageName: 'org.slf4j', officialUrl: 'https://www.slf4j.org/', features: ['ファサード', '抽象化'] },
  { id: 'java-logback', name: 'Logback', category: 'logging', language: 'java', description: 'ロギング実装', packageName: 'ch.qos.logback', officialUrl: 'https://logback.qos.ch/', features: ['SLF4J実装', '高性能'] },

  // UIコンポーネント
  { id: 'java-thymeleaf', name: 'Thymeleaf', category: 'ui', language: 'java', description: 'テンプレートエンジン', packageName: 'org.thymeleaf', officialUrl: 'https://www.thymeleaf.org/', features: ['Natural Templates', 'Spring連携'] },

  // リアルタイム通信
  { id: 'java-websocket', name: 'Java WebSocket', category: 'realtime', language: 'java', description: 'Java標準WebSocket', packageName: 'jakarta.websocket', officialUrl: 'https://jakarta.ee/', features: ['標準', 'アノテーション'] },
  { id: 'java-spring-websocket', name: 'Spring WebSocket', category: 'realtime', language: 'java', description: 'Spring WebSocket', packageName: 'org.springframework.websocket', officialUrl: 'https://spring.io/', features: ['STOMP', 'SockJS'] },

  // PDF操作
  { id: 'java-itext', name: 'iText', category: 'pdf', language: 'java', description: 'PDF生成・操作', packageName: 'com.itextpdf', officialUrl: 'https://itextpdf.com/', features: ['PDF生成', 'フォーム'] },
  { id: 'java-pdfbox', name: 'Apache PDFBox', category: 'pdf', language: 'java', description: 'PDF操作', packageName: 'org.apache.pdfbox', officialUrl: 'https://pdfbox.apache.org/', features: ['PDF操作', 'テキスト抽出'] },

  // 動画・音声
  { id: 'java-jave', name: 'JAVE', category: 'video-audio', language: 'java', description: 'FFmpegラッパー', packageName: 'ws.schild.jave', github: 'https://github.com/a-schild/jave2', features: ['動画変換', '音声変換'] },

  // ユーティリティ
  { id: 'java-guava', name: 'Guava', category: 'utility', language: 'java', description: 'Googleユーティリティ', packageName: 'com.google.guava', officialUrl: 'https://github.com/google/guava', features: ['コレクション', 'キャッシュ'] },
  { id: 'java-lombok', name: 'Lombok', category: 'utility', language: 'java', description: 'ボイラープレート削減', packageName: 'org.projectlombok', officialUrl: 'https://projectlombok.org/', features: ['アノテーション', 'Getter/Setter'] },
  { id: 'java-commons-lang', name: 'Commons Lang', category: 'utility', language: 'java', description: 'Apacheユーティリティ', packageName: 'org.apache.commons.lang3', officialUrl: 'https://commons.apache.org/proper/commons-lang/', features: ['文字列', '配列'] },

  // CLI作成
  { id: 'java-picocli', name: 'picocli', category: 'cli', language: 'java', description: 'CLI作成ライブラリ', packageName: 'info.picocli', officialUrl: 'https://picocli.info/', features: ['アノテーション', 'サブコマンド'] },

  // グラフ・可視化
  { id: 'java-jfreechart', name: 'JFreeChart', category: 'chart', language: 'java', description: 'チャートライブラリ', packageName: 'org.jfree.jfreechart', officialUrl: 'https://www.jfree.org/jfreechart/', features: ['チャート', '多種類'] },

  // CMS
  { id: 'java-magnolia', name: 'Magnolia', category: 'cms', language: 'java', description: 'エンタープライズ向けヘッドレスCMS', officialUrl: 'https://www.magnolia-cms.com/', features: ['ヘッドレス', 'Visual SPA Editor', 'DAM', 'パーソナライゼーション'] },
  { id: 'java-bloomreach', name: 'Bloomreach (Hippo)', category: 'cms', language: 'java', description: 'エンタープライズCMS・DXP', officialUrl: 'https://www.bloomreach.com/', features: ['DXP', 'Eコマース', 'パーソナライゼーション', 'ヘッドレス'] },
  { id: 'java-dotcms', name: 'dotCMS', category: 'cms', language: 'java', description: 'ハイブリッドヘッドレスCMS', officialUrl: 'https://www.dotcms.com/', features: ['ハイブリッド', 'GraphQL', 'ワークフロー', 'マルチテナント'] },
  { id: 'java-jahia', name: 'Jahia', category: 'cms', language: 'java', description: 'エンタープライズDXP', officialUrl: 'https://www.jahia.com/', features: ['DXP', 'GraphQL', 'パーソナライゼーション', 'マーケティング'] },
  { id: 'java-liferay', name: 'Liferay', category: 'cms', language: 'java', description: 'エンタープライズポータル・DXP', officialUrl: 'https://www.liferay.com/', features: ['ポータル', 'DXP', 'ワークフロー', 'Eコマース'] },
  { id: 'java-openCms', name: 'OpenCms', category: 'cms', language: 'java', description: 'オープンソースエンタープライズCMS', officialUrl: 'http://www.opencms.org/', features: ['インプレース編集', 'マルチサイト', 'テンプレート', 'ワークフロー'] },
  { id: 'java-enonic', name: 'Enonic XP', category: 'cms', language: 'java', description: 'ヘッドレスCMS・プラットフォーム', officialUrl: 'https://enonic.com/', features: ['ヘッドレス', 'GraphQL', 'ビジュアル編集', 'Kubernetes'] },
]