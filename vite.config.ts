import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths';
import reactRefresh from "@vitejs/plugin-react-refresh"; 
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), tsconfigPaths()],
  resolve: {
    alias: {
      src: path.resolve('src/'),
    },
  },
  base: '/'
})
