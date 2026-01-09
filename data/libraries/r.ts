import type { Library } from '~/types'

export const rLibraries: Library[] = [
  // フレームワーク
  { id: 'r-shiny', name: 'Shiny', category: 'framework', language: 'r', description: 'インタラクティブWebアプリ構築', packageName: 'shiny', officialUrl: 'https://shiny.posit.co/', features: ['リアクティブ', 'UI', 'ダッシュボード'] },
  { id: 'r-plumber', name: 'plumber', category: 'framework', language: 'r', description: 'REST API構築', packageName: 'plumber', officialUrl: 'https://www.rplumber.io/', features: ['REST API', 'Swagger', 'デコレータ'] },
  { id: 'r-golem', name: 'golem', category: 'framework', language: 'r', description: 'Shinyアプリフレームワーク', packageName: 'golem', officialUrl: 'https://thinkr-open.github.io/golem/', features: ['Shiny', 'パッケージ化', 'モジュール'] },
  { id: 'r-ambiorix', name: 'ambiorix', category: 'framework', language: 'r', description: '軽量Webフレームワーク', packageName: 'ambiorix', officialUrl: 'https://ambiorix.dev/', features: ['Express風', 'ミドルウェア', 'WebSocket'] },
  { id: 'r-fiery', name: 'fiery', category: 'framework', language: 'r', description: '柔軟なWebサーバー', packageName: 'fiery', github: 'https://github.com/thomasp85/fiery', features: ['イベント駆動', 'プラグイン', '柔軟'] },

  // テスト関連
  { id: 'r-testthat', name: 'testthat', category: 'testing', language: 'r', description: 'R標準テストフレームワーク', packageName: 'testthat', officialUrl: 'https://testthat.r-lib.org/', features: ['ユニットテスト', 'エクスペクト', 'スナップショット'] },
  { id: 'r-shinytest2', name: 'shinytest2', category: 'testing', language: 'r', description: 'Shinyアプリテスト', packageName: 'shinytest2', officialUrl: 'https://rstudio.github.io/shinytest2/', features: ['Shiny', 'E2E', 'スナップショット'] },
  { id: 'r-covr', name: 'covr', category: 'testing', language: 'r', description: 'コードカバレッジ', packageName: 'covr', github: 'https://github.com/r-lib/covr', features: ['カバレッジ', 'Codecov', 'レポート'] },
  { id: 'r-mockery', name: 'mockery', category: 'testing', language: 'r', description: 'モック・スタブ', packageName: 'mockery', github: 'https://github.com/r-lib/mockery', features: ['モック', 'スタブ', 'testthat連携'] },
  { id: 'r-httptest', name: 'httptest', category: 'testing', language: 'r', description: 'HTTPリクエストモック', packageName: 'httptest', officialUrl: 'https://enpiar.com/r/httptest/', features: ['HTTPモック', '記録', '再生'] },

  // 画像関連
  { id: 'r-magick', name: 'magick', category: 'image', language: 'r', description: 'ImageMagickバインディング', packageName: 'magick', officialUrl: 'https://docs.ropensci.org/magick/', features: ['画像処理', 'GIF', '変換'] },
  { id: 'r-imager', name: 'imager', category: 'image', language: 'r', description: '画像処理ライブラリ', packageName: 'imager', officialUrl: 'https://dahtah.github.io/imager/', features: ['CImg', 'フィルタ', '解析'] },
  { id: 'r-png', name: 'png', category: 'image', language: 'r', description: 'PNG読み書き', packageName: 'png', github: 'https://github.com/s-u/png', features: ['PNG', '読み書き'] },
  { id: 'r-jpeg', name: 'jpeg', category: 'image', language: 'r', description: 'JPEG読み書き', packageName: 'jpeg', github: 'https://github.com/s-u/jpeg', features: ['JPEG', '読み書き'] },
  { id: 'r-terra', name: 'terra', category: 'image', language: 'r', description: '地理空間データ処理', packageName: 'terra', officialUrl: 'https://rspatial.github.io/terra/', features: ['ラスタ', 'ベクタ', 'GIS'] },

  // スクレイピング関連
  { id: 'r-rvest', name: 'rvest', category: 'scraping', language: 'r', description: 'Webスクレイピング定番', packageName: 'rvest', officialUrl: 'https://rvest.tidyverse.org/', features: ['HTML', 'CSSセレクタ', 'tidyverse'] },
  { id: 'r-xml2', name: 'xml2', category: 'scraping', language: 'r', description: 'XML/HTMLパース', packageName: 'xml2', officialUrl: 'https://xml2.r-lib.org/', features: ['XML', 'XPath', 'libxml2'] },
  { id: 'r-rselenium', name: 'RSelenium', category: 'scraping', language: 'r', description: 'Seleniumバインディング', packageName: 'RSelenium', officialUrl: 'https://docs.ropensci.org/RSelenium/', features: ['Selenium', 'ブラウザ操作', 'JS'] },
  { id: 'r-chromote', name: 'chromote', category: 'scraping', language: 'r', description: 'Chrome DevTools Protocol', packageName: 'chromote', github: 'https://github.com/rstudio/chromote', features: ['ヘッドレス', 'CDP', 'スクリーンショット'] },
  { id: 'r-polite', name: 'polite', category: 'scraping', language: 'r', description: '礼儀正しいスクレイピング', packageName: 'polite', officialUrl: 'https://dmi3kno.github.io/polite/', features: ['robots.txt', '遅延', 'セッション'] },

  // AI/ML関連
  { id: 'r-tidymodels', name: 'tidymodels', category: 'ai', language: 'r', description: 'tidyverse機械学習フレームワーク', packageName: 'tidymodels', officialUrl: 'https://www.tidymodels.org/', features: ['パイプライン', 'レシピ', 'ワークフロー'] },
  { id: 'r-caret', name: 'caret', category: 'ai', language: 'r', description: '機械学習統合パッケージ', packageName: 'caret', officialUrl: 'https://topepo.github.io/caret/', features: ['前処理', 'モデル選択', 'CV'] },
  { id: 'r-xgboost', name: 'xgboost', category: 'ai', language: 'r', description: '勾配ブースティング', packageName: 'xgboost', officialUrl: 'https://xgboost.readthedocs.io/', features: ['GBDT', '高速', '高精度'] },
  { id: 'r-randomforest', name: 'randomForest', category: 'ai', language: 'r', description: 'ランダムフォレスト', packageName: 'randomForest', github: 'https://github.com/cran/randomForest', features: ['RF', '分類', '回帰'] },
  { id: 'r-keras', name: 'keras', category: 'ai', language: 'r', description: 'Kerasインターフェース', packageName: 'keras', officialUrl: 'https://keras.posit.co/', features: ['深層学習', 'TensorFlow', 'ニューラルネット'] },
  { id: 'r-torch', name: 'torch', category: 'ai', language: 'r', description: 'PyTorchバインディング', packageName: 'torch', officialUrl: 'https://torch.mlverse.org/', features: ['深層学習', 'GPU', 'テンソル'] },
  { id: 'r-mlr3', name: 'mlr3', category: 'ai', language: 'r', description: '次世代MLフレームワーク', packageName: 'mlr3', officialUrl: 'https://mlr3.mlr-org.com/', features: ['パイプライン', 'ベンチマーク', 'AutoML'] },
  { id: 'r-ranger', name: 'ranger', category: 'ai', language: 'r', description: '高速ランダムフォレスト', packageName: 'ranger', github: 'https://github.com/imbs-hl/ranger', features: ['高速', 'RF', 'C++'] },
  { id: 'r-lightgbm', name: 'lightgbm', category: 'ai', language: 'r', description: 'LightGBM', packageName: 'lightgbm', officialUrl: 'https://lightgbm.readthedocs.io/', features: ['GBDT', '高速', '大規模データ'] },
  { id: 'r-glmnet', name: 'glmnet', category: 'ai', language: 'r', description: 'Lasso/Ridge回帰', packageName: 'glmnet', officialUrl: 'https://glmnet.stanford.edu/', features: ['正則化', 'Lasso', 'Ridge'] },
  { id: 'r-e1071', name: 'e1071', category: 'ai', language: 'r', description: 'SVM等の機械学習', packageName: 'e1071', github: 'https://github.com/cran/e1071', features: ['SVM', 'ナイーブベイズ', 'クラスタリング'] },
  { id: 'r-text', name: 'text', category: 'ai', language: 'r', description: 'テキスト分析・NLP', packageName: 'text', officialUrl: 'https://r-text.org/', features: ['BERT', '埋め込み', 'NLP'] },
  { id: 'r-ellmer', name: 'ellmer', category: 'ai', language: 'r', description: 'LLM APIクライアント', packageName: 'ellmer', github: 'https://github.com/tidyverse/ellmer', features: ['OpenAI', 'Claude', 'ストリーム'] },

  // DB操作関連
  { id: 'r-dbi', name: 'DBI', category: 'database', language: 'r', description: 'データベースインターフェース', packageName: 'DBI', officialUrl: 'https://dbi.r-dbi.org/', features: ['標準IF', '抽象化', '多DB対応'] },
  { id: 'r-dbplyr', name: 'dbplyr', category: 'database', language: 'r', description: 'dplyrのDBバックエンド', packageName: 'dbplyr', officialUrl: 'https://dbplyr.tidyverse.org/', features: ['dplyr', 'SQL生成', '遅延評価'] },
  { id: 'r-rpostgres', name: 'RPostgres', category: 'database', language: 'r', description: 'PostgreSQLドライバ', packageName: 'RPostgres', officialUrl: 'https://rpostgres.r-dbi.org/', features: ['PostgreSQL', 'DBI', '高速'] },
  { id: 'r-rmysql', name: 'RMySQL', category: 'database', language: 'r', description: 'MySQLドライバ', packageName: 'RMySQL', github: 'https://github.com/r-dbi/RMySQL', features: ['MySQL', 'MariaDB', 'DBI'] },
  { id: 'r-rsqlite', name: 'RSQLite', category: 'database', language: 'r', description: 'SQLiteドライバ', packageName: 'RSQLite', officialUrl: 'https://rsqlite.r-dbi.org/', features: ['SQLite', '組み込み', 'DBI'] },
  { id: 'r-odbc', name: 'odbc', category: 'database', language: 'r', description: 'ODBCインターフェース', packageName: 'odbc', officialUrl: 'https://odbc.r-dbi.org/', features: ['ODBC', 'マルチDB', 'DBI'] },
  { id: 'r-mongolite', name: 'mongolite', category: 'database', language: 'r', description: 'MongoDBドライバ', packageName: 'mongolite', officialUrl: 'https://jeroen.github.io/mongolite/', features: ['MongoDB', '高速', 'ストリーム'] },
  { id: 'r-pool', name: 'pool', category: 'database', language: 'r', description: 'DBコネクションプール', packageName: 'pool', github: 'https://github.com/rstudio/pool', features: ['コネクションプール', 'Shiny', 'DBI'] },
  { id: 'r-duckdb', name: 'duckdb', category: 'database', language: 'r', description: 'DuckDB分析用DB', packageName: 'duckdb', officialUrl: 'https://duckdb.org/', features: ['分析特化', '高速', '組み込み'] },

  // タスク管理
  { id: 'r-targets', name: 'targets', category: 'task-queue', language: 'r', description: 'パイプライン管理', packageName: 'targets', officialUrl: 'https://docs.ropensci.org/targets/', features: ['パイプライン', 'キャッシュ', '再現性'] },
  { id: 'r-future', name: 'future', category: 'task-queue', language: 'r', description: '非同期・並列処理', packageName: 'future', officialUrl: 'https://future.futureverse.org/', features: ['非同期', '並列', 'プロミス'] },
  { id: 'r-callr', name: 'callr', category: 'task-queue', language: 'r', description: 'バックグラウンドRプロセス', packageName: 'callr', officialUrl: 'https://callr.r-lib.org/', features: ['サブプロセス', '非同期', '分離'] },
  { id: 'r-crew', name: 'crew', category: 'task-queue', language: 'r', description: '分散タスクキュー', packageName: 'crew', officialUrl: 'https://wlandau.github.io/crew/', features: ['分散', 'ワーカー', 'targets連携'] },
  { id: 'r-later', name: 'later', category: 'task-queue', language: 'r', description: '遅延実行', packageName: 'later', github: 'https://github.com/r-lib/later', features: ['遅延', 'コールバック', 'イベントループ'] },

  // 認証・認可
  { id: 'r-httr2-oauth', name: 'httr2 OAuth', category: 'auth', language: 'r', description: 'OAuth認証（httr2）', packageName: 'httr2', officialUrl: 'https://httr2.r-lib.org/', features: ['OAuth', 'トークン', 'フロー'] },
  { id: 'r-gargle', name: 'gargle', category: 'auth', language: 'r', description: 'Google認証', packageName: 'gargle', officialUrl: 'https://gargle.r-lib.org/', features: ['Google', 'OAuth', 'サービスアカウント'] },
  { id: 'r-jose', name: 'jose', category: 'auth', language: 'r', description: 'JWT/JWE/JWK', packageName: 'jose', officialUrl: 'https://docs.ropensci.org/jose/', features: ['JWT', '署名', '暗号化'] },
  { id: 'r-sodium', name: 'sodium', category: 'auth', language: 'r', description: '暗号化ライブラリ', packageName: 'sodium', officialUrl: 'https://docs.ropensci.org/sodium/', features: ['暗号化', 'ハッシュ', '署名'] },
  { id: 'r-keyring', name: 'keyring', category: 'auth', language: 'r', description: 'システムキーリング', packageName: 'keyring', officialUrl: 'https://keyring.r-lib.org/', features: ['認証情報', 'キーチェーン', 'セキュア'] },

  // HTTP通信
  { id: 'r-httr2', name: 'httr2', category: 'http', language: 'r', description: '次世代HTTPクライアント', packageName: 'httr2', officialUrl: 'https://httr2.r-lib.org/', features: ['パイプライン', 'リトライ', 'OAuth'] },
  { id: 'r-httr', name: 'httr', category: 'http', language: 'r', description: 'HTTPクライアント', packageName: 'httr', officialUrl: 'https://httr.r-lib.org/', features: ['HTTP', 'curl', 'シンプル'] },
  { id: 'r-curl', name: 'curl', category: 'http', language: 'r', description: 'libcurlバインディング', packageName: 'curl', officialUrl: 'https://jeroen.r-universe.dev/curl', features: ['curl', '低レベル', 'ストリーム'] },
  { id: 'r-jsonlite', name: 'jsonlite', category: 'http', language: 'r', description: 'JSON処理定番', packageName: 'jsonlite', officialUrl: 'https://jeroen.r-universe.dev/jsonlite', features: ['JSON', 'パース', 'シリアライズ'] },
  { id: 'r-crul', name: 'crul', category: 'http', language: 'r', description: 'HTTPクライアント（rOpenSci）', packageName: 'crul', officialUrl: 'https://docs.ropensci.org/crul/', features: ['HTTP', '非同期', 'モック'] },

  // バリデーション
  { id: 'r-assertthat', name: 'assertthat', category: 'validation', language: 'r', description: 'アサーション', packageName: 'assertthat', github: 'https://github.com/hadley/assertthat', features: ['アサーション', 'エラーメッセージ'] },
  { id: 'r-checkmate', name: 'checkmate', category: 'validation', language: 'r', description: '高速引数チェック', packageName: 'checkmate', officialUrl: 'https://mllg.github.io/checkmate/', features: ['引数チェック', '高速', '型'] },
  { id: 'r-validate', name: 'validate', category: 'validation', language: 'r', description: 'データバリデーション', packageName: 'validate', officialUrl: 'https://data-cleaning.github.io/validate/', features: ['データ検証', 'ルール', 'レポート'] },
  { id: 'r-pointblank', name: 'pointblank', category: 'validation', language: 'r', description: 'データ品質検証', packageName: 'pointblank', officialUrl: 'https://rstudio.github.io/pointblank/', features: ['データ品質', 'レポート', 'パイプライン'] },

  // 日付・時間
  { id: 'r-lubridate', name: 'lubridate', category: 'date', language: 'r', description: '日付操作定番', packageName: 'lubridate', officialUrl: 'https://lubridate.tidyverse.org/', features: ['パース', '計算', 'タイムゾーン'] },
  { id: 'r-clock', name: 'clock', category: 'date', language: 'r', description: '次世代日付ライブラリ', packageName: 'clock', officialUrl: 'https://clock.r-lib.org/', features: ['精密', 'カレンダー', 'ナノ秒'] },
  { id: 'r-hms', name: 'hms', category: 'date', language: 'r', description: '時刻クラス', packageName: 'hms', officialUrl: 'https://hms.tidyverse.org/', features: ['時刻', 'フォーマット', 'tidyverse'] },
  { id: 'r-anytime', name: 'anytime', category: 'date', language: 'r', description: '柔軟な日付パース', packageName: 'anytime', officialUrl: 'https://dirk.eddelbuettel.com/code/anytime.html', features: ['自動パース', '柔軟', '高速'] },

  // ファイル操作
  { id: 'r-readr', name: 'readr', category: 'file', language: 'r', description: '高速データ読み込み', packageName: 'readr', officialUrl: 'https://readr.tidyverse.org/', features: ['CSV', '高速', 'tidyverse'] },
  { id: 'r-readxl', name: 'readxl', category: 'file', language: 'r', description: 'Excel読み込み', packageName: 'readxl', officialUrl: 'https://readxl.tidyverse.org/', features: ['Excel', 'xlsx', 'xls'] },
  { id: 'r-writexl', name: 'writexl', category: 'file', language: 'r', description: 'Excel書き込み', packageName: 'writexl', officialUrl: 'https://docs.ropensci.org/writexl/', features: ['Excel', '軽量', '依存なし'] },
  { id: 'r-openxlsx', name: 'openxlsx', category: 'file', language: 'r', description: 'Excel読み書き（高機能）', packageName: 'openxlsx', officialUrl: 'https://ycphs.github.io/openxlsx/', features: ['Excel', 'スタイル', 'チャート'] },
  { id: 'r-haven', name: 'haven', category: 'file', language: 'r', description: 'SPSS/Stata/SAS読み込み', packageName: 'haven', officialUrl: 'https://haven.tidyverse.org/', features: ['SPSS', 'Stata', 'SAS'] },
  { id: 'r-arrow', name: 'arrow', category: 'file', language: 'r', description: 'Apache Arrow', packageName: 'arrow', officialUrl: 'https://arrow.apache.org/docs/r/', features: ['Parquet', '高速', '大規模データ'] },
  { id: 'r-vroom', name: 'vroom', category: 'file', language: 'r', description: '超高速ファイル読み込み', packageName: 'vroom', officialUrl: 'https://vroom.r-lib.org/', features: ['超高速', '遅延読み込み', 'ALTREP'] },
  { id: 'r-fs', name: 'fs', category: 'file', language: 'r', description: 'ファイルシステム操作', packageName: 'fs', officialUrl: 'https://fs.r-lib.org/', features: ['ファイル操作', 'クロスプラットフォーム', 'パス'] },
  { id: 'r-zip', name: 'zip', category: 'file', language: 'r', description: 'ZIP操作', packageName: 'zip', officialUrl: 'https://r-lib.github.io/zip/', features: ['ZIP', '圧縮', '展開'] },

  // メール送信
  { id: 'r-blastula', name: 'blastula', category: 'email', language: 'r', description: 'HTMLメール送信', packageName: 'blastula', officialUrl: 'https://rstudio.github.io/blastula/', features: ['HTML', 'テンプレート', 'SMTP'] },
  { id: 'r-emayili', name: 'emayili', category: 'email', language: 'r', description: 'シンプルメール送信', packageName: 'emayili', github: 'https://github.com/datawookie/emayili', features: ['SMTP', 'シンプル', '添付'] },

  // 検索
  { id: 'r-elastic', name: 'elastic', category: 'search', language: 'r', description: 'Elasticsearchクライアント', packageName: 'elastic', officialUrl: 'https://docs.ropensci.org/elastic/', features: ['Elasticsearch', '検索', 'インデックス'] },

  // ログ・監視
  { id: 'r-logger', name: 'logger', category: 'logging', language: 'r', description: 'ロギングライブラリ', packageName: 'logger', officialUrl: 'https://daroczig.github.io/logger/', features: ['ログレベル', 'フォーマット', 'appender'] },
  { id: 'r-futile-logger', name: 'futile.logger', category: 'logging', language: 'r', description: 'log4j風ロガー', packageName: 'futile.logger', github: 'https://github.com/zatonovo/futile.logger', features: ['log4j', 'appender', 'レイアウト'] },
  { id: 'r-lgr', name: 'lgr', category: 'logging', language: 'r', description: '柔軟なロガー', packageName: 'lgr', officialUrl: 'https://s-fleck.github.io/lgr/', features: ['R6', '階層', 'JSON'] },
  { id: 'r-cli', name: 'cli', category: 'logging', language: 'r', description: 'CLIヘルパー', packageName: 'cli', officialUrl: 'https://cli.r-lib.org/', features: ['プログレス', 'カラー', 'スピナー'] },

  // UIコンポーネント
  { id: 'r-bslib', name: 'bslib', category: 'ui', language: 'r', description: 'Bootstrap Shinyテーマ', packageName: 'bslib', officialUrl: 'https://rstudio.github.io/bslib/', features: ['Bootstrap', 'テーマ', 'カスタマイズ'] },
  { id: 'r-shinydashboard', name: 'shinydashboard', category: 'ui', language: 'r', description: 'Shinyダッシュボード', packageName: 'shinydashboard', officialUrl: 'https://rstudio.github.io/shinydashboard/', features: ['ダッシュボード', 'AdminLTE', 'ボックス'] },
  { id: 'r-shinywidgets', name: 'shinyWidgets', category: 'ui', language: 'r', description: 'Shinyカスタムウィジェット', packageName: 'shinyWidgets', officialUrl: 'https://dreamrs.github.io/shinyWidgets/', features: ['ウィジェット', 'ピッカー', 'スイッチ'] },
  { id: 'r-dt', name: 'DT', category: 'ui', language: 'r', description: 'DataTablesラッパー', packageName: 'DT', officialUrl: 'https://rstudio.github.io/DT/', features: ['テーブル', 'フィルタ', 'ソート'] },
  { id: 'r-reactable', name: 'reactable', category: 'ui', language: 'r', description: 'Reactテーブル', packageName: 'reactable', officialUrl: 'https://glin.github.io/reactable/', features: ['React', 'インタラクティブ', 'スタイル'] },
  { id: 'r-htmlwidgets', name: 'htmlwidgets', category: 'ui', language: 'r', description: 'JSウィジェットフレームワーク', packageName: 'htmlwidgets', officialUrl: 'https://www.htmlwidgets.org/', features: ['JS連携', 'ウィジェット', 'Shiny'] },
  { id: 'r-gt', name: 'gt', category: 'ui', language: 'r', description: '高品質テーブル', packageName: 'gt', officialUrl: 'https://gt.rstudio.com/', features: ['テーブル', 'スタイル', 'HTML'] },
  { id: 'r-formattable', name: 'formattable', category: 'ui', language: 'r', description: 'フォーマット済みテーブル', packageName: 'formattable', github: 'https://github.com/renkun-ken/formattable', features: ['条件付き書式', 'カラーバー'] },

  // 状態管理
  { id: 'r-memoise', name: 'memoise', category: 'state', language: 'r', description: '関数メモ化', packageName: 'memoise', officialUrl: 'https://memoise.r-lib.org/', features: ['キャッシュ', 'メモ化', '高速化'] },
  { id: 'r-cachem', name: 'cachem', category: 'state', language: 'r', description: 'キャッシュ管理', packageName: 'cachem', officialUrl: 'https://cachem.r-lib.org/', features: ['キャッシュ', 'メモリ', 'ディスク'] },
  { id: 'r-R6', name: 'R6', category: 'state', language: 'r', description: 'R6クラスシステム', packageName: 'R6', officialUrl: 'https://r6.r-lib.org/', features: ['OOP', 'リファレンス', 'ミュータブル'] },

  // 国際化
  { id: 'r-shiny-i18n', name: 'shiny.i18n', category: 'i18n', language: 'r', description: 'Shiny国際化', packageName: 'shiny.i18n', officialUrl: 'https://appsilon.github.io/shiny.i18n/', features: ['Shiny', '翻訳', 'JSON/CSV'] },

  // リアルタイム通信
  { id: 'r-websocket', name: 'websocket', category: 'realtime', language: 'r', description: 'WebSocketクライアント', packageName: 'websocket', officialUrl: 'https://rstudio.github.io/websocket/', features: ['WebSocket', '非同期', 'コールバック'] },
  { id: 'r-httpuv', name: 'httpuv', category: 'realtime', language: 'r', description: 'HTTP/WebSocketサーバー', packageName: 'httpuv', github: 'https://github.com/rstudio/httpuv', features: ['サーバー', 'WebSocket', 'libuv'] },

  // PDF操作
  { id: 'r-pdftools', name: 'pdftools', category: 'pdf', language: 'r', description: 'PDF操作', packageName: 'pdftools', officialUrl: 'https://docs.ropensci.org/pdftools/', features: ['テキスト抽出', '画像', 'メタデータ'] },
  { id: 'r-qpdf', name: 'qpdf', category: 'pdf', language: 'r', description: 'PDF分割・結合', packageName: 'qpdf', officialUrl: 'https://docs.ropensci.org/qpdf/', features: ['分割', '結合', '圧縮'] },
  { id: 'r-pagedown', name: 'pagedown', category: 'pdf', language: 'r', description: 'HTML→PDF変換', packageName: 'pagedown', officialUrl: 'https://pagedown.rbind.io/', features: ['R Markdown', 'HTML', 'Chrome'] },

  // 動画・音声
  { id: 'r-av', name: 'av', category: 'video-audio', language: 'r', description: 'FFmpegバインディング', packageName: 'av', officialUrl: 'https://docs.ropensci.org/av/', features: ['動画', '音声', 'FFmpeg'] },
  { id: 'r-tuneR', name: 'tuneR', category: 'video-audio', language: 'r', description: '音声解析', packageName: 'tuneR', officialUrl: 'https://cran.r-project.org/package=tuneR', features: ['音声', 'Wave', '解析'] },
  { id: 'r-gganimate', name: 'gganimate', category: 'video-audio', language: 'r', description: 'ggplot2アニメーション', packageName: 'gganimate', officialUrl: 'https://gganimate.com/', features: ['アニメーション', 'GIF', 'ggplot2'] },

  // ユーティリティ
  { id: 'r-dplyr', name: 'dplyr', category: 'utility', language: 'r', description: 'データ操作定番', packageName: 'dplyr', officialUrl: 'https://dplyr.tidyverse.org/', features: ['パイプ', 'filter', 'mutate'] },
  { id: 'r-tidyr', name: 'tidyr', category: 'utility', language: 'r', description: 'データ整形', packageName: 'tidyr', officialUrl: 'https://tidyr.tidyverse.org/', features: ['pivot', 'nest', 'tidy'] },
  { id: 'r-purrr', name: 'purrr', category: 'utility', language: 'r', description: '関数型プログラミング', packageName: 'purrr', officialUrl: 'https://purrr.tidyverse.org/', features: ['map', 'reduce', 'リスト操作'] },
  { id: 'r-stringr', name: 'stringr', category: 'utility', language: 'r', description: '文字列操作', packageName: 'stringr', officialUrl: 'https://stringr.tidyverse.org/', features: ['正規表現', 'パターン', 'tidyverse'] },
  { id: 'r-tibble', name: 'tibble', category: 'utility', language: 'r', description: 'モダンdata.frame', packageName: 'tibble', officialUrl: 'https://tibble.tidyverse.org/', features: ['data.frame', '表示', 'tidyverse'] },
  { id: 'r-data-table', name: 'data.table', category: 'utility', language: 'r', description: '高速データ操作', packageName: 'data.table', officialUrl: 'https://rdatatable.gitlab.io/data.table/', features: ['高速', '省メモリ', '構文'] },
  { id: 'r-glue', name: 'glue', category: 'utility', language: 'r', description: '文字列補間', packageName: 'glue', officialUrl: 'https://glue.tidyverse.org/', features: ['補間', 'テンプレート', 'シンプル'] },
  { id: 'r-magrittr', name: 'magrittr', category: 'utility', language: 'r', description: 'パイプ演算子', packageName: 'magrittr', officialUrl: 'https://magrittr.tidyverse.org/', features: ['パイプ', '%>%', '可読性'] },
  { id: 'r-forcats', name: 'forcats', category: 'utility', language: 'r', description: 'ファクター操作', packageName: 'forcats', officialUrl: 'https://forcats.tidyverse.org/', features: ['factor', '並び替え', 'tidyverse'] },
  { id: 'r-rlang', name: 'rlang', category: 'utility', language: 'r', description: 'R言語ツール', packageName: 'rlang', officialUrl: 'https://rlang.r-lib.org/', features: ['tidy eval', 'NSE', 'エラー'] },

  // CLI作成
  { id: 'r-optparse', name: 'optparse', category: 'cli', language: 'r', description: 'コマンドライン引数', packageName: 'optparse', github: 'https://github.com/trevorld/r-optparse', features: ['引数', 'オプション', 'ヘルプ'] },
  { id: 'r-argparse', name: 'argparse', category: 'cli', language: 'r', description: 'Python argparse風', packageName: 'argparse', github: 'https://github.com/trevorld/r-argparse', features: ['引数', 'サブコマンド', 'Python風'] },
  { id: 'r-docopt', name: 'docopt', category: 'cli', language: 'r', description: 'docopt実装', packageName: 'docopt', github: 'https://github.com/docopt/docopt.R', features: ['docopt', 'ヘルプ', 'シンプル'] },

  // グラフ・可視化
  { id: 'r-ggplot2', name: 'ggplot2', category: 'chart', language: 'r', description: 'グラフ作成定番', packageName: 'ggplot2', officialUrl: 'https://ggplot2.tidyverse.org/', features: ['文法', 'レイヤー', '美しい'] },
  { id: 'r-plotly', name: 'plotly', category: 'chart', language: 'r', description: 'インタラクティブグラフ', packageName: 'plotly', officialUrl: 'https://plotly.com/r/', features: ['インタラクティブ', 'ggplot2変換', '3D'] },
  { id: 'r-highcharter', name: 'highcharter', category: 'chart', language: 'r', description: 'Highchartsラッパー', packageName: 'highcharter', officialUrl: 'https://jkunst.com/highcharter/', features: ['Highcharts', 'インタラクティブ', '多種類'] },
  { id: 'r-echarts4r', name: 'echarts4r', category: 'chart', language: 'r', description: 'EChartsラッパー', packageName: 'echarts4r', officialUrl: 'https://echarts4r.john-coene.com/', features: ['ECharts', 'インタラクティブ', 'Shiny'] },
  { id: 'r-leaflet', name: 'leaflet', category: 'chart', language: 'r', description: '地図可視化', packageName: 'leaflet', officialUrl: 'https://rstudio.github.io/leaflet/', features: ['地図', 'タイル', 'マーカー'] },
  { id: 'r-ggmap', name: 'ggmap', category: 'chart', language: 'r', description: 'ggplot2地図', packageName: 'ggmap', github: 'https://github.com/dkahle/ggmap', features: ['Google Maps', 'Stamen', 'ggplot2'] },
  { id: 'r-visnetwork', name: 'visNetwork', category: 'chart', language: 'r', description: 'ネットワーク可視化', packageName: 'visNetwork', officialUrl: 'https://datastorm-open.github.io/visNetwork/', features: ['ネットワーク', 'vis.js', 'インタラクティブ'] },
  { id: 'r-networkD3', name: 'networkD3', category: 'chart', language: 'r', description: 'D3ネットワーク', packageName: 'networkD3', officialUrl: 'https://christophergandrud.github.io/networkD3/', features: ['D3.js', 'サンキー', 'フォースレイアウト'] },
  { id: 'r-patchwork', name: 'patchwork', category: 'chart', language: 'r', description: 'ggplot2組み合わせ', packageName: 'patchwork', officialUrl: 'https://patchwork.data-imaginist.com/', features: ['レイアウト', '組み合わせ', 'ggplot2'] },
  { id: 'r-cowplot', name: 'cowplot', category: 'chart', language: 'r', description: 'ggplot2アドオン', packageName: 'cowplot', officialUrl: 'https://wilkelab.org/cowplot/', features: ['テーマ', 'グリッド', '出版品質'] },
  { id: 'r-scales', name: 'scales', category: 'chart', language: 'r', description: 'スケール・フォーマット', packageName: 'scales', officialUrl: 'https://scales.r-lib.org/', features: ['スケール', 'フォーマット', 'カラー'] },
  { id: 'r-viridis', name: 'viridis', category: 'chart', language: 'r', description: 'カラーパレット', packageName: 'viridis', officialUrl: 'https://sjmgarnier.github.io/viridis/', features: ['カラー', 'アクセシブル', 'ggplot2'] },

  // CMS
  { id: 'r-blogdown', name: 'blogdown', category: 'cms', language: 'r', description: 'R Markdown + Hugoでブログ構築', packageName: 'blogdown', officialUrl: 'https://bookdown.org/yihui/blogdown/', features: ['R Markdown', 'Hugo', 'ブログ', '静的サイト'] },
  { id: 'r-distill', name: 'distill', category: 'cms', language: 'r', description: '科学・技術ブログ向け', packageName: 'distill', officialUrl: 'https://rstudio.github.io/distill/', features: ['R Markdown', '科学論文風', '引用', 'アクセシビリティ'] },
  { id: 'r-quarto', name: 'Quarto', category: 'cms', language: 'r', description: '次世代科学出版システム', officialUrl: 'https://quarto.org/', features: ['多言語', 'ドキュメント', 'ブログ', 'スライド'] },
]
