<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <section class="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <NuxtLink to="/" class="text-indigo-200 hover:text-white mb-4 inline-block">&larr; 戻る</NuxtLink>
        <h1 class="text-3xl font-bold">言語の関係性グラフ</h1>
        <p class="text-indigo-200 mt-2">プログラミング言語の派生・影響関係を可視化（ノードをドラッグで移動可能）</p>
      </div>
    </section>

    <!-- Legend -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div class="flex flex-wrap gap-4 items-center text-sm">
        <span class="font-medium">凡例:</span>
        <span class="flex items-center gap-1">
          <span class="w-8 h-0.5 bg-green-500"></span>
          <span>トランスパイル型（変換）</span>
        </span>
        <span class="flex items-center gap-1">
          <span class="w-8 h-0.5 bg-blue-500"></span>
          <span>派生型（後継）</span>
        </span>
        <span class="flex items-center gap-1">
          <span class="w-8 h-0.5 bg-orange-400" style="border-top: 2px dashed;"></span>
          <span>影響型（思想継承）</span>
        </span>
      </div>
    </div>

    <!-- Graph Container -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <div class="bg-white rounded-xl shadow-lg overflow-hidden">
        <svg
          ref="svgRef"
          :viewBox="`0 0 ${svgWidth} ${svgHeight}`"
          class="w-full select-none"
          style="min-height: 600px;"
          @mousedown="onSvgMouseDown"
          @mousemove="onSvgMouseMove"
          @mouseup="onSvgMouseUp"
          @mouseleave="onSvgMouseUp"
          @wheel="onZoom"
        >
          <g :transform="`translate(${panX}, ${panY}) scale(${zoom})`">
            <!-- Edges -->
            <g>
              <template v-for="edge in edges" :key="`${edge.from}-${edge.to}`">
                <line
                  :x1="getEdgeStart(edge.from, edge.to).x"
                  :y1="getEdgeStart(edge.from, edge.to).y"
                  :x2="getEdgeEnd(edge.from, edge.to).x"
                  :y2="getEdgeEnd(edge.from, edge.to).y"
                  :stroke="getEdgeColor(edge.type)"
                  :stroke-width="2"
                  :stroke-dasharray="edge.type === 'influenced' ? '5,5' : '0'"
                  marker-end="url(#arrowhead)"
                />
              </template>
            </g>

            <!-- Nodes -->
            <g>
              <template v-for="node in nodeList" :key="node.id">
                <g
                  :transform="`translate(${node.x}, ${node.y})`"
                  :class="['cursor-grab', draggingNode === node.id ? 'cursor-grabbing' : '']"
                  @mousedown.stop="startDragNode($event, node.id)"
                  @mouseenter="hoveredNode = node.id"
                  @mouseleave="hoveredNode = null"
                  @click.stop="onNodeClick(node.id)"
                >
                  <circle
                    :r="getNodeRadius(node.id)"
                    :fill="getNodeColor(node.id)"
                    :stroke="hoveredNode === node.id || draggingNode === node.id ? '#1e40af' : '#fff'"
                    :stroke-width="hoveredNode === node.id || draggingNode === node.id ? 3 : 2"
                    class="transition-colors duration-200"
                  />
                  <text
                    :y="getNodeRadius(node.id) + 14"
                    text-anchor="middle"
                    class="text-xs font-medium fill-gray-700 pointer-events-none"
                  >
                    {{ node.name }}
                  </text>
                </g>
              </template>
            </g>
          </g>

          <!-- Arrow marker definition -->
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="10"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
            </marker>
          </defs>
        </svg>
      </div>

      <!-- Controls -->
      <div class="mt-4 flex justify-center gap-2">
        <button
          @click="zoom = Math.min(zoom + 0.2, 3)"
          class="px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-50"
        >
          +
        </button>
        <button
          @click="zoom = Math.max(zoom - 0.2, 0.3)"
          class="px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-50"
        >
          -
        </button>
        <button
          @click="resetView"
          class="px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-50"
        >
          リセット
        </button>
      </div>
    </div>

    <!-- Language Detail Modal -->
    <Teleport to="body">
      <div
        v-if="selectedLanguage"
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        @click="closeModal"
      >
        <div
          class="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 overflow-hidden"
          @click.stop
        >
          <div class="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white px-6 py-4">
            <div class="flex items-center justify-between">
              <h3 class="text-xl font-bold">{{ selectedLanguage.name }}</h3>
              <button
                @click="closeModal"
                class="text-white/80 hover:text-white text-2xl leading-none"
              >
                &times;
              </button>
            </div>
          </div>
          <div class="px-6 py-4 space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <div class="text-sm text-gray-500">誕生年</div>
                <div class="font-medium">{{ selectedLanguage.birthYear }}年</div>
              </div>
              <div>
                <div class="text-sm text-gray-500">最新バージョン</div>
                <div class="font-medium">{{ selectedLanguage.latestVersion }}</div>
              </div>
              <div>
                <div class="text-sm text-gray-500">タイプ</div>
                <div class="font-medium">{{ selectedLanguage.type }}</div>
              </div>
              <div>
                <div class="text-sm text-gray-500">拡張子</div>
                <div class="font-medium">{{ selectedLanguage.extensions.join(', ') }}</div>
              </div>
            </div>
            <div>
              <div class="text-sm text-gray-500 mb-1">パラダイム</div>
              <div class="flex flex-wrap gap-1">
                <span
                  v-for="p in selectedLanguage.paradigms"
                  :key="p"
                  class="px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded text-sm"
                >
                  {{ p }}
                </span>
              </div>
            </div>
            <div v-if="selectedLanguage.notes">
              <div class="text-sm text-gray-500 mb-1">備考</div>
              <div class="text-gray-700">{{ selectedLanguage.notes }}</div>
            </div>
            <div v-if="selectedLanguage.officialUrl">
              <a
                :href="selectedLanguage.officialUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800"
              >
                公式サイト
                <span class="text-sm">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { programmingLanguages, languageRelations } from '~/data'

