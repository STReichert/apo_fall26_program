// Vite is the "build tool": it runs a local dev server while you work,
// and bundles everything into plain HTML/CSS/JS files when you publish.
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // './' makes all asset paths relative, so the built site works no matter
  // what folder or sub-path it is hosted under (e.g. GitHub Pages).
  base: './',
})
