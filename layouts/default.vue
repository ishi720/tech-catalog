<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <NuxtLink to="/" class="flex items-center gap-3">
            <span class="text-2xl">📚</span>
            <span class="text-xl font-bold text-gray-900">Tech Catalog</span>
          </NuxtLink>
          <nav class="hidden md:flex items-center gap-6">
            <NuxtLink 
              to="/tech" 
              class="text-gray-600 hover:text-primary-600 transition-colors"
              active-class="text-primary-600 font-medium"
            >
              📋 技術一覧
            </NuxtLink>
            <NuxtLink 
              to="/libraries" 
              class="text-gray-600 hover:text-primary-600 transition-colors"
              active-class="text-primary-600 font-medium"
            >
              📚 マトリックス表
            </NuxtLink>
          </nav>
          <!-- Mobile menu button -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
          >
            <span v-if="!mobileMenuOpen">☰</span>
            <span v-else>✕</span>
          </button>
        </div>
      </div>
      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden border-t bg-white">
        <nav class="px-4 py-3 space-y-2">
          <NuxtLink 
            to="/tech" 
            class="block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100"
            @click="mobileMenuOpen = false"
          >
            📋 技術一覧
          </NuxtLink>
          <NuxtLink 
            to="/libraries" 
            class="block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100"
            @click="mobileMenuOpen = false"
          >
            📚 ライブラリ
          </NuxtLink>
        </nav>
      </div>
    </header>

    <!-- Main content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t mt-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="text-center text-gray-500 text-sm">
          <p>Tech Catalog - 技術情報まとめ</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)
</script>
