<template>
  <div class="bg-white rounded-xl shadow-sm border p-4">
    <div class="flex flex-col md:flex-row gap-4">
      <!-- 検索入力 -->
      <div class="flex-1 relative">
        <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
        <input
          :value="modelValue"
          @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
          type="text"
          :placeholder="placeholder"
          class="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
        />
        <!-- クリアボタン -->
        <button
          v-if="modelValue"
          @click="$emit('update:modelValue', '')"
          class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- フィルター（スロット） -->
      <slot name="filters"></slot>

      <!-- ソート -->
      <select
        v-if="showSort"
        :value="sortBy"
        @change="$emit('update:sortBy', ($event.target as HTMLSelectElement).value)"
        class="px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none bg-white min-w-[140px]"
      >
        <option v-for="option in sortOptions" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>

    <!-- 結果件数 -->
    <div v-if="showCount" class="mt-3 text-sm text-gray-500">
      {{ totalCount }} 件中 {{ startIndex }}-{{ endIndex }} 件を表示
    </div>
  </div>
</template>

<script setup lang="ts">
interface SortOption {
  value: string
  label: string
}

interface Props {
  modelValue: string
  placeholder?: string
  sortBy?: string
  sortOptions?: SortOption[]
  showSort?: boolean
  showCount?: boolean
  totalCount?: number
  startIndex?: number
  endIndex?: number
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '検索...',
  sortBy: 'name',
  sortOptions: () => [
    { value: 'name', label: '名前順' },
    { value: 'year-desc', label: '新しい順' },
    { value: 'year-asc', label: '古い順' }
  ],
  showSort: true,
  showCount: true,
  totalCount: 0,
  startIndex: 0,
  endIndex: 0
})

defineEmits<{
  'update:modelValue': [value: string]
  'update:sortBy': [value: string]
}>()
</script>
