import { defineConfig } from 'vite';

export default defineConfig({
  base: '/css-tooltips/', 

  build: {
    outDir: 'docs',      

  },

  server: {
    open: true, 
  }
});