import type { Library } from '~/types'

export const pythonLibraries: Library[] = [
  // フレームワーク
  { id: 'py-django', name: 'Django', category: 'framework', language: 'python', description: 'フルスタックWebフレームワーク', packageName: 'django', officialUrl: 'https://www.djangoproject.com/', features: ['ORM', '管理画面', 'セキュリティ'] },
  { id: 'py-flask', name: 'Flask', category: 'framework', language: 'python', description: '軽量マイクロフレームワーク', packageName: 'flask', officialUrl: 'https://flask.palletsprojects.com/', features: ['軽量', '柔軟', 'Jinja2'] },
  { id: 'py-fastapi', name: 'FastAPI', category: 'framework', language: 'python', description: '高速API構築。型ヒント活用', packageName: 'fastapi', officialUrl: 'https://fastapi.tiangolo.com/', features: ['高速', '型ヒント', 'OpenAPI'] },
  { id: 'py-starlette', name: 'Starlette', category: 'framework', language: 'python', description: '軽量ASGIフレームワーク', packageName: 'starlette', officialUrl: 'https://www.starlette.io/', features: ['ASGI', '非同期', '軽量'] },

  // テスト関連
  { id: 'py-pytest', name: 'pytest', category: 'testing', language: 'python', description: 'Python定番テストフレームワーク', packageName: 'pytest', officialUrl: 'https://pytest.org/', features: ['フィクスチャ', 'パラメータ化', 'プラグイン'] },
  { id: 'py-unittest', name: 'unittest', category: 'testing', language: 'python', description: 'Python標準テストライブラリ', officialUrl: 'https://docs.python.org/3/library/unittest.html', features: ['標準', 'xUnit', 'モック'] },
  { id: 'py-selenium', name: 'Selenium', category: 'testing', language: 'python', description: 'ブラウザ自動化', packageName: 'selenium', officialUrl: 'https://www.selenium.dev/', features: ['E2E', 'マルチブラウザ'] },

  // 画像関連
  { id: 'py-pillow', name: 'Pillow', category: 'image', language: 'python', description: 'Python画像処理の定番', packageName: 'pillow', officialUrl: 'https://pillow.readthedocs.io/', features: ['変換', 'リサイズ', 'フィルター'] },
  { id: 'py-opencv', name: 'OpenCV', category: 'image', language: 'python', description: 'コンピュータビジョン', packageName: 'opencv-python', officialUrl: 'https://opencv.org/', features: ['画像処理', '物体検出', '動画'] },

  // スクレイピング関連
  { id: 'py-beautifulsoup', name: 'Beautiful Soup', category: 'scraping', language: 'python', description: 'HTMLパーサー定番', packageName: 'beautifulsoup4', officialUrl: 'https://www.crummy.com/software/BeautifulSoup/', features: ['HTMLパース', 'CSSセレクタ'] },
  { id: 'py-scrapy', name: 'Scrapy', category: 'scraping', language: 'python', description: 'Webスクレイピングフレームワーク', packageName: 'scrapy', officialUrl: 'https://scrapy.org/', features: ['クローリング', 'パイプライン'] },
  { id: 'py-playwright', name: 'Playwright Python', category: 'scraping', language: 'python', description: 'ブラウザ自動化', packageName: 'playwright', officialUrl: 'https://playwright.dev/python/', features: ['マルチブラウザ', '自動待機'] },

  // AI関連
  { id: 'py-pytorch', name: 'PyTorch', category: 'ai', language: 'python', description: 'Meta製深層学習フレームワーク', packageName: 'torch', officialUrl: 'https://pytorch.org/', features: ['動的グラフ', 'GPU', '研究向け'] },
  { id: 'py-tensorflow', name: 'TensorFlow', category: 'ai', language: 'python', description: 'Google製機械学習', packageName: 'tensorflow', officialUrl: 'https://www.tensorflow.org/', features: ['本番向け', 'Keras'] },
  { id: 'py-scikit-learn', name: 'scikit-learn', category: 'ai', language: 'python', description: '機械学習ライブラリ定番', packageName: 'scikit-learn', officialUrl: 'https://scikit-learn.org/', features: ['分類', '回帰', 'クラスタリング'] },
  { id: 'py-transformers', name: 'Transformers', category: 'ai', language: 'python', description: 'HuggingFace NLPライブラリ', packageName: 'transformers', officialUrl: 'https://huggingface.co/', features: ['BERT', 'GPT', '事前学習'] },
  { id: 'py-langchain', name: 'LangChain', category: 'ai', language: 'python', description: 'LLMアプリケーション構築', packageName: 'langchain', officialUrl: 'https://python.langchain.com/', features: ['チェーン', 'RAG'] },
  { id: 'py-openai', name: 'OpenAI Python', category: 'ai', language: 'python', description: 'OpenAI API公式', packageName: 'openai', officialUrl: 'https://platform.openai.com/', features: ['GPT', 'DALL-E'] },
  { id: 'py-numpy', name: 'NumPy', category: 'ai', language: 'python', description: '数値計算ライブラリ', packageName: 'numpy', officialUrl: 'https://numpy.org/', features: ['配列', '線形代数'] },
  { id: 'py-pandas', name: 'Pandas', category: 'ai', language: 'python', description: 'データ分析ライブラリ', packageName: 'pandas', officialUrl: 'https://pandas.pydata.org/', features: ['DataFrame', '集計'] },

  // DB操作関連
  { id: 'py-sqlalchemy', name: 'SQLAlchemy', category: 'database', language: 'python', description: 'Python ORM定番', packageName: 'sqlalchemy', officialUrl: 'https://www.sqlalchemy.org/', features: ['ORM', 'Core', 'マイグレーション'] },
  { id: 'py-peewee', name: 'Peewee', category: 'database', language: 'python', description: '軽量ORM', packageName: 'peewee', officialUrl: 'http://docs.peewee-orm.com/', features: ['軽量', 'シンプル'] },
  { id: 'py-pymongo', name: 'PyMongo', category: 'database', language: 'python', description: 'MongoDB公式ドライバ', packageName: 'pymongo', officialUrl: 'https://pymongo.readthedocs.io/', features: ['MongoDB', '公式'] },

  // タスク管理
  { id: 'py-celery', name: 'Celery', category: 'task-queue', language: 'python', description: '分散タスクキュー定番', packageName: 'celery', officialUrl: 'https://docs.celeryq.dev/', features: ['分散', 'Redis/RabbitMQ'] },
  { id: 'py-rq', name: 'RQ', category: 'task-queue', language: 'python', description: '軽量Redisジョブキュー', packageName: 'rq', officialUrl: 'https://python-rq.org/', features: ['シンプル', 'Redis'] },

  // 認証・認可
  { id: 'py-pyjwt', name: 'PyJWT', category: 'auth', language: 'python', description: 'JWT実装', packageName: 'pyjwt', officialUrl: 'https://pyjwt.readthedocs.io/', features: ['JWT', 'シンプル'] },
  { id: 'py-passlib', name: 'Passlib', category: 'auth', language: 'python', description: 'パスワードハッシュ', packageName: 'passlib', officialUrl: 'https://passlib.readthedocs.io/', features: ['bcrypt', 'argon2'] },

  // HTTP通信
  { id: 'py-requests', name: 'Requests', category: 'http', language: 'python', description: 'HTTP for Humans', packageName: 'requests', officialUrl: 'https://requests.readthedocs.io/', features: ['シンプル', 'セッション'] },
  { id: 'py-httpx', name: 'HTTPX', category: 'http', language: 'python', description: '次世代HTTPクライアント', packageName: 'httpx', officialUrl: 'https://www.python-httpx.org/', features: ['非同期', 'HTTP/2'] },
  { id: 'py-aiohttp', name: 'aiohttp', category: 'http', language: 'python', description: '非同期HTTP', packageName: 'aiohttp', officialUrl: 'https://docs.aiohttp.org/', features: ['非同期', 'WebSocket'] },

  // バリデーション
  { id: 'py-pydantic', name: 'Pydantic', category: 'validation', language: 'python', description: 'データバリデーション', packageName: 'pydantic', officialUrl: 'https://docs.pydantic.dev/', features: ['型ヒント', 'JSON Schema'] },
  { id: 'py-marshmallow', name: 'Marshmallow', category: 'validation', language: 'python', description: 'シリアライズ/バリデーション', packageName: 'marshmallow', officialUrl: 'https://marshmallow.readthedocs.io/', features: ['シリアライズ', 'スキーマ'] },

  // 日付・時間
  { id: 'py-pendulum', name: 'Pendulum', category: 'date', language: 'python', description: 'datetime拡張', packageName: 'pendulum', officialUrl: 'https://pendulum.eustace.io/', features: ['タイムゾーン', 'イミュータブル'] },
  { id: 'py-arrow', name: 'Arrow', category: 'date', language: 'python', description: '日付操作シンプル化', packageName: 'arrow', officialUrl: 'https://arrow.readthedocs.io/', features: ['シンプル', 'パース'] },

  // ファイル操作
  { id: 'py-openpyxl', name: 'openpyxl', category: 'file', language: 'python', description: 'Excel読み書き', packageName: 'openpyxl', officialUrl: 'https://openpyxl.readthedocs.io/', features: ['Excel', 'スタイル'] },
  { id: 'py-boto3', name: 'Boto3', category: 'file', language: 'python', description: 'AWS SDK（S3等）', packageName: 'boto3', officialUrl: 'https://boto3.amazonaws.com/', features: ['S3', 'AWS'] },

  // メール送信
  { id: 'py-sendgrid', name: 'SendGrid', category: 'email', language: 'python', description: 'SendGrid公式SDK', packageName: 'sendgrid', officialUrl: 'https://sendgrid.com/', features: ['API', 'テンプレート'] },

  // 決済
  { id: 'py-stripe', name: 'Stripe Python', category: 'payment', language: 'python', description: 'Stripe公式SDK', packageName: 'stripe', officialUrl: 'https://stripe.com/', features: ['決済', 'サブスク'] },

  // 検索
  { id: 'py-elasticsearch', name: 'elasticsearch-py', category: 'search', language: 'python', description: 'Elasticsearch公式', packageName: 'elasticsearch', officialUrl: 'https://www.elastic.co/', features: ['Elasticsearch', '全文検索'] },

  // ログ・監視
  { id: 'py-loguru', name: 'Loguru', category: 'logging', language: 'python', description: 'シンプルなロギング', packageName: 'loguru', github: 'https://github.com/Delgan/loguru', features: ['シンプル', 'カラー'] },
  { id: 'py-sentry', name: 'Sentry SDK', category: 'logging', language: 'python', description: 'エラートラッキング', packageName: 'sentry-sdk', officialUrl: 'https://sentry.io/', features: ['エラー追跡'] },

  // UIコンポーネント
  { id: 'py-jinja2', name: 'Jinja2', category: 'ui', language: 'python', description: 'テンプレートエンジン', packageName: 'jinja2', officialUrl: 'https://jinja.palletsprojects.com/', features: ['テンプレート', '継承'] },
  { id: 'py-streamlit', name: 'Streamlit', category: 'ui', language: 'python', description: 'データアプリUI', packageName: 'streamlit', officialUrl: 'https://streamlit.io/', features: ['データアプリ', '簡単'] },
  { id: 'py-gradio', name: 'Gradio', category: 'ui', language: 'python', description: 'ML デモUI', packageName: 'gradio', officialUrl: 'https://gradio.app/', features: ['ML向け', 'HuggingFace'] },

  // リアルタイム通信
  { id: 'py-websockets', name: 'websockets', category: 'realtime', language: 'python', description: 'WebSocketライブラリ', packageName: 'websockets', officialUrl: 'https://websockets.readthedocs.io/', features: ['asyncio', 'WebSocket'] },
  { id: 'py-socketio', name: 'python-socketio', category: 'realtime', language: 'python', description: 'Socket.IOサーバー', packageName: 'python-socketio', officialUrl: 'https://python-socketio.readthedocs.io/', features: ['Socket.IO', '非同期'] },

  // PDF操作
  { id: 'py-reportlab', name: 'ReportLab', category: 'pdf', language: 'python', description: 'PDF生成', packageName: 'reportlab', officialUrl: 'https://www.reportlab.com/', features: ['PDF生成', '日本語'] },
  { id: 'py-pypdf', name: 'pypdf', category: 'pdf', language: 'python', description: 'PDF操作', packageName: 'pypdf', officialUrl: 'https://pypdf.readthedocs.io/', features: ['マージ', '分割'] },

  // 動画・音声
  { id: 'py-moviepy', name: 'MoviePy', category: 'video-audio', language: 'python', description: '動画編集', packageName: 'moviepy', officialUrl: 'https://zulko.github.io/moviepy/', features: ['動画編集', 'GIF'] },

  // ユーティリティ
  { id: 'py-click', name: 'Click', category: 'utility', language: 'python', description: 'CLI作成', packageName: 'click', officialUrl: 'https://click.palletsprojects.com/', features: ['CLI', 'デコレータ'] },
  { id: 'py-tqdm', name: 'tqdm', category: 'utility', language: 'python', description: 'プログレスバー', packageName: 'tqdm', github: 'https://github.com/tqdm/tqdm', features: ['プログレス', '汎用'] },
  { id: 'py-rich', name: 'Rich', category: 'utility', language: 'python', description: 'リッチテキスト表示', packageName: 'rich', officialUrl: 'https://rich.readthedocs.io/', features: ['カラー', 'テーブル'] },

  // CLI作成
  { id: 'py-typer', name: 'Typer', category: 'cli', language: 'python', description: 'CLI作成（型ヒント）', packageName: 'typer', officialUrl: 'https://typer.tiangolo.com/', features: ['型ヒント', 'Click互換'] },

  // グラフ・可視化
  { id: 'py-matplotlib', name: 'Matplotlib', category: 'chart', language: 'python', description: 'グラフ描画定番', packageName: 'matplotlib', officialUrl: 'https://matplotlib.org/', features: ['静的グラフ', '多種類'] },
  { id: 'py-seaborn', name: 'Seaborn', category: 'chart', language: 'python', description: '統計可視化', packageName: 'seaborn', officialUrl: 'https://seaborn.pydata.org/', features: ['統計', 'テーマ'] },
  { id: 'py-plotly', name: 'Plotly', category: 'chart', language: 'python', description: 'インタラクティブグラフ', packageName: 'plotly', officialUrl: 'https://plotly.com/python/', features: ['インタラクティブ', '3D'] },
]
