<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">技術一覧</h1>
    </div>

    <!-- Category Tabs -->
    <div class="flex flex-wrap gap-2 mb-6">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="activeTab = tab.id"
        class="px-4 py-2 rounded-lg font-medium transition-all"
        :class="activeTab === tab.id
          ? 'bg-primary-600 text-white shadow-md'
          : 'bg-white text-gray-600 hover:bg-gray-100 border'"
      >
        {{ tab.icon }} {{ tab.name }}
        <span class="ml-1 text-xs opacity-75">({{ tab.count }})</span>
      </button>
    </div>

    <!-- Search & Filter -->
    <SearchBox
      v-model="search"
      v-model:sort-by="sortBy"
      :total-count="filteredItems.length"
      :start-index="paginationInfo.start"
      :end-index="paginationInfo.end"
      class="mb-6"
    >
      <template #filters>
        <!-- Language Filter (Libraries / CMS) -->
        <select
          v-if="activeTab === 'libraries' || activeTab === 'cms'"
          v-model="selectedLanguage"
          class="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none bg-white"
        >
          <option value="">すべての言語</option>
          <option value="javascript">JavaScript</option>
          <option value="php">PHP</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="ruby">Ruby</option>
          <option value="r">R</option>
          <option value="go">Go</option>
          <option value="csharp">C#</option>
          <option value="cpp">C++</option>
          <option value="haskell">Haskell</option>
          <option value="kotlin">Kotlin</option>
          <option value="swift">Swift</option>
        </select>

        <!-- Category Filter (Libraries only) -->
        <select
          v-if="activeTab === 'libraries'"
          v-model="selectedCategory"
          class="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none bg-white"
        >
          <option value="">すべてのカテゴリ</option>
          <option v-for="cat in libraryCategoriesWithoutCms" :key="cat.id" :value="cat.id">
            {{ cat.nameJa }}
          </option>
        </select>
      </template>
    </SearchBox>

    <!-- Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Programming Languages -->
      <template v-if="activeTab === 'languages'">
        <div
          v-for="lang in paginatedItems"
          :key="lang.id"
          class="bg-white rounded-xl shadow-sm border p-5 hover:shadow-md hover:border-primary-200 transition-all"
        >
          <div class="flex items-start justify-between mb-3">
            <div class="flex items-center gap-3">
              <TechIcon :name="lang.name" size="2rem" />
              <div>
                <h3 class="font-bold text-lg text-gray-900">{{ lang.name }}</h3>
                <p class="text-sm text-gray-500">{{ lang.birthYear }}年〜</p>
              </div>
            </div>
            <span class="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
              {{ lang.latestVersion }}
            </span>
          </div>
          <div class="space-y-1.5 text-sm">
            <p class="flex items-center gap-2">
              <span class="text-gray-400 w-16 shrink-0">種別</span>
              <span class="text-gray-700">{{ lang.type }}</span>
            </p>
            <p class="flex items-center gap-2">
              <span class="text-gray-400 w-16 shrink-0">拡張子</span>
              <span class="text-gray-700 font-mono text-xs">{{ lang.extensions.join(', ') }}</span>
            </p>
          </div>
          <div class="mt-3 flex flex-wrap gap-1">
            <span v-for="p in lang.paradigms" :key="p" class="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-md">
              {{ p }}
            </span>
          </div>
          <p v-if="lang.notes" class="mt-3 text-sm text-gray-600">{{ lang.notes }}</p>
          <a :href="lang.officialUrl" target="_blank" rel="noopener" class="mt-3 inline-flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 font-medium">
            公式サイト <span class="text-xs">↗</span>
          </a>
        </div>
      </template>

      <!-- Databases -->
      <template v-if="activeTab === 'databases'">
        <div
          v-for="db in paginatedItems"
          :key="db.id"
          class="bg-white rounded-xl shadow-sm border p-5 hover:shadow-md hover:border-primary-200 transition-all"
        >
          <div class="flex items-start justify-between mb-3">
            <div class="flex items-center gap-3">
              <TechIcon :name="db.name" size="2rem" />
              <div>
                <h3 class="font-bold text-lg text-gray-900">{{ db.name }}</h3>
                <p class="text-sm text-gray-500">{{ db.birthYear }}年〜</p>
              </div>
            </div>
            <span class="px-2 py-1 text-xs font-medium rounded-full" :class="getDbBadgeClass(db.type)">
              {{ db.type }}
            </span>
          </div>
          <div class="space-y-2 text-sm">
            <p class="flex items-center gap-2">
              <span class="text-gray-400 w-24 shrink-0">バージョン</span>
              <span class="text-gray-700 font-mono text-sm">{{ db.latestVersion }}</span>
            </p>
            <div class="flex items-start gap-2">
              <span class="text-gray-400 w-24 shrink-0 pt-0.5">クエリ言語</span>
              <div class="flex flex-wrap gap-1">
                <span
                  v-for="ql in db.queryLanguage"
                  :key="ql"
                  class="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded-md font-medium"
                >
                  {{ ql }}
                </span>
              </div>
            </div>
          </div>
          <div class="mt-3 flex flex-wrap gap-1">
            <span v-for="l in db.dependencyLanguages" :key="l" class="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-md">
              {{ l }}
            </span>
          </div>
          <p v-if="db.notes" class="mt-3 text-sm text-gray-600">{{ db.notes }}</p>
          <a v-if="db.officialUrl" :href="db.officialUrl" target="_blank" rel="noopener" class="mt-3 inline-flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 font-medium">
            公式サイト <span class="text-xs">↗</span>
          </a>
        </div>
      </template>

      <!-- Dev Tools -->
      <template v-if="activeTab === 'devtools'">
        <div
          v-for="tool in paginatedItems"
          :key="tool.id"
          class="bg-white rounded-xl shadow-sm border p-5 hover:shadow-md hover:border-primary-200 transition-all"
        >
          <div class="flex items-start justify-between mb-3">
            <div class="flex items-center gap-3">
              <TechIcon :name="tool.name" size="2rem" />
              <div>
                <h3 class="font-bold text-lg text-gray-900">{{ tool.name }}</h3>
                <p class="text-sm text-gray-500">{{ tool.license }}</p>
              </div>
            </div>
            <span class="px-2 py-1 text-xs font-medium rounded-full" :class="getToolBadgeClass(tool.category)">
              {{ getToolCategoryLabel(tool.category) }}
            </span>
          </div>
          <div class="space-y-1.5 text-sm">
            <p v-if="tool.latestVersion !== '-'" class="flex items-center gap-2">
              <span class="text-gray-400 w-20 shrink-0">バージョン</span>
              <span class="text-gray-700 font-mono text-sm">{{ tool.latestVersion }}</span>
            </p>
            <p class="flex items-center gap-2">
              <span class="text-gray-400 w-20 shrink-0">対応OS</span>
              <span class="text-gray-700 text-sm">{{ tool.platform.join(', ') }}</span>
            </p>
          </div>
          <p v-if="tool.notes" class="mt-3 text-sm text-gray-600">{{ tool.notes }}</p>
          <a :href="tool.officialUrl" target="_blank" rel="noopener" class="mt-3 inline-flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 font-medium">
            公式サイト <span class="text-xs">↗</span>
          </a>
        </div>
      </template>

      <!-- Libraries -->
      <template v-if="activeTab === 'libraries'">
        <div
          v-for="lib in paginatedItems"
          :key="lib.id"
          @click="openLibraryDetail(lib)"
          class="bg-white rounded-xl shadow-sm border p-4 hover:shadow-md hover:border-primary-200 transition-all cursor-pointer"
        >
          <div class="flex items-start justify-between mb-3">
            <div class="flex items-center gap-3">
              <TechIcon :name="lib.name" size="2rem" />
              <div>
                <h3 class="font-bold text-lg text-gray-900">{{ lib.name }}</h3>
                <p class="text-sm text-gray-500">{{ lib.license }}</p>
              </div>
            </div>
            <div class="flex items-center gap-1.5 px-2 py-0.5 text-xs rounded-full" :class="getLanguageBadgeClass(lib.language)">
              <TechIcon :name="getLanguageDisplayName(lib.language)" size="0.875rem" />
              <span>{{ getLanguageLabel(lib.language) }}</span>
            </div>
          </div>
          <p class="text-sm text-gray-600 mb-3 line-clamp-2">{{ lib.description }}</p>
          <div class="flex items-center gap-2">
            <i :class="[getCategoryIcon(lib.category), 'text-gray-500']"></i>
            <span class="text-xs text-gray-500">{{ getCategoryName(lib.category) }}</span>
          </div>
          <div v-if="lib.features && lib.features.length > 0" class="mt-2 flex flex-wrap gap-1">
            <span
              v-for="feature in lib.features.slice(0, 3)"
              :key="feature"
              class="px-1.5 py-0.5 text-xs bg-gray-100 text-gray-600 rounded"
            >
              {{ feature }}
            </span>
          </div>
        </div>
      </template>

      <!-- CMS -->
      <template v-if="activeTab === 'cms'">
        <div
          v-for="cms in paginatedItems"
          :key="cms.id"
          @click="openLibraryDetail(cms)"
          class="bg-white rounded-xl shadow-sm border p-4 hover:shadow-md hover:border-primary-200 transition-all cursor-pointer"
        >
          <div class="flex items-start justify-between mb-3">
            <div class="flex items-center gap-3">
              <TechIcon :name="cms.name" size="2rem" />
              <div>
                <h3 class="font-bold text-lg text-gray-900">{{ cms.name }}</h3>
                <p class="text-sm text-gray-500">{{ cms.license }}</p>
              </div>
            </div>
            <div class="flex items-center gap-1.5 px-2 py-0.5 text-xs rounded-full" :class="getLanguageBadgeClass(cms.language)">
              <TechIcon :name="getLanguageDisplayName(cms.language)" size="0.875rem" />
              <span>{{ getLanguageLabel(cms.language) }}</span>
            </div>
          </div>
          <p class="text-sm text-gray-600 mb-3 line-clamp-2">{{ cms.description }}</p>
          <div v-if="cms.features && cms.features.length > 0" class="mt-2 flex flex-wrap gap-1">
            <span
              v-for="feature in cms.features.slice(0, 3)"
              :key="feature"
              class="px-1.5 py-0.5 text-xs bg-gray-100 text-gray-600 rounded"
            >
              {{ feature }}
            </span>
          </div>
        </div>
      </template>
    </div>

    <!-- Empty State -->
    <div v-if="filteredItems.length === 0" class="text-center py-12">
      <div class="text-4xl mb-4">🔍</div>
      <p class="text-gray-500">該当する項目が見つかりません</p>
    </div>

    <!-- Pagination -->
    <div v-if="totalPages > 1" class="mt-8 flex justify-center">
      <nav class="flex items-center gap-1">
        <!-- Previous -->
        <button
          @click="goToPage(currentPage - 1)"
          :disabled="currentPage === 1"
          class="px-3 py-2 rounded-lg border bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          ←
        </button>

        <!-- Page Numbers -->
        <template v-for="page in pageNumbers" :key="page">
          <span v-if="page === '...'" class="px-3 py-2 text-gray-400">...</span>
          <button
            v-else
            @click="goToPage(page as number)"
            class="px-3 py-2 rounded-lg border transition-colors min-w-[40px]"
            :class="currentPage === page
              ? 'bg-primary-600 text-white border-primary-600'
              : 'bg-white text-gray-600 hover:bg-gray-50'"
          >
            {{ page }}
          </button>
        </template>

        <!-- Next -->
        <button
          @click="goToPage(currentPage + 1)"
          :disabled="currentPage === totalPages"
          class="px-3 py-2 rounded-lg border bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          →
        </button>
      </nav>
    </div>
  </div>

  <!-- Library Detail Modal -->
  <Teleport to="body">
    <div
      v-if="selectedLibrary"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click.self="selectedLibrary = null"
    >
      <div class="bg-white rounded-2xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div class="p-6">
          <!-- Header -->
          <div class="flex items-start justify-between mb-4">
            <div>
              <h2 class="text-2xl font-bold text-gray-900">{{ selectedLibrary.name }}</h2>
              <div class="flex items-center gap-2 mt-1">
                <div class="flex items-center gap-1.5 px-2 py-0.5 text-xs rounded-full" :class="getLanguageBadgeClass(selectedLibrary.language)">
                  <TechIcon :name="getLanguageDisplayName(selectedLibrary.language)" size="0.875rem" />
                  <span>{{ getLanguageLabel(selectedLibrary.language) }}</span>
                </div>
                <span class="text-sm text-gray-500 flex items-center gap-1">
                  <i :class="[getCategoryIcon(selectedLibrary.category), 'text-gray-500']"></i>
                  {{ getCategoryName(selectedLibrary.category) }}
                </span>
              </div>
            </div>
            <button
              @click="selectedLibrary = null"
              class="text-gray-400 hover:text-gray-600 text-2xl leading-none"
            >
              ×
            </button>
          </div>

          <!-- Description -->
          <p class="text-gray-600 mb-4">{{ selectedLibrary.description }}</p>

          <!-- Features -->
          <div v-if="selectedLibrary.features && selectedLibrary.features.length > 0" class="mb-4">
            <h3 class="text-sm font-semibold text-gray-700 mb-2">特徴</h3>
            <div class="flex flex-wrap gap-1">
              <span
                v-for="feature in selectedLibrary.features"
                :key="feature"
                class="px-2 py-1 text-sm bg-primary-50 text-primary-700 rounded-md"
              >
                {{ feature }}
              </span>
            </div>
          </div>

          <!-- Package Info -->
          <div class="space-y-2 text-sm">
            <div v-if="selectedLibrary.packageName" class="flex items-center gap-2">
              <span class="text-gray-400 w-24 shrink-0">パッケージ</span>
              <code class="px-2 py-0.5 bg-gray-100 rounded text-gray-700">{{ selectedLibrary.packageName }}</code>
            </div>
            <div v-if="selectedLibrary.latestVersion" class="flex items-center gap-2">
              <span class="text-gray-400 w-24 shrink-0">バージョン</span>
              <span class="text-gray-700">{{ selectedLibrary.latestVersion }}</span>
            </div>
          </div>

          <!-- Links -->
          <div class="mt-6 flex flex-wrap gap-2">
            <a
              v-if="selectedLibrary.officialUrl"
              :href="selectedLibrary.officialUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm"
            >
              🌐 公式サイト
            </a>
            <a
              v-if="selectedLibrary.github"
              :href="selectedLibrary.github"
              target="_blank"
              rel="noopener noreferrer"
              class="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-sm"
            >
              🐙 GitHub
            </a>
            <a
              v-if="selectedLibrary.packageName && selectedLibrary.language === 'javascript'"
              :href="`https://www.npmjs.com/package/${selectedLibrary.packageName}`"
              target="_blank"
              rel="noopener noreferrer"
              class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
            >
              📦 npm
            </a>
            <a
              v-if="selectedLibrary.packageName && selectedLibrary.language === 'php'"
              :href="`https://packagist.org/packages/${selectedLibrary.packageName}`"
              target="_blank"
              rel="noopener noreferrer"
              class="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm"
            >
              📦 Packagist
            </a>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { programmingLanguages, databases, devTools, libraries, libraryCategories } from '~/data'
