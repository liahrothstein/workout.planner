import path from 'path';

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/workout.planner/",
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
  },
  resolve: {
    alias: {
      '@public': path.resolve(__dirname, 'public'),
      '@components': path.resolve(__dirname, 'src/shared/ui'),
      '@constants': path.resolve(__dirname, 'src/shared/consts'),
      '@hooks': path.resolve(__dirname, 'src/shared/lib/hooks'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@types': path.resolve(__dirname, 'src/shared/types'),
      '@utils': path.resolve(__dirname, 'src/shared/lib/utils'),
      '@entities': path.resolve(__dirname, 'src/entities'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
      '@store': path.resolve(__dirname, 'src/app/store')
    }
  }
})
