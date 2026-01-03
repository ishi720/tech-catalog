<template>
  <i 
    v-if="iconClass" 
    :class="[iconClass, coloredClass]" 
    :style="{ fontSize: size }"
  ></i>
  <span v-else :style="{ fontSize: size }">{{ fallbackEmoji }}</span>
</template>

<script setup lang="ts">
interface Props {
  name: string
  size?: string
  colored?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: '1.5rem',
  colored: true
})

// Deviconのクラス名マッピング
// https://devicon.dev/
const iconMap: Record<string, string> = {
  // プログラミング言語
  'Python': 'devicon-python-plain',
  'JavaScript': 'devicon-javascript-plain',
  'TypeScript': 'devicon-typescript-plain',
  'Java': 'devicon-java-plain',
  'C': 'devicon-c-original',
  'C++': 'devicon-cplusplus-plain',
  'C#': 'devicon-csharp-plain',
  'Ruby': 'devicon-ruby-plain',
  'PHP': 'devicon-php-plain',
  'Swift': 'devicon-swift-plain',
  'Kotlin': 'devicon-kotlin-plain',
  'Go': 'devicon-go-original-wordmark',
  'Rust': 'devicon-rust-plain',
  'R': 'devicon-r-plain',
  'Scala': 'devicon-scala-plain',
  'Perl': 'devicon-perl-plain',
  'Lua': 'devicon-lua-plain',
  'Haskell': 'devicon-haskell-plain',
  'Dart': 'devicon-dart-plain',
  'COBOL': 'devicon-cobol-original',
  'Lisp': '',
  
  // データベース
  'MySQL': 'devicon-mysql-original',
  'PostgreSQL': 'devicon-postgresql-original',
  'MariaDB': 'devicon-mariadb-original',
  'SQLite': 'devicon-sqlite-original',
  'Oracle Database': 'devicon-oracle-original',
  'Microsoft SQL Server': 'devicon-microsoftsqlserver-original',
  'IBM Db2': 'devicon-db2-original',
  'MongoDB': 'devicon-mongodb-original',
  'CouchDB': 'devicon-couchdb-original',
  'Redis': 'devicon-redis-original',
  'Elasticsearch': 'devicon-elasticsearch-original',
  'Apache Cassandra': 'devicon-cassandra-original',
  'Neo4j': 'devicon-neo4j-original',
  
  // フレームワーク
  'React': 'devicon-react-original',
  'Vue.js': 'devicon-vuejs-original',
  'Angular': 'devicon-angular-original',
  'Svelte': 'devicon-svelte-original',
  'Next.js': 'devicon-nextjs-original',
  'Nuxt': 'devicon-nuxtjs-original',
  'Remix': 'devicon-remix-original',
  'Express.js': 'devicon-express-original',
  'NestJS': 'devicon-nestjs-original',
  'FastAPI': 'devicon-fastapi-original',
  'Django': 'devicon-django-plain',
  'Ruby on Rails': 'devicon-rails-original',
  'Spring Boot': 'devicon-spring-original',
  'Laravel': 'devicon-laravel-original',
  'React Native': 'devicon-react-original',
  'Flutter': 'devicon-flutter-original',
  'Tailwind CSS': 'devicon-tailwindcss-original',
  'Bootstrap': 'devicon-bootstrap-original',
  'Jest': 'devicon-jest-plain',
  'Vitest': 'devicon-vitest-original',
  'pytest': 'devicon-pytest-original',
  
  // 開発ツール
  'Visual Studio Code': 'devicon-vscode-original',
  'IntelliJ IDEA': 'devicon-intellij-original',
  'WebStorm': 'devicon-webstorm-original',
  'Cursor': 'devicon-vscode-original', // CursorはVSCodeベースなので
  'Neovim': 'devicon-neovim-original',
  'Git': 'devicon-git-original',
  'GitHub': 'devicon-github-original',
  'GitLab': 'devicon-gitlab-original',
  'GitHub Actions': 'devicon-githubactions-original',
  'Jenkins': 'devicon-jenkins-original',
  'CircleCI': 'devicon-circleci-original',
  'Docker': 'devicon-docker-original',
  'Kubernetes': 'devicon-kubernetes-original',
  'npm': 'devicon-npm-original-wordmark',
  'pnpm': 'devicon-pnpm-original',
  'Yarn': 'devicon-yarn-original',
  'pip': 'devicon-python-original',
  'Vite': 'devicon-vitejs-original',
  'webpack': 'devicon-webpack-original',
  'Turbopack': 'devicon-nextjs-original', // TurbopackはNext.jsの一部
}

// 絵文字フォールバック
const emojiMap: Record<string, string> = {
  'Python': '🐍',
  'JavaScript': '🟨',
  'TypeScript': '📘',
  'Java': '☕',
  'C': '🔷',
  'C++': '➕',
  'C#': '🟣',
  'Ruby': '💎',
  'PHP': '🐘',
  'Swift': '🦅',
  'Kotlin': '🟠',
  'Go': '🐹',
  'Rust': '🦀',
  'R': '📊',
  'Scala': '🔴',
  'Perl': '🐪',
  'Lua': '🌙',
  'Haskell': 'λ',
  'Dart': '🎯',
  'COBOL': '💼',
  'Lisp': '🔗',
}

const iconClass = computed(() => iconMap[props.name] || null)
const coloredClass = computed(() => props.colored ? 'colored' : '')
const fallbackEmoji = computed(() => emojiMap[props.name] || '📄')
</script>