import type { Library, LibraryCategory } from '~/types'

const activeTab = ref('languages')
const search = ref('')
const sortBy = ref('name')
const selectedLanguage = ref('')
const selectedCategory = ref('')
const selectedLibrary = ref<Library | null>(null)

// ページネーション
const currentPage = ref(1)
const itemsPerPage = ref(24)

// タブやフィルター変更時にページをリセット
watch([activeTab, search, sortBy, selectedLanguage, selectedCategory, itemsPerPage], () => {
  currentPage.value = 1
})

// CMSを除いたライブラリ
const librariesWithoutCms = computed(() => libraries.filter(lib => lib.category !== 'cms'))

// CMSのみ
const cmsLibraries = computed(() => libraries.filter(lib => lib.category === 'cms'))

// CMSを除いたカテゴリ一覧
const libraryCategoriesWithoutCms = computed(() => libraryCategories.filter(cat => cat.id !== 'cms'))

const tabs = computed(() => [
  { id: 'languages', name: 'プログラミング言語', icon: '💻', count: programmingLanguages.length },
  { id: 'databases', name: 'データベース', icon: '🗄️', count: databases.length },
  { id: 'devtools', name: '開発ツール', icon: '🛠️', count: devTools.length },
  { id: 'libraries', name: 'ライブラリ', icon: '📚', count: librariesWithoutCms.value.length },
  { id: 'cms', name: 'CMS', icon: '📰', count: cmsLibraries.value.length },
])

