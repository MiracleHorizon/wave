import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'
import react from '@vitejs/plugin-react-swc'

interface Alias {
  find: string | RegExp
  path: string
}

const aliases: Alias[] = [
  { find: '@root', path: './src' },
  { find: '@assets', path: './src/assets' }
]

const createAlias = ({ find, path }: Alias) => ({
  find,
  replacement: fileURLToPath(new URL(path, import.meta.url))
})

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: aliases.map(alias => createAlias(alias))
  },
  server: {
    port: 3000
  }
})
