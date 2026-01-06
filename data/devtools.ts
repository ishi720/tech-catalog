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
    latestVersion: '0.11',
    license: 'Apache 2.0',
    officialUrl: 'https://neovim.io/',
    notes: 'Vimの進化版、Lua拡張'
  },
  // ↓↓↓ 新規追加エディター ↓↓↓
  {
    id: 'sublime-text',
    name: 'Sublime Text',
    category: 'editor',
    platform: ['Windows', 'macOS', 'Linux'],
    latestVersion: '4 (Build 4200)',
    license: 'Commercial',
    officialUrl: 'https://www.sublimetext.com/',
    notes: '高速・軽量エディタ'
  },
  {
    id: 'vim',
    name: 'Vim',
    category: 'editor',
    platform: ['Windows', 'macOS', 'Linux'],
    latestVersion: '9.1',
    license: 'Vim License',
    officialUrl: 'https://www.vim.org/',
    notes: 'ターミナルエディタの王様'
  },
  {
    id: 'emacs',
    name: 'GNU Emacs',
    category: 'editor',
    platform: ['Windows', 'macOS', 'Linux'],
    latestVersion: '30.1',
    license: 'GPL-3.0',
    officialUrl: 'https://www.gnu.org/software/emacs/',
    notes: '拡張性の高いエディタ'
  },
  {
    id: 'notepadpp',
    name: 'Notepad++',
    category: 'editor',
    platform: ['Windows'],
    latestVersion: '8.7',
    license: 'GPL-3.0',
    officialUrl: 'https://notepad-plus-plus.org/',
    notes: 'Windows用軽量エディタ'
  },
  {
    id: 'zed',
    name: 'Zed',
    category: 'editor',
    platform: ['Windows', 'macOS', 'Linux'],
    latestVersion: '0.217',
    license: 'GPL-3.0 / AGPL-3.0',
    officialUrl: 'https://zed.dev/',
    notes: 'Rust製高速エディタ、AI対応'
  },
  {
    id: 'helix',
    name: 'Helix',
    category: 'editor',
    platform: ['Windows', 'macOS', 'Linux'],
    latestVersion: '25.01',
    license: 'MPL-2.0',
    officialUrl: 'https://helix-editor.com/',
    notes: 'Rust製ターミナルエディタ'
  },
  {
    id: 'eclipse',
    name: 'Eclipse IDE',
    category: 'ide',
    platform: ['Windows', 'macOS', 'Linux'],
    latestVersion: '2025-12',
    license: 'EPL-2.0',
    officialUrl: 'https://www.eclipse.org/',
    notes: 'Java開発定番IDE'
  },
  {
    id: 'pycharm',
    name: 'PyCharm',
    category: 'ide',
    platform: ['Windows', 'macOS', 'Linux'],
    latestVersion: '2024.3',
    license: 'Community / Professional',
    officialUrl: 'https://www.jetbrains.com/pycharm/',
    notes: 'Python専用IDE'
  },
  {
    id: 'android-studio',
    name: 'Android Studio',
    category: 'ide',
    platform: ['Windows', 'macOS', 'Linux'],
    latestVersion: '2024.2 (Ladybug)',
    license: 'Apache 2.0',
    officialUrl: 'https://developer.android.com/studio',
    notes: 'Android公式IDE'
  },
  {
    id: 'xcode',
    name: 'Xcode',
    category: 'ide',
    platform: ['macOS'],
    latestVersion: '16.2',
    license: 'Proprietary',
    officialUrl: 'https://developer.apple.com/xcode/',
    notes: 'Apple公式IDE'
  },
  {
    id: 'visual-studio',
    name: 'Visual Studio',
    category: 'ide',
    platform: ['Windows', 'macOS'],
    latestVersion: '2022 (17.12)',
    license: 'Community / Professional / Enterprise',
    officialUrl: 'https://visualstudio.microsoft.com/',
    notes: 'Microsoft製フルスタックIDE'
  },
  {
    id: 'rider',
    name: 'Rider',
    category: 'ide',
    platform: ['Windows', 'macOS', 'Linux'],
    latestVersion: '2024.3',
    license: 'Commercial',
    officialUrl: 'https://www.jetbrains.com/rider/',
    notes: '.NET/Unity開発IDE'
  },
  {
    id: 'goland',
    name: 'GoLand',
    category: 'ide',
    platform: ['Windows', 'macOS', 'Linux'],
    latestVersion: '2024.3',
    license: 'Commercial',
    officialUrl: 'https://www.jetbrains.com/go/',
    notes: 'Go専用IDE'
  },
  {
    id: 'rustrover',
    name: 'RustRover',
    category: 'ide',
    platform: ['Windows', 'macOS', 'Linux'],
    latestVersion: '2024.3',
    license: 'Non-commercial free / Commercial',
    officialUrl: 'https://www.jetbrains.com/rust/',
    notes: 'Rust専用IDE'
  },
  {
    id: 'fleet',
    name: 'Fleet',
    category: 'editor',
    platform: ['Windows', 'macOS', 'Linux'],
    latestVersion: 'Public Preview',
    license: 'Freemium',
    officialUrl: 'https://www.jetbrains.com/fleet/',
    notes: 'JetBrains製軽量エディタ'
  },
  {
    id: 'windsurf',
    name: 'Windsurf',
    category: 'editor',
    platform: ['Windows', 'macOS', 'Linux'],
    latestVersion: '1.x',
    license: 'Freemium',
    officialUrl: 'https://codeium.com/windsurf',
    notes: 'Codeium製AI搭載IDE'
  },
  {
    id: 'lapce',
    name: 'Lapce',
    category: 'editor',
    platform: ['Windows', 'macOS', 'Linux'],
    latestVersion: '0.4',
    license: 'Apache 2.0',
    officialUrl: 'https://lapce.dev/',
    notes: 'Rust製高速エディタ'
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