const filteredItems = computed(() => {
  let items: any[] = []

  switch (activeTab.value) {
    case 'languages':
      items = [...programmingLanguages]
      break
    case 'databases':
      items = [...databases]
      break
    case 'devtools':
      items = [...devTools]
      break
    case 'libraries':
      items = [...librariesWithoutCms.value]
      // ライブラリ用フィルター
      if (selectedLanguage.value) {
        items = items.filter(lib => lib.language === selectedLanguage.value)
      }
      if (selectedCategory.value) {
        items = items.filter(lib => lib.category === selectedCategory.value)
      }
      break
    case 'cms':
      items = [...cmsLibraries.value]
      // CMS用言語フィルター
      if (selectedLanguage.value) {
        items = items.filter(lib => lib.language === selectedLanguage.value)
      }
      break
  }

  // Search
  if (search.value) {
    const q = search.value.toLowerCase()
    items = items.filter(item =>
      item.name.toLowerCase().includes(q) ||
      (item.notes && item.notes.toLowerCase().includes(q)) ||
      (item.description && item.description.toLowerCase().includes(q))
    )
  }

  // Sort
  if (sortBy.value === 'name') {
    items.sort((a, b) => a.name.localeCompare(b.name))
  } else if (sortBy.value === 'year-desc') {
    items.sort((a, b) => (b.birthYear || 0) - (a.birthYear || 0))
  } else if (sortBy.value === 'year-asc') {
    items.sort((a, b) => (a.birthYear || 0) - (b.birthYear || 0))
  }

  return items
})

