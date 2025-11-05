import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createServer as createViteServer} from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const staticRoutes = [
    '/',
    '/about',
    '/service',
    '/contact',
    '/booking',
    '/testimonial',
    '/privacy-policy',
];

const distPath = toAbsolute('dist');

(async () => {
    console.log('Starting pre-rendering process...');

    const vite = await createViteServer({
        server: {middlewareMode: true},
        appType: 'custom',
        root: __dirname,
    });

    try {
        console.log('Loading server entry and data...');
        const {render} = await vite.ssrLoadModule('./src/entry-server.jsx');
        const {servicesData} = await vite.ssrLoadModule('./src/data/servicesData.js');

        const dynamicRoutes = servicesData.map((service) => `/service/${service.slug}`);
        const allRoutes = [...staticRoutes, ...dynamicRoutes];
        console.log(`Found ${allRoutes.length} routes to pre-render.`);

        const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');

        for (const url of allRoutes) {
            const {appHtml, meta, schemas} = render(url);

            let metaHtml = '';
            if (meta.description) {
                metaHtml += `<meta name="description" content="${meta.description}" />\n`;
            }
            if (meta.canonicalUrl) {
                metaHtml += `<link rel="canonical" href="${meta.canonicalUrl}" />\n`;
            }
            if (meta.og) {
                metaHtml += `<meta property="og:title" content="${meta.og.title}" />\n`;
                metaHtml += `<meta property="og:description" content="${meta.og.description}" />\n`;
                metaHtml += `<meta property="og:type" content="${meta.og.type}" />\n`;
                metaHtml += `<meta property="og:url" content="${meta.og.url}" />\n`;
                metaHtml += `<meta property="og:image" content="${meta.og.image}" />\n`;
            }

            if (schemas && schemas.length > 0) {
                schemas.forEach(schema => {
                    metaHtml += `<script type="application/ld+json">${JSON.stringify(schema)}</script>\n`;
                });
            }

            const html = template
                .replace('<!--seo-title-->', meta.title || 'Кумский Сервис')
                .replace('<!--seo-meta-->', metaHtml)
                .replace(`<div id="root"></div>`, `<div id="root">${appHtml}</div>`);

            const filePath = path.join(distPath, url === '/' ? 'index.html' : `${url.replace(/^\//, '')}/index.html`);
            const dirPath = path.dirname(filePath);

            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath, {recursive: true});
            }

            fs.writeFileSync(filePath, html);
            console.log(`  ✓ Pre-rendered: ${url} -> ${path.relative(__dirname, filePath)}`);
        }

    } catch (e) {
        console.error('An error occurred during pre-rendering:', e);
    } finally {
        await vite.close();
        console.log('Pre-rendering complete.');
    }
})();
