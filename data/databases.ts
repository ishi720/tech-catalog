import type { Database } from '~/types'

export const databases: Database[] = [
  {
    id: 'mysql',
    name: 'MySQL',
    queryLanguage: 'SQL',
    dependencyLanguages: ['C', 'C++'],
    latestVersion: '9.2 / 8.4.7 (LTS)',
    type: 'RDBMS',
    birthYear: 1995,
    officialUrl: 'https://www.mysql.com/',
    notes: '最も人気のあるオープンソースDB'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    queryLanguage: 'SQL',
    dependencyLanguages: ['C'],
    latestVersion: '18.1',
    type: 'RDBMS',
    birthYear: 1996,
    officialUrl: 'https://www.postgresql.org/',
    notes: '高機能・拡張性に優れる'
  },
  {
    id: 'mariadb',
    name: 'MariaDB',
    queryLanguage: 'SQL',
    dependencyLanguages: ['C', 'C++'],
    latestVersion: '12.2 / 11.8 (LTS)',
    type: 'RDBMS',
    birthYear: 2009,
    officialUrl: 'https://mariadb.org/',
    notes: 'MySQLフォーク'
  },
  {
    id: 'sqlite',
    name: 'SQLite',
    queryLanguage: 'SQL',
    dependencyLanguages: ['C'],
    latestVersion: '3.51.0',
    type: 'RDBMS（組み込み）',
    birthYear: 2000,
    officialUrl: 'https://www.sqlite.org/',
    notes: 'サーバー不要の軽量DB'
  },
  {
    id: 'oracle',
    name: 'Oracle Database',
    queryLanguage: 'SQL, PL/SQL',
    dependencyLanguages: ['C', 'C++', 'Assembly'],
    latestVersion: '23ai',
    type: 'RDBMS',
    birthYear: 1979,
    officialUrl: 'https://www.oracle.com/database/',
    notes: 'エンタープライズ向け'
  },
  {
    id: 'mssql',
    name: 'Microsoft SQL Server',
    queryLanguage: 'T-SQL',
    dependencyLanguages: ['C++'],
    latestVersion: '2022',
    type: 'RDBMS',
    birthYear: 1989,
    officialUrl: 'https://www.microsoft.com/sql-server/',
    notes: 'Microsoft製、Azure連携'
  },
  {
    id: 'ibmdb2',
    name: 'IBM Db2',
    queryLanguage: 'SQL, PL/SQL',
    dependencyLanguages: ['C', 'C++', 'Assembly'],
    latestVersion: '12.1',
    type: 'RDBMS',
    birthYear: 1983,
    officialUrl: 'https://www.ibm.com/db2/',
    notes: 'IBM製エンタープライズDB'
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    queryLanguage: 'MQL (MongoDB Query)',
    dependencyLanguages: ['C++', 'JavaScript', 'Python'],
    latestVersion: '8.2',
    type: 'ドキュメント',
    birthYear: 2009,
    officialUrl: 'https://www.mongodb.com/',
    notes: 'NoSQLドキュメントDB代表'
  },
  {
    id: 'couchdb',
    name: 'CouchDB',
    queryLanguage: 'HTTP API, JavaScript',
    dependencyLanguages: ['Erlang'],
    latestVersion: '3.4',
    type: 'ドキュメント',
    birthYear: 2005,
    officialUrl: 'https://couchdb.apache.org/',
    notes: 'RESTfulなドキュメントDB'
  },
  {
    id: 'redis',
    name: 'Redis',
    queryLanguage: 'Redis コマンド',
    dependencyLanguages: ['C'],
    latestVersion: '8.4.0',
    type: 'KVS/インメモリ',
    birthYear: 2009,
    officialUrl: 'https://redis.io/',
    notes: '高速インメモリDB'
  },
  {
    id: 'elasticsearch',
    name: 'Elasticsearch',
    queryLanguage: 'Query DSL (JSON)',
    dependencyLanguages: ['Java'],
    latestVersion: '8.17',
    type: '検索エンジン',
    birthYear: 2010,
    officialUrl: 'https://www.elastic.co/',
    notes: '全文検索・ログ分析'
  },
  {
    id: 'cassandra',
    name: 'Apache Cassandra',
    queryLanguage: 'CQL',
    dependencyLanguages: ['Java'],
    latestVersion: '5.0',
    type: 'ワイドカラム',
    birthYear: 2008,
    officialUrl: 'https://cassandra.apache.org/',
    notes: '大規模分散DB'
  },
  {
    id: 'neo4j',
    name: 'Neo4j',
    queryLanguage: 'Cypher',
    dependencyLanguages: ['Java', 'Scala'],
    latestVersion: '5.26',
    type: 'グラフDB',
    birthYear: 2007,
    officialUrl: 'https://neo4j.com/',
    notes: 'グラフデータベースの代表'
  }
]
