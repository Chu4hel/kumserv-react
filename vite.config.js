import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig(({mode}) => {
    // Загружаем переменные окружения для текущего режима (например, 'production')
    // process.cwd() указывает на корень проекта, где Vite будет искать .env файлы
    // Третий аргумент '' загружает ВСЕ переменные, а не только те, что с префиксом VITE_
    const env = loadEnv(mode, process.cwd(), '');

    return {
        // Используем опцию 'define' для глобальной замены переменных при сборке.
        // Vite автоматически заменяет 'import.meta.env.VITE_...' на эти значения.
        define: {
            'import.meta.env.VITE_API_BASE_URL': JSON.stringify(env.VITE_API_BASE_URL),
            'import.meta.env.VITE_API_KEY': JSON.stringify(env.VITE_API_KEY)
        },

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
    }
})