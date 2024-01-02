import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths';
import reactRefresh from "@vitejs/plugin-react-refresh"; 
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react(), reactRefresh(), tsconfigPaths()],
    resolve: {
      alias: {
        src: path.resolve('src/'),
      },
    },
    base: '/'
  }

  if (command !== 'serve') {
    config.base = '/css-composer-2/'
  }

  return config;
})
