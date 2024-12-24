import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist', // Directorio donde se generará la salida
        rollupOptions: {
            input: './index.html', // Asegúrate de que apunte a tu index.html
        },
    },
});