const svgWidth = 1400
const svgHeight = 1200

const svgRef = ref<SVGSVGElement | null>(null)
const hoveredNode = ref<string | null>(null)
const selectedNode = ref<string | null>(null)
const zoom = ref(1)
const panX = ref(0)
const panY = ref(0)
const isPanning = ref(false)
const lastMousePoint = ref({ x: 0, y: 0 })

// ドラッグ用の状態
const draggingNode = ref<string | null>(null)
const hasDragged = ref(false)
const nodePositionsRef = ref<Record<string, { x: number; y: number }>>({})

// 関係性に含まれる言語のみを抽出
const relatedLanguageIds = computed(() => {
  const ids = new Set<string>()
  languageRelations.forEach(r => {
    ids.add(r.from)
    ids.add(r.to)
  })
  return ids
})

// ノードの接続数を計算
const connectionCount = computed(() => {
  const counts: Record<string, number> = {}
  languageRelations.forEach(r => {
    counts[r.from] = (counts[r.from] || 0) + 1
    counts[r.to] = (counts[r.to] || 0) + 1
  })
  return counts
})

// ツリーを構築して配置
function calculateInitialPositions() {
  const positions: Record<string, { x: number; y: number }> = {}
  const placed = new Set<string>()

  // ルートノードを特定
  const toNodes = new Set(languageRelations.map(r => r.to))
  const roots = [...new Set(languageRelations.map(r => r.from))].filter(id => !toNodes.has(id))

  // 各ルートからツリーを構築
  interface TreeNode {
    id: string
    children: TreeNode[]
  }

  function buildTree(rootId: string): TreeNode | null {
    if (placed.has(rootId)) return null
    placed.add(rootId)

    const children: TreeNode[] = []
    languageRelations
      .filter(r => r.from === rootId && !placed.has(r.to))
      .forEach(r => {
        const child = buildTree(r.to)
        if (child) children.push(child)
      })

    return { id: rootId, children }
  }

  const trees: TreeNode[] = []
  roots.forEach(rootId => {
    const tree = buildTree(rootId)
    if (tree) trees.push(tree)
  })

  // ツリーの幅を計算
  function getTreeWidth(node: TreeNode): number {
    if (node.children.length === 0) return 1
    return node.children.reduce((sum, child) => sum + getTreeWidth(child), 0)
  }

  // ツリーを配置
  function placeTree(node: TreeNode, x: number, y: number, width: number) {
    positions[node.id] = { x: x + width / 2, y }

    if (node.children.length === 0) return

    const childY = y + 80
    let childX = x
    node.children.forEach(child => {
      const childWidth = (getTreeWidth(child) / getTreeWidth(node)) * width
      placeTree(child, childX, childY, childWidth)
      childX += childWidth
    })
  }

  // 各ツリーを横に配置（6つごとに折り返し）
  const treesPerRow = 6
  const treeSpacing = 30
  const rowHeight = 350
  let currentX = 50
  let currentY = 50
  let treeCount = 0

  trees.forEach(tree => {
    if (treeCount > 0 && treeCount % treesPerRow === 0) {
      currentX = 50
      currentY += rowHeight
    }

    const treeWidth = Math.max(getTreeWidth(tree) * 70, 120)
    placeTree(tree, currentX, currentY, treeWidth)
    currentX += treeWidth + treeSpacing
    treeCount++
  })

  // 孤立ノードを配置（関係性のない言語）
  const isolatedIds = programmingLanguages
    .map(l => l.id)
    .filter(id => !placed.has(id))

  const isolatedPerRow = 12
  let isolatedX = 50
  let isolatedY = currentY + (treeCount > 0 ? rowHeight : 0)
  let isolatedCount = 0

  isolatedIds.forEach(id => {
    if (isolatedCount > 0 && isolatedCount % isolatedPerRow === 0) {
      isolatedX = 50
      isolatedY += 80
    }
    positions[id] = { x: isolatedX, y: isolatedY }
    isolatedX += 110
    isolatedCount++
  })

  return positions
}

