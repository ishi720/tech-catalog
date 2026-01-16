import type { CloudService } from '~/types'

export const cloudServices: CloudService[] = [
  // ========== AWS ==========
  // Compute
  {
    id: 'aws-ec2',
    name: 'Amazon EC2',
    provider: 'aws',
    category: 'compute',
    description: '仮想サーバー（インスタンス）',
    officialUrl: 'https://aws.amazon.com/ec2/',
    notes: 'Elastic Compute Cloud'
  },
  {
    id: 'aws-lightsail',
    name: 'Amazon Lightsail',
    provider: 'aws',
    category: 'compute',
    description: 'シンプルなVPS',
    officialUrl: 'https://aws.amazon.com/lightsail/',
    notes: '小規模向け簡易VPS'
  },
  {
    id: 'aws-elastic-beanstalk',
    name: 'AWS Elastic Beanstalk',
    provider: 'aws',
    category: 'compute',
    description: 'アプリケーションデプロイ',
    officialUrl: 'https://aws.amazon.com/elasticbeanstalk/',
    notes: 'PaaS型デプロイサービス'
  },
  // Serverless
  {
    id: 'aws-lambda',
    name: 'AWS Lambda',
    provider: 'aws',
    category: 'serverless',
    description: 'サーバーレス関数',
    officialUrl: 'https://aws.amazon.com/lambda/',
    notes: 'FaaS（Function as a Service）'
  },
  {
    id: 'aws-api-gateway',
    name: 'Amazon API Gateway',
    provider: 'aws',
    category: 'serverless',
    description: 'API管理サービス',
    officialUrl: 'https://aws.amazon.com/api-gateway/',
    notes: 'REST/WebSocket API'
  },
  {
    id: 'aws-step-functions',
    name: 'AWS Step Functions',
    provider: 'aws',
    category: 'serverless',
    description: 'ワークフローオーケストレーション',
    officialUrl: 'https://aws.amazon.com/step-functions/',
    notes: 'サーバーレスワークフロー'
  },
  // Container
  {
    id: 'aws-ecs',
    name: 'Amazon ECS',
    provider: 'aws',
    category: 'container',
    description: 'コンテナオーケストレーション',
    officialUrl: 'https://aws.amazon.com/ecs/',
    notes: 'Elastic Container Service'
  },
  {
    id: 'aws-eks',
    name: 'Amazon EKS',
    provider: 'aws',
    category: 'container',
    description: 'マネージドKubernetes',
    officialUrl: 'https://aws.amazon.com/eks/',
    notes: 'Elastic Kubernetes Service'
  },
  {
    id: 'aws-fargate',
    name: 'AWS Fargate',
    provider: 'aws',
    category: 'container',
    description: 'サーバーレスコンテナ',
    officialUrl: 'https://aws.amazon.com/fargate/',
    notes: 'ECS/EKS用サーバーレス'
  },
  {
    id: 'aws-ecr',
    name: 'Amazon ECR',
    provider: 'aws',
    category: 'container',
    description: 'コンテナレジストリ',
    officialUrl: 'https://aws.amazon.com/ecr/',
    notes: 'Elastic Container Registry'
  },
  // Storage
  {
    id: 'aws-s3',
    name: 'Amazon S3',
    provider: 'aws',
    category: 'storage',
    description: 'オブジェクトストレージ',
    officialUrl: 'https://aws.amazon.com/s3/',
    notes: 'Simple Storage Service'
  },
  {
    id: 'aws-ebs',
    name: 'Amazon EBS',
    provider: 'aws',
    category: 'storage',
    description: 'ブロックストレージ',
    officialUrl: 'https://aws.amazon.com/ebs/',
    notes: 'Elastic Block Store'
  },
  {
    id: 'aws-efs',
    name: 'Amazon EFS',
    provider: 'aws',
    category: 'storage',
    description: 'ファイルストレージ',
    officialUrl: 'https://aws.amazon.com/efs/',
    notes: 'Elastic File System'
  },
  {
    id: 'aws-glacier',
    name: 'Amazon S3 Glacier',
    provider: 'aws',
    category: 'storage',
    description: 'アーカイブストレージ',
    officialUrl: 'https://aws.amazon.com/glacier/',
    notes: '低コスト長期保存'
  },
  // Database
  {
    id: 'aws-rds',
    name: 'Amazon RDS',
    provider: 'aws',
    category: 'database',
    description: 'マネージドRDB',
    officialUrl: 'https://aws.amazon.com/rds/',
    notes: 'MySQL/PostgreSQL/Oracle等'
  },
  {
    id: 'aws-aurora',
    name: 'Amazon Aurora',
    provider: 'aws',
    category: 'database',
    description: '高性能RDB',
    officialUrl: 'https://aws.amazon.com/rds/aurora/',
    notes: 'MySQL/PostgreSQL互換'
  },
  {
    id: 'aws-dynamodb',
    name: 'Amazon DynamoDB',
    provider: 'aws',
    category: 'database',
    description: 'NoSQLデータベース',
    officialUrl: 'https://aws.amazon.com/dynamodb/',
    notes: 'キーバリュー/ドキュメント'
  },
  {
    id: 'aws-elasticache',
    name: 'Amazon ElastiCache',
    provider: 'aws',
    category: 'database',
    description: 'インメモリキャッシュ',
    officialUrl: 'https://aws.amazon.com/elasticache/',
    notes: 'Redis/Memcached'
  },
  {
    id: 'aws-redshift',
    name: 'Amazon Redshift',
    provider: 'aws',
    category: 'database',
    description: 'データウェアハウス',
    officialUrl: 'https://aws.amazon.com/redshift/',
    notes: 'ペタバイト規模分析'
  },
  {
    id: 'aws-documentdb',
    name: 'Amazon DocumentDB',
    provider: 'aws',
    category: 'database',
    description: 'ドキュメントDB',
    officialUrl: 'https://aws.amazon.com/documentdb/',
    notes: 'MongoDB互換'
  },
  // Networking
  {
    id: 'aws-vpc',
    name: 'Amazon VPC',
    provider: 'aws',
    category: 'networking',
    description: '仮想ネットワーク',
    officialUrl: 'https://aws.amazon.com/vpc/',
    notes: 'Virtual Private Cloud'
  },
  {
    id: 'aws-cloudfront',
    name: 'Amazon CloudFront',
    provider: 'aws',
    category: 'networking',
    description: 'CDN',
    officialUrl: 'https://aws.amazon.com/cloudfront/',
    notes: 'コンテンツ配信ネットワーク'
  },
  {
    id: 'aws-route53',
    name: 'Amazon Route 53',
    provider: 'aws',
    category: 'networking',
    description: 'DNS',
    officialUrl: 'https://aws.amazon.com/route53/',
    notes: 'ドメイン管理/ルーティング'
  },
  {
    id: 'aws-elb',
    name: 'Elastic Load Balancing',
    provider: 'aws',
    category: 'networking',
    description: 'ロードバランサー',
    officialUrl: 'https://aws.amazon.com/elasticloadbalancing/',
    notes: 'ALB/NLB/CLB'
  },
  // Security
  {
    id: 'aws-iam',
    name: 'AWS IAM',
    provider: 'aws',
    category: 'security',
    description: 'ID・アクセス管理',
    officialUrl: 'https://aws.amazon.com/iam/',
    notes: 'Identity and Access Management'
  },
  {
    id: 'aws-cognito',
    name: 'Amazon Cognito',
    provider: 'aws',
    category: 'security',
    description: 'ユーザー認証',
    officialUrl: 'https://aws.amazon.com/cognito/',
    notes: 'ユーザープール/ID連携'
  },
  {
    id: 'aws-kms',
    name: 'AWS KMS',
    provider: 'aws',
    category: 'security',
    description: '暗号鍵管理',
    officialUrl: 'https://aws.amazon.com/kms/',
    notes: 'Key Management Service'
  },
  {
    id: 'aws-waf',
    name: 'AWS WAF',
    provider: 'aws',
    category: 'security',
    description: 'Webアプリファイアウォール',
    officialUrl: 'https://aws.amazon.com/waf/',
    notes: 'DDoS/SQLi/XSS対策'
  },
  {
    id: 'aws-secrets-manager',
    name: 'AWS Secrets Manager',
    provider: 'aws',
    category: 'security',
    description: 'シークレット管理',
    officialUrl: 'https://aws.amazon.com/secrets-manager/',
    notes: 'パスワード/API鍵管理'
  },
  // AI/ML
  {
    id: 'aws-sagemaker',
    name: 'Amazon SageMaker',
    provider: 'aws',
    category: 'ai-ml',
    description: '機械学習プラットフォーム',
    officialUrl: 'https://aws.amazon.com/sagemaker/',
    notes: 'MLモデル開発/デプロイ'
  },
  {
    id: 'aws-bedrock',
    name: 'Amazon Bedrock',
    provider: 'aws',
    category: 'ai-ml',
    description: '生成AIサービス',
    officialUrl: 'https://aws.amazon.com/bedrock/',
    notes: 'Claude/Titan等のLLM'
  },
  {
    id: 'aws-rekognition',
    name: 'Amazon Rekognition',
    provider: 'aws',
    category: 'ai-ml',
    description: '画像/動画分析',
    officialUrl: 'https://aws.amazon.com/rekognition/',
    notes: '顔認識/物体検出'
  },
  {
    id: 'aws-polly',
    name: 'Amazon Polly',
    provider: 'aws',
    category: 'ai-ml',
    description: 'テキスト読み上げ',
    officialUrl: 'https://aws.amazon.com/polly/',
    notes: 'Text-to-Speech'
  },
  {
    id: 'aws-transcribe',
    name: 'Amazon Transcribe',
    provider: 'aws',
    category: 'ai-ml',
    description: '音声認識',
    officialUrl: 'https://aws.amazon.com/transcribe/',
    notes: 'Speech-to-Text'
  },
  {
    id: 'aws-translate',
    name: 'Amazon Translate',
    provider: 'aws',
    category: 'ai-ml',
    description: '機械翻訳',
    officialUrl: 'https://aws.amazon.com/translate/',
    notes: 'ニューラル機械翻訳'
  },
  {
    id: 'aws-comprehend',
    name: 'Amazon Comprehend',
    provider: 'aws',
    category: 'ai-ml',
    description: '自然言語処理',
    officialUrl: 'https://aws.amazon.com/comprehend/',
    notes: '感情分析/エンティティ抽出'
  },
  // Analytics
  {
    id: 'aws-athena',
    name: 'Amazon Athena',
    provider: 'aws',
    category: 'analytics',
    description: 'S3クエリサービス',
    officialUrl: 'https://aws.amazon.com/athena/',
    notes: 'サーバーレスSQL'
  },
  {
    id: 'aws-kinesis',
    name: 'Amazon Kinesis',
    provider: 'aws',
    category: 'analytics',
    description: 'リアルタイムデータ処理',
    officialUrl: 'https://aws.amazon.com/kinesis/',
    notes: 'ストリーミングデータ'
  },
  {
    id: 'aws-emr',
    name: 'Amazon EMR',
    provider: 'aws',
    category: 'analytics',
    description: 'ビッグデータ処理',
    officialUrl: 'https://aws.amazon.com/emr/',
    notes: 'Spark/Hadoop/Presto'
  },
  {
    id: 'aws-quicksight',
    name: 'Amazon QuickSight',
    provider: 'aws',
    category: 'analytics',
    description: 'BIダッシュボード',
    officialUrl: 'https://aws.amazon.com/quicksight/',
    notes: 'ビジネスインテリジェンス'
  },
  {
    id: 'aws-glue',
    name: 'AWS Glue',
    provider: 'aws',
    category: 'analytics',
    description: 'ETLサービス',
    officialUrl: 'https://aws.amazon.com/glue/',
    notes: 'データ統合/カタログ'
  },
  // Messaging
  {
    id: 'aws-sqs',
    name: 'Amazon SQS',
    provider: 'aws',
    category: 'messaging',
    description: 'メッセージキュー',
    officialUrl: 'https://aws.amazon.com/sqs/',
    notes: 'Simple Queue Service'
  },
  {
    id: 'aws-sns',
    name: 'Amazon SNS',
    provider: 'aws',
    category: 'messaging',
    description: 'Pub/Sub通知',
    officialUrl: 'https://aws.amazon.com/sns/',
    notes: 'Simple Notification Service'
  },
  {
    id: 'aws-eventbridge',
    name: 'Amazon EventBridge',
    provider: 'aws',
    category: 'messaging',
    description: 'イベントバス',
    officialUrl: 'https://aws.amazon.com/eventbridge/',
    notes: 'サーバーレスイベント'
  },
  {
    id: 'aws-ses',
    name: 'Amazon SES',
    provider: 'aws',
    category: 'messaging',
    description: 'メール送信',
    officialUrl: 'https://aws.amazon.com/ses/',
    notes: 'Simple Email Service'
  },
  // DevOps
  {
    id: 'aws-codepipeline',
    name: 'AWS CodePipeline',
    provider: 'aws',
    category: 'devops',
    description: 'CI/CDパイプライン',
    officialUrl: 'https://aws.amazon.com/codepipeline/',
    notes: '継続的デリバリー'
  },
  {
    id: 'aws-codebuild',
    name: 'AWS CodeBuild',
    provider: 'aws',
    category: 'devops',
    description: 'ビルドサービス',
    officialUrl: 'https://aws.amazon.com/codebuild/',
    notes: 'マネージドビルド'
  },
  {
    id: 'aws-codedeploy',
    name: 'AWS CodeDeploy',
    provider: 'aws',
    category: 'devops',
    description: 'デプロイ自動化',
    officialUrl: 'https://aws.amazon.com/codedeploy/',
    notes: 'EC2/Lambda/ECSデプロイ'
  },
  {
    id: 'aws-cloudformation',
    name: 'AWS CloudFormation',
    provider: 'aws',
    category: 'devops',
    description: 'IaC',
    officialUrl: 'https://aws.amazon.com/cloudformation/',
    notes: 'Infrastructure as Code'
  },
  {
    id: 'aws-cloudwatch',
    name: 'Amazon CloudWatch',
    provider: 'aws',
    category: 'devops',
    description: 'モニタリング',
    officialUrl: 'https://aws.amazon.com/cloudwatch/',
    notes: 'ログ/メトリクス/アラート'
  },
  {
    id: 'aws-xray',
    name: 'AWS X-Ray',
    provider: 'aws',
    category: 'devops',
    description: '分散トレーシング',
    officialUrl: 'https://aws.amazon.com/xray/',
    notes: 'アプリケーション分析'
  },
  // IoT
  {
    id: 'aws-iot-core',
    name: 'AWS IoT Core',
    provider: 'aws',
    category: 'iot',
    description: 'IoTデバイス接続',
    officialUrl: 'https://aws.amazon.com/iot-core/',
    notes: 'MQTT/デバイス管理'
  },

  // ========== GCP ==========
  // Compute
  {
    id: 'gcp-compute-engine',
    name: 'Compute Engine',
    provider: 'gcp',
    category: 'compute',
    description: '仮想マシン',
    officialUrl: 'https://cloud.google.com/compute',
    notes: 'IaaS VM'
  },
  {
    id: 'gcp-app-engine',
    name: 'App Engine',
    provider: 'gcp',
    category: 'compute',
    description: 'PaaSアプリ実行',
    officialUrl: 'https://cloud.google.com/appengine',
    notes: 'フルマネージドPaaS'
  },
  // Serverless
  {
    id: 'gcp-cloud-functions',
    name: 'Cloud Functions',
    provider: 'gcp',
    category: 'serverless',
    description: 'サーバーレス関数',
    officialUrl: 'https://cloud.google.com/functions',
    notes: 'FaaS'
  },
  {
    id: 'gcp-cloud-run',
    name: 'Cloud Run',
    provider: 'gcp',
    category: 'serverless',
    description: 'サーバーレスコンテナ',
    officialUrl: 'https://cloud.google.com/run',
    notes: 'Knativeベース'
  },
  // Container
  {
    id: 'gcp-gke',
    name: 'Google Kubernetes Engine',
    provider: 'gcp',
    category: 'container',
    description: 'マネージドKubernetes',
    officialUrl: 'https://cloud.google.com/kubernetes-engine',
    notes: 'GKE'
  },
  {
    id: 'gcp-artifact-registry',
    name: 'Artifact Registry',
    provider: 'gcp',
    category: 'container',
    description: 'コンテナ/パッケージ管理',
    officialUrl: 'https://cloud.google.com/artifact-registry',
    notes: 'Docker/Maven/npm等'
  },
  // Storage
  {
    id: 'gcp-cloud-storage',
    name: 'Cloud Storage',
    provider: 'gcp',
    category: 'storage',
    description: 'オブジェクトストレージ',
    officialUrl: 'https://cloud.google.com/storage',
    notes: 'S3相当'
  },
  {
    id: 'gcp-persistent-disk',
    name: 'Persistent Disk',
    provider: 'gcp',
    category: 'storage',
    description: 'ブロックストレージ',
    officialUrl: 'https://cloud.google.com/persistent-disk',
    notes: 'SSD/HDD'
  },
  {
    id: 'gcp-filestore',
    name: 'Filestore',
    provider: 'gcp',
    category: 'storage',
    description: 'ファイルストレージ',
    officialUrl: 'https://cloud.google.com/filestore',
    notes: 'NFSファイル共有'
  },
  // Database
  {
    id: 'gcp-cloud-sql',
    name: 'Cloud SQL',
    provider: 'gcp',
    category: 'database',
    description: 'マネージドRDB',
    officialUrl: 'https://cloud.google.com/sql',
    notes: 'MySQL/PostgreSQL/SQL Server'
  },
  {
    id: 'gcp-cloud-spanner',
    name: 'Cloud Spanner',
    provider: 'gcp',
    category: 'database',
    description: 'グローバル分散RDB',
    officialUrl: 'https://cloud.google.com/spanner',
    notes: '水平スケールRDB'
  },
  {
    id: 'gcp-firestore',
    name: 'Firestore',
    provider: 'gcp',
    category: 'database',
    description: 'NoSQLドキュメントDB',
    officialUrl: 'https://cloud.google.com/firestore',
    notes: 'リアルタイム同期'
  },
  {
    id: 'gcp-bigtable',
    name: 'Cloud Bigtable',
    provider: 'gcp',
    category: 'database',
    description: 'NoSQL Wide-column',
    officialUrl: 'https://cloud.google.com/bigtable',
    notes: 'ペタバイト規模'
  },
  {
    id: 'gcp-memorystore',
    name: 'Memorystore',
    provider: 'gcp',
    category: 'database',
    description: 'インメモリDB',
    officialUrl: 'https://cloud.google.com/memorystore',
    notes: 'Redis/Memcached'
  },
  {
    id: 'gcp-alloydb',
    name: 'AlloyDB',
    provider: 'gcp',
    category: 'database',
    description: '高性能PostgreSQL',
    officialUrl: 'https://cloud.google.com/alloydb',
    notes: 'PostgreSQL互換'
  },
  // Networking
  {
    id: 'gcp-vpc',
    name: 'Virtual Private Cloud',
    provider: 'gcp',
    category: 'networking',
    description: '仮想ネットワーク',
    officialUrl: 'https://cloud.google.com/vpc',
    notes: 'VPC'
  },
  {
    id: 'gcp-cloud-cdn',
    name: 'Cloud CDN',
    provider: 'gcp',
    category: 'networking',
    description: 'CDN',
    officialUrl: 'https://cloud.google.com/cdn',
    notes: 'コンテンツ配信'
  },
  {
    id: 'gcp-cloud-dns',
    name: 'Cloud DNS',
    provider: 'gcp',
    category: 'networking',
    description: 'DNS',
    officialUrl: 'https://cloud.google.com/dns',
    notes: 'マネージドDNS'
  },
  {
    id: 'gcp-cloud-load-balancing',
    name: 'Cloud Load Balancing',
    provider: 'gcp',
    category: 'networking',
    description: 'ロードバランサー',
    officialUrl: 'https://cloud.google.com/load-balancing',
    notes: 'グローバルLB'
  },
  // Security
  {
    id: 'gcp-iam',
    name: 'Cloud IAM',
    provider: 'gcp',
    category: 'security',
    description: 'ID・アクセス管理',
    officialUrl: 'https://cloud.google.com/iam',
    notes: 'Identity and Access Management'
  },
  {
    id: 'gcp-identity-platform',
    name: 'Identity Platform',
    provider: 'gcp',
    category: 'security',
    description: 'ユーザー認証',
    officialUrl: 'https://cloud.google.com/identity-platform',
    notes: 'Firebase Auth拡張'
  },
  {
    id: 'gcp-secret-manager',
    name: 'Secret Manager',
    provider: 'gcp',
    category: 'security',
    description: 'シークレット管理',
    officialUrl: 'https://cloud.google.com/secret-manager',
    notes: 'API鍵/パスワード管理'
  },
  {
    id: 'gcp-cloud-armor',
    name: 'Cloud Armor',
    provider: 'gcp',
    category: 'security',
    description: 'WAF/DDoS対策',
    officialUrl: 'https://cloud.google.com/armor',
    notes: 'セキュリティポリシー'
  },
  {
    id: 'gcp-kms',
    name: 'Cloud KMS',
    provider: 'gcp',
    category: 'security',
    description: '暗号鍵管理',
    officialUrl: 'https://cloud.google.com/kms',
    notes: 'Key Management Service'
  },
  // AI/ML
  {
    id: 'gcp-vertex-ai',
    name: 'Vertex AI',
    provider: 'gcp',
    category: 'ai-ml',
    description: 'MLプラットフォーム',
    officialUrl: 'https://cloud.google.com/vertex-ai',
    notes: 'ML開発/デプロイ統合'
  },
  {
    id: 'gcp-gemini',
    name: 'Gemini API',
    provider: 'gcp',
    category: 'ai-ml',
    description: '生成AI',
    officialUrl: 'https://cloud.google.com/vertex-ai/docs/generative-ai/learn/overview',
    notes: 'Google最新LLM'
  },
  {
    id: 'gcp-vision-ai',
    name: 'Vision AI',
    provider: 'gcp',
    category: 'ai-ml',
    description: '画像分析',
    officialUrl: 'https://cloud.google.com/vision',
    notes: '物体検出/OCR'
  },
  {
    id: 'gcp-speech-to-text',
    name: 'Speech-to-Text',
    provider: 'gcp',
    category: 'ai-ml',
    description: '音声認識',
    officialUrl: 'https://cloud.google.com/speech-to-text',
    notes: '多言語対応'
  },
  {
    id: 'gcp-text-to-speech',
    name: 'Text-to-Speech',
    provider: 'gcp',
    category: 'ai-ml',
    description: '音声合成',
    officialUrl: 'https://cloud.google.com/text-to-speech',
    notes: 'WaveNet'
  },
  {
    id: 'gcp-translate',
    name: 'Cloud Translation',
    provider: 'gcp',
    category: 'ai-ml',
    description: '機械翻訳',
    officialUrl: 'https://cloud.google.com/translate',
    notes: 'ニューラル翻訳'
  },
  {
    id: 'gcp-natural-language',
    name: 'Natural Language AI',
    provider: 'gcp',
    category: 'ai-ml',
    description: '自然言語処理',
    officialUrl: 'https://cloud.google.com/natural-language',
    notes: '感情分析/エンティティ'
  },
  // Analytics
  {
    id: 'gcp-bigquery',
    name: 'BigQuery',
    provider: 'gcp',
    category: 'analytics',
    description: 'データウェアハウス',
    officialUrl: 'https://cloud.google.com/bigquery',
    notes: 'サーバーレスDWH'
  },
  {
    id: 'gcp-dataflow',
    name: 'Dataflow',
    provider: 'gcp',
    category: 'analytics',
    description: 'データ処理パイプライン',
    officialUrl: 'https://cloud.google.com/dataflow',
    notes: 'Apache Beamベース'
  },
  {
    id: 'gcp-dataproc',
    name: 'Dataproc',
    provider: 'gcp',
    category: 'analytics',
    description: 'ビッグデータ処理',
    officialUrl: 'https://cloud.google.com/dataproc',
    notes: 'Spark/Hadoop'
  },
  {
    id: 'gcp-looker',
    name: 'Looker',
    provider: 'gcp',
    category: 'analytics',
    description: 'BIプラットフォーム',
    officialUrl: 'https://cloud.google.com/looker',
    notes: 'データ分析/可視化'
  },
  {
    id: 'gcp-pub-sub',
    name: 'Pub/Sub',
    provider: 'gcp',
    category: 'messaging',
    description: 'メッセージング',
    officialUrl: 'https://cloud.google.com/pubsub',
    notes: 'リアルタイムメッセージ'
  },
  // DevOps
  {
    id: 'gcp-cloud-build',
    name: 'Cloud Build',
    provider: 'gcp',
    category: 'devops',
    description: 'CI/CD',
    officialUrl: 'https://cloud.google.com/build',
    notes: 'サーバーレスビルド'
  },
  {
    id: 'gcp-cloud-deploy',
    name: 'Cloud Deploy',
    provider: 'gcp',
    category: 'devops',
    description: 'CD管理',
    officialUrl: 'https://cloud.google.com/deploy',
    notes: 'GKE/Cloud Runデプロイ'
  },
  {
    id: 'gcp-cloud-monitoring',
    name: 'Cloud Monitoring',
    provider: 'gcp',
    category: 'devops',
    description: 'モニタリング',
    officialUrl: 'https://cloud.google.com/monitoring',
    notes: 'メトリクス/アラート'
  },
  {
    id: 'gcp-cloud-logging',
    name: 'Cloud Logging',
    provider: 'gcp',
    category: 'devops',
    description: 'ログ管理',
    officialUrl: 'https://cloud.google.com/logging',
    notes: 'ログ収集/分析'
  },
  {
    id: 'gcp-cloud-trace',
    name: 'Cloud Trace',
    provider: 'gcp',
    category: 'devops',
    description: '分散トレーシング',
    officialUrl: 'https://cloud.google.com/trace',
    notes: 'レイテンシ分析'
  },
  // IoT
  {
    id: 'gcp-iot-core',
    name: 'Cloud IoT Core',
    provider: 'gcp',
    category: 'iot',
    description: 'IoTデバイス管理',
    officialUrl: 'https://cloud.google.com/iot-core',
    notes: 'デバイス接続/管理'
  },

  // ========== Azure ==========
  // Compute
  {
    id: 'azure-virtual-machines',
    name: 'Azure Virtual Machines',
    provider: 'azure',
    category: 'compute',
    description: '仮想マシン',
    officialUrl: 'https://azure.microsoft.com/services/virtual-machines/',
    notes: 'IaaS VM'
  },
  {
    id: 'azure-app-service',
    name: 'Azure App Service',
    provider: 'azure',
    category: 'compute',
    description: 'Webアプリホスティング',
    officialUrl: 'https://azure.microsoft.com/services/app-service/',
    notes: 'PaaS'
  },
  {
    id: 'azure-vmss',
    name: 'Virtual Machine Scale Sets',
    provider: 'azure',
    category: 'compute',
    description: 'VMオートスケール',
    officialUrl: 'https://azure.microsoft.com/services/virtual-machine-scale-sets/',
    notes: 'VMSS'
  },
  // Serverless
  {
    id: 'azure-functions',
    name: 'Azure Functions',
    provider: 'azure',
    category: 'serverless',
    description: 'サーバーレス関数',
    officialUrl: 'https://azure.microsoft.com/services/functions/',
    notes: 'FaaS'
  },
  {
    id: 'azure-logic-apps',
    name: 'Azure Logic Apps',
    provider: 'azure',
    category: 'serverless',
    description: 'ワークフロー自動化',
    officialUrl: 'https://azure.microsoft.com/services/logic-apps/',
    notes: 'ローコード統合'
  },
  {
    id: 'azure-api-management',
    name: 'Azure API Management',
    provider: 'azure',
    category: 'serverless',
    description: 'API管理',
    officialUrl: 'https://azure.microsoft.com/services/api-management/',
    notes: 'APIゲートウェイ'
  },
  // Container
  {
    id: 'azure-aks',
    name: 'Azure Kubernetes Service',
    provider: 'azure',
    category: 'container',
    description: 'マネージドKubernetes',
    officialUrl: 'https://azure.microsoft.com/services/kubernetes-service/',
    notes: 'AKS'
  },
  {
    id: 'azure-container-instances',
    name: 'Azure Container Instances',
    provider: 'azure',
    category: 'container',
    description: 'サーバーレスコンテナ',
    officialUrl: 'https://azure.microsoft.com/services/container-instances/',
    notes: 'ACI'
  },
  {
    id: 'azure-container-registry',
    name: 'Azure Container Registry',
    provider: 'azure',
    category: 'container',
    description: 'コンテナレジストリ',
    officialUrl: 'https://azure.microsoft.com/services/container-registry/',
    notes: 'ACR'
  },
  {
    id: 'azure-container-apps',
    name: 'Azure Container Apps',
    provider: 'azure',
    category: 'container',
    description: 'マイクロサービス実行',
    officialUrl: 'https://azure.microsoft.com/services/container-apps/',
    notes: 'サーバーレスコンテナ'
  },
  // Storage
  {
    id: 'azure-blob-storage',
    name: 'Azure Blob Storage',
    provider: 'azure',
    category: 'storage',
    description: 'オブジェクトストレージ',
    officialUrl: 'https://azure.microsoft.com/services/storage/blobs/',
    notes: 'S3相当'
  },
  {
    id: 'azure-disk-storage',
    name: 'Azure Disk Storage',
    provider: 'azure',
    category: 'storage',
    description: 'ブロックストレージ',
    officialUrl: 'https://azure.microsoft.com/services/storage/disks/',
    notes: 'マネージドディスク'
  },
  {
    id: 'azure-files',
    name: 'Azure Files',
    provider: 'azure',
    category: 'storage',
    description: 'ファイル共有',
    officialUrl: 'https://azure.microsoft.com/services/storage/files/',
    notes: 'SMB/NFS'
  },
  {
    id: 'azure-archive-storage',
    name: 'Azure Archive Storage',
    provider: 'azure',
    category: 'storage',
    description: 'アーカイブストレージ',
    officialUrl: 'https://azure.microsoft.com/services/storage/archive/',
    notes: '低コスト長期保存'
  },
  // Database
  {
    id: 'azure-sql-database',
    name: 'Azure SQL Database',
    provider: 'azure',
    category: 'database',
    description: 'マネージドSQL Server',
    officialUrl: 'https://azure.microsoft.com/services/sql-database/',
    notes: 'PaaS SQL'
  },
  {
    id: 'azure-cosmos-db',
    name: 'Azure Cosmos DB',
    provider: 'azure',
    category: 'database',
    description: 'マルチモデルNoSQL',
    officialUrl: 'https://azure.microsoft.com/services/cosmos-db/',
    notes: 'グローバル分散DB'
  },
  {
    id: 'azure-database-mysql',
    name: 'Azure Database for MySQL',
    provider: 'azure',
    category: 'database',
    description: 'マネージドMySQL',
    officialUrl: 'https://azure.microsoft.com/services/mysql/',
    notes: 'フルマネージド'
  },
  {
    id: 'azure-database-postgresql',
    name: 'Azure Database for PostgreSQL',
    provider: 'azure',
    category: 'database',
    description: 'マネージドPostgreSQL',
    officialUrl: 'https://azure.microsoft.com/services/postgresql/',
    notes: 'フルマネージド'
  },
  {
    id: 'azure-cache-redis',
    name: 'Azure Cache for Redis',
    provider: 'azure',
    category: 'database',
    description: 'インメモリキャッシュ',
    officialUrl: 'https://azure.microsoft.com/services/cache/',
    notes: 'マネージドRedis'
  },
  {
    id: 'azure-synapse',
    name: 'Azure Synapse Analytics',
    provider: 'azure',
    category: 'database',
    description: 'データウェアハウス',
    officialUrl: 'https://azure.microsoft.com/services/synapse-analytics/',
    notes: '統合分析サービス'
  },
  // Networking
  {
    id: 'azure-virtual-network',
    name: 'Azure Virtual Network',
    provider: 'azure',
    category: 'networking',
    description: '仮想ネットワーク',
    officialUrl: 'https://azure.microsoft.com/services/virtual-network/',
    notes: 'VNet'
  },
  {
    id: 'azure-cdn',
    name: 'Azure CDN',
    provider: 'azure',
    category: 'networking',
    description: 'CDN',
    officialUrl: 'https://azure.microsoft.com/services/cdn/',
    notes: 'コンテンツ配信'
  },
  {
    id: 'azure-dns',
    name: 'Azure DNS',
    provider: 'azure',
    category: 'networking',
    description: 'DNS',
    officialUrl: 'https://azure.microsoft.com/services/dns/',
    notes: 'マネージドDNS'
  },
  {
    id: 'azure-load-balancer',
    name: 'Azure Load Balancer',
    provider: 'azure',
    category: 'networking',
    description: 'ロードバランサー',
    officialUrl: 'https://azure.microsoft.com/services/load-balancer/',
    notes: 'L4ロードバランサー'
  },
  {
    id: 'azure-front-door',
    name: 'Azure Front Door',
    provider: 'azure',
    category: 'networking',
    description: 'グローバルLB/CDN',
    officialUrl: 'https://azure.microsoft.com/services/frontdoor/',
    notes: 'WAF統合'
  },
  {
    id: 'azure-application-gateway',
    name: 'Azure Application Gateway',
    provider: 'azure',
    category: 'networking',
    description: 'L7ロードバランサー',
    officialUrl: 'https://azure.microsoft.com/services/application-gateway/',
    notes: 'WAF対応'
  },
  // Security
  {
    id: 'azure-active-directory',
    name: 'Microsoft Entra ID',
    provider: 'azure',
    category: 'security',
    description: 'ID管理',
    officialUrl: 'https://azure.microsoft.com/services/active-directory/',
    notes: '旧Azure AD'
  },
  {
    id: 'azure-key-vault',
    name: 'Azure Key Vault',
    provider: 'azure',
    category: 'security',
    description: 'シークレット/鍵管理',
    officialUrl: 'https://azure.microsoft.com/services/key-vault/',
    notes: 'HSM対応'
  },
  {
    id: 'azure-ad-b2c',
    name: 'Azure AD B2C',
    provider: 'azure',
    category: 'security',
    description: 'コンシューマー認証',
    officialUrl: 'https://azure.microsoft.com/services/active-directory/external-identities/b2c/',
    notes: 'ソーシャルログイン'
  },
  {
    id: 'azure-waf',
    name: 'Azure Web Application Firewall',
    provider: 'azure',
    category: 'security',
    description: 'WAF',
    officialUrl: 'https://azure.microsoft.com/services/web-application-firewall/',
    notes: 'OWASP対応'
  },
  {
    id: 'azure-ddos-protection',
    name: 'Azure DDoS Protection',
    provider: 'azure',
    category: 'security',
    description: 'DDoS対策',
    officialUrl: 'https://azure.microsoft.com/services/ddos-protection/',
    notes: 'L3/L4保護'
  },
  // AI/ML
  {
    id: 'azure-openai',
    name: 'Azure OpenAI Service',
    provider: 'azure',
    category: 'ai-ml',
    description: 'OpenAI API',
    officialUrl: 'https://azure.microsoft.com/products/ai-services/openai-service/',
    notes: 'GPT-4/DALL-E/Whisper'
  },
  {
    id: 'azure-machine-learning',
    name: 'Azure Machine Learning',
    provider: 'azure',
    category: 'ai-ml',
    description: 'MLプラットフォーム',
    officialUrl: 'https://azure.microsoft.com/services/machine-learning/',
    notes: 'MLOps'
  },
  {
    id: 'azure-cognitive-services',
    name: 'Azure AI Services',
    provider: 'azure',
    category: 'ai-ml',
    description: 'AI API群',
    officialUrl: 'https://azure.microsoft.com/products/ai-services/',
    notes: '旧Cognitive Services'
  },
  {
    id: 'azure-computer-vision',
    name: 'Azure Computer Vision',
    provider: 'azure',
    category: 'ai-ml',
    description: '画像分析',
    officialUrl: 'https://azure.microsoft.com/services/cognitive-services/computer-vision/',
    notes: 'OCR/物体検出'
  },
  {
    id: 'azure-speech',
    name: 'Azure Speech Service',
    provider: 'azure',
    category: 'ai-ml',
    description: '音声サービス',
    officialUrl: 'https://azure.microsoft.com/services/cognitive-services/speech-services/',
    notes: 'STT/TTS'
  },
  {
    id: 'azure-translator',
    name: 'Azure Translator',
    provider: 'azure',
    category: 'ai-ml',
    description: '機械翻訳',
    officialUrl: 'https://azure.microsoft.com/services/cognitive-services/translator/',
    notes: '多言語翻訳'
  },
  {
    id: 'azure-form-recognizer',
    name: 'Azure AI Document Intelligence',
    provider: 'azure',
    category: 'ai-ml',
    description: 'ドキュメント解析',
    officialUrl: 'https://azure.microsoft.com/products/ai-services/ai-document-intelligence/',
    notes: '旧Form Recognizer'
  },
  // Analytics
  {
    id: 'azure-data-factory',
    name: 'Azure Data Factory',
    provider: 'azure',
    category: 'analytics',
    description: 'データ統合',
    officialUrl: 'https://azure.microsoft.com/services/data-factory/',
    notes: 'ETL/ELT'
  },
  {
    id: 'azure-databricks',
    name: 'Azure Databricks',
    provider: 'azure',
    category: 'analytics',
    description: 'Spark分析',
    officialUrl: 'https://azure.microsoft.com/services/databricks/',
    notes: 'Apache Spark'
  },
  {
    id: 'azure-stream-analytics',
    name: 'Azure Stream Analytics',
    provider: 'azure',
    category: 'analytics',
    description: 'ストリーム処理',
    officialUrl: 'https://azure.microsoft.com/services/stream-analytics/',
    notes: 'リアルタイム分析'
  },
  {
    id: 'azure-hdinsight',
    name: 'Azure HDInsight',
    provider: 'azure',
    category: 'analytics',
    description: 'ビッグデータクラスタ',
    officialUrl: 'https://azure.microsoft.com/services/hdinsight/',
    notes: 'Hadoop/Spark/Kafka'
  },
  {
    id: 'azure-power-bi',
    name: 'Power BI',
    provider: 'azure',
    category: 'analytics',
    description: 'BIツール',
    officialUrl: 'https://powerbi.microsoft.com/',
    notes: 'データ可視化'
  },
  // Messaging
  {
    id: 'azure-service-bus',
    name: 'Azure Service Bus',
    provider: 'azure',
    category: 'messaging',
    description: 'メッセージング',
    officialUrl: 'https://azure.microsoft.com/services/service-bus/',
    notes: 'エンタープライズMQ'
  },
  {
    id: 'azure-event-hubs',
    name: 'Azure Event Hubs',
    provider: 'azure',
    category: 'messaging',
    description: 'イベントストリーム',
    officialUrl: 'https://azure.microsoft.com/services/event-hubs/',
    notes: 'Kafka互換'
  },
  {
    id: 'azure-event-grid',
    name: 'Azure Event Grid',
    provider: 'azure',
    category: 'messaging',
    description: 'イベントルーティング',
    officialUrl: 'https://azure.microsoft.com/services/event-grid/',
    notes: 'サーバーレスイベント'
  },
  {
    id: 'azure-notification-hubs',
    name: 'Azure Notification Hubs',
    provider: 'azure',
    category: 'messaging',
    description: 'プッシュ通知',
    officialUrl: 'https://azure.microsoft.com/services/notification-hubs/',
    notes: 'モバイル通知'
  },
  // DevOps
  {
    id: 'azure-devops',
    name: 'Azure DevOps',
    provider: 'azure',
    category: 'devops',
    description: 'DevOpsプラットフォーム',
    officialUrl: 'https://azure.microsoft.com/services/devops/',
    notes: 'Repos/Pipelines/Boards'
  },
  {
    id: 'azure-monitor',
    name: 'Azure Monitor',
    provider: 'azure',
    category: 'devops',
    description: 'モニタリング',
    officialUrl: 'https://azure.microsoft.com/services/monitor/',
    notes: 'ログ/メトリクス'
  },
  {
    id: 'azure-application-insights',
    name: 'Application Insights',
    provider: 'azure',
    category: 'devops',
    description: 'APM',
    officialUrl: 'https://azure.microsoft.com/services/monitor/',
    notes: 'アプリパフォーマンス'
  },
  {
    id: 'azure-resource-manager',
    name: 'Azure Resource Manager',
    provider: 'azure',
    category: 'devops',
    description: 'IaC',
    officialUrl: 'https://azure.microsoft.com/features/resource-manager/',
    notes: 'ARMテンプレート/Bicep'
  },
  // IoT
  {
    id: 'azure-iot-hub',
    name: 'Azure IoT Hub',
    provider: 'azure',
    category: 'iot',
    description: 'IoTデバイス接続',
    officialUrl: 'https://azure.microsoft.com/services/iot-hub/',
    notes: 'デバイス管理/通信'
  },
  {
    id: 'azure-iot-central',
    name: 'Azure IoT Central',
    provider: 'azure',
    category: 'iot',
    description: 'IoTアプリプラットフォーム',
    officialUrl: 'https://azure.microsoft.com/services/iot-central/',
    notes: 'SaaS IoT'
  }
]
