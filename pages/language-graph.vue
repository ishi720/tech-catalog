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
  </div>
</template>

<script setup lang="ts">
import { programmingLanguages, languageRelations } from '~/data'

const svgWidth = 1400
const svgHeight = 1200

const svgRef = ref<SVGSVGElement | null>(null)
const hoveredNode = ref<string | null>(null)
const zoom = ref(1)
const panX = ref(0)
const panY = ref(0)
const isPanning = ref(false)
const lastMousePoint = ref({ x: 0, y: 0 })

// ドラッグ用の状態
const draggingNode = ref<string | null>(null)
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

  return positions
}

// 初期化
onMounted(() => {
  nodePositionsRef.value = calculateInitialPositions()
})

// ノードリスト（描画用）
const nodeList = computed(() => {
  const langs = programmingLanguages.filter(l => relatedLanguageIds.value.has(l.id))
  return langs.map(lang => ({
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

// ノードのドラッグ開始
function startDragNode(e: MouseEvent, nodeId: string) {
  draggingNode.value = nodeId
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
