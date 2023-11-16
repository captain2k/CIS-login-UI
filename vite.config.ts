import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from "vite-plugin-svgr";

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  root: '.',
  publicDir: 'public',
  plugins: [react(), tsconfigPaths(), svgr()],
  // server: {
  //   port: 6947,
  // },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
});
