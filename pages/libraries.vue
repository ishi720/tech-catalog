<template>
  <div class="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 flex items-center gap-3">
        <span>📚</span>
        マトリックス表
      </h1>
    </div>

    <!-- View Toggle -->
    <div class="flex items-center gap-4 mb-6">
      <!-- Language Filter (List view) -->
      <select
        v-if="viewMode === 'list'"
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
      </select>

      <!-- Category Filter (List view) -->
      <select
        v-if="viewMode === 'list'"
        v-model="selectedCategory"
        class="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none bg-white"
      >
        <option value="">すべてのカテゴリ</option>
        <option v-for="cat in libraryCategories" :key="cat.id" :value="cat.id">
          {{ cat.icon }} {{ cat.nameJa }}
        </option>
      </select>
    </div>

    <!-- Matrix View -->
    <div v-if="viewMode === 'matrix'" class="overflow-auto max-h-[calc(100vh-200px)] rounded-xl shadow-sm border bg-white">
      <table class="w-full border-collapse">
        <thead class="sticky top-0 z-20">
          <tr>
            <th class="sticky left-0 top-0 bg-gray-100 px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-r z-30 min-w-[120px]">
              言語 / 用途
            </th>
            <th
              v-for="cat in libraryCategories"
              :key="cat.id"
              class="px-3 py-3 text-center text-sm font-semibold text-gray-700 border-b min-w-[140px] bg-gray-100"
            >
              <div class="flex flex-col items-center gap-1">
                <span class="text-lg">{{ cat.icon }}</span>
                <span>{{ cat.nameJa }}</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="lang in displayLanguages" :key="lang.id" class="hover:bg-gray-50">
            <td class="sticky left-0 bg-white px-4 py-3 font-medium text-gray-900 border-b border-r z-10">
              <div class="flex items-center gap-2">
                <TechIcon :name="lang.name" size="1.25rem" />
                <span>{{ lang.name }}</span>
              </div>
            </td>
            <td
              v-for="cat in libraryCategories"
              :key="cat.id"
              class="px-2 py-2 border-b text-center align-top"
            >
              <div class="flex flex-col gap-1">
                <button
                  v-for="lib in getLibsForCell(lang.id, cat.id)"
                  :key="lib.id"
                  @click="openLibraryDetail(lib)"
                  class="px-2 py-1 text-xs bg-gray-100 hover:bg-primary-100 hover:text-primary-700 rounded text-gray-700 transition-colors text-left truncate max-w-[130px]"
                  :title="lib.name"
                >
                  {{ lib.name }}
                </button>
                <span v-if="getLibsForCell(lang.id, cat.id).length === 0" class="text-gray-300 text-xs">
                  -
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Empty State -->
    <div v-if="viewMode === 'list' && filteredLibraries.length === 0" class="text-center py-12">
      <div class="text-4xl mb-4">🔍</div>
      <p class="text-gray-500">該当するライブラリが見つかりません</p>
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
                  <span class="text-sm text-gray-500">
                    {{ getCategoryIcon(selectedLibrary.category) }} {{ getCategoryName(selectedLibrary.category) }}
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
  </div>
</template>

<script setup lang="ts">
import { libraries, libraryCategories } from '~/data/libraries'
import type { Library, LibraryCategory } from '~/types'

const viewMode = ref<'matrix' | 'list'>('matrix')
const selectedLanguage = ref('')
const selectedCategory = ref('')
const selectedLibrary = ref<Library | null>(null)

const displayLanguages = [
  { id: 'javascript', name: 'JavaScript' },
  { id: 'php', name: 'PHP' },
  { id: 'python', name: 'Python' },
  { id: 'java', name: 'Java' },
  { id: 'ruby', name: 'Ruby' },
  { id: 'r', name: 'R' },
  { id: 'go', name: 'Go' },
  { id: 'csharp', name: 'C#' },
  { id: 'cpp', name: 'C++' }
]

const getLibsForCell = (language: string, category: string): Library[] => {
  return libraries.filter(lib => lib.language === language && lib.category === category)
}

const filteredLibraries = computed(() => {
  let result = [...libraries]

  if (selectedLanguage.value) {
    result = result.filter(lib => lib.language === selectedLanguage.value)
  }

  if (selectedCategory.value) {
    result = result.filter(lib => lib.category === selectedCategory.value)
  }

  return result.sort((a, b) => a.name.localeCompare(b.name))
})

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
    multi: 'JavaScript'
  }
  return names[language] || language
}

// ラベルとバッジのクラス名を取得
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
    cobol: 'COBOL',
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