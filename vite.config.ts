import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Kana',
        short_name: 'Kana',
        description: 'Learn hiragana and katakana through practice',
        theme_color: '#1a1b1e',
        background_color: '#1a1b1e',
        display: 'standalone',
        scope: '/kana/',
        start_url: '/kana/',
        icons: [
          { src: 'icon-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
        ],
      },
    }),
  ],
  base: "/kana/"
});