// ページネーション計算
const totalPages = computed(() => Math.ceil(filteredItems.value.length / itemsPerPage.value))

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredItems.value.slice(start, end)
})

// 表示情報
const paginationInfo = computed(() => {
  const total = filteredItems.value.length
  const start = total === 0 ? 0 : (currentPage.value - 1) * itemsPerPage.value + 1
  const end = Math.min(currentPage.value * itemsPerPage.value, total)
  return { start, end, total }
})

// ページネーションのページ番号リスト
const pageNumbers = computed(() => {
  const pages: (number | string)[] = []
  const total = totalPages.value
  const current = currentPage.value

  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.push(i)
  } else {
    pages.push(1)
    if (current > 3) pages.push('...')

    const start = Math.max(2, current - 1)
    const end = Math.min(total - 1, current + 1)

    for (let i = start; i <= end; i++) pages.push(i)

    if (current < total - 2) pages.push('...')
    pages.push(total)
  }

  return pages
})

const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const getDbBadgeClass = (type: string): string => {
  if (type.includes('RDBMS')) return 'bg-blue-100 text-blue-700'
  if (type.includes('ドキュメント')) return 'bg-green-100 text-green-700'
  if (type.includes('KVS') || type.includes('インメモリ')) return 'bg-orange-100 text-orange-700'
  if (type.includes('グラフ')) return 'bg-purple-100 text-purple-700'
  return 'bg-gray-100 text-gray-700'
}

