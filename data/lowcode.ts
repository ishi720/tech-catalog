import type { LowCodeTool } from '~/types'

export const lowCodeTools: LowCodeTool[] = [
  // アプリビルダー
  {
    id: 'bubble',
    name: 'Bubble',
    category: 'app-builder',
    type: 'no-code',
    platform: ['Web'],
    pricing: 'Freemium',
    officialUrl: 'https://bubble.io/',
    notes: 'Webアプリ開発の定番ノーコード'
  },
  {
    id: 'adalo',
    name: 'Adalo',
    category: 'app-builder',
    type: 'no-code',
    platform: ['Web', 'iOS', 'Android'],
    pricing: 'Freemium',
    officialUrl: 'https://www.adalo.com/',
    notes: 'モバイルアプリ特化'
  },
  {
    id: 'glide',
    name: 'Glide',
    category: 'app-builder',
    type: 'no-code',
    platform: ['Web', 'iOS', 'Android'],
    pricing: 'Freemium',
    officialUrl: 'https://www.glideapps.com/',
    notes: 'スプレッドシートからアプリ作成'
  },
  {
    id: 'flutterflow',
    name: 'FlutterFlow',
    category: 'app-builder',
    type: 'low-code',
    platform: ['Web', 'iOS', 'Android'],
    pricing: 'Freemium',
    officialUrl: 'https://flutterflow.io/',
    notes: 'Flutter製アプリをビジュアル開発'
  },
  {
    id: 'appgyver',
    name: 'SAP AppGyver',
    category: 'app-builder',
    type: 'no-code',
    platform: ['Web', 'iOS', 'Android'],
    pricing: 'Free / Enterprise',
    officialUrl: 'https://www.appgyver.com/',
    notes: 'SAP傘下、エンタープライズ向け'
  },
  {
    id: 'thunkable',
    name: 'Thunkable',
    category: 'app-builder',
    type: 'no-code',
    platform: ['iOS', 'Android'],
    pricing: 'Freemium',
    officialUrl: 'https://thunkable.com/',
    notes: 'ドラッグ&ドロップでモバイルアプリ'
  },
  // 内部ツール
  {
    id: 'retool',
    name: 'Retool',
    category: 'internal-tools',
    type: 'low-code',
    platform: ['Web'],
    pricing: 'Freemium',
    officialUrl: 'https://retool.com/',
    notes: '社内ツール構築の定番'
  },
  {
    id: 'appsmith',
    name: 'Appsmith',
    category: 'internal-tools',
    type: 'low-code',
    platform: ['Web', 'Self-hosted'],
    pricing: 'Open Source / Enterprise',
    officialUrl: 'https://www.appsmith.com/',
    notes: 'オープンソースの内部ツールビルダー'
  },
  {
    id: 'tooljet',
    name: 'ToolJet',
    category: 'internal-tools',
    type: 'low-code',
    platform: ['Web', 'Self-hosted'],
    pricing: 'Open Source / Enterprise',
    officialUrl: 'https://www.tooljet.com/',
    notes: 'OSS内部ツールビルダー'
  },
  {
    id: 'budibase',
    name: 'Budibase',
    category: 'internal-tools',
    type: 'low-code',
    platform: ['Web', 'Self-hosted'],
    pricing: 'Open Source / Enterprise',
    officialUrl: 'https://budibase.com/',
    notes: 'OSSローコードプラットフォーム'
  },
  // ワークフロー・自動化
  {
    id: 'zapier',
    name: 'Zapier',
    category: 'automation',
    type: 'no-code',
    platform: ['Web'],
    pricing: 'Freemium',
    officialUrl: 'https://zapier.com/',
    notes: 'アプリ連携自動化の最大手'
  },
  {
    id: 'make',
    name: 'Make (Integromat)',
    category: 'automation',
    type: 'no-code',
    platform: ['Web'],
    pricing: 'Freemium',
    officialUrl: 'https://www.make.com/',
    notes: '高度なワークフロー自動化'
  },
  {
    id: 'n8n',
    name: 'n8n',
    category: 'automation',
    type: 'low-code',
    platform: ['Web', 'Self-hosted'],
    pricing: 'Open Source / Cloud',
    officialUrl: 'https://n8n.io/',
    notes: 'OSSワークフロー自動化'
  },
  {
    id: 'power-automate',
    name: 'Power Automate',
    category: 'automation',
    type: 'low-code',
    platform: ['Web', 'Desktop'],
    pricing: 'Subscription',
    officialUrl: 'https://powerautomate.microsoft.com/',
    notes: 'Microsoft製RPA/自動化'
  },
  {
    id: 'ifttt',
    name: 'IFTTT',
    category: 'automation',
    type: 'no-code',
    platform: ['Web', 'iOS', 'Android'],
    pricing: 'Freemium',
    officialUrl: 'https://ifttt.com/',
    notes: 'シンプルな自動化トリガー'
  },
  // Webサイトビルダー
  {
    id: 'webflow',
    name: 'Webflow',
    category: 'website',
    type: 'no-code',
    platform: ['Web'],
    pricing: 'Freemium',
    officialUrl: 'https://webflow.com/',
    notes: 'プロ向けWebサイトビルダー'
  },
  {
    id: 'wix',
    name: 'Wix',
    category: 'website',
    type: 'no-code',
    platform: ['Web'],
    pricing: 'Freemium',
    officialUrl: 'https://www.wix.com/',
    notes: '初心者向けWebサイト作成'
  },
  {
    id: 'squarespace',
    name: 'Squarespace',
    category: 'website',
    type: 'no-code',
    platform: ['Web'],
    pricing: 'Subscription',
    officialUrl: 'https://www.squarespace.com/',
    notes: 'デザイン重視のWebサイト'
  },
  {
    id: 'framer',
    name: 'Framer',
    category: 'website',
    type: 'no-code',
    platform: ['Web'],
    pricing: 'Freemium',
    officialUrl: 'https://www.framer.com/',
    notes: 'デザイナー向けWebサイト'
  },
  {
    id: 'carrd',
    name: 'Carrd',
    category: 'website',
    type: 'no-code',
    platform: ['Web'],
    pricing: 'Freemium',
    officialUrl: 'https://carrd.co/',
    notes: 'シンプルな1ページサイト'
  },
  // データベース・スプレッドシート
  {
    id: 'airtable',
    name: 'Airtable',
    category: 'database',
    type: 'no-code',
    platform: ['Web', 'iOS', 'Android'],
    pricing: 'Freemium',
    officialUrl: 'https://www.airtable.com/',
    notes: 'スプレッドシート×データベース'
  },
  {
    id: 'notion',
    name: 'Notion',
    category: 'database',
    type: 'no-code',
    platform: ['Web', 'Desktop', 'iOS', 'Android'],
    pricing: 'Freemium',
    officialUrl: 'https://www.notion.so/',
    notes: 'オールインワンワークスペース'
  },
  {
    id: 'nocodb',
    name: 'NocoDB',
    category: 'database',
    type: 'no-code',
    platform: ['Web', 'Self-hosted'],
    pricing: 'Open Source / Enterprise',
    officialUrl: 'https://nocodb.com/',
    notes: 'OSSのAirtable代替'
  },
  {
    id: 'baserow',
    name: 'Baserow',
    category: 'database',
    type: 'no-code',
    platform: ['Web', 'Self-hosted'],
    pricing: 'Open Source / Enterprise',
    officialUrl: 'https://baserow.io/',
    notes: 'OSSノーコードDB'
  },
  // フォーム
  {
    id: 'typeform',
    name: 'Typeform',
    category: 'form',
    type: 'no-code',
    platform: ['Web'],
    pricing: 'Freemium',
    officialUrl: 'https://www.typeform.com/',
    notes: '対話型フォーム'
  },
  {
    id: 'jotform',
    name: 'Jotform',
    category: 'form',
    type: 'no-code',
    platform: ['Web'],
    pricing: 'Freemium',
    officialUrl: 'https://www.jotform.com/',
    notes: '多機能フォームビルダー'
  },
  // Eコマース
  {
    id: 'shopify',
    name: 'Shopify',
    category: 'ecommerce',
    type: 'no-code',
    platform: ['Web'],
    pricing: 'Subscription',
    officialUrl: 'https://www.shopify.com/',
    notes: 'ECサイト構築の最大手'
  },
  // Microsoft Power Platform
  {
    id: 'power-apps',
    name: 'Power Apps',
    category: 'app-builder',
    type: 'low-code',
    platform: ['Web', 'iOS', 'Android'],
    pricing: 'Subscription',
    officialUrl: 'https://powerapps.microsoft.com/',
    notes: 'Microsoft製ローコードアプリ開発'
  },
  // Google
  {
    id: 'appsheet',
    name: 'AppSheet',
    category: 'app-builder',
    type: 'no-code',
    platform: ['Web', 'iOS', 'Android'],
    pricing: 'Freemium',
    officialUrl: 'https://about.appsheet.com/',
    notes: 'Google製、スプレッドシート連携'
  },
  // AI系
  {
    id: 'dify',
    name: 'Dify',
    category: 'ai',
    type: 'low-code',
    platform: ['Web', 'Self-hosted'],
    pricing: 'Open Source / Cloud',
    officialUrl: 'https://dify.ai/',
    notes: 'LLMアプリ開発プラットフォーム'
  },
  {
    id: 'flowise',
    name: 'Flowise',
    category: 'ai',
    type: 'low-code',
    platform: ['Web', 'Self-hosted'],
    pricing: 'Open Source',
    officialUrl: 'https://flowiseai.com/',
    notes: 'LangChainベースのAIワークフロー'
  },
  {
    id: 'langflow',
    name: 'Langflow',
    category: 'ai',
    type: 'low-code',
    platform: ['Web', 'Self-hosted'],
    pricing: 'Open Source',
    officialUrl: 'https://www.langflow.org/',
    notes: 'ビジュアルLLMフロービルダー'
  },
  // 追加アプリビルダー
  {
    id: 'outsystems',
    name: 'OutSystems',
    category: 'app-builder',
    type: 'low-code',
    platform: ['Web', 'iOS', 'Android'],
    pricing: 'Enterprise',
    officialUrl: 'https://www.outsystems.com/',
    notes: 'エンタープライズ向けローコード'
  },
  {
    id: 'mendix',
    name: 'Mendix',
    category: 'app-builder',
    type: 'low-code',
    platform: ['Web', 'iOS', 'Android'],
    pricing: 'Freemium',
    officialUrl: 'https://www.mendix.com/',
    notes: 'Siemens傘下、業務アプリ開発'
  },
  {
    id: 'appian',
    name: 'Appian',
    category: 'app-builder',
    type: 'low-code',
    platform: ['Web', 'iOS', 'Android'],
    pricing: 'Enterprise',
    officialUrl: 'https://appian.com/',
    notes: 'プロセス自動化特化'
  },
  {
    id: 'salesforce-platform',
    name: 'Salesforce Platform',
    category: 'app-builder',
    type: 'low-code',
    platform: ['Web', 'iOS', 'Android'],
    pricing: 'Subscription',
    officialUrl: 'https://www.salesforce.com/platform/',
    notes: 'Salesforce上でアプリ開発'
  },
  {
    id: 'servicenow',
    name: 'ServiceNow App Engine',
    category: 'app-builder',
    type: 'low-code',
    platform: ['Web'],
    pricing: 'Enterprise',
    officialUrl: 'https://www.servicenow.com/',
    notes: 'IT管理・業務アプリ開発'
  },
  {
    id: 'zoho-creator',
    name: 'Zoho Creator',
    category: 'app-builder',
    type: 'low-code',
    platform: ['Web', 'iOS', 'Android'],
    pricing: 'Freemium',
    officialUrl: 'https://www.zoho.com/creator/',
    notes: 'Zohoエコシステム連携'
  },
  {
    id: 'quickbase',
    name: 'Quickbase',
    category: 'app-builder',
    type: 'low-code',
    platform: ['Web'],
    pricing: 'Subscription',
    officialUrl: 'https://www.quickbase.com/',
    notes: '業務アプリ・ワークフロー'
  },
  {
    id: 'kissflow',
    name: 'Kissflow',
    category: 'workflow',
    type: 'no-code',
    platform: ['Web'],
    pricing: 'Subscription',
    officialUrl: 'https://kissflow.com/',
    notes: 'ワークフロー管理特化'
  },
  {
    id: 'pega',
    name: 'Pega Platform',
    category: 'app-builder',
    type: 'low-code',
    platform: ['Web'],
    pricing: 'Enterprise',
    officialUrl: 'https://www.pega.com/',
    notes: 'BPM・CRM統合プラットフォーム'
  },
  // 追加Webサイトビルダー
  {
    id: 'wordpress',
    name: 'WordPress.com',
    category: 'website',
    type: 'no-code',
    platform: ['Web'],
    pricing: 'Freemium',
    officialUrl: 'https://wordpress.com/',
    notes: '世界最大のCMS/Webサイト'
  },
  {
    id: 'weebly',
    name: 'Weebly',
    category: 'website',
    type: 'no-code',
    platform: ['Web'],
    pricing: 'Freemium',
    officialUrl: 'https://www.weebly.com/',
    notes: 'Square傘下、簡単Web作成'
  },
  {
    id: 'strikingly',
    name: 'Strikingly',
    category: 'website',
    type: 'no-code',
    platform: ['Web'],
    pricing: 'Freemium',
    officialUrl: 'https://www.strikingly.com/',
    notes: 'モバイル最適化サイト'
  },
  {
    id: 'duda',
    name: 'Duda',
    category: 'website',
    type: 'no-code',
    platform: ['Web'],
    pricing: 'Subscription',
    officialUrl: 'https://www.duda.co/',
    notes: 'Web制作会社向け'
  },
  {
    id: 'zyro',
    name: 'Zyro',
    category: 'website',
    type: 'no-code',
    platform: ['Web'],
    pricing: 'Freemium',
    officialUrl: 'https://zyro.com/',
    notes: 'AI搭載Webサイトビルダー'
  },
  // 追加Eコマース
  {
    id: 'bigcommerce',
    name: 'BigCommerce',
    category: 'ecommerce',
    type: 'no-code',
    platform: ['Web'],
    pricing: 'Subscription',
    officialUrl: 'https://www.bigcommerce.com/',
    notes: '大規模EC向け'
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    category: 'ecommerce',
    type: 'low-code',
    platform: ['Web'],
    pricing: 'Open Source',
    officialUrl: 'https://woocommerce.com/',
    notes: 'WordPress用ECプラグイン'
  },
  {
    id: 'ecwid',
    name: 'Ecwid',
    category: 'ecommerce',
    type: 'no-code',
    platform: ['Web'],
    pricing: 'Freemium',
    officialUrl: 'https://www.ecwid.com/',
    notes: '既存サイトにEC機能追加'
  },
  {
    id: 'base',
    name: 'BASE',
    category: 'ecommerce',
    type: 'no-code',
    platform: ['Web', 'iOS', 'Android'],
    pricing: 'Freemium',
    officialUrl: 'https://thebase.com/',
    notes: '日本発の無料ECプラットフォーム'
  },
  {
    id: 'stores',
    name: 'STORES',
    category: 'ecommerce',
    type: 'no-code',
    platform: ['Web'],
    pricing: 'Freemium',
    officialUrl: 'https://stores.jp/',
    notes: '日本発、決済・予約も対応'
  },
  // 追加フォーム
  {
    id: 'google-forms',
    name: 'Google Forms',
    category: 'form',
    type: 'no-code',
    platform: ['Web'],
    pricing: 'Free',
    officialUrl: 'https://www.google.com/forms/',
    notes: '無料フォーム作成の定番'
  },
  {
    id: 'tally',
    name: 'Tally',
    category: 'form',
    type: 'no-code',
    platform: ['Web'],
    pricing: 'Freemium',
    officialUrl: 'https://tally.so/',
    notes: 'Notionライクなフォーム'
  },
  {
    id: 'formstack',
    name: 'Formstack',
    category: 'form',
    type: 'no-code',
    platform: ['Web'],
    pricing: 'Subscription',
    officialUrl: 'https://www.formstack.com/',
    notes: 'ワークフロー連携フォーム'
  },
  {
    id: 'cognito-forms',
    name: 'Cognito Forms',
    category: 'form',
    type: 'no-code',
    platform: ['Web'],
    pricing: 'Freemium',
    officialUrl: 'https://www.cognitoforms.com/',
    notes: '決済対応フォーム'
  },
  // 追加データベース
  {
    id: 'coda',
    name: 'Coda',
    category: 'database',
    type: 'no-code',
    platform: ['Web', 'iOS', 'Android'],
    pricing: 'Freemium',
    officialUrl: 'https://coda.io/',
    notes: 'ドキュメント×スプレッドシート'
  },
  {
    id: 'seatable',
    name: 'SeaTable',
    category: 'database',
    type: 'no-code',
    platform: ['Web', 'Self-hosted'],
    pricing: 'Open Source / Enterprise',
    officialUrl: 'https://seatable.io/',
    notes: 'セルフホスト可能なAirtable代替'
  },
  {
    id: 'grist',
    name: 'Grist',
    category: 'database',
    type: 'low-code',
    platform: ['Web', 'Self-hosted'],
    pricing: 'Open Source / Cloud',
    officialUrl: 'https://www.getgrist.com/',
    notes: 'Python対応スプレッドシートDB'
  },
  // 追加自動化
  {
    id: 'activepieces',
    name: 'Activepieces',
    category: 'automation',
    type: 'low-code',
    platform: ['Web', 'Self-hosted'],
    pricing: 'Open Source / Cloud',
    officialUrl: 'https://www.activepieces.com/',
    notes: 'OSSのZapier代替'
  },
  {
    id: 'pipedream',
    name: 'Pipedream',
    category: 'automation',
    type: 'low-code',
    platform: ['Web'],
    pricing: 'Freemium',
    officialUrl: 'https://pipedream.com/',
    notes: '開発者向け自動化'
  },
  {
    id: 'tray-io',
    name: 'Tray.io',
    category: 'automation',
    type: 'low-code',
    platform: ['Web'],
    pricing: 'Enterprise',
    officialUrl: 'https://tray.io/',
    notes: 'エンタープライズ自動化'
  },
  {
    id: 'workato',
    name: 'Workato',
    category: 'automation',
    type: 'low-code',
    platform: ['Web'],
    pricing: 'Enterprise',
    officialUrl: 'https://www.workato.com/',
    notes: 'AI搭載エンタープライズ連携'
  },
  {
    id: 'uipath',
    name: 'UiPath',
    category: 'automation',
    type: 'low-code',
    platform: ['Web', 'Desktop'],
    pricing: 'Freemium',
    officialUrl: 'https://www.uipath.com/',
    notes: 'RPA最大手'
  },
  {
    id: 'automation-anywhere',
    name: 'Automation Anywhere',
    category: 'automation',
    type: 'low-code',
    platform: ['Web', 'Desktop'],
    pricing: 'Enterprise',
    officialUrl: 'https://www.automationanywhere.com/',
    notes: 'クラウドネイティブRPA'
  },
  // 内部ツール追加
  {
    id: 'superblocks',
    name: 'Superblocks',
    category: 'internal-tools',
    type: 'low-code',
    platform: ['Web'],
    pricing: 'Freemium',
    officialUrl: 'https://www.superblocks.com/',
    notes: 'モダン内部ツールビルダー'
  },
  {
    id: 'airplane',
    name: 'Airplane',
    category: 'internal-tools',
    type: 'low-code',
    platform: ['Web'],
    pricing: 'Freemium',
    officialUrl: 'https://www.airplane.dev/',
    notes: 'タスク自動化ツール'
  },
  {
    id: 'internal',
    name: 'Internal.io',
    category: 'internal-tools',
    type: 'low-code',
    platform: ['Web'],
    pricing: 'Freemium',
    officialUrl: 'https://www.internal.io/',
    notes: 'DB連携管理ツール'
  },
  // チャットボット
  {
    id: 'chatfuel',
    name: 'Chatfuel',
    category: 'ai',
    type: 'no-code',
    platform: ['Web'],
    pricing: 'Freemium',
    officialUrl: 'https://chatfuel.com/',
    notes: 'Messengerボット構築'
  },
  {
    id: 'manychat',
    name: 'ManyChat',
    category: 'ai',
    type: 'no-code',
    platform: ['Web'],
    pricing: 'Freemium',
    officialUrl: 'https://manychat.com/',
    notes: 'チャットマーケティング'
  },
  {
    id: 'voiceflow',
    name: 'Voiceflow',
    category: 'ai',
    type: 'no-code',
    platform: ['Web'],
    pricing: 'Freemium',
    officialUrl: 'https://www.voiceflow.com/',
    notes: '会話AIデザイン'
  },
  {
    id: 'botpress',
    name: 'Botpress',
    category: 'ai',
    type: 'low-code',
    platform: ['Web', 'Self-hosted'],
    pricing: 'Open Source / Cloud',
    officialUrl: 'https://botpress.com/',
    notes: 'OSSチャットボット'
  },
  // その他
  {
    id: 'softr',
    name: 'Softr',
    category: 'app-builder',
    type: 'no-code',
    platform: ['Web'],
    pricing: 'Freemium',
    officialUrl: 'https://www.softr.io/',
    notes: 'Airtable連携Webアプリ'
  },
  {
    id: 'stacker',
    name: 'Stacker',
    category: 'app-builder',
    type: 'no-code',
    platform: ['Web'],
    pricing: 'Freemium',
    officialUrl: 'https://www.stackerhq.com/',
    notes: 'スプレッドシートからポータル'
  },
  {
    id: 'fibery',
    name: 'Fibery',
    category: 'database',
    type: 'no-code',
    platform: ['Web'],
    pricing: 'Freemium',
    officialUrl: 'https://fibery.io/',
    notes: 'ワークスペース構築ツール'
  }
]
