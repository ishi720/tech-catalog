import type { Library } from '~/types'

export const kotlinLibraries: Library[] = [
  // フレームワーク
  { id: 'kt-ktor', name: 'Ktor', category: 'framework', language: 'kotlin', description: 'JetBrains製非同期Webフレームワーク', packageName: 'io.ktor:ktor-server-core', officialUrl: 'https://ktor.io/', features: ['非同期', 'コルーチン', 'マルチプラットフォーム', 'DSL'] },
  { id: 'kt-spring', name: 'Spring Boot (Kotlin)', category: 'framework', language: 'kotlin', description: 'Spring BootのKotlinサポート', packageName: 'org.springframework.boot:spring-boot-starter', officialUrl: 'https://spring.io/guides/tutorials/spring-boot-kotlin/', features: ['エンタープライズ', 'DI', 'Kotlin拡張', 'WebFlux'] },
  { id: 'kt-micronaut', name: 'Micronaut (Kotlin)', category: 'framework', language: 'kotlin', description: 'マイクロサービス向けフレームワーク', packageName: 'io.micronaut:micronaut-runtime', officialUrl: 'https://micronaut.io/', features: ['高速起動', 'AOT', 'GraalVM', 'リアクティブ'] },
  { id: 'kt-quarkus', name: 'Quarkus (Kotlin)', category: 'framework', language: 'kotlin', description: 'Kubernetes向け軽量フレームワーク', packageName: 'io.quarkus:quarkus-kotlin', officialUrl: 'https://quarkus.io/', features: ['Kubernetes', '高速起動', 'GraalVM', 'Dev Services'] },
  { id: 'kt-http4k', name: 'http4k', category: 'framework', language: 'kotlin', description: '関数型HTTPツールキット', packageName: 'org.http4k:http4k-core', officialUrl: 'https://www.http4k.org/', features: ['関数型', '軽量', 'テスタブル', 'サーバーレス'] },
  { id: 'kt-javalin', name: 'Javalin', category: 'framework', language: 'kotlin', description: 'シンプルなWebフレームワーク', packageName: 'io.javalin:javalin', officialUrl: 'https://javalin.io/', features: ['シンプル', 'Jetty', 'OpenAPI', 'WebSocket'] },
  { id: 'kt-vertx', name: 'Vert.x (Kotlin)', category: 'framework', language: 'kotlin', description: 'リアクティブアプリケーションツールキット', packageName: 'io.vertx:vertx-lang-kotlin', officialUrl: 'https://vertx.io/', features: ['リアクティブ', 'イベント駆動', 'ポリグロット', 'クラスタリング'] },
  { id: 'kt-koin', name: 'Koin', category: 'framework', language: 'kotlin', description: '軽量DIフレームワーク', packageName: 'io.insert-koin:koin-core', officialUrl: 'https://insert-koin.io/', features: ['DI', 'DSL', '軽量', 'Android対応'] },

  // テスト関連
  { id: 'kt-kotest', name: 'Kotest', category: 'testing', language: 'kotlin', description: 'Kotlin製テストフレームワーク', packageName: 'io.kotest:kotest-runner-junit5', officialUrl: 'https://kotest.io/', features: ['DSL', 'プロパティテスト', 'データ駆動', 'マッチャー'] },
  { id: 'kt-mockk', name: 'MockK', category: 'testing', language: 'kotlin', description: 'Kotlin用モックライブラリ', packageName: 'io.mockk:mockk', officialUrl: 'https://mockk.io/', features: ['コルーチン対応', 'DSL', 'スパイ', '検証'] },
  { id: 'kt-junit5', name: 'JUnit 5 (Kotlin)', category: 'testing', language: 'kotlin', description: 'JUnit 5のKotlin拡張', packageName: 'org.junit.jupiter:junit-jupiter', officialUrl: 'https://junit.org/junit5/', features: ['ユニットテスト', 'パラメータ化', 'ネスト', '拡張モデル'] },
  { id: 'kt-strikt', name: 'Strikt', category: 'testing', language: 'kotlin', description: 'Kotlinアサーションライブラリ', packageName: 'io.strikt:strikt-core', officialUrl: 'https://strikt.io/', features: ['流暢API', 'ソフトアサーション', 'カスタムマッチャー'] },
  { id: 'kt-turbine', name: 'Turbine', category: 'testing', language: 'kotlin', description: 'Flow用テストライブラリ', packageName: 'app.cash.turbine:turbine', github: 'https://github.com/cashapp/turbine', features: ['Flowテスト', 'コルーチン', 'タイムアウト'] },
  { id: 'kt-kluent', name: 'Kluent', category: 'testing', language: 'kotlin', description: '流暢アサーションライブラリ', packageName: 'org.amshove.kluent:kluent', github: 'https://github.com/MarkusAmshworthy/Kluent', features: ['流暢API', 'JUnit連携', 'コレクション'] },

  // スクレイピング・パーサー
  { id: 'kt-skrape', name: 'skrape{it}', category: 'scraping', language: 'kotlin', description: 'Kotlin DSLスクレイピング', packageName: 'it.skrape:skrapeit', officialUrl: 'https://docs.skrape.it/', features: ['DSL', 'HTMLパース', 'HTTPクライアント', 'テスト向け'] },
  { id: 'kt-ksoup', name: 'Ksoup', category: 'scraping', language: 'kotlin', description: 'Jsoupラッパー', packageName: 'com.fleeksoft.ksoup:ksoup', github: 'https://github.com/aspect-studio/ksoup', features: ['Jsoup互換', 'マルチプラットフォーム', 'CSSセレクタ'] },
  { id: 'kt-fuel', name: 'Fuel', category: 'scraping', language: 'kotlin', description: 'HTTPクライアント＋スクレイピング', packageName: 'com.github.kittinunf.fuel:fuel', github: 'https://github.com/kittinunf/Fuel', features: ['HTTPクライアント', 'コルーチン', 'シリアライズ'] },

  // AI・機械学習
  { id: 'kt-kotlin-dl', name: 'KotlinDL', category: 'ai', language: 'kotlin', description: 'JetBrains製ディープラーニング', packageName: 'org.jetbrains.kotlinx:kotlin-deeplearning-api', officialUrl: 'https://github.com/Kotlin/kotlindl', features: ['ディープラーニング', 'TensorFlow', '事前学習モデル', 'DSL'] },
  { id: 'kt-smile', name: 'Smile (Kotlin)', category: 'ai', language: 'kotlin', description: '機械学習ライブラリ', packageName: 'com.github.haifengl:smile-kotlin', officialUrl: 'https://haifengl.github.io/', features: ['機械学習', '統計', 'NLP', '可視化'] },
  { id: 'kt-koma', name: 'Koma', category: 'ai', language: 'kotlin', description: '科学計算ライブラリ', packageName: 'com.kyonifer:koma-core', github: 'https://github.com/kyonifer/koma', features: ['行列演算', 'NumPy風', 'プロット'] },
  { id: 'kt-multik', name: 'Multik', category: 'ai', language: 'kotlin', description: 'JetBrains製多次元配列', packageName: 'org.jetbrains.kotlinx:multik-core', github: 'https://github.com/Kotlin/multik', features: ['多次元配列', 'NumPy風', 'SIMD', 'ネイティブ'] },
  { id: 'kt-kinference', name: 'KInference', category: 'ai', language: 'kotlin', description: 'ONNX推論エンジン', packageName: 'io.kinference:kinference-core', github: 'https://github.com/JetBrains-Research/kinference', features: ['ONNX', '推論', 'マルチプラットフォーム'] },

  // DB操作関連
  { id: 'kt-exposed', name: 'Exposed', category: 'database', language: 'kotlin', description: 'JetBrains製SQLフレームワーク', packageName: 'org.jetbrains.exposed:exposed-core', officialUrl: 'https://github.com/JetBrains/Exposed', features: ['DSL', 'DAO', 'タイプセーフ', 'トランザクション'] },
  { id: 'kt-ktorm', name: 'Ktorm', category: 'database', language: 'kotlin', description: '軽量ORMフレームワーク', packageName: 'org.ktorm:ktorm-core', officialUrl: 'https://www.ktorm.org/', features: ['DSL', '軽量', 'SQLビルダー', 'エンティティ'] },
  { id: 'kt-komapper', name: 'Komapper', category: 'database', language: 'kotlin', description: 'タイプセーフSQLマッパー', packageName: 'org.komapper:komapper-core', officialUrl: 'https://www.komapper.org/', features: ['タイプセーフ', 'コード生成', 'R2DBC', 'JDBC'] },
  { id: 'kt-sqldelight', name: 'SQLDelight', category: 'database', language: 'kotlin', description: 'SQL→Kotlin コード生成', packageName: 'app.cash.sqldelight:runtime', officialUrl: 'https://cashapp.github.io/sqldelight/', features: ['コード生成', 'タイプセーフ', 'マルチプラットフォーム', 'Android'] },
  { id: 'kt-jooq', name: 'jOOQ (Kotlin)', category: 'database', language: 'kotlin', description: 'タイプセーフSQLビルダー', packageName: 'org.jooq:jooq', officialUrl: 'https://www.jooq.org/', features: ['タイプセーフ', 'コード生成', 'DSL', '複数DB'] },
  { id: 'kt-r2dbc', name: 'R2DBC (Kotlin)', category: 'database', language: 'kotlin', description: 'リアクティブDB接続', packageName: 'io.r2dbc:r2dbc-spi', officialUrl: 'https://r2dbc.io/', features: ['リアクティブ', 'ノンブロッキング', 'Project Reactor'] },

  // HTTP通信
  { id: 'kt-ktor-client', name: 'Ktor Client', category: 'http', language: 'kotlin', description: 'Ktor HTTPクライアント', packageName: 'io.ktor:ktor-client-core', officialUrl: 'https://ktor.io/docs/client.html', features: ['コルーチン', 'マルチプラットフォーム', 'プラグイン', 'WebSocket'] },
  { id: 'kt-retrofit', name: 'Retrofit (Kotlin)', category: 'http', language: 'kotlin', description: 'タイプセーフHTTPクライアント', packageName: 'com.squareup.retrofit2:retrofit', officialUrl: 'https://square.github.io/retrofit/', features: ['タイプセーフ', 'アノテーション', 'コンバーター', 'コルーチン'] },
  { id: 'kt-okhttp', name: 'OkHttp (Kotlin)', category: 'http', language: 'kotlin', description: 'HTTP＆HTTP/2クライアント', packageName: 'com.squareup.okhttp3:okhttp', officialUrl: 'https://square.github.io/okhttp/', features: ['HTTP/2', 'WebSocket', 'インターセプター', '接続プール'] },
  { id: 'kt-arrow-retrofit', name: 'Arrow + Retrofit', category: 'http', language: 'kotlin', description: 'Arrow統合Retrofit', packageName: 'io.arrow-kt:arrow-core-retrofit', officialUrl: 'https://arrow-kt.io/', features: ['関数型', 'Either', 'サスペンド', 'エラーハンドリング'] },

  // 認証・認可
  { id: 'kt-ktor-auth', name: 'Ktor Authentication', category: 'auth', language: 'kotlin', description: 'Ktor認証プラグイン', packageName: 'io.ktor:ktor-server-auth', officialUrl: 'https://ktor.io/docs/authentication.html', features: ['Basic', 'JWT', 'OAuth', 'セッション'] },
  { id: 'kt-spring-security', name: 'Spring Security (Kotlin)', category: 'auth', language: 'kotlin', description: 'Spring Security Kotlin DSL', packageName: 'org.springframework.security:spring-security-config', officialUrl: 'https://spring.io/projects/spring-security', features: ['認証認可', 'OAuth2', 'SAML', 'Kotlin DSL'] },
  { id: 'kt-nimbus-jwt', name: 'Nimbus JOSE+JWT', category: 'auth', language: 'kotlin', description: 'JWT/JWS/JWEライブラリ', packageName: 'com.nimbusds:nimbus-jose-jwt', officialUrl: 'https://connect2id.com/products/nimbus-jose-jwt', features: ['JWT', 'JWS', 'JWE', 'OIDC'] },

  // バリデーション
  { id: 'kt-konform', name: 'Konform', category: 'validation', language: 'kotlin', description: 'タイプセーフバリデーション', packageName: 'io.konform:konform', github: 'https://github.com/konform-kt/konform', features: ['DSL', 'タイプセーフ', 'コンポーザブル', 'マルチプラットフォーム'] },
  { id: 'kt-valiktor', name: 'Valiktor', category: 'validation', language: 'kotlin', description: 'タイプセーフバリデーション', packageName: 'org.valiktor:valiktor-core', github: 'https://github.com/valiktor/valiktor', features: ['DSL', 'i18n', 'Spring連携', '拡張可能'] },
  { id: 'kt-kalidation', name: 'Kalidation', category: 'validation', language: 'kotlin', description: 'Arrow統合バリデーション', packageName: 'io.github.rcapraro:kalidation', github: 'https://github.com/rcapraro/kalidation', features: ['Arrow', 'DSL', '関数型', 'Validated'] },

  // 日付・時間
  { id: 'kt-datetime', name: 'kotlinx-datetime', category: 'date', language: 'kotlin', description: 'JetBrains製日付時間ライブラリ', packageName: 'org.jetbrains.kotlinx:kotlinx-datetime', github: 'https://github.com/Kotlin/kotlinx-datetime', features: ['マルチプラットフォーム', 'タイムゾーン', 'Instant', 'LocalDate'] },
  { id: 'kt-java-time', name: 'java.time (Kotlin)', category: 'date', language: 'kotlin', description: 'Java Time API拡張', packageName: 'java.time', officialUrl: 'https://docs.oracle.com/javase/8/docs/api/java/time/package-summary.html', features: ['標準API', 'タイムゾーン', 'フォーマット'] },
  { id: 'kt-klock', name: 'Klock', category: 'date', language: 'kotlin', description: 'マルチプラットフォーム日付時間', packageName: 'com.soywiz.korlibs.klock:klock', officialUrl: 'https://korlibs.soywiz.com/klock/', features: ['マルチプラットフォーム', '軽量', 'フォーマット'] },

  // ファイル操作
  { id: 'kt-okio', name: 'Okio', category: 'file', language: 'kotlin', description: 'モダンI/Oライブラリ', packageName: 'com.squareup.okio:okio', officialUrl: 'https://square.github.io/okio/', features: ['バッファリング', 'ファイルシステム', 'マルチプラットフォーム', 'ストリーム'] },
  { id: 'kt-kotlin-io', name: 'kotlin.io', category: 'file', language: 'kotlin', description: '標準I/O拡張', packageName: 'kotlin.io', officialUrl: 'https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.io/', features: ['ファイル操作', '拡張関数', 'シンプル'] },
  { id: 'kt-korio', name: 'Korio', category: 'file', language: 'kotlin', description: 'マルチプラットフォームI/O', packageName: 'com.soywiz.korlibs.korio:korio', officialUrl: 'https://korlibs.soywiz.com/korio/', features: ['非同期I/O', 'VFS', 'マルチプラットフォーム'] },

  // メール送信
  { id: 'kt-simple-java-mail', name: 'Simple Java Mail', category: 'email', language: 'kotlin', description: '簡単メール送信', packageName: 'org.simplejavamail:simple-java-mail', officialUrl: 'https://www.simplejavamail.org/', features: ['シンプル', 'SMTP', '添付ファイル', 'HTML'] },
  { id: 'kt-spring-mail', name: 'Spring Mail (Kotlin)', category: 'email', language: 'kotlin', description: 'Springメールサポート', packageName: 'org.springframework.boot:spring-boot-starter-mail', officialUrl: 'https://spring.io/', features: ['Spring連携', 'テンプレート', 'SMTP'] },

  // ログ・監視
  { id: 'kt-kotlin-logging', name: 'kotlin-logging', category: 'logging', language: 'kotlin', description: 'Kotlin用ロギングラッパー', packageName: 'io.github.oshai:kotlin-logging-jvm', github: 'https://github.com/oshai/kotlin-logging', features: ['SLF4J', '軽量', 'ラムダ遅延評価'] },
  { id: 'kt-logback', name: 'Logback (Kotlin)', category: 'logging', language: 'kotlin', description: 'ロギングフレームワーク', packageName: 'ch.qos.logback:logback-classic', officialUrl: 'https://logback.qos.ch/', features: ['SLF4J実装', '設定可能', 'ローリング'] },
  { id: 'kt-log4j2', name: 'Log4j2 (Kotlin)', category: 'logging', language: 'kotlin', description: 'Apache Log4j 2', packageName: 'org.apache.logging.log4j:log4j-core', officialUrl: 'https://logging.apache.org/log4j/2.x/', features: ['非同期', 'プラグイン', '柔軟な設定'] },

  // UI・Android
  { id: 'kt-compose', name: 'Jetpack Compose', category: 'ui', language: 'kotlin', description: 'モダン宣言的UIツールキット', packageName: 'androidx.compose.ui:ui', officialUrl: 'https://developer.android.com/jetpack/compose', features: ['宣言的UI', 'リアクティブ', 'Material Design', 'プレビュー'] },
  { id: 'kt-compose-mp', name: 'Compose Multiplatform', category: 'ui', language: 'kotlin', description: 'JetBrains製マルチプラットフォームUI', packageName: 'org.jetbrains.compose:compose-gradle-plugin', officialUrl: 'https://www.jetbrains.com/lp/compose-multiplatform/', features: ['マルチプラットフォーム', 'デスクトップ', 'iOS', 'Web'] },
  { id: 'kt-anko', name: 'Anko', category: 'ui', language: 'kotlin', description: 'Android開発ヘルパー（非推奨）', packageName: 'org.jetbrains.anko:anko', github: 'https://github.com/Kotlin/anko', features: ['DSL', 'レイアウト', 'SQLite', 'コルーチン'] },
  { id: 'kt-tornadofx', name: 'TornadoFX', category: 'ui', language: 'kotlin', description: 'JavaFX用Kotlinフレームワーク', packageName: 'no.tornado:tornadofx', officialUrl: 'https://tornadofx.io/', features: ['JavaFX', 'FXML', 'CSS DSL', 'MVVM'] },

  // 状態管理
  { id: 'kt-redux', name: 'Redux Kotlin', category: 'state', language: 'kotlin', description: 'Redux実装', packageName: 'org.reduxkotlin:redux-kotlin', github: 'https://github.com/nicktgn/redux-kotlin', features: ['Redux', 'ミドルウェア', 'タイムトラベル'] },
  { id: 'kt-mobius', name: 'Mobius (Kotlin)', category: 'state', language: 'kotlin', description: 'Spotify製状態管理', packageName: 'com.spotify.mobius:mobius-core', github: 'https://github.com/spotify/mobius', features: ['関数型', 'イベント駆動', 'テスタブル'] },
  { id: 'kt-mvikotlin', name: 'MVIKotlin', category: 'state', language: 'kotlin', description: 'MVI状態管理ライブラリ', packageName: 'com.arkivanov.mvikotlin:mvikotlin', github: 'https://github.com/arkivanov/MVIKotlin', features: ['MVI', 'マルチプラットフォーム', 'タイムトラベル'] },
  { id: 'kt-decompose', name: 'Decompose', category: 'state', language: 'kotlin', description: 'ライフサイクル対応コンポーネント', packageName: 'com.arkivanov.decompose:decompose', github: 'https://github.com/arkivanov/Decompose', features: ['ナビゲーション', 'ライフサイクル', 'マルチプラットフォーム'] },

  // 国際化
  { id: 'kt-i18n4k', name: 'i18n4k', category: 'i18n', language: 'kotlin', description: 'マルチプラットフォームi18n', packageName: 'de.comahe.i18n4k:i18n4k-core', github: 'https://github.com/nicktgn/i18n4k', features: ['マルチプラットフォーム', 'タイプセーフ', 'Gradle連携'] },
  { id: 'kt-lingua', name: 'Lingua', category: 'i18n', language: 'kotlin', description: '言語検出ライブラリ', packageName: 'com.github.pemistahl:lingua', github: 'https://github.com/pemistahl/lingua', features: ['言語検出', '75言語', '高精度'] },

  // リアルタイム
  { id: 'kt-ktor-websocket', name: 'Ktor WebSockets', category: 'realtime', language: 'kotlin', description: 'Ktor WebSocketサポート', packageName: 'io.ktor:ktor-server-websockets', officialUrl: 'https://ktor.io/docs/websocket.html', features: ['WebSocket', 'コルーチン', 'シリアライズ'] },
  { id: 'kt-rsocket', name: 'RSocket Kotlin', category: 'realtime', language: 'kotlin', description: 'リアクティブストリーミング', packageName: 'io.rsocket.kotlin:rsocket-core', officialUrl: 'https://rsocket.io/', features: ['リアクティブ', 'バイナリ', '双方向', 'コルーチン'] },
  { id: 'kt-scarlet', name: 'Scarlet', category: 'realtime', language: 'kotlin', description: 'WebSocketクライアント', packageName: 'com.tinder.scarlet:scarlet', github: 'https://github.com/Tinder/Scarlet', features: ['WebSocket', 'Retrofit風', '自動再接続'] },

  // PDF操作
  { id: 'kt-itext', name: 'iText (Kotlin)', category: 'pdf', language: 'kotlin', description: 'PDF生成・操作ライブラリ', packageName: 'com.itextpdf:itext7-core', officialUrl: 'https://itextpdf.com/', features: ['PDF生成', '編集', '署名', 'フォーム'] },
  { id: 'kt-pdfbox', name: 'Apache PDFBox (Kotlin)', category: 'pdf', language: 'kotlin', description: 'PDF操作ライブラリ', packageName: 'org.apache.pdfbox:pdfbox', officialUrl: 'https://pdfbox.apache.org/', features: ['PDF生成', 'テキスト抽出', '分割/結合'] },
  { id: 'kt-openpdf', name: 'OpenPDF (Kotlin)', category: 'pdf', language: 'kotlin', description: 'オープンソースPDFライブラリ', packageName: 'com.github.librepdf:openpdf', github: 'https://github.com/LibrePDF/OpenPDF', features: ['PDF生成', 'LGPL', 'iText fork'] },

  // 画像処理
  { id: 'kt-scrimage', name: 'Scrimage', category: 'image', language: 'kotlin', description: 'JVM画像処理ライブラリ', packageName: 'com.sksamuel.scrimage:scrimage-core', github: 'https://github.com/sksamuel/scrimage', features: ['リサイズ', 'フィルタ', 'フォーマット変換', '高速'] },
  { id: 'kt-thumbnailator', name: 'Thumbnailator', category: 'image', language: 'kotlin', description: 'サムネイル生成ライブラリ', packageName: 'net.coobird:thumbnailator', github: 'https://github.com/coobird/thumbnailator', features: ['サムネイル', 'シンプル', '高品質'] },
  { id: 'kt-korge-image', name: 'KorGE Image', category: 'image', language: 'kotlin', description: 'マルチプラットフォーム画像処理', packageName: 'com.soywiz.korlibs.korim:korim', officialUrl: 'https://korlibs.soywiz.com/korim/', features: ['マルチプラットフォーム', 'ベクター', 'ビットマップ'] },

  // グラフ・可視化
  { id: 'kt-lets-plot', name: "Let's-Plot", category: 'chart', language: 'kotlin', description: 'JetBrains製グラフライブラリ', packageName: 'org.jetbrains.lets-plot:lets-plot-kotlin', officialUrl: 'https://lets-plot.org/', features: ['ggplot2風', 'Jupyter', 'マルチプラットフォーム', 'インタラクティブ'] },
  { id: 'kt-plotly', name: 'Plotly.kt', category: 'chart', language: 'kotlin', description: 'Plotly Kotlinバインディング', packageName: 'space.kscience:plotlykt-core', github: 'https://github.com/mipt-npm/plotly.kt', features: ['Plotly', 'インタラクティブ', 'サーバーサイド'] },
  { id: 'kt-kravis', name: 'Kravis', category: 'chart', language: 'kotlin', description: 'ggplot2風可視化DSL', packageName: 'com.github.holgerbrandl:kravis', github: 'https://github.com/holgerbrandl/kravis', features: ['ggplot2風', 'DSL', 'R連携'] },

  // CLI作成
  { id: 'kt-clikt', name: 'Clikt', category: 'cli', language: 'kotlin', description: 'Kotlin製CLIフレームワーク', packageName: 'com.github.ajalt.clikt:clikt', officialUrl: 'https://ajalt.github.io/clikt/', features: ['DSL', 'サブコマンド', '自動ヘルプ', 'マルチプラットフォーム'] },
  { id: 'kt-kotlinx-cli', name: 'kotlinx-cli', category: 'cli', language: 'kotlin', description: 'JetBrains製CLIパーサー', packageName: 'org.jetbrains.kotlinx:kotlinx-cli', github: 'https://github.com/Kotlin/kotlinx-cli', features: ['公式', 'マルチプラットフォーム', 'シンプル'] },
  { id: 'kt-picocli', name: 'picocli (Kotlin)', category: 'cli', language: 'kotlin', description: '強力CLIフレームワーク', packageName: 'info.picocli:picocli', officialUrl: 'https://picocli.info/', features: ['アノテーション', 'カラー出力', '補完', 'GraalVM'] },
  { id: 'kt-mordant', name: 'Mordant', category: 'cli', language: 'kotlin', description: 'ターミナルスタイリング', packageName: 'com.github.ajalt.mordant:mordant', github: 'https://github.com/ajalt/mordant', features: ['カラー', 'テーブル', 'プログレスバー', 'Markdown'] },

  // ユーティリティ
  { id: 'kt-arrow', name: 'Arrow', category: 'utility', language: 'kotlin', description: '関数型プログラミングライブラリ', packageName: 'io.arrow-kt:arrow-core', officialUrl: 'https://arrow-kt.io/', features: ['関数型', 'Either', 'Option', 'Optics'] },
  { id: 'kt-kotlinx-coroutines', name: 'kotlinx.coroutines', category: 'utility', language: 'kotlin', description: 'JetBrains製コルーチンライブラリ', packageName: 'org.jetbrains.kotlinx:kotlinx-coroutines-core', github: 'https://github.com/Kotlin/kotlinx.coroutines', features: ['コルーチン', 'Flow', 'Channel', '構造化並行性'] },
  { id: 'kt-kotlinx-serialization', name: 'kotlinx.serialization', category: 'utility', language: 'kotlin', description: 'JetBrains製シリアライゼーション', packageName: 'org.jetbrains.kotlinx:kotlinx-serialization-json', github: 'https://github.com/Kotlin/kotlinx.serialization', features: ['JSON', 'Protobuf', 'CBOR', 'マルチプラットフォーム'] },
  { id: 'kt-moshi', name: 'Moshi (Kotlin)', category: 'utility', language: 'kotlin', description: 'モダンJSON処理', packageName: 'com.squareup.moshi:moshi-kotlin', github: 'https://github.com/square/moshi', features: ['JSON', 'Kotlin対応', 'コード生成', 'Retrofit連携'] },
  { id: 'kt-jackson', name: 'Jackson (Kotlin)', category: 'utility', language: 'kotlin', description: 'Jackson Kotlinモジュール', packageName: 'com.fasterxml.jackson.module:jackson-module-kotlin', officialUrl: 'https://github.com/FasterXML/jackson-module-kotlin', features: ['JSON', 'data class', 'Spring連携'] },
  { id: 'kt-result', name: 'kotlin-result', category: 'utility', language: 'kotlin', description: 'Result型ライブラリ', packageName: 'com.michael-bull.kotlin-result:kotlin-result', github: 'https://github.com/michaelbull/kotlin-result', features: ['Result型', 'エラーハンドリング', 'Railway'] },
  { id: 'kt-cache4k', name: 'cache4k', category: 'utility', language: 'kotlin', description: 'マルチプラットフォームキャッシュ', packageName: 'io.github.reactivecircus.cache4k:cache4k', github: 'https://github.com/ReactiveCircus/cache4k', features: ['キャッシュ', 'TTL', 'マルチプラットフォーム'] },
  { id: 'kt-uuid', name: 'kotlinx-uuid', category: 'utility', language: 'kotlin', description: 'UUID生成ライブラリ', packageName: 'app.softwork:kotlinx-uuid-core', github: 'https://github.com/softwork/kotlinx-uuid', features: ['UUID', 'マルチプラットフォーム', 'シリアライズ'] },

  // CMS・静的サイト
  { id: 'kt-jbake', name: 'JBake (Kotlin)', category: 'cms', language: 'kotlin', description: 'JVM静的サイトジェネレータ', officialUrl: 'https://jbake.org/', features: ['静的サイト', 'Markdown', 'Freemarker', 'Gradle'] },
  { id: 'kt-orchid', name: 'Orchid', category: 'cms', language: 'kotlin', description: 'Kotlin製静的サイトジェネレータ', packageName: 'io.github.javaeden.orchid:OrchidCore', officialUrl: 'https://orchid.run/', features: ['静的サイト', 'ドキュメント', 'プラグイン', 'テーマ'] },
]
