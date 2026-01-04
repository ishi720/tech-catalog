import type { Library } from '~/types'

export const cppLibraries: Library[] = [
  // ==================== フレームワーク ====================
  { id: 'cpp-qt', name: 'Qt', category: 'framework', language: 'cpp', description: 'クロスプラットフォームGUIフレームワーク', packageName: 'qt', officialUrl: 'https://www.qt.io/', features: ['GUI', 'クロスプラットフォーム', 'シグナル/スロット'] },
  { id: 'cpp-boost', name: 'Boost', category: 'framework', language: 'cpp', description: 'C++準標準ライブラリ集', packageName: 'boost', officialUrl: 'https://www.boost.org/', features: ['汎用', 'STL拡張', '高品質'] },
  { id: 'cpp-poco', name: 'POCO', category: 'framework', language: 'cpp', description: 'ポータブルC++コンポーネント', packageName: 'poco', officialUrl: 'https://pocoproject.org/', features: ['ネットワーク', 'スレッド', 'ファイルシステム'] },
  { id: 'cpp-abseil', name: 'Abseil', category: 'framework', language: 'cpp', description: 'Google C++共通ライブラリ', packageName: 'abseil', github: 'https://github.com/abseil/abseil-cpp', features: ['Google製', 'STL拡張', '高性能'] },
  { id: 'cpp-folly', name: 'Folly', category: 'framework', language: 'cpp', description: 'Facebook C++ライブラリ', packageName: 'folly', github: 'https://github.com/facebook/folly', features: ['Facebook製', '高性能', '非同期'] },

  // ==================== UI/GUI ====================
  { id: 'cpp-wxwidgets', name: 'wxWidgets', category: 'ui', language: 'cpp', description: 'クロスプラットフォームGUI', packageName: 'wxwidgets', officialUrl: 'https://www.wxwidgets.org/', features: ['ネイティブ', 'クロスプラットフォーム', '成熟'] },
  { id: 'cpp-gtkmm', name: 'gtkmm', category: 'ui', language: 'cpp', description: 'GTK+ C++バインディング', packageName: 'gtkmm', officialUrl: 'https://www.gtkmm.org/', features: ['GTK+', 'Linux', 'GNOME'] },
  { id: 'cpp-imgui', name: 'Dear ImGui', category: 'ui', language: 'cpp', description: 'イミディエイトモードGUI', packageName: 'imgui', github: 'https://github.com/ocornut/imgui', features: ['ゲーム向け', 'デバッグUI', '軽量'] },
  { id: 'cpp-nana', name: 'Nana', category: 'ui', language: 'cpp', description: 'モダンC++ GUI', packageName: 'nana', officialUrl: 'http://nanapro.org/', features: ['モダンC++', 'クロスプラットフォーム', 'STL風'] },
  { id: 'cpp-fltk', name: 'FLTK', category: 'ui', language: 'cpp', description: '軽量GUIツールキット', packageName: 'fltk', officialUrl: 'https://www.fltk.org/', features: ['軽量', '高速', 'OpenGL'] },
  { id: 'cpp-nuklear', name: 'Nuklear', category: 'ui', language: 'cpp', description: 'シングルヘッダーGUI', github: 'https://github.com/Immediate-Mode-UI/Nuklear', features: ['シングルヘッダー', 'イミディエイト', '軽量'] },
  { id: 'cpp-opengl', name: 'OpenGL', category: 'ui', language: 'cpp', description: 'クロスプラットフォームグラフィックスAPI', officialUrl: 'https://www.opengl.org/', features: ['3D', 'クロスプラットフォーム', '標準'] },
  { id: 'cpp-vulkan', name: 'Vulkan', category: 'ui', language: 'cpp', description: '次世代グラフィックスAPI', officialUrl: 'https://www.vulkan.org/', features: ['低レベル', '高性能', 'マルチスレッド'] },
  { id: 'cpp-sdl2', name: 'SDL2', category: 'ui', language: 'cpp', description: 'マルチメディアライブラリ', packageName: 'sdl2', officialUrl: 'https://www.libsdl.org/', features: ['ゲーム', '入力', 'オーディオ'] },
  { id: 'cpp-sfml', name: 'SFML', category: 'ui', language: 'cpp', description: 'シンプルマルチメディアライブラリ', packageName: 'sfml', officialUrl: 'https://www.sfml-dev.org/', features: ['2D', 'シンプル', 'オブジェクト指向'] },
  { id: 'cpp-glfw', name: 'GLFW', category: 'ui', language: 'cpp', description: 'OpenGLウィンドウライブラリ', packageName: 'glfw', officialUrl: 'https://www.glfw.org/', features: ['ウィンドウ', '入力', 'OpenGL'] },
  { id: 'cpp-glad', name: 'glad', category: 'ui', language: 'cpp', description: 'OpenGLローダー', github: 'https://github.com/Dav1dde/glad', features: ['OpenGLローダー', 'マルチプロファイル', 'ウェブ生成'] },
  { id: 'cpp-glm', name: 'GLM', category: 'ui', language: 'cpp', description: 'OpenGL Mathematics', packageName: 'glm', officialUrl: 'https://glm.g-truc.net/', features: ['GLSL風', 'ヘッダーオンリー', '数学'] },
  { id: 'cpp-ogre', name: 'OGRE', category: 'ui', language: 'cpp', description: '3Dレンダリングエンジン', packageName: 'ogre', officialUrl: 'https://www.ogre3d.org/', features: ['3D', 'シーングラフ', 'マテリアル'] },
  { id: 'cpp-bgfx', name: 'bgfx', category: 'ui', language: 'cpp', description: 'クロスプラットフォームレンダリング', github: 'https://github.com/bkaradzic/bgfx', features: ['マルチAPI', 'シェーダー', 'クロスプラットフォーム'] },
  { id: 'cpp-raylib', name: 'raylib', category: 'ui', language: 'cpp', description: 'シンプルゲームプログラミング', packageName: 'raylib', officialUrl: 'https://www.raylib.com/', features: ['シンプル', '教育向け', 'ゲーム'] },

  // ==================== テスト ====================
  { id: 'cpp-gtest', name: 'Google Test', category: 'testing', language: 'cpp', description: 'Google製テストフレームワーク', packageName: 'gtest', github: 'https://github.com/google/googletest', features: ['Google製', 'モック', 'アサーション'] },
  { id: 'cpp-catch2', name: 'Catch2', category: 'testing', language: 'cpp', description: 'ヘッダーオンリーテストフレームワーク', packageName: 'catch2', github: 'https://github.com/catchorg/Catch2', features: ['ヘッダーオンリー', 'BDD', 'シンプル'] },
  { id: 'cpp-doctest', name: 'doctest', category: 'testing', language: 'cpp', description: '最速C++テストフレームワーク', packageName: 'doctest', github: 'https://github.com/doctest/doctest', features: ['高速', 'ヘッダーオンリー', '軽量'] },
  { id: 'cpp-boost-test', name: 'Boost.Test', category: 'testing', language: 'cpp', description: 'Boostテストライブラリ', packageName: 'boost', officialUrl: 'https://www.boost.org/doc/libs/release/libs/test/', features: ['Boost', '豊富な機能', '成熟'] },
  { id: 'cpp-cppunit', name: 'CppUnit', category: 'testing', language: 'cpp', description: 'JUnit風テストフレームワーク', officialUrl: 'https://freedesktop.org/wiki/Software/cppunit/', features: ['JUnit風', 'xUnit', '成熟'] },
  { id: 'cpp-gmock', name: 'Google Mock', category: 'testing', language: 'cpp', description: 'Google製モックライブラリ', packageName: 'gtest', github: 'https://github.com/google/googletest', features: ['モック', 'Google Test統合', 'マッチャー'] },
  { id: 'cpp-fakeit', name: 'FakeIt', category: 'testing', language: 'cpp', description: 'シンプルモッキングライブラリ', github: 'https://github.com/eranpeer/FakeIt', features: ['ヘッダーオンリー', 'シンプル', 'マクロ不要'] },
  { id: 'cpp-benchmark', name: 'Google Benchmark', category: 'testing', language: 'cpp', description: 'マイクロベンチマークライブラリ', packageName: 'benchmark', github: 'https://github.com/google/benchmark', features: ['ベンチマーク', 'Google製', '統計'] },

  // ==================== 画像処理 ====================
  { id: 'cpp-opencv', name: 'OpenCV', category: 'image', language: 'cpp', description: 'コンピュータビジョンライブラリ', packageName: 'opencv', officialUrl: 'https://opencv.org/', features: ['画像処理', '機械学習', 'リアルタイム'] },
  { id: 'cpp-imagemagick', name: 'ImageMagick++', category: 'image', language: 'cpp', description: 'ImageMagick C++API', packageName: 'imagemagick', officialUrl: 'https://imagemagick.org/', features: ['画像変換', '多フォーマット', '高機能'] },
  { id: 'cpp-stb', name: 'stb', category: 'image', language: 'cpp', description: 'シングルヘッダー画像ライブラリ', github: 'https://github.com/nothings/stb', features: ['シングルヘッダー', '画像読み書き', '軽量'] },
  { id: 'cpp-cimg', name: 'CImg', category: 'image', language: 'cpp', description: 'シングルヘッダー画像処理', officialUrl: 'https://cimg.eu/', features: ['シングルヘッダー', '画像処理', 'テンプレート'] },
  { id: 'cpp-freeimage', name: 'FreeImage', category: 'image', language: 'cpp', description: 'マルチフォーマット画像ライブラリ', officialUrl: 'https://freeimage.sourceforge.io/', features: ['多フォーマット', 'オープンソース', '変換'] },
  { id: 'cpp-dlib', name: 'dlib', category: 'image', language: 'cpp', description: '機械学習・画像処理ライブラリ', packageName: 'dlib', officialUrl: 'http://dlib.net/', features: ['顔認識', '機械学習', 'ディープラーニング'] },

  // ==================== スクレイピング ====================
  { id: 'cpp-gumbo', name: 'Gumbo', category: 'scraping', language: 'cpp', description: 'Google製HTML5パーサー', github: 'https://github.com/google/gumbo-parser', features: ['HTML5', 'Google製', 'C言語'] },
  { id: 'cpp-lexbor', name: 'Lexbor', category: 'scraping', language: 'cpp', description: '超高速HTMLパーサー', github: 'https://github.com/nickg/lexbor', features: ['超高速', 'HTML5', 'CSS'] },
  { id: 'cpp-myhtml', name: 'myhtml', category: 'scraping', language: 'cpp', description: '高速HTMLパーサー', github: 'https://github.com/nickg/myhtml', features: ['高速', 'マルチスレッド', 'HTML5'] },
  { id: 'cpp-htmlcxx', name: 'htmlcxx', category: 'scraping', language: 'cpp', description: 'HTMLパーサー・CSS', officialUrl: 'http://htmlcxx.sourceforge.net/', features: ['DOM', 'SAX', 'CSSセレクタ'] },
  { id: 'cpp-tidy', name: 'HTML Tidy', category: 'scraping', language: 'cpp', description: 'HTML整形・修復', officialUrl: 'https://www.html-tidy.org/', features: ['整形', '修復', 'XHTML変換'] },
  { id: 'cpp-hubbub', name: 'Hubbub', category: 'scraping', language: 'cpp', description: 'NetSurf HTMLパーサー', officialUrl: 'https://www.netsurf-browser.org/projects/hubbub/', features: ['HTML5', 'ストリーミング', '軽量'] },

  // ==================== AI/機械学習 ====================
  { id: 'cpp-tensorflow', name: 'TensorFlow C++', category: 'ai', language: 'cpp', description: 'TensorFlow C++ API', packageName: 'tensorflow', officialUrl: 'https://www.tensorflow.org/', features: ['深層学習', 'Google製', 'GPU'] },
  { id: 'cpp-pytorch-cpp', name: 'LibTorch', category: 'ai', language: 'cpp', description: 'PyTorch C++フロントエンド', packageName: 'libtorch', officialUrl: 'https://pytorch.org/cppdocs/', features: ['深層学習', 'PyTorch', 'GPU'] },
  { id: 'cpp-onnxruntime', name: 'ONNX Runtime', category: 'ai', language: 'cpp', description: 'ONNX推論エンジン', packageName: 'onnxruntime', officialUrl: 'https://onnxruntime.ai/', features: ['推論', 'クロスプラットフォーム', '高速'] },
  { id: 'cpp-mlpack', name: 'mlpack', category: 'ai', language: 'cpp', description: '高速機械学習ライブラリ', packageName: 'mlpack', officialUrl: 'https://www.mlpack.org/', features: ['機械学習', 'C++', '高速'] },
  { id: 'cpp-shark', name: 'Shark', category: 'ai', language: 'cpp', description: '機械学習ライブラリ', officialUrl: 'https://www.shark-ml.org/', features: ['機械学習', '最適化', 'ニューラルネット'] },
  { id: 'cpp-caffe', name: 'Caffe', category: 'ai', language: 'cpp', description: 'ディープラーニングフレームワーク', github: 'https://github.com/BVLC/caffe', features: ['CNN', 'GPU', 'モデルズー'] },
  { id: 'cpp-llamacpp', name: 'llama.cpp', category: 'ai', language: 'cpp', description: 'LLaMA C++推論', github: 'https://github.com/ggerganov/llama.cpp', features: ['LLM', 'CPU推論', '量子化'] },
  { id: 'cpp-whisper', name: 'whisper.cpp', category: 'ai', language: 'cpp', description: 'Whisper音声認識C++移植', github: 'https://github.com/ggerganov/whisper.cpp', features: ['音声認識', 'CPU推論', 'Whisper'] },

  // ==================== HTTP/ネットワーク ====================
  { id: 'cpp-asio', name: 'Boost.Asio', category: 'http', language: 'cpp', description: '非同期I/Oライブラリ', packageName: 'boost', officialUrl: 'https://www.boost.org/doc/libs/release/libs/asio/', features: ['非同期', 'ネットワーク', 'タイマー'] },
  { id: 'cpp-asio-standalone', name: 'Asio (standalone)', category: 'http', language: 'cpp', description: 'スタンドアロン非同期I/O', packageName: 'asio', github: 'https://github.com/chriskohlhoff/asio', features: ['非同期', 'Boost不要', 'ヘッダーオンリー'] },
  { id: 'cpp-libcurl', name: 'libcurl', category: 'http', language: 'cpp', description: 'URL転送ライブラリ', packageName: 'curl', officialUrl: 'https://curl.se/libcurl/', features: ['HTTP', 'FTP', 'マルチプロトコル'] },
  { id: 'cpp-cpr', name: 'C++ Requests (cpr)', category: 'http', language: 'cpp', description: 'モダンHTTPクライアント', packageName: 'cpr', github: 'https://github.com/libcpr/cpr', features: ['libcurlラッパー', 'Python風', 'モダン'] },
  { id: 'cpp-beast', name: 'Boost.Beast', category: 'http', language: 'cpp', description: 'HTTP/WebSocketライブラリ', packageName: 'boost', officialUrl: 'https://www.boost.org/doc/libs/release/libs/beast/', features: ['HTTP', 'WebSocket', 'Asio統合'] },
  { id: 'cpp-websocketpp', name: 'WebSocket++', category: 'http', language: 'cpp', description: 'WebSocketライブラリ', github: 'https://github.com/zaphoyd/websocketpp', features: ['WebSocket', 'ヘッダーオンリー', 'クライアント/サーバー'] },
  { id: 'cpp-grpc', name: 'gRPC C++', category: 'http', language: 'cpp', description: 'gRPC C++実装', packageName: 'grpc', officialUrl: 'https://grpc.io/', features: ['gRPC', 'Protocol Buffers', 'ストリーミング'] },
  { id: 'cpp-zeromq', name: 'ZeroMQ (cppzmq)', category: 'http', language: 'cpp', description: 'メッセージングライブラリ', packageName: 'cppzmq', officialUrl: 'https://zeromq.org/', features: ['メッセージング', 'パターン', '高性能'] },
  { id: 'cpp-nanomsg', name: 'nng (nanomsg-next-gen)', category: 'http', language: 'cpp', description: '軽量メッセージングライブラリ', packageName: 'nng', github: 'https://github.com/nanomsg/nng', features: ['メッセージング', '軽量', 'スケーラブル'] },
  { id: 'cpp-restinio', name: 'RESTinio', category: 'http', language: 'cpp', description: '非同期RESTfulサーバー', github: 'https://github.com/Stiffstream/restinio', features: ['REST', '非同期', 'Asio'] },
  { id: 'cpp-drogon', name: 'Drogon', category: 'http', language: 'cpp', description: '高性能Webフレームワーク', packageName: 'drogon', github: 'https://github.com/drogonframework/drogon', features: ['高性能', '非同期', 'ORM'] },
  { id: 'cpp-oatpp', name: 'Oat++', category: 'http', language: 'cpp', description: 'モダンWeb Framework', packageName: 'oatpp', officialUrl: 'https://oatpp.io/', features: ['REST', 'Swagger', 'WebSocket'] },
  { id: 'cpp-pistache', name: 'Pistache', category: 'http', language: 'cpp', description: '高速RESTフレームワーク', github: 'https://github.com/pistacheio/pistache', features: ['REST', '高速', 'HTTP'] },
  { id: 'cpp-crow', name: 'Crow', category: 'http', language: 'cpp', description: 'Flask風マイクロフレームワーク', github: 'https://github.com/CrowCpp/Crow', features: ['Flask風', 'ヘッダーオンリー', 'シンプル'] },

  // ==================== データベース ====================
  { id: 'cpp-sqlite3', name: 'SQLite3', category: 'database', language: 'cpp', description: '組み込みSQL DB', packageName: 'sqlite3', officialUrl: 'https://www.sqlite.org/', features: ['組み込み', 'サーバーレス', '軽量'] },
  { id: 'cpp-sqlitecpp', name: 'SQLiteCpp', category: 'database', language: 'cpp', description: 'SQLite C++ラッパー', github: 'https://github.com/SRombauts/SQLiteCpp', features: ['SQLite', 'RAII', 'モダンC++'] },
  { id: 'cpp-soci', name: 'SOCI', category: 'database', language: 'cpp', description: 'データベースアクセスライブラリ', packageName: 'soci', officialUrl: 'https://soci.sourceforge.net/', features: ['マルチDB', 'ORM風', 'STL風'] },
  { id: 'cpp-mysql-connector', name: 'MySQL Connector/C++', category: 'database', language: 'cpp', description: 'MySQL公式C++ドライバ', packageName: 'mysql-connector-cpp', officialUrl: 'https://dev.mysql.com/downloads/connector/cpp/', features: ['MySQL', '公式', 'X DevAPI'] },
  { id: 'cpp-libpqxx', name: 'libpqxx', category: 'database', language: 'cpp', description: 'PostgreSQL C++クライアント', packageName: 'libpqxx', officialUrl: 'https://pqxx.org/', features: ['PostgreSQL', 'モダンC++', 'トランザクション'] },
  { id: 'cpp-mongocxx', name: 'mongocxx', category: 'database', language: 'cpp', description: 'MongoDB C++ドライバ', packageName: 'mongo-cxx-driver', officialUrl: 'https://mongocxx.org/', features: ['MongoDB', '公式', '非同期'] },
  { id: 'cpp-hiredis', name: 'hiredis', category: 'database', language: 'cpp', description: 'Redis Cクライアント', packageName: 'hiredis', github: 'https://github.com/redis/hiredis', features: ['Redis', '軽量', '高速'] },
  { id: 'cpp-redis-plus-plus', name: 'redis-plus-plus', category: 'database', language: 'cpp', description: 'Redis C++クライアント', github: 'https://github.com/sewenew/redis-plus-plus', features: ['Redis', 'C++17', 'クラスタ'] },
  { id: 'cpp-rocksdb', name: 'RocksDB', category: 'database', language: 'cpp', description: '組み込みキーバリューストア', packageName: 'rocksdb', github: 'https://github.com/facebook/rocksdb', features: ['キーバリュー', 'LSM', 'Facebook'] },
  { id: 'cpp-leveldb', name: 'LevelDB', category: 'database', language: 'cpp', description: 'Googleキーバリューストア', packageName: 'leveldb', github: 'https://github.com/google/leveldb', features: ['キーバリュー', 'Google製', '組み込み'] },
  { id: 'cpp-lmdb', name: 'LMDB++', category: 'database', language: 'cpp', description: 'LMDB C++ラッパー', github: 'https://github.com/drycpp/lmdbxx', features: ['LMDB', '高速読み取り', 'メモリマップ'] },

  // ==================== ログ ====================
  { id: 'cpp-spdlog', name: 'spdlog', category: 'logging', language: 'cpp', description: '超高速ロギングライブラリ', packageName: 'spdlog', github: 'https://github.com/gabime/spdlog', features: ['高速', 'ヘッダーオンリー', 'フォーマット'] },
  { id: 'cpp-glog', name: 'glog', category: 'logging', language: 'cpp', description: 'Googleロギングライブラリ', packageName: 'glog', github: 'https://github.com/google/glog', features: ['Google製', 'ログレベル', 'スタックトレース'] },
  { id: 'cpp-log4cplus', name: 'log4cplus', category: 'logging', language: 'cpp', description: 'log4j風ロギング', packageName: 'log4cplus', github: 'https://github.com/log4cplus/log4cplus', features: ['log4j風', '設定ファイル', 'アペンダー'] },
  { id: 'cpp-plog', name: 'Plog', category: 'logging', language: 'cpp', description: 'ポータブルロギング', github: 'https://github.com/SergiusTheBest/plog', features: ['ヘッダーオンリー', 'ポータブル', 'シンプル'] },
  { id: 'cpp-easylogging', name: 'Easylogging++', category: 'logging', language: 'cpp', description: 'シングルヘッダーロギング', github: 'https://github.com/amrayn/easyloggingpp', features: ['シングルヘッダー', '設定可能', 'パフォーマンス'] },

  // ==================== 認証・暗号化 ====================
  { id: 'cpp-openssl', name: 'OpenSSL', category: 'auth', language: 'cpp', description: '暗号化ライブラリ', packageName: 'openssl', officialUrl: 'https://www.openssl.org/', features: ['SSL/TLS', '暗号化', '証明書'] },
  { id: 'cpp-botan', name: 'Botan', category: 'auth', language: 'cpp', description: 'C++暗号化ライブラリ', packageName: 'botan', officialUrl: 'https://botan.randombit.net/', features: ['暗号化', 'TLS', 'X.509'] },
  { id: 'cpp-cryptopp', name: 'Crypto++', category: 'auth', language: 'cpp', description: 'C++暗号化ライブラリ', packageName: 'cryptopp', officialUrl: 'https://www.cryptopp.com/', features: ['暗号化', 'ハッシュ', '公開鍵'] },
  { id: 'cpp-libsodium', name: 'libsodium', category: 'auth', language: 'cpp', description: 'モダン暗号化ライブラリ', packageName: 'libsodium', officialUrl: 'https://libsodium.org/', features: ['モダン', '使いやすい', 'NaCl'] },
  { id: 'cpp-mbedtls', name: 'Mbed TLS', category: 'auth', language: 'cpp', description: '組み込み向けTLS', packageName: 'mbedtls', officialUrl: 'https://www.trustedfirmware.org/projects/mbed-tls/', features: ['組み込み', 'TLS', '軽量'] },
  { id: 'cpp-jwt-cpp', name: 'jwt-cpp', category: 'auth', language: 'cpp', description: 'JWT C++ライブラリ', github: 'https://github.com/Thalhammer/jwt-cpp', features: ['JWT', 'ヘッダーオンリー', 'JSON'] },

  // ==================== 日付・時間 ====================
  { id: 'cpp-date', name: 'Howard Hinnant date', category: 'date', language: 'cpp', description: 'C++日付ライブラリ', github: 'https://github.com/HowardHinnant/date', features: ['日付', 'タイムゾーン', 'C++20基盤'] },
  { id: 'cpp-chrono', name: 'std::chrono', category: 'date', language: 'cpp', description: 'C++標準時間ライブラリ', officialUrl: 'https://en.cppreference.com/w/cpp/chrono', features: ['標準', '時間', '高精度'] },

  // ==================== ファイル操作 ====================
  { id: 'cpp-filesystem', name: 'std::filesystem', category: 'file', language: 'cpp', description: 'C++17標準ファイルシステム', officialUrl: 'https://en.cppreference.com/w/cpp/filesystem', features: ['標準', 'パス', 'ディレクトリ'] },
  { id: 'cpp-boost-filesystem', name: 'Boost.Filesystem', category: 'file', language: 'cpp', description: 'Boostファイルシステム', packageName: 'boost', officialUrl: 'https://www.boost.org/doc/libs/release/libs/filesystem/', features: ['Boost', 'クロスプラットフォーム', 'C++17前'] },
  { id: 'cpp-zlib', name: 'zlib', category: 'file', language: 'cpp', description: '圧縮ライブラリ', packageName: 'zlib', officialUrl: 'https://www.zlib.net/', features: ['圧縮', 'deflate', '標準'] },
  { id: 'cpp-libzip', name: 'libzip', category: 'file', language: 'cpp', description: 'ZIP操作ライブラリ', packageName: 'libzip', officialUrl: 'https://libzip.org/', features: ['ZIP', '読み書き', '暗号化'] },
  { id: 'cpp-libarchive', name: 'libarchive', category: 'file', language: 'cpp', description: '多形式アーカイブライブラリ', packageName: 'libarchive', officialUrl: 'https://www.libarchive.org/', features: ['TAR', 'ZIP', 'マルチ形式'] },
  { id: 'cpp-minizip', name: 'minizip-ng', category: 'file', language: 'cpp', description: 'ZIPライブラリ', github: 'https://github.com/zlib-ng/minizip-ng', features: ['ZIP', '暗号化', 'AES'] },

  // ==================== 動画・音声 ====================
  { id: 'cpp-ffmpeg', name: 'FFmpeg', category: 'video-audio', language: 'cpp', description: 'マルチメディアフレームワーク', packageName: 'ffmpeg', officialUrl: 'https://ffmpeg.org/', features: ['動画', '音声', 'エンコード'] },
  { id: 'cpp-portaudio', name: 'PortAudio', category: 'video-audio', language: 'cpp', description: 'クロスプラットフォームオーディオ', packageName: 'portaudio', officialUrl: 'http://www.portaudio.com/', features: ['クロスプラットフォーム', 'リアルタイム', '入出力'] },
  { id: 'cpp-openal', name: 'OpenAL', category: 'video-audio', language: 'cpp', description: '3Dオーディオ API', packageName: 'openal-soft', officialUrl: 'https://openal-soft.org/', features: ['3D', 'ゲーム', 'クロスプラットフォーム'] },
  { id: 'cpp-rtaudio', name: 'RtAudio', category: 'video-audio', language: 'cpp', description: 'リアルタイムオーディオ', officialUrl: 'https://www.music.mcgill.ca/~gary/rtaudio/', features: ['リアルタイム', 'クロスプラットフォーム', 'シンプル'] },
  { id: 'cpp-fmod', name: 'FMOD', category: 'video-audio', language: 'cpp', description: 'ゲームオーディオエンジン', officialUrl: 'https://www.fmod.com/', features: ['ゲーム', '3D', 'ミドルウェア'] },

  // ==================== CLI ====================
  { id: 'cpp-cxxopts', name: 'cxxopts', category: 'cli', language: 'cpp', description: '軽量コマンドラインパーサー', github: 'https://github.com/jarro2783/cxxopts', features: ['ヘッダーオンリー', 'シンプル', 'モダン'] },
  { id: 'cpp-cli11', name: 'CLI11', category: 'cli', language: 'cpp', description: 'コマンドラインパーサー', github: 'https://github.com/CLIUtils/CLI11', features: ['ヘッダーオンリー', '豊富な機能', 'サブコマンド'] },
  { id: 'cpp-argparse', name: 'argparse', category: 'cli', language: 'cpp', description: 'Python風引数パーサー', github: 'https://github.com/p-ranav/argparse', features: ['Python風', 'ヘッダーオンリー', 'C++17'] },
  { id: 'cpp-gflags', name: 'gflags', category: 'cli', language: 'cpp', description: 'Googleコマンドラインフラグ', packageName: 'gflags', github: 'https://github.com/gflags/gflags', features: ['Google製', 'フラグ', '設定ファイル'] },

  // ==================== ユーティリティ ====================
  // JSON
  { id: 'cpp-nlohmann-json', name: 'nlohmann/json', category: 'utility', language: 'cpp', description: 'モダンC++ JSON', packageName: 'nlohmann-json', github: 'https://github.com/nlohmann/json', features: ['ヘッダーオンリー', 'STL風', '直感的'] },
  { id: 'cpp-rapidjson', name: 'RapidJSON', category: 'utility', language: 'cpp', description: '高速JSONパーサー', packageName: 'rapidjson', github: 'https://github.com/Tencent/rapidjson', features: ['高速', 'SAX/DOM', 'ヘッダーオンリー'] },
  { id: 'cpp-simdjson', name: 'simdjson', category: 'utility', language: 'cpp', description: 'SIMD高速JSON解析', packageName: 'simdjson', github: 'https://github.com/simdjson/simdjson', features: ['SIMD', '超高速', 'GB/s'] },
  { id: 'cpp-jsoncpp', name: 'JsonCpp', category: 'utility', language: 'cpp', description: 'JSON C++ライブラリ', packageName: 'jsoncpp', github: 'https://github.com/open-source-parsers/jsoncpp', features: ['読み書き', '成熟', 'シンプル'] },
  { id: 'cpp-glaze', name: 'Glaze', category: 'utility', language: 'cpp', description: '超高速JSON/バイナリシリアライズ', github: 'https://github.com/stephenberry/glaze', features: ['高速', 'コンパイル時リフレクション', 'C++20'] },
  // XML
  { id: 'cpp-pugixml', name: 'pugixml', category: 'utility', language: 'cpp', description: '軽量XMLライブラリ', packageName: 'pugixml', officialUrl: 'https://pugixml.org/', features: ['軽量', '高速', 'XPath'] },
  { id: 'cpp-tinyxml2', name: 'TinyXML-2', category: 'utility', language: 'cpp', description: 'シンプルXMLパーサー', packageName: 'tinyxml2', github: 'https://github.com/leethomason/tinyxml2', features: ['軽量', 'シンプル', 'DOM'] },
  { id: 'cpp-libxml2', name: 'libxml2', category: 'utility', language: 'cpp', description: 'GNOME XMLライブラリ', packageName: 'libxml2', officialUrl: 'https://gitlab.gnome.org/GNOME/libxml2', features: ['XPath', 'XSLT', '検証'] },
  { id: 'cpp-xerces', name: 'Xerces-C++', category: 'utility', language: 'cpp', description: 'Apache XMLパーサー', packageName: 'xerces-c', officialUrl: 'https://xerces.apache.org/xerces-c/', features: ['DOM', 'SAX', 'スキーマ検証'] },
  // シリアライゼーション
  { id: 'cpp-protobuf', name: 'Protocol Buffers', category: 'utility', language: 'cpp', description: 'Googleシリアライゼーション', packageName: 'protobuf', officialUrl: 'https://protobuf.dev/', features: ['バイナリ', 'スキーマ', 'Google製'] },
  { id: 'cpp-flatbuffers', name: 'FlatBuffers', category: 'utility', language: 'cpp', description: 'ゼロコピーシリアライゼーション', packageName: 'flatbuffers', officialUrl: 'https://flatbuffers.dev/', features: ['ゼロコピー', '高速', 'Google製'] },
  { id: 'cpp-msgpack', name: 'MessagePack', category: 'utility', language: 'cpp', description: 'バイナリJSON', packageName: 'msgpack-cxx', officialUrl: 'https://msgpack.org/', features: ['バイナリ', 'コンパクト', '高速'] },
  { id: 'cpp-cereal', name: 'cereal', category: 'utility', language: 'cpp', description: 'ヘッダーオンリーシリアライゼーション', github: 'https://github.com/USCiLab/cereal', features: ['ヘッダーオンリー', 'JSON/XML/バイナリ', 'C++11'] },
  { id: 'cpp-capnproto', name: "Cap'n Proto", category: 'utility', language: 'cpp', description: '超高速シリアライゼーション', packageName: 'capnproto', officialUrl: 'https://capnproto.org/', features: ['ゼロコピー', '高速', 'RPC'] },
  // 数学・科学計算
  { id: 'cpp-eigen', name: 'Eigen', category: 'utility', language: 'cpp', description: '線形代数ライブラリ', packageName: 'eigen', officialUrl: 'https://eigen.tuxfamily.org/', features: ['行列', 'ベクトル', 'ヘッダーオンリー'] },
  { id: 'cpp-armadillo', name: 'Armadillo', category: 'utility', language: 'cpp', description: '線形代数ライブラリ', packageName: 'armadillo', officialUrl: 'https://arma.sourceforge.net/', features: ['MATLAB風', '高速', '線形代数'] },
  { id: 'cpp-blaze', name: 'Blaze', category: 'utility', language: 'cpp', description: '高性能数学ライブラリ', packageName: 'blaze', github: 'https://bitbucket.org/blaze-lib/blaze', features: ['高性能', '式テンプレート', 'SIMD'] },
  { id: 'cpp-gsl', name: 'GNU Scientific Library', category: 'utility', language: 'cpp', description: '科学計算ライブラリ', packageName: 'gsl', officialUrl: 'https://www.gnu.org/software/gsl/', features: ['数値計算', '統計', 'FFT'] },
  { id: 'cpp-cgal', name: 'CGAL', category: 'utility', language: 'cpp', description: '計算幾何アルゴリズム', packageName: 'cgal', officialUrl: 'https://www.cgal.org/', features: ['幾何', 'メッシュ', '3D'] },
  { id: 'cpp-xtensor', name: 'xtensor', category: 'utility', language: 'cpp', description: 'NumPy風配列ライブラリ', packageName: 'xtensor', github: 'https://github.com/xtensor-stack/xtensor', features: ['NumPy風', 'N次元配列', '遅延評価'] },
  // 並行処理
  { id: 'cpp-tbb', name: 'Intel TBB', category: 'utility', language: 'cpp', description: 'Intel並列ライブラリ', packageName: 'tbb', github: 'https://github.com/oneapi-src/oneTBB', features: ['並列', 'タスク', 'コンテナ'] },
  { id: 'cpp-openmp', name: 'OpenMP', category: 'utility', language: 'cpp', description: '並列プログラミングAPI', officialUrl: 'https://www.openmp.org/', features: ['ディレクティブ', '並列', 'ポータブル'] },
  { id: 'cpp-taskflow', name: 'Taskflow', category: 'utility', language: 'cpp', description: 'タスク並列ライブラリ', github: 'https://github.com/taskflow/taskflow', features: ['DAG', 'ヘッダーオンリー', 'GPU'] },
  // メモリ
  { id: 'cpp-jemalloc', name: 'jemalloc', category: 'utility', language: 'cpp', description: '高性能メモリアロケータ', packageName: 'jemalloc', github: 'https://github.com/jemalloc/jemalloc', features: ['高性能', 'フラグメンテーション', 'プロファイリング'] },
  { id: 'cpp-tcmalloc', name: 'tcmalloc', category: 'utility', language: 'cpp', description: 'Googleメモリアロケータ', packageName: 'gperftools', github: 'https://github.com/google/tcmalloc', features: ['高速', 'Google製', 'スレッドキャッシュ'] },
  { id: 'cpp-mimalloc', name: 'mimalloc', category: 'utility', language: 'cpp', description: 'Microsoftメモリアロケータ', packageName: 'mimalloc', github: 'https://github.com/microsoft/mimalloc', features: ['高速', 'コンパクト', 'Microsoft'] },
  // フォーマット・その他
  { id: 'cpp-fmt', name: 'fmt', category: 'utility', language: 'cpp', description: '高速フォーマットライブラリ', packageName: 'fmt', github: 'https://github.com/fmtlib/fmt', features: ['フォーマット', '高速', 'C++20 std::format'] },
  { id: 'cpp-range-v3', name: 'range-v3', category: 'utility', language: 'cpp', description: 'レンジライブラリ', github: 'https://github.com/ericniebler/range-v3', features: ['レンジ', 'C++20基盤', '遅延評価'] },
  { id: 'cpp-expected', name: 'expected', category: 'utility', language: 'cpp', description: 'エラー処理ライブラリ', github: 'https://github.com/TartanLlama/expected', features: ['Result型', 'C++23基盤', 'エラー処理'] },
  { id: 'cpp-magic-enum', name: 'magic_enum', category: 'utility', language: 'cpp', description: 'enumリフレクション', github: 'https://github.com/Neargye/magic_enum', features: ['enum', 'リフレクション', 'ヘッダーオンリー'] },
  { id: 'cpp-re2', name: 'RE2', category: 'utility', language: 'cpp', description: 'Google高速正規表現', packageName: 're2', github: 'https://github.com/google/re2', features: ['高速', 'Google製', '安全'] },
  { id: 'cpp-icu', name: 'ICU', category: 'utility', language: 'cpp', description: 'Unicode国際化ライブラリ', packageName: 'icu', officialUrl: 'https://icu.unicode.org/', features: ['Unicode', '国際化', 'ロケール'] },
  { id: 'cpp-yaml-cpp', name: 'yaml-cpp', category: 'utility', language: 'cpp', description: 'YAMLパーサー', packageName: 'yaml-cpp', github: 'https://github.com/jbeder/yaml-cpp', features: ['YAML', '読み書き', 'STL風'] },
  { id: 'cpp-toml', name: 'toml++', category: 'utility', language: 'cpp', description: 'TOML設定ファイルパーサー', github: 'https://github.com/marzer/tomlplusplus', features: ['TOML', 'ヘッダーオンリー', 'C++17'] },
  // ビルドシステム・パッケージ管理
  { id: 'cpp-cmake', name: 'CMake', category: 'utility', language: 'cpp', description: 'クロスプラットフォームビルド', packageName: 'cmake', officialUrl: 'https://cmake.org/', features: ['ビルド', 'クロスプラットフォーム', '標準'] },
  { id: 'cpp-meson', name: 'Meson', category: 'utility', language: 'cpp', description: '高速ビルドシステム', packageName: 'meson', officialUrl: 'https://mesonbuild.com/', features: ['高速', 'Python', 'シンプル'] },
  { id: 'cpp-conan', name: 'Conan', category: 'utility', language: 'cpp', description: 'C/C++パッケージマネージャ', packageName: 'conan', officialUrl: 'https://conan.io/', features: ['パッケージ管理', 'クロスプラットフォーム', 'バイナリ'] },
  { id: 'cpp-vcpkg', name: 'vcpkg', category: 'utility', language: 'cpp', description: 'Microsoftパッケージマネージャ', github: 'https://github.com/microsoft/vcpkg', features: ['Microsoft', 'CMake統合', 'バイナリキャッシュ'] },
]