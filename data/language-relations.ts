import type { LanguageRelation } from '~/types'

// 言語の関係性データ
// type: 'derived' = 派生, 'superset' = 上位互換, 'influenced' = 影響
export const languageRelations: LanguageRelation[] = [
  // JavaScript系
  { from: 'javascript', to: 'typescript', type: 'superset' },
  { from: 'javascript', to: 'coffeescript', type: 'derived' },
  { from: 'javascript', to: 'jsx', type: 'superset' },
  { from: 'typescript', to: 'tsx', type: 'superset' },

  // C系
  { from: 'c', to: 'cplusplus', type: 'superset' },
  { from: 'c', to: 'csharp', type: 'influenced' },
  { from: 'c', to: 'objective-c', type: 'superset' },
  { from: 'c', to: 'd', type: 'influenced' },
  { from: 'c', to: 'go', type: 'influenced' },
  { from: 'c', to: 'rust', type: 'influenced' },
  { from: 'c', to: 'zig', type: 'influenced' },
  { from: 'cplusplus', to: 'carbon', type: 'derived' },
  { from: 'cplusplus', to: 'rust', type: 'influenced' },

  // Java系
  { from: 'java', to: 'kotlin', type: 'derived' },
  { from: 'java', to: 'scala', type: 'derived' },
  { from: 'java', to: 'groovy', type: 'derived' },
  { from: 'java', to: 'clojure', type: 'derived' },
  { from: 'java', to: 'csharp', type: 'influenced' },

  // Ruby系
  { from: 'ruby', to: 'crystal', type: 'derived' },
  { from: 'ruby', to: 'elixir', type: 'influenced' },

  // PHP系
  { from: 'php', to: 'hack', type: 'derived' },

  // Perl系
  { from: 'perl', to: 'raku', type: 'derived' },
  { from: 'perl', to: 'ruby', type: 'influenced' },

  // Erlang系
  { from: 'erlang', to: 'elixir', type: 'derived' },
  { from: 'erlang', to: 'gleam', type: 'derived' },

  // Haskell/ML系
  { from: 'haskell', to: 'elm', type: 'influenced' },
  { from: 'haskell', to: 'purescript', type: 'derived' },
  { from: 'haskell', to: 'rust', type: 'influenced' },
  { from: 'standard-ml', to: 'ocaml', type: 'derived' },
  { from: 'ocaml', to: 'fsharp', type: 'derived' },
  { from: 'ocaml', to: 'rust', type: 'influenced' },
  { from: 'elm', to: 'roc', type: 'influenced' },

  // Lisp系
  { from: 'lisp', to: 'clojure', type: 'derived' },
  { from: 'lisp', to: 'racket', type: 'derived' },

  // Prolog系
  { from: 'prolog', to: 'mercury', type: 'derived' },
  { from: 'prolog', to: 'datalog', type: 'derived' },

  // Pascal系
  { from: 'pascal', to: 'modula-2', type: 'derived' },
  { from: 'modula-2', to: 'oberon', type: 'derived' },

  // APL系
  { from: 'apl', to: 'j', type: 'derived' },
  { from: 'apl', to: 'k', type: 'derived' },
  { from: 'k', to: 'q', type: 'derived' },

  // Forth系
  { from: 'forth', to: 'factor', type: 'derived' },

  // REBOL系
  { from: 'rebol', to: 'red', type: 'derived' },

  // Python系
  { from: 'python', to: 'mojo', type: 'superset' },
  { from: 'python', to: 'nim', type: 'influenced' },

  // Smalltalk系
  { from: 'smalltalk', to: 'ruby', type: 'influenced' },
  { from: 'smalltalk', to: 'objective-c', type: 'influenced' },

  // Self系
  { from: 'self', to: 'javascript', type: 'influenced' },

  // Simula系
  { from: 'simula', to: 'smalltalk', type: 'influenced' },
  { from: 'simula', to: 'cplusplus', type: 'influenced' },

  // ALGOL系
  { from: 'algol', to: 'c', type: 'influenced' },
  { from: 'algol', to: 'pascal', type: 'derived' },

  // Apple系
  { from: 'objective-c', to: 'swift', type: 'derived' },

  // マークアップ/テンプレート系
  { from: 'html', to: 'xml', type: 'influenced' },

  // Node.js系
  { from: 'javascript', to: 'nodejs', type: 'derived' },
  { from: 'nodejs', to: 'deno', type: 'influenced' },
  { from: 'nodejs', to: 'bun', type: 'influenced' },

  // Web系
  { from: 'javascript', to: 'vue-sfc', type: 'derived' },
  { from: 'javascript', to: 'svelte', type: 'derived' },
  { from: 'javascript', to: 'astro', type: 'derived' },

  // SQL系
  { from: 'sql', to: 'sparql', type: 'influenced' },
]
