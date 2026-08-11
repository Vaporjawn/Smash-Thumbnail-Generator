import Vue from 'vue'

// Side-effect-only style import (main.ts: `import './assets/scss/main.scss'`)
declare module '*.scss'

// Custom properties attached to the Vue prototype in main.ts.
declare module 'vue/types/vue' {
  interface Vue {
    $http: typeof import('axios').default
    $getApikey(): string
    // This codebase leans heavily on `this.$refs.someRef.someMethod()` to call
    // methods on child components (ConfigPlayer, QuickAdd, Thumbnail, etc.).
    // Typing every ref precisely would mean hand-writing an interface per
    // component and is out of scope for this conversion; widen to `any` here
    // so existing `$refs` usage keeps compiling unchanged.
    $refs: any
  }
}