// 初期化
onMounted(() => {
  nodePositionsRef.value = calculateInitialPositions()
})

// ノードリスト（描画用）
const nodeList = computed(() => {
  return programmingLanguages.map(lang => ({
    id: lang.id,
    name: lang.name,
    x: nodePositionsRef.value[lang.id]?.x || 0,
    y: nodePositionsRef.value[lang.id]?.y || 0
  }))
})

const edges = computed(() => languageRelations)

function getNodePosition(id: string) {
  return nodePositionsRef.value[id] || { x: 0, y: 0 }
}

function getNodeRadius(id: string) {
  const count = connectionCount.value[id] || 1
  return Math.min(12 + count * 3, 30)
}

// エッジの始点（fromノードの外周）
function getEdgeStart(fromId: string, toId: string) {
  const from = getNodePosition(fromId)
  const to = getNodePosition(toId)
  const radius = getNodeRadius(fromId)

  const dx = to.x - from.x
  const dy = to.y - from.y
  const distance = Math.sqrt(dx * dx + dy * dy)

  if (distance === 0) return from

  return {
    x: from.x + (dx / distance) * radius,
    y: from.y + (dy / distance) * radius
  }
}

// エッジの終点（toノードの外周）
function getEdgeEnd(fromId: string, toId: string) {
  const from = getNodePosition(fromId)
  const to = getNodePosition(toId)
  const radius = getNodeRadius(toId)

  const dx = to.x - from.x
  const dy = to.y - from.y
  const distance = Math.sqrt(dx * dx + dy * dy)

  if (distance === 0) return to

  return {
    x: to.x - (dx / distance) * radius,
    y: to.y - (dy / distance) * radius
  }
}

