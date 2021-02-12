import reactRefresh from '@vitejs/plugin-react-refresh'
import { transformSync } from '@babel/core'
import { defineConfig } from 'vite'

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

export default defineConfig({
  esbuild: isProd ? false : undefined,
  plugins: [
    {
      name: 'Babel Custom',
      transform(code, id) {
        if (!/\.(t|j)sx?$/.test(id) || id.includes('node_modules')) {
          return
        }
        const result = transformSync(code, {
          sourceMaps: true,
          sourceFileName: id,
          filename: id,
        })
        return { map: result.map, code: result.code }
      },
    },
    reactRefresh(),
  ],
})
