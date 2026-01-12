import type { Library } from '~/types'

export const cLibraries: Library[] = [
  // ==================== フレームワーク ====================
  { id: 'c-glib', name: 'GLib', category: 'framework', language: 'c', description: 'GNOME基盤ライブラリ', packageName: 'glib', officialUrl: 'https://docs.gtk.org/glib/', features: ['データ構造', 'イベントループ', 'スレッド'] },
  { id: 'c-apr', name: 'Apache APR', category: 'framework', language: 'c', description: 'Apache移植性ランタイム', packageName: 'apr', officialUrl: 'https://apr.apache.org/', features: ['移植性', 'メモリプール', 'ファイルI/O'] },
  { id: 'c-libuv', name: 'libuv', category: 'framework', language: 'c', description: '非同期I/Oライブラリ', packageName: 'libuv', officialUrl: 'https://libuv.org/', features: ['イベントループ', 'Node.js基盤', 'クロスプラットフォーム'] },
  { id: 'c-libev', name: 'libev', category: 'framework', language: 'c', description: '高性能イベントループ', officialUrl: 'http://software.schmorp.de/pkg/libev.html', features: ['イベント駆動', '軽量', '高速'] },
  { id: 'c-libevent', name: 'libevent', category: 'framework', language: 'c', description: 'イベント通知ライブラリ', packageName: 'libevent', officialUrl: 'https://libevent.org/', features: ['イベント駆動', 'ネットワーク', 'バッファ'] },

  // ==================== UI/GUI ====================
  { id: 'c-gtk', name: 'GTK', category: 'ui', language: 'c', description: 'GNOMEツールキット', packageName: 'gtk4', officialUrl: 'https://www.gtk.org/', features: ['GUI', 'クロスプラットフォーム', 'GNOME'] },
  { id: 'c-ncurses', name: 'ncurses', category: 'ui', language: 'c', description: 'テキストUI ライブラリ', packageName: 'ncurses', officialUrl: 'https://invisible-island.net/ncurses/', features: ['TUI', 'ターミナル', '文字ベースUI'] },
  { id: 'c-sdl2', name: 'SDL2', category: 'ui', language: 'c', description: 'マルチメディアライブラリ', packageName: 'sdl2', officialUrl: 'https://www.libsdl.org/', features: ['ゲーム', 'グラフィックス', '入力'] },
  { id: 'c-raylib', name: 'raylib', category: 'ui', language: 'c', description: 'シンプルゲームプログラミング', packageName: 'raylib', officialUrl: 'https://www.raylib.com/', features: ['シンプル', '教育向け', 'ゲーム'] },
  { id: 'c-allegro', name: 'Allegro', category: 'ui', language: 'c', description: 'ゲーム開発ライブラリ', packageName: 'allegro', officialUrl: 'https://liballeg.org/', features: ['2D/3D', 'オーディオ', '入力'] },
  { id: 'c-glfw', name: 'GLFW', category: 'ui', language: 'c', description: 'OpenGLウィンドウライブラリ', packageName: 'glfw', officialUrl: 'https://www.glfw.org/', features: ['ウィンドウ', 'OpenGL', '入力'] },
  { id: 'c-nuklear', name: 'Nuklear', category: 'ui', language: 'c', description: 'シングルヘッダーGUI', github: 'https://github.com/Immediate-Mode-UI/Nuklear', features: ['シングルヘッダー', 'イミディエイト', '軽量'] },

  // ==================== テスト ====================
  { id: 'c-check', name: 'Check', category: 'testing', language: 'c', description: 'Cユニットテストフレームワーク', packageName: 'check', officialUrl: 'https://libcheck.github.io/check/', features: ['ユニットテスト', 'フォーク', 'タイムアウト'] },
  { id: 'c-unity', name: 'Unity Test', category: 'testing', language: 'c', description: '軽量C テストフレームワーク', github: 'https://github.com/ThrowTheSwitch/Unity', features: ['組み込み', '軽量', 'シンプル'] },
  { id: 'c-cmocka', name: 'cmocka', category: 'testing', language: 'c', description: 'モック対応テストフレームワーク', packageName: 'cmocka', officialUrl: 'https://cmocka.org/', features: ['モック', 'アサーション', '組み込み対応'] },
  { id: 'c-cunit', name: 'CUnit', category: 'testing', language: 'c', description: 'C言語ユニットテスト', packageName: 'cunit', officialUrl: 'http://cunit.sourceforge.net/', features: ['xUnit', 'レジストリ', 'レポート'] },
  { id: 'c-criterion', name: 'Criterion', category: 'testing', language: 'c', description: 'モダンCテストフレームワーク', packageName: 'criterion', github: 'https://github.com/Snaipe/Criterion', features: ['並列', 'パラメータ化', '自動登録'] },
  { id: 'c-greatest', name: 'greatest', category: 'testing', language: 'c', description: 'シングルヘッダーテスト', github: 'https://github.com/silentbicycle/greatest', features: ['シングルヘッダー', '軽量', 'シンプル'] },
  { id: 'c-minunit', name: 'MinUnit', category: 'testing', language: 'c', description: '最小テストフレームワーク', officialUrl: 'http://www.jera.com/techinfo/jtns/jtn002.html', features: ['最小', 'マクロ', 'シンプル'] },

  // ==================== 画像処理 ====================
  { id: 'c-stb-image', name: 'stb_image', category: 'image', language: 'c', description: 'シングルヘッダー画像読み込み', github: 'https://github.com/nothings/stb', features: ['シングルヘッダー', '画像読み書き', '軽量'] },
  { id: 'c-libpng', name: 'libpng', category: 'image', language: 'c', description: 'PNG参照実装', packageName: 'libpng', officialUrl: 'http://www.libpng.org/', features: ['PNG', '参照実装', '標準'] },
  { id: 'c-libjpeg', name: 'libjpeg-turbo', category: 'image', language: 'c', description: '高速JPEG処理', packageName: 'libjpeg-turbo', officialUrl: 'https://libjpeg-turbo.org/', features: ['JPEG', 'SIMD', '高速'] },
  { id: 'c-libwebp', name: 'libwebp', category: 'image', language: 'c', description: 'WebP画像処理', packageName: 'libwebp', officialUrl: 'https://developers.google.com/speed/webp/', features: ['WebP', 'Google製', '圧縮'] },
  { id: 'c-giflib', name: 'giflib', category: 'image', language: 'c', description: 'GIF操作ライブラリ', packageName: 'giflib', officialUrl: 'https://giflib.sourceforge.net/', features: ['GIF', '読み書き', '軽量'] },
  { id: 'c-freeimage', name: 'FreeImage', category: 'image', language: 'c', description: 'マルチフォーマット画像ライブラリ', officialUrl: 'https://freeimage.sourceforge.io/', features: ['多フォーマット', 'オープンソース', '変換'] },

  // ==================== スクレイピング ====================
  { id: 'c-gumbo', name: 'Gumbo', category: 'scraping', language: 'c', description: 'Google製HTML5パーサー', github: 'https://github.com/google/gumbo-parser', features: ['HTML5', 'Google製', 'C言語'] },
  { id: 'c-lexbor', name: 'Lexbor', category: 'scraping', language: 'c', description: '超高速HTMLパーサー', github: 'https://github.com/nickg/lexbor', features: ['超高速', 'HTML5', 'CSS'] },
  { id: 'c-libxml2', name: 'libxml2', category: 'scraping', language: 'c', description: 'GNOME XMLライブラリ', packageName: 'libxml2', officialUrl: 'https://gitlab.gnome.org/GNOME/libxml2', features: ['XML', 'HTML', 'XPath'] },
  { id: 'c-tidy', name: 'HTML Tidy', category: 'scraping', language: 'c', description: 'HTML整形・修復', officialUrl: 'https://www.html-tidy.org/', features: ['整形', '修復', 'XHTML変換'] },
  { id: 'c-myhtml', name: 'myhtml', category: 'scraping', language: 'c', description: '高速HTMLパーサー', github: 'https://github.com/nickg/myhtml', features: ['高速', 'マルチスレッド', 'HTML5'] },

  // ==================== AI/機械学習 ====================
  { id: 'c-ggml', name: 'ggml', category: 'ai', language: 'c', description: '軽量テンソルライブラリ', github: 'https://github.com/ggerganov/ggml', features: ['テンソル', 'CPU', '量子化'] },
  { id: 'c-whisper', name: 'whisper.cpp', category: 'ai', language: 'c', description: 'Whisper音声認識C移植', github: 'https://github.com/ggerganov/whisper.cpp', features: ['音声認識', 'CPU推論', 'Whisper'] },
  { id: 'c-llama', name: 'llama.cpp', category: 'ai', language: 'c', description: 'LLaMA C推論', github: 'https://github.com/ggerganov/llama.cpp', features: ['LLM', 'CPU推論', '量子化'] },
  { id: 'c-darknet', name: 'Darknet', category: 'ai', language: 'c', description: 'YOLO物体検出フレームワーク', github: 'https://github.com/pjreddie/darknet', features: ['YOLO', '物体検出', 'GPU'] },
  { id: 'c-fann', name: 'FANN', category: 'ai', language: 'c', description: '高速ニューラルネットワーク', packageName: 'fann', officialUrl: 'http://leenissen.dk/fann/', features: ['ニューラルネット', '高速', '軽量'] },

  // ==================== HTTP/ネットワーク ====================
  { id: 'c-curl', name: 'libcurl', category: 'http', language: 'c', description: 'URL転送ライブラリ', packageName: 'curl', officialUrl: 'https://curl.se/libcurl/', features: ['HTTP', 'FTP', 'マルチプロトコル'] },
  { id: 'c-microhttpd', name: 'GNU libmicrohttpd', category: 'http', language: 'c', description: '軽量HTTPサーバー', packageName: 'libmicrohttpd', officialUrl: 'https://www.gnu.org/software/libmicrohttpd/', features: ['HTTPサーバー', '組み込み', '軽量'] },
  { id: 'c-mongoose', name: 'Mongoose', category: 'http', language: 'c', description: '組み込みWebサーバー', github: 'https://github.com/cesanta/mongoose', features: ['WebSocket', 'MQTT', '組み込み'] },
  { id: 'c-libwebsockets', name: 'libwebsockets', category: 'http', language: 'c', description: 'WebSocketライブラリ', packageName: 'libwebsockets', officialUrl: 'https://libwebsockets.org/', features: ['WebSocket', 'HTTP/2', 'TLS'] },
  { id: 'c-civetweb', name: 'CivetWeb', category: 'http', language: 'c', description: '組み込みWebサーバー', github: 'https://github.com/civetweb/civetweb', features: ['組み込み', 'CGI', 'WebSocket'] },
  { id: 'c-onion', name: 'Onion', category: 'http', language: 'c', description: 'C HTTPサーバーライブラリ', github: 'https://github.com/davidmoreno/onion', features: ['REST', 'WebSocket', 'テンプレート'] },
  { id: 'c-h2o', name: 'h2o', category: 'http', language: 'c', description: '高速HTTPサーバー', github: 'https://github.com/h2o/h2o', features: ['HTTP/2', '高速', 'TLS'] },
  { id: 'c-nghttp2', name: 'nghttp2', category: 'http', language: 'c', description: 'HTTP/2ライブラリ', packageName: 'nghttp2', officialUrl: 'https://nghttp2.org/', features: ['HTTP/2', 'HPACK', '高性能'] },
  { id: 'c-zeromq', name: 'ZeroMQ', category: 'http', language: 'c', description: 'メッセージングライブラリ', packageName: 'zeromq', officialUrl: 'https://zeromq.org/', features: ['メッセージング', 'パターン', '高性能'] },
  { id: 'c-nanomsg', name: 'nanomsg', category: 'http', language: 'c', description: '軽量メッセージング', packageName: 'nanomsg', officialUrl: 'https://nanomsg.org/', features: ['メッセージング', '軽量', 'スケーラブル'] },

  // ==================== データベース ====================
  { id: 'c-sqlite', name: 'SQLite', category: 'database', language: 'c', description: '組み込みSQL DB', packageName: 'sqlite3', officialUrl: 'https://www.sqlite.org/', features: ['組み込み', 'サーバーレス', '軽量'] },
  { id: 'c-libpq', name: 'libpq', category: 'database', language: 'c', description: 'PostgreSQL Cクライアント', packageName: 'libpq', officialUrl: 'https://www.postgresql.org/docs/current/libpq.html', features: ['PostgreSQL', '公式', '非同期'] },
  { id: 'c-mysql-client', name: 'MySQL C API', category: 'database', language: 'c', description: 'MySQL Cクライアント', packageName: 'mysql-client', officialUrl: 'https://dev.mysql.com/doc/c-api/', features: ['MySQL', '公式', '低レベル'] },
  { id: 'c-hiredis', name: 'hiredis', category: 'database', language: 'c', description: 'Redis Cクライアント', packageName: 'hiredis', github: 'https://github.com/redis/hiredis', features: ['Redis', '軽量', '高速'] },
  { id: 'c-leveldb', name: 'LevelDB', category: 'database', language: 'c', description: 'Googleキーバリューストア', packageName: 'leveldb', github: 'https://github.com/google/leveldb', features: ['キーバリュー', 'Google製', '組み込み'] },
  { id: 'c-lmdb', name: 'LMDB', category: 'database', language: 'c', description: '高速組み込みDB', packageName: 'lmdb', officialUrl: 'https://www.symas.com/lmdb', features: ['高速読み取り', 'メモリマップ', 'ACID'] },
  { id: 'c-rocksdb', name: 'RocksDB', category: 'database', language: 'c', description: '組み込みキーバリューストア', packageName: 'rocksdb', github: 'https://github.com/facebook/rocksdb', features: ['キーバリュー', 'LSM', 'Facebook'] },
  { id: 'c-unqlite', name: 'UnQLite', category: 'database', language: 'c', description: '組み込みNoSQL', officialUrl: 'https://unqlite.org/', features: ['NoSQL', 'キーバリュー', 'ドキュメント'] },

  // ==================== ログ ====================
  { id: 'c-zlog', name: 'zlog', category: 'logging', language: 'c', description: '高性能Cロギング', github: 'https://github.com/HardySimpson/zlog', features: ['設定ファイル', 'カテゴリ', '高性能'] },
  { id: 'c-log4c', name: 'log4c', category: 'logging', language: 'c', description: 'log4j風Cロギング', officialUrl: 'http://log4c.sourceforge.net/', features: ['log4j風', 'アペンダー', '設定ファイル'] },
  { id: 'c-syslog', name: 'syslog', category: 'logging', language: 'c', description: 'UNIX標準ロギング', officialUrl: 'https://man7.org/linux/man-pages/man3/syslog.3.html', features: ['標準', 'システムログ', 'UNIX'] },
  { id: 'c-logc', name: 'log.c', category: 'logging', language: 'c', description: 'シンプルCロギング', github: 'https://github.com/rxi/log.c', features: ['シンプル', '軽量', 'シングルファイル'] },

  // ==================== 認証・暗号化 ====================
  { id: 'c-openssl', name: 'OpenSSL', category: 'auth', language: 'c', description: '暗号化ライブラリ', packageName: 'openssl', officialUrl: 'https://www.openssl.org/', features: ['SSL/TLS', '暗号化', '証明書'] },
  { id: 'c-mbedtls', name: 'Mbed TLS', category: 'auth', language: 'c', description: '組み込み向けTLS', packageName: 'mbedtls', officialUrl: 'https://www.trustedfirmware.org/projects/mbed-tls/', features: ['組み込み', 'TLS', '軽量'] },
  { id: 'c-libsodium', name: 'libsodium', category: 'auth', language: 'c', description: 'モダン暗号化ライブラリ', packageName: 'libsodium', officialUrl: 'https://libsodium.org/', features: ['モダン', '使いやすい', 'NaCl'] },
  { id: 'c-wolfssl', name: 'wolfSSL', category: 'auth', language: 'c', description: '組み込み向けTLS', packageName: 'wolfssl', officialUrl: 'https://www.wolfssl.com/', features: ['組み込み', 'FIPS', '軽量'] },
  { id: 'c-gnutls', name: 'GnuTLS', category: 'auth', language: 'c', description: 'GNU TLS実装', packageName: 'gnutls', officialUrl: 'https://www.gnutls.org/', features: ['TLS', 'X.509', 'PKCS'] },
  { id: 'c-libressl', name: 'LibreSSL', category: 'auth', language: 'c', description: 'OpenBSD TLSフォーク', packageName: 'libressl', officialUrl: 'https://www.libressl.org/', features: ['OpenBSD', 'セキュリティ', 'TLS'] },

  // ==================== 日付・時間 ====================
  { id: 'c-time', name: 'time.h', category: 'date', language: 'c', description: 'C標準時間ライブラリ', officialUrl: 'https://en.cppreference.com/w/c/chrono', features: ['標準', '時間', 'カレンダー'] },

  // ==================== ファイル操作 ====================
  { id: 'c-zlib', name: 'zlib', category: 'file', language: 'c', description: '圧縮ライブラリ', packageName: 'zlib', officialUrl: 'https://www.zlib.net/', features: ['圧縮', 'deflate', '標準'] },
  { id: 'c-libarchive', name: 'libarchive', category: 'file', language: 'c', description: '多形式アーカイブライブラリ', packageName: 'libarchive', officialUrl: 'https://www.libarchive.org/', features: ['TAR', 'ZIP', 'マルチ形式'] },
  { id: 'c-libzip', name: 'libzip', category: 'file', language: 'c', description: 'ZIP操作ライブラリ', packageName: 'libzip', officialUrl: 'https://libzip.org/', features: ['ZIP', '読み書き', '暗号化'] },
  { id: 'c-bzip2', name: 'bzip2', category: 'file', language: 'c', description: '高圧縮ライブラリ', packageName: 'bzip2', officialUrl: 'https://www.sourceware.org/bzip2/', features: ['高圧縮', 'ブロックソート', '標準'] },
  { id: 'c-lz4', name: 'LZ4', category: 'file', language: 'c', description: '超高速圧縮', packageName: 'lz4', github: 'https://github.com/lz4/lz4', features: ['超高速', '圧縮', '解凍'] },
  { id: 'c-zstd', name: 'Zstandard', category: 'file', language: 'c', description: 'Facebook高速圧縮', packageName: 'zstd', github: 'https://github.com/facebook/zstd', features: ['高速', '高圧縮', 'Facebook'] },
  { id: 'c-xz', name: 'XZ Utils', category: 'file', language: 'c', description: 'LZMA圧縮', packageName: 'xz', officialUrl: 'https://tukaani.org/xz/', features: ['LZMA', '高圧縮', 'ストリーム'] },

  // ==================== 動画・音声 ====================
  { id: 'c-ffmpeg', name: 'FFmpeg', category: 'video-audio', language: 'c', description: 'マルチメディアフレームワーク', packageName: 'ffmpeg', officialUrl: 'https://ffmpeg.org/', features: ['動画', '音声', 'エンコード'] },
  { id: 'c-portaudio', name: 'PortAudio', category: 'video-audio', language: 'c', description: 'クロスプラットフォームオーディオ', packageName: 'portaudio', officialUrl: 'http://www.portaudio.com/', features: ['クロスプラットフォーム', 'リアルタイム', '入出力'] },
  { id: 'c-openal', name: 'OpenAL', category: 'video-audio', language: 'c', description: '3DオーディオAPI', packageName: 'openal-soft', officialUrl: 'https://openal-soft.org/', features: ['3D', 'ゲーム', 'クロスプラットフォーム'] },
  { id: 'c-libsndfile', name: 'libsndfile', category: 'video-audio', language: 'c', description: '音声ファイルライブラリ', packageName: 'libsndfile', officialUrl: 'https://libsndfile.github.io/libsndfile/', features: ['WAV', 'FLAC', 'OGG'] },
  { id: 'c-libvorbis', name: 'libvorbis', category: 'video-audio', language: 'c', description: 'Ogg Vorbisライブラリ', packageName: 'libvorbis', officialUrl: 'https://xiph.org/vorbis/', features: ['Vorbis', 'Ogg', 'オーディオ'] },
  { id: 'c-opus', name: 'Opus', category: 'video-audio', language: 'c', description: '汎用音声コーデック', packageName: 'opus', officialUrl: 'https://opus-codec.org/', features: ['音声', '低遅延', '高品質'] },
  { id: 'c-mpg123', name: 'mpg123', category: 'video-audio', language: 'c', description: 'MP3デコーダー', packageName: 'mpg123', officialUrl: 'https://mpg123.de/', features: ['MP3', 'デコード', '高速'] },

  // ==================== CLI ====================
  { id: 'c-getopt', name: 'getopt', category: 'cli', language: 'c', description: 'POSIX引数パーサー', officialUrl: 'https://man7.org/linux/man-pages/man3/getopt.3.html', features: ['POSIX', '標準', 'オプション'] },
  { id: 'c-argp', name: 'argp', category: 'cli', language: 'c', description: 'GNU引数パーサー', officialUrl: 'https://www.gnu.org/software/libc/manual/html_node/Argp.html', features: ['GNU', 'ヘルプ生成', 'オプション'] },
  { id: 'c-argtable', name: 'argtable3', category: 'cli', language: 'c', description: 'ANSI C引数パーサー', github: 'https://github.com/argtable/argtable3', features: ['ANSI C', 'シングルファイル', '型安全'] },
  { id: 'c-cargs', name: 'cargs', category: 'cli', language: 'c', description: '軽量引数パーサー', github: 'https://github.com/likle/cargs', features: ['軽量', 'シンプル', 'MIT'] },

  // ==================== ユーティリティ ====================
  // JSON
  { id: 'c-cjson', name: 'cJSON', category: 'utility', language: 'c', description: '超軽量JSONパーサー', github: 'https://github.com/DaveGamble/cJSON', features: ['軽量', 'シンプル', 'ANSI C'] },
  { id: 'c-jansson', name: 'Jansson', category: 'utility', language: 'c', description: 'C JSONライブラリ', packageName: 'jansson', officialUrl: 'https://jansson.readthedocs.io/', features: ['JSON', 'メモリ管理', 'Unicode'] },
  { id: 'c-yyjson', name: 'yyjson', category: 'utility', language: 'c', description: '高速JSONライブラリ', github: 'https://github.com/ibireme/yyjson', features: ['高速', 'イミュータブル', 'SIMD'] },
  { id: 'c-parson', name: 'Parson', category: 'utility', language: 'c', description: '軽量JSONライブラリ', github: 'https://github.com/kgabis/parson', features: ['軽量', 'C89', 'シンプル'] },
  { id: 'c-json-c', name: 'json-c', category: 'utility', language: 'c', description: 'JSON C実装', packageName: 'json-c', github: 'https://github.com/json-c/json-c', features: ['成熟', 'オブジェクト', 'シリアライズ'] },
  // XML
  { id: 'c-expat', name: 'Expat', category: 'utility', language: 'c', description: 'ストリームXMLパーサー', packageName: 'expat', officialUrl: 'https://libexpat.github.io/', features: ['SAX', 'ストリーム', '高速'] },
  { id: 'c-mxml', name: 'Mini-XML', category: 'utility', language: 'c', description: '小型XMLライブラリ', packageName: 'mxml', officialUrl: 'https://www.msweet.org/mxml/', features: ['軽量', 'DOM', 'シンプル'] },
  // 数学・科学計算
  { id: 'c-gsl', name: 'GNU Scientific Library', category: 'utility', language: 'c', description: '科学計算ライブラリ', packageName: 'gsl', officialUrl: 'https://www.gnu.org/software/gsl/', features: ['数値計算', '統計', 'FFT'] },
  { id: 'c-fftw', name: 'FFTW', category: 'utility', language: 'c', description: '高速フーリエ変換', packageName: 'fftw', officialUrl: 'https://www.fftw.org/', features: ['FFT', '高速', '精度'] },
  { id: 'c-openblas', name: 'OpenBLAS', category: 'utility', language: 'c', description: '最適化BLAS実装', packageName: 'openblas', officialUrl: 'https://www.openblas.net/', features: ['BLAS', '線形代数', '最適化'] },
  { id: 'c-lapack', name: 'LAPACK', category: 'utility', language: 'c', description: '線形代数パッケージ', packageName: 'lapack', officialUrl: 'https://www.netlib.org/lapack/', features: ['線形代数', '行列', '固有値'] },
  // 正規表現・文字列
  { id: 'c-pcre2', name: 'PCRE2', category: 'utility', language: 'c', description: 'Perl互換正規表現', packageName: 'pcre2', officialUrl: 'https://www.pcre.org/', features: ['正規表現', 'Perl互換', 'Unicode'] },
  { id: 'c-re2c', name: 're2c', category: 'utility', language: 'c', description: '正規表現→Cコンパイラ', packageName: 're2c', officialUrl: 'https://re2c.org/', features: ['レキサー', 'コード生成', '高速'] },
  { id: 'c-icu', name: 'ICU', category: 'utility', language: 'c', description: 'Unicode国際化ライブラリ', packageName: 'icu', officialUrl: 'https://icu.unicode.org/', features: ['Unicode', '国際化', 'ロケール'] },
  // メモリ
  { id: 'c-jemalloc', name: 'jemalloc', category: 'utility', language: 'c', description: '高性能メモリアロケータ', packageName: 'jemalloc', github: 'https://github.com/jemalloc/jemalloc', features: ['高性能', 'フラグメンテーション', 'プロファイリング'] },
  { id: 'c-tcmalloc', name: 'tcmalloc', category: 'utility', language: 'c', description: 'Googleメモリアロケータ', packageName: 'gperftools', github: 'https://github.com/google/tcmalloc', features: ['高速', 'Google製', 'スレッドキャッシュ'] },
  { id: 'c-mimalloc', name: 'mimalloc', category: 'utility', language: 'c', description: 'Microsoftメモリアロケータ', packageName: 'mimalloc', github: 'https://github.com/microsoft/mimalloc', features: ['高速', 'コンパクト', 'Microsoft'] },
  // データ構造
  { id: 'c-uthash', name: 'uthash', category: 'utility', language: 'c', description: 'Cハッシュテーブルマクロ', github: 'https://github.com/troydhanson/uthash', features: ['ハッシュ', 'マクロ', 'ヘッダーオンリー'] },
  { id: 'c-klib', name: 'klib', category: 'utility', language: 'c', description: '軽量Cライブラリ集', github: 'https://github.com/attractivechaos/klib', features: ['汎用', 'ハッシュ', 'ソート'] },
  { id: 'c-sglib', name: 'SGLIB', category: 'utility', language: 'c', description: 'Cジェネリックライブラリ', officialUrl: 'http://sglib.sourceforge.net/', features: ['ジェネリック', 'マクロ', 'データ構造'] },
  // 設定ファイル
  { id: 'c-libconfig', name: 'libconfig', category: 'utility', language: 'c', description: '設定ファイルライブラリ', packageName: 'libconfig', officialUrl: 'https://hyperrealm.github.io/libconfig/', features: ['設定ファイル', '階層', '型付き'] },
  { id: 'c-inih', name: 'inih', category: 'utility', language: 'c', description: 'シンプルINIパーサー', github: 'https://github.com/benhoyt/inih', features: ['INI', 'シンプル', '軽量'] },
  { id: 'c-tomlc99', name: 'tomlc99', category: 'utility', language: 'c', description: 'TOML Cパーサー', github: 'https://github.com/cktan/tomlc99', features: ['TOML', 'C99', 'シンプル'] },
  // ビルドシステム
  { id: 'c-cmake', name: 'CMake', category: 'utility', language: 'c', description: 'クロスプラットフォームビルド', packageName: 'cmake', officialUrl: 'https://cmake.org/', features: ['ビルド', 'クロスプラットフォーム', '標準'] },
  { id: 'c-meson', name: 'Meson', category: 'utility', language: 'c', description: '高速ビルドシステム', packageName: 'meson', officialUrl: 'https://mesonbuild.com/', features: ['高速', 'Python', 'シンプル'] },
  { id: 'c-autotools', name: 'GNU Autotools', category: 'utility', language: 'c', description: 'GNU ビルドシステム', officialUrl: 'https://www.gnu.org/software/automake/', features: ['GNU', '移植性', '標準'] },
]