const getFwCategoryLabel = (category: string): string => {
  const labels: Record<string, string> = {
    'frontend': 'フロントエンド', 'backend': 'バックエンド', 'fullstack': 'フルスタック',
    'mobile': 'モバイル', 'css': 'CSS', 'testing': 'テスト', 'other': 'その他'
  }
  return labels[category] || category
}

const getFwBadgeClass = (category: string): string => {
  const classes: Record<string, string> = {
    'frontend': 'bg-blue-100 text-blue-700', 'backend': 'bg-green-100 text-green-700',
    'fullstack': 'bg-purple-100 text-purple-700', 'mobile': 'bg-orange-100 text-orange-700',
    'css': 'bg-pink-100 text-pink-700', 'testing': 'bg-gray-100 text-gray-700'
  }
  return classes[category] || 'bg-gray-100 text-gray-700'
}

const getToolCategoryLabel = (category: string): string => {
  const labels: Record<string, string> = {
    'editor': 'エディタ', 'ide': 'IDE', 'vcs': 'VCS', 'ci-cd': 'CI/CD',
    'containerization': 'コンテナ', 'package-manager': 'パッケージ', 'bundler': 'バンドラー', 'other': 'その他'
  }
  return labels[category] || category
}

const getToolBadgeClass = (category: string): string => {
  const classes: Record<string, string> = {
    'editor': 'bg-blue-100 text-blue-700', 'ide': 'bg-blue-100 text-blue-700',
    'vcs': 'bg-green-100 text-green-700', 'ci-cd': 'bg-purple-100 text-purple-700',
    'containerization': 'bg-orange-100 text-orange-700', 'package-manager': 'bg-gray-100 text-gray-700',
    'bundler': 'bg-yellow-100 text-yellow-700'
  }
  return classes[category] || 'bg-gray-100 text-gray-700'
}

