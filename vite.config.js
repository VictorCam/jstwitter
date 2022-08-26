import { defineConfig } from 'vite'
import AutoPrefixer from 'autoprefixer'

export default defineConfig({
    css: {
        postcss: {
            plugins: [AutoPrefixer()]
        }
    },
    server: { 
        port: 2020,
    }
})
