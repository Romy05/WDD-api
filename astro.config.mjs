import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server: {
        allowedHosts: ['wdd-api.onrender.com']
    },
    typescript: {
        allowJs: true,
        checkJs: false
    }
});
