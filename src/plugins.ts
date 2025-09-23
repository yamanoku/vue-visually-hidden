import VisuallyHidden from './components/VisuallyHidden.vue'
import type { App } from 'vue'

export default function install (app: App) {
  app.component('VisuallyHidden', VisuallyHidden)
}