const openLibraryDetail = (lib: Library) => {
  selectedLibrary.value = lib
}

// ヘルパー関数
const getLanguageDisplayName = (language: string): string => {
  const names: Record<string, string> = {
    javascript: 'JavaScript',
    php: 'PHP',
    python: 'Python',
    ruby: 'Ruby',
    java: 'Java',
    r: 'R',
    go: 'Go',
    csharp: 'C#',
    cpp: 'C++',
    cobol: 'COBOL',
    kotlin: 'Kotlin',
    swift: 'Swift',
    multi: 'JavaScript'
  }
  return names[language] || language
}

const getLanguageLabel = (language: string): string => {
  const labels: Record<string, string> = {
    javascript: 'JavaScript',
    php: 'PHP',
    python: 'Python',
    ruby: 'Ruby',
    java: 'Java',
    r: 'R',
    go: 'Go',
    csharp: 'C#',
    cpp: 'C++',
    cobol: 'COBOL',
    kotlin: 'Kotlin',
    swift: 'Swift',
    multi: '複数言語'
  }
  return labels[language] || language
}

const getLanguageBadgeClass = (language: string): string => {
  const classes: Record<string, string> = {
    javascript: 'bg-yellow-100 text-yellow-800',
    php: 'bg-purple-100 text-purple-800',
    python: 'bg-blue-100 text-blue-800',
    java: 'bg-red-100 text-red-800',
    ruby: 'bg-red-100 text-red-800',
    r: 'bg-gray-100 text-gray-800',
    go: 'bg-cyan-100 text-cyan-800',
    csharp: 'bg-purple-100 text-purple-800',
    cpp: 'bg-green-100 text-green-800',
    kotlin: 'bg-orange-100 text-orange-800',
    swift: 'bg-orange-100 text-orange-800',
    cobol: 'bg-gray-100 text-gray-800'
  }
  return classes[language] || 'bg-gray-100 text-gray-800'
}

const getCategoryIcon = (category: LibraryCategory): string => {
  const cat = libraryCategories.find(c => c.id === category)
  return cat?.icon || '📦'
}

const getCategoryName = (category: LibraryCategory): string => {
  const cat = libraryCategories.find(c => c.id === category)
  return cat?.nameJa || category
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>