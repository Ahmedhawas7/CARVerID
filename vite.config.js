import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  root: '.',  // هذا يحدد أن الجذر هو المكان الذي فيه index.html
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
