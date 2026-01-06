<template>
  <i 
    v-if="iconClass" 
    :class="[iconClass, coloredClass]" 
    :style="{ fontSize: size }"
  ></i>
  <span v-else :style="{ fontSize: size }">📄</span>
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
  'CoffeeScript': 'devicon-coffeescript-original',
  'GraphQL': 'devicon-graphql-plain',
  'Groovy': 'devicon-groovy-plain',
  'Elixir': 'devicon-elixir-plain',
  'Erlang': 'devicon-erlang-plain',
  'Julia': 'devicon-julia-plain',
  'PowerShell': 'devicon-powershell-plain',
  'F#': 'devicon-fsharp-plain',
  'Carbon': 'devicon-carbon-original',
  'CSS': 'devicon-css3-plain',
  'HTML': 'devicon-html5-plain',
  'Shell (Bash)': 'devicon-bash-plain',
  'Zig': 'devicon-zig-plain',
  'Nim': 'devicon-nim-plain',
  'Markdown': 'devicon-markdown-plain',
  'JSON': 'devicon-json-plain',
  'Cairo': 'devicon-cairo-plain',
  'Clojure': 'devicon-clojure-plain',

  // データベース
  'MySQL': 'devicon-mysql-original',
  'PostgreSQL': 'devicon-postgresql-plain',
  'MariaDB': 'devicon-mariadb-original',
  'SQLite': 'devicon-sqlite-plain',
  'Oracle Database': 'devicon-oracle-original',
  'Microsoft SQL Server': 'devicon-microsoftsqlserver-original',
  'IBM Db2': 'devicon-db2-original',
  'MongoDB': 'devicon-mongodb-plain',
  'CouchDB': 'devicon-couchdb-plain',
  'Redis': 'devicon-redis-plain',
  'Elasticsearch': 'devicon-elasticsearch-plain-wordmark',
  'Apache Cassandra': 'devicon-cassandra-original',
  'Neo4j': 'devicon-neo4j-plain',
  'DuckDB': 'devicon-duckdb-plain',
  'Supabase': 'devicon-supabase-plain',
  
  // フレームワーク
  'React': 'devicon-react-original',
  'Vue.js': 'devicon-vuejs-original',
  'Angular': 'devicon-angularjs-plain',
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
  
  // 開発ツール - エディタ / IDE
  'Visual Studio Code': 'devicon-vscode-original',
  'IntelliJ IDEA': 'devicon-intellij-original',
  'WebStorm': 'devicon-webstorm-original',
  'Cursor': 'devicon-vscode-original',
  'Neovim': 'devicon-neovim-original',
  'Sublime Text': 'devicon-sublime-plain',
  'Vim': 'devicon-vim-plain',
  'GNU Emacs': 'devicon-emacs-original',
  'Notepad++': 'devicon-notepadplusplus-original',
  'Zed': 'devicon-zed-plain',
  'Helix': 'devicon-helix-original',
  'Eclipse IDE': 'devicon-eclipse-original',
  'PyCharm': 'devicon-pycharm-original',
  'Android Studio': 'devicon-androidstudio-original',
  'Xcode': 'devicon-xcode-original',
  'Visual Studio': 'devicon-visualstudio-plain',
  'Rider': 'devicon-rider-original',
  'GoLand': 'devicon-goland-original',
  'RustRover': 'devicon-rust-plain',
  'Fleet': 'devicon-jetbrains-original',
  'Windsurf': 'devicon-vscode-original',
  'Lapce': 'devicon-rust-plain',
  
  // 開発ツール - その他
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
  'Turbopack': 'devicon-nextjs-original',

  // ライブラリ
  'NumPy': 'devicon-numpy-plain',
  'Pandas': 'devicon-pandas-plain',
  'Lodash': 'devicon-lodash-plain',
  'TensorFlow': 'devicon-tensorflow-original',
  'PyTorch': 'devicon-pytorch-original',
  'Axios': 'devicon-axios-plain',  
}

const iconClass = computed(() => iconMap[props.name] || null)
const coloredClass = computed(() => props.colored ? 'colored' : '')
</script>