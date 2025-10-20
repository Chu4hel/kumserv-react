import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import sitemap from 'vite-plugin-sitemap'
import {servicesData} from './src/data/servicesData.js';

// https://vite.dev/config/
export default defineConfig(({mode}) => {
    // Загружаем переменные окружения для текущего режима (например, 'production')
    // process.cwd() указывает на корень проекта, где Vite будет искать .env файлы
    // Третий аргумент '' загружает ВСЕ переменные, а не только те, что с префиксом VITE_
    const env = loadEnv(mode, process.cwd(), '');

    // Генерируем маршруты для детальных страниц услуг
    const serviceRoutes = servicesData.map(service => `/service/${service.id}`);

    // Собираем все динамические маршруты в один массив
    const allDynamicRoutes = [
        '/',
        '/about',
        '/booking',
        '/contact',
        '/service', // страница со списком всех услуг
        '/testimonial',
        '/privacy-policy',
        ...serviceRoutes
    ];

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
                hostname: 'https://xn----dtbikdcfar9bfeeq.xn--p1ai', // Correct punycode hostname
                dynamicRoutes: allDynamicRoutes,
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