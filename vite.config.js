import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        sitemap({
            hostname: 'https://кумский-сервис.рф',
            dynamicRoutes: [
                '/about',
                '/booking',
                '/contact',
                '/services',
                '/testimonial',
                '/privacy-policy'
            ],
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        allowedHosts: ['satisfyingly-spirited-linnet.cloudpub.ru'],
        proxy: {
            '/api': {
                target: 'https://serviceflow-api.onrender.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
})
