import type { Framework } from '~/types'

export const frameworks: Framework[] = [
  // Frontend Frameworks
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    language: 'JavaScript/TypeScript',
    latestVersion: '19.0',
    birthYear: 2013,
    officialUrl: 'https://react.dev/',
    notes: 'Meta開発、UIライブラリ'
  },
  {
    id: 'vue',
    name: 'Vue.js',
    category: 'frontend',
    language: 'JavaScript/TypeScript',
    latestVersion: '3.5',
    birthYear: 2014,
    officialUrl: 'https://vuejs.org/',
    notes: 'プログレッシブフレームワーク'
  },
  {
    id: 'angular',
    name: 'Angular',
    category: 'frontend',
    language: 'TypeScript',
    latestVersion: '19',
    birthYear: 2016,
    officialUrl: 'https://angular.dev/',
    notes: 'Google開発、フルスタック'
  },
  {
    id: 'svelte',
    name: 'Svelte',
    category: 'frontend',
    language: 'JavaScript/TypeScript',
    latestVersion: '5.0',
    birthYear: 2016,
    officialUrl: 'https://svelte.dev/',
    notes: 'コンパイル時最適化'
  },
  // Fullstack Frameworks
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'fullstack',
    language: 'JavaScript/TypeScript',
    latestVersion: '15.0',
    birthYear: 2016,
    officialUrl: 'https://nextjs.org/',
    notes: 'React用フルスタック'
  },
  {
    id: 'nuxt',
    name: 'Nuxt',
    category: 'fullstack',
    language: 'JavaScript/TypeScript',
    latestVersion: '3.14',
    birthYear: 2016,
    officialUrl: 'https://nuxt.com/',
    notes: 'Vue用フルスタック'
  },
  {
    id: 'remix',
    name: 'Remix',
    category: 'fullstack',
    language: 'JavaScript/TypeScript',
    latestVersion: '2.15',
    birthYear: 2021,
    officialUrl: 'https://remix.run/',
    notes: 'Web標準重視'
  },
  // Backend Frameworks
  {
    id: 'express',
    name: 'Express.js',
    category: 'backend',
    language: 'JavaScript/TypeScript',
    latestVersion: '4.21',
    birthYear: 2010,
    officialUrl: 'https://expressjs.com/',
    notes: 'Node.js定番フレームワーク'
  },
  {
    id: 'nestjs',
    name: 'NestJS',
    category: 'backend',
    language: 'TypeScript',
    latestVersion: '10.0',
    birthYear: 2017,
    officialUrl: 'https://nestjs.com/',
    notes: 'エンタープライズ向けNode.js'
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'backend',
    language: 'Python',
    latestVersion: '0.115',
    birthYear: 2018,
    officialUrl: 'https://fastapi.tiangolo.com/',
    notes: '高速Python API'
  },
  {
    id: 'django',
    name: 'Django',
    category: 'backend',
    language: 'Python',
    latestVersion: '5.1',
    birthYear: 2005,
    officialUrl: 'https://www.djangoproject.com/',
    notes: 'Pythonフルスタック'
  },
  {
    id: 'rails',
    name: 'Ruby on Rails',
    category: 'backend',
    language: 'Ruby',
    latestVersion: '8.0',
    birthYear: 2004,
    officialUrl: 'https://rubyonrails.org/',
    notes: 'CoC・DRY原則'
  },
  {
    id: 'spring',
    name: 'Spring Boot',
    category: 'backend',
    language: 'Java/Kotlin',
    latestVersion: '3.4',
    birthYear: 2014,
    officialUrl: 'https://spring.io/projects/spring-boot',
    notes: 'Javaエンタープライズ標準'
  },
  {
    id: 'laravel',
    name: 'Laravel',
    category: 'backend',
    language: 'PHP',
    latestVersion: '11.0',
    birthYear: 2011,
    officialUrl: 'https://laravel.com/',
    notes: 'PHP人気No.1フレームワーク'
  },
  // Mobile Frameworks
  {
    id: 'reactnative',
    name: 'React Native',
    category: 'mobile',
    language: 'JavaScript/TypeScript',
    latestVersion: '0.76',
    birthYear: 2015,
    officialUrl: 'https://reactnative.dev/',
    notes: 'クロスプラットフォーム'
  },
  {
    id: 'flutter',
    name: 'Flutter',
    category: 'mobile',
    language: 'Dart',
    latestVersion: '3.27',
    birthYear: 2017,
    officialUrl: 'https://flutter.dev/',
    notes: 'Google開発、高速UI'
  },
  // CSS Frameworks
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'css',
    language: 'CSS',
    latestVersion: '4.0',
    birthYear: 2017,
    officialUrl: 'https://tailwindcss.com/',
    notes: 'ユーティリティファースト'
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    category: 'css',
    language: 'CSS/Sass',
    latestVersion: '5.3',
    birthYear: 2011,
    officialUrl: 'https://getbootstrap.com/',
    notes: 'CSSフレームワーク定番'
  },
  // Testing Frameworks
  {
    id: 'jest',
    name: 'Jest',
    category: 'testing',
    language: 'JavaScript/TypeScript',
    latestVersion: '29.0',
    birthYear: 2014,
    officialUrl: 'https://jestjs.io/',
    notes: 'JSテストフレームワーク'
  },
  {
    id: 'vitest',
    name: 'Vitest',
    category: 'testing',
    language: 'JavaScript/TypeScript',
    latestVersion: '2.1',
    birthYear: 2021,
    officialUrl: 'https://vitest.dev/',
    notes: 'Vite互換、高速テスト'
  },
  {
    id: 'pytest',
    name: 'pytest',
    category: 'testing',
    language: 'Python',
    latestVersion: '8.3',
    birthYear: 2004,
    officialUrl: 'https://pytest.org/',
    notes: 'Pythonテスト標準'
  }
]