function getNodeColor(id: string) {
  const lang = programmingLanguages.find(l => l.id === id)
  if (!lang) return '#9ca3af'

  // パラダイムに基づいて色分け
  if (lang.paradigms.includes('関数型') || lang.paradigms.includes('純粋関数型')) return '#8b5cf6'
  if (lang.paradigms.includes('オブジェクト指向')) return '#3b82f6'
  if (lang.paradigms.includes('手続き型')) return '#10b981'
  if (lang.paradigms.includes('宣言型')) return '#f59e0b'
  return '#6b7280'
}

function getEdgeColor(type: string) {
  switch (type) {
    case 'transpile': return '#10b981'  // 緑: 変換
    case 'derived': return '#3b82f6'    // 青: 派生
    case 'influenced': return '#f97316' // オレンジ: 影響
    default: return '#9ca3af'
  }
}

// SVG座標に変換
function screenToSvgCoords(clientX: number, clientY: number) {
  if (!svgRef.value) return { x: 0, y: 0 }
  const rect = svgRef.value.getBoundingClientRect()
  const scaleX = svgWidth / rect.width
  const scaleY = svgHeight / rect.height
  return {
    x: (clientX - rect.left) * scaleX,
    y: (clientY - rect.top) * scaleY
  }
}

// ノードクリック
function onNodeClick(nodeId: string) {
  // ドラッグしていた場合はクリックを無視
  if (hasDragged.value) return
  selectedNode.value = nodeId
}

// 選択中の言語情報
const selectedLanguage = computed(() => {
  if (!selectedNode.value) return null
  return programmingLanguages.find(l => l.id === selectedNode.value) || null
})

// モーダルを閉じる
function closeModal() {
  selectedNode.value = null
}

// ノードのドラッグ開始
function startDragNode(e: MouseEvent, nodeId: string) {
  draggingNode.value = nodeId
  hasDragged.value = false
  lastMousePoint.value = { x: e.clientX, y: e.clientY }
}

// SVG上のマウスダウン（パン開始）
function onSvgMouseDown(e: MouseEvent) {
  if (draggingNode.value) return
  isPanning.value = true
  lastMousePoint.value = { x: e.clientX, y: e.clientY }
}

// SVG上のマウスムーブ
function onSvgMouseMove(e: MouseEvent) {
  const dx = e.clientX - lastMousePoint.value.x
  const dy = e.clientY - lastMousePoint.value.y

  if (draggingNode.value) {
    // ノードをドラッグ中
    hasDragged.value = true
    const svgRect = svgRef.value?.getBoundingClientRect()
    if (svgRect) {
      const scaleX = svgWidth / svgRect.width / zoom.value
      const scaleY = svgHeight / svgRect.height / zoom.value
      const pos = nodePositionsRef.value[draggingNode.value]
      if (pos) {
        nodePositionsRef.value[draggingNode.value] = {
          x: pos.x + dx * scaleX,
          y: pos.y + dy * scaleY
        }
      }
    }
  } else if (isPanning.value) {
    // キャンバスをパン中
    panX.value += dx
    panY.value += dy
  }

  lastMousePoint.value = { x: e.clientX, y: e.clientY }
}

// マウスアップ
function onSvgMouseUp() {
  // ドラッグしていた場合は少し遅延してリセット（クリックイベントの後）
  setTimeout(() => {
    hasDragged.value = false
  }, 0)
  draggingNode.value = null
  isPanning.value = false
}

function onZoom(e: WheelEvent) {
  e.preventDefault()
  const delta = e.deltaY > 0 ? -0.1 : 0.1
  zoom.value = Math.max(0.3, Math.min(3, zoom.value + delta))
}

function resetView() {
  zoom.value = 1
  panX.value = 0
  panY.value = 0
  nodePositionsRef.value = calculateInitialPositions()
}
</script>
