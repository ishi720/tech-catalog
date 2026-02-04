export { programmingLanguages } from './languages'
export { languageRelations } from './language-relations'
export { databases } from './databases'
export { devTools } from './devtools'
export { libraries, libraryCategories, getLibraryMatrix } from './libraries'
export { lowCodeTools } from './lowcode'
export { cloudServices } from './cloud'

import type { Category } from '~/types'

export const categories: Category[] = [
  {
    id: 'languages',
    name: 'Programming Languages',
    nameJa: 'プログラミング言語',
    description: '各種プログラミング言語の情報',
    icon: '💻',
    color: 'bg-blue-500'
  },
  {
    id: 'databases',
    name: 'Databases',
    nameJa: 'データベース',
    description: 'RDBMS、NoSQL等のデータベース',
    icon: '🗄️',
    color: 'bg-green-500'
  },
  {
    id: 'devtools',
    name: 'Dev Tools',
    nameJa: '開発ツール',
    description: 'IDE、CI/CD、コンテナ等のツール',
    icon: '🛠️',
    color: 'bg-orange-500'
  },
  {
    id: 'lowcode',
    name: 'Low-Code / No-Code',
    nameJa: 'ローコード・ノーコード',
    description: 'ノーコード・ローコード開発ツール',
    icon: '🧩',
    color: 'bg-purple-500'
  },
  {
    id: 'cloud',
    name: 'Cloud Services',
    nameJa: 'クラウドサービス',
    description: 'AWS / GCP / Azureのサービス',
    icon: '☁️',
    color: 'bg-sky-500'
  }
]
