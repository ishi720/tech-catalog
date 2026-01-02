import type { DevTool } from '~/types'

export const devTools: DevTool[] = [
  // IDE / Editors
  {
    id: 'vscode',
    name: 'Visual Studio Code',
    category: 'editor',
    platform: ['Windows', 'macOS', 'Linux'],
    latestVersion: '1.96',
    license: 'MIT',
    officialUrl: 'https://code.visualstudio.com/',
    notes: '最も人気のエディタ'
  },
  {
    id: 'intellij',
    name: 'IntelliJ IDEA',
    category: 'ide',
    platform: ['Windows', 'macOS', 'Linux'],
    latestVersion: '2024.3',
    license: 'Community / Ultimate',
    officialUrl: 'https://www.jetbrains.com/idea/',
    notes: 'JetBrains製Java IDE'
  },
  {
    id: 'webstorm',
    name: 'WebStorm',
    category: 'ide',
    platform: ['Windows', 'macOS', 'Linux'],
    latestVersion: '2024.3',
    license: 'Commercial',
    officialUrl: 'https://www.jetbrains.com/webstorm/',
    notes: 'JavaScript専用IDE'
  },
  {
    id: 'cursor',
    name: 'Cursor',
    category: 'editor',
    platform: ['Windows', 'macOS', 'Linux'],
    latestVersion: '0.44',
    license: 'Freemium',
    officialUrl: 'https://cursor.sh/',
    notes: 'AI搭載エディタ'
  },
  {
    id: 'neovim',
    name: 'Neovim',
    category: 'editor',
    platform: ['Windows', 'macOS', 'Linux'],
    latestVersion: '0.10',
    license: 'Apache 2.0',
    officialUrl: 'https://neovim.io/',
    notes: 'Vimの進化版'
  },
  // Version Control
  {
    id: 'git',
    name: 'Git',
    category: 'vcs',
    platform: ['Windows', 'macOS', 'Linux'],
    latestVersion: '2.47',
    license: 'GPL-2.0',
    officialUrl: 'https://git-scm.com/',
    notes: '分散バージョン管理の標準'
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'vcs',
    platform: ['Web', 'Desktop'],
    latestVersion: '-',
    license: 'Freemium',
    officialUrl: 'https://github.com/',
    notes: 'Gitホスティング最大手'
  },
  {
    id: 'gitlab',
    name: 'GitLab',
    category: 'vcs',
    platform: ['Web', 'Self-hosted'],
    latestVersion: '17.7',
    license: 'MIT (CE) / EE',
    officialUrl: 'https://gitlab.com/',
    notes: 'DevOps統合プラットフォーム'
  },
  // CI/CD
  {
    id: 'githubactions',
    name: 'GitHub Actions',
    category: 'ci-cd',
    platform: ['Web'],
    latestVersion: '-',
    license: 'Freemium',
    officialUrl: 'https://github.com/features/actions',
    notes: 'GitHub統合CI/CD'
  },
  {
    id: 'jenkins',
    name: 'Jenkins',
    category: 'ci-cd',
    platform: ['Windows', 'macOS', 'Linux', 'Docker'],
    latestVersion: '2.479',
    license: 'MIT',
    officialUrl: 'https://www.jenkins.io/',
    notes: 'CI/CDサーバー定番'
  },
  {
    id: 'circleci',
    name: 'CircleCI',
    category: 'ci-cd',
    platform: ['Web', 'Self-hosted'],
    latestVersion: '-',
    license: 'Freemium',
    officialUrl: 'https://circleci.com/',
    notes: 'クラウドCI/CD'
  },
  // Containerization
  {
    id: 'docker',
    name: 'Docker',
    category: 'containerization',
    platform: ['Windows', 'macOS', 'Linux'],
    latestVersion: '27.4',
    license: 'Apache 2.0',
    officialUrl: 'https://www.docker.com/',
    notes: 'コンテナ技術の標準'
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    category: 'containerization',
    platform: ['Linux', 'Cloud'],
    latestVersion: '1.32',
    license: 'Apache 2.0',
    officialUrl: 'https://kubernetes.io/',
    notes: 'コンテナオーケストレーション'
  },
  // Package Managers
  {
    id: 'npm',
    name: 'npm',
    category: 'package-manager',
    platform: ['Windows', 'macOS', 'Linux'],
    latestVersion: '10.9',
    license: 'Artistic-2.0',
    officialUrl: 'https://www.npmjs.com/',
    notes: 'Node.js標準パッケージマネージャ'
  },
  {
    id: 'pnpm',
    name: 'pnpm',
    category: 'package-manager',
    platform: ['Windows', 'macOS', 'Linux'],
    latestVersion: '9.15',
    license: 'MIT',
    officialUrl: 'https://pnpm.io/',
    notes: '高速・ディスク効率的'
  },
  {
    id: 'yarn',
    name: 'Yarn',
    category: 'package-manager',
    platform: ['Windows', 'macOS', 'Linux'],
    latestVersion: '4.5',
    license: 'BSD-2-Clause',
    officialUrl: 'https://yarnpkg.com/',
    notes: 'npm代替'
  },
  {
    id: 'pip',
    name: 'pip',
    category: 'package-manager',
    platform: ['Windows', 'macOS', 'Linux'],
    latestVersion: '24.3',
    license: 'MIT',
    officialUrl: 'https://pip.pypa.io/',
    notes: 'Python標準パッケージマネージャ'
  },
  // Bundlers
  {
    id: 'vite',
    name: 'Vite',
    category: 'bundler',
    platform: ['Windows', 'macOS', 'Linux'],
    latestVersion: '6.0',
    license: 'MIT',
    officialUrl: 'https://vite.dev/',
    notes: '次世代フロントエンドツール'
  },
  {
    id: 'webpack',
    name: 'webpack',
    category: 'bundler',
    platform: ['Windows', 'macOS', 'Linux'],
    latestVersion: '5.97',
    license: 'MIT',
    officialUrl: 'https://webpack.js.org/',
    notes: 'モジュールバンドラー定番'
  },
  {
    id: 'turbopack',
    name: 'Turbopack',
    category: 'bundler',
    platform: ['Windows', 'macOS', 'Linux'],
    latestVersion: '2.0',
    license: 'MPL-2.0',
    officialUrl: 'https://turbo.build/pack',
    notes: 'Rust製高速バンドラー'
  }
]
