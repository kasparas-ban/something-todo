import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // strategies: 'injectManifest',
      // srcDir: 'src',
      // filename: 'custom-sw.ts',
      registerType: 'prompt',
      devOptions: {
        enabled: true,
        // type: 'module',
        // navigateFallback: 'index.html',
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        id: '/',
        name: 'Something Todo',
        short_name: 'SmthTodo',
        description: 'Track your work progress',
        theme_color: '#00a6ed',
        display_override: ['window-controls-overlay', 'minimal-ui'],
        display: 'standalone',
        edge_side_panel: {},
        handle_links: 'auto',
        launch_handler: {
          client_mode: 'navigate-existing',
        },
        categories: ['tools', 'libraries_and_demo'],
        orientation: 'portrait',
        dir: 'ltr',
        file_handlers: [],
        prefer_related_applications: false,
        protocol_handlers: [],
        related_applications: [],
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'mask-icon.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
        screenshots: [
          {
            src: 'screenshot_1.jpg',
            sizes: '1336x748',
            type: 'image/png',
            platform: 'narrow',
          },
        ],
      },
    }),
  ],
})
