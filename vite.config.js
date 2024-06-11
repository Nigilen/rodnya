import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';

export default ({ mode }) => {
    const env = loadEnv(mode, process.cwd());
    return defineConfig({
        base: env.VITE_BASE_URL,
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            }
        },
        build: {
            chunkSizeWarningLimit: 1000,
            rollupOptions: {
                output: {
                    manualChunks: {
                        three: ['three']
                    }
                },
    
            },
        },
    });
}