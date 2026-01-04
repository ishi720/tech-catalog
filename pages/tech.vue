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
    <div class="bg-white rounded-xl shadow-sm border p-4 mb-6">
      <div class="flex flex-col md:flex-row gap-4">
        <div class="flex-1 relative">
          <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          <input
            v-model="search"
            type="text"
            placeholder="検索..."
            class="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
          />
        </div>
        <select
          v-model="sortBy"
          class="px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none bg-white min-w-[140px]"
        >
          <option value="name">名前順</option>
          <option value="year-desc">新しい順</option>
          <option value="year-asc">古い順</option>
        </select>
      </div>
      <div class="mt-3 text-sm text-gray-500">
        {{ filteredItems.length }} 件
      </div>
    </div>

    <!-- Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Programming Languages -->
      <template v-if="activeTab === 'languages'">
        <div
          v-for="lang in filteredItems"
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
          v-for="db in filteredItems"
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
          <div class="space-y-1.5 text-sm">
            <p class="flex items-center gap-2">
              <span class="text-gray-400 w-24 shrink-0">バージョン</span>
              <span class="text-gray-700 font-mono text-sm">{{ db.latestVersion }}</span>
            </p>
            <p class="flex items-center gap-2">
              <span class="text-gray-400 w-24 shrink-0">クエリ言語</span>
              <span class="text-gray-700">{{ db.queryLanguage }}</span>
            </p>
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

      <!-- Frameworks -->
      <template v-if="activeTab === 'frameworks'">
        <div
          v-for="fw in filteredItems"
          :key="fw.id"
          class="bg-white rounded-xl shadow-sm border p-5 hover:shadow-md hover:border-primary-200 transition-all"
        >
          <div class="flex items-start justify-between mb-3">
            <div class="flex items-center gap-3">
              <TechIcon :name="fw.name" size="2rem" />
              <div>
                <h3 class="font-bold text-lg text-gray-900">{{ fw.name }}</h3>
                <p class="text-sm text-gray-500">{{ fw.birthYear }}年〜</p>
              </div>
            </div>
            <span class="px-2 py-1 text-xs font-medium rounded-full" :class="getFwBadgeClass(fw.category)">
              {{ getFwCategoryLabel(fw.category) }}
            </span>
          </div>
          <div class="space-y-1.5 text-sm">
            <p class="flex items-center gap-2">
              <span class="text-gray-400 w-20 shrink-0">バージョン</span>
              <span class="text-gray-700 font-mono text-sm">{{ fw.latestVersion }}</span>
            </p>
            <p class="flex items-center gap-2">
              <span class="text-gray-400 w-20 shrink-0">言語</span>
              <span class="text-gray-700">{{ fw.language }}</span>
            </p>
          </div>
          <p v-if="fw.notes" class="mt-3 text-sm text-gray-600">{{ fw.notes }}</p>
          <a :href="fw.officialUrl" target="_blank" rel="noopener" class="mt-3 inline-flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 font-medium">
            公式サイト <span class="text-xs">↗</span>
          </a>
        </div>
      </template>

      <!-- Dev Tools -->
      <template v-if="activeTab === 'devtools'">
        <div
          v-for="tool in filteredItems"
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
          v-for="lib in filteredItems"
          :key="lib.id"
          class="bg-white rounded-lg shadow p-5 hover:shadow-md transition-shadow"
        >
            <div class="flex items-start justify-between mb-3">
              <div>
                <h3 class="font-semibold text-gray-900">{{ lib.name }}</h3>
                <div class="flex items-center gap-2 mt-1">
                  <span class="px-2 py-0.5 bg-pink-100 text-pink-700 text-xs rounded">
                    {{ lib.language }}
                  </span>
                  <span class="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded">
                    {{ lib.category }}
                  </span>
                </div>
              </div>
            </div>
            <p class="text-sm text-gray-600 mb-3">{{ lib.description }}</p>
            <div v-if="lib.features && lib.features.length > 0" class="flex flex-wrap gap-1 mb-3">
              <span
                v-for="feature in lib.features"
                :key="feature"
                class="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded"
              >
                {{ feature }}
              </span>
            </div>
            <div class="flex gap-3">
              <a
                v-if="lib.officialUrl"
                :href="lib.officialUrl"
                target="_blank"
                class="text-primary-600 text-sm hover:underline"
              >
                公式サイト →
              </a>
              <a
                v-if="lib.github"
                :href="lib.github"
                target="_blank"
                class="text-gray-600 text-sm hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
      </template>
    </div>

    <!-- Empty State -->
    <div v-if="filteredItems.length === 0" class="text-center py-12">
      <div class="text-4xl mb-4">🔍</div>
      <p class="text-gray-500">該当する項目が見つかりません</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { programmingLanguages, databases, frameworks, devTools, libraries } from '~/data'

const activeTab = ref('languages')
const search = ref('')
const sortBy = ref('name')

const tabs = computed(() => [
  { id: 'languages', name: 'プログラミング言語', icon: '💻', count: programmingLanguages.length },
  { id: 'databases', name: 'データベース', icon: '🗄️', count: databases.length },
  { id: 'frameworks', name: 'フレームワーク', icon: '🏗️', count: frameworks.length },
  { id: 'devtools', name: '開発ツール', icon: '🛠️', count: devTools.length },
  { id: 'libraries', name: 'ライブラリ', icon: '📚', count: libraries.length },
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
    case 'frameworks':
      items = [...frameworks]
      break
    case 'devtools':
      items = [...devTools]
      break
    case 'libraries':
      items = [...libraries]
      break
  }

  // Search
  if (search.value) {
    const q = search.value.toLowerCase()
    items = items.filter(item =>
      item.name.toLowerCase().includes(q) ||
      (item.notes && item.notes.toLowerCase().includes(q))
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
</script>
