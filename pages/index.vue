<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Tech Catalog
          </h1>
          <p class="text-xl text-primary-100 max-w-2xl mx-auto">
            プログラミング言語、データベース、フレームワーク、ライブラリの情報をまとめたカタログ
          </p>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="bg-white border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div class="text-center">
            <div class="text-3xl font-bold text-blue-600">{{ stats.languages }}</div>
            <div class="text-sm text-gray-500 mt-1">言語</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-green-600">{{ stats.databases }}</div>
            <div class="text-sm text-gray-500 mt-1">データベース</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-orange-600">{{ stats.devtools }}</div>
            <div class="text-sm text-gray-500 mt-1">開発ツール</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-teal-600">{{ stats.libraries }}</div>
            <div class="text-sm text-gray-500 mt-1">ライブラリ</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Links -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink
          to="/tech"
          class="block bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-primary-400 hover:shadow-lg transition-all group"
        >
          <div class="flex items-center gap-4 mb-4">
            <span class="text-5xl">📋</span>
            <div>
              <h2 class="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                技術一覧
              </h2>
              <p class="text-gray-500">
                言語・DB・FW・ツール
              </p>
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">💻 言語</span>
            <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">🗄️ DB</span>
            <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">🏗️ FW</span>
            <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">🛠️ ツール</span>
          </div>
          <div class="mt-4 text-primary-600 font-medium flex items-center gap-1">
            詳細を見る <span>→</span>
          </div>
        </NuxtLink>

        <NuxtLink
          to="/libraries"
          class="block bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-primary-400 hover:shadow-lg transition-all group"
        >
          <div class="flex items-center gap-4 mb-4">
            <span class="text-5xl">📚</span>
            <div>
              <h2 class="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                ライブラリ
              </h2>
              <p class="text-gray-500">
                言語 × 用途マトリックス
              </p>
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            <div class="flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
              <TechIcon name="JavaScript" size="1rem" />
              <span>JavaScript</span>
            </div>
            <div class="flex items-center gap-1 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
              <TechIcon name="PHP" size="1rem" />
              <span>PHP</span>
            </div>
          </div>
          <div class="mt-4 text-primary-600 font-medium flex items-center gap-1">
            詳細を見る <span>→</span>
          </div>
        </NuxtLink>

        <NuxtLink
          to="/language-graph"
          class="block bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-indigo-400 hover:shadow-lg transition-all group"
        >
          <div class="flex items-center gap-4 mb-4">
            <span class="text-5xl">🔗</span>
            <div>
              <h2 class="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                言語の関係性
              </h2>
              <p class="text-gray-500">
                派生・影響を可視化
              </p>
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">JS → TS</span>
            <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">C → C++</span>
            <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Ruby → Crystal</span>
          </div>
          <div class="mt-4 text-indigo-600 font-medium flex items-center gap-1">
            グラフを見る <span>→</span>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- Library Categories Preview -->
    <section class="bg-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">ライブラリカテゴリ</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          <div
            v-for="cat in libraryCategories.slice(0, 12)"
            :key="cat.id"
            class="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow"
          >
            <div class="text-2xl mb-1">{{ cat.icon }}</div>
            <div class="text-sm font-medium text-gray-700">{{ cat.nameJa }}</div>
          </div>
        </div>
        <div class="text-center mt-6">
          <NuxtLink to="/libraries" class="text-primary-600 hover:text-primary-700 font-medium">
            全{{ libraryCategories.length }}カテゴリを見る →
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { programmingLanguages, databases, devTools, libraries, libraryCategories } from '~/data'

const stats = computed(() => ({
  languages: programmingLanguages.length,
  databases: databases.length,
  devtools: devTools.length,
  libraries: libraries.length
}))
</script>
