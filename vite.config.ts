import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'
import react from '@vitejs/plugin-react-swc'

interface Alias {
  find: string | RegExp
  path: string
}

const aliases: Alias[] = [
  { find: '@root', path: './src' },
  { find: '@assets', path: './src/assets' },
  { find: '@store', path: './src/store' },
  { find: '@hooks', path: './src/hooks' },
  { find: '@shared', path: './src/shared' },
  { find: '@ui', path: './src/shared/ui' },
  { find: '@helpers', path: './src/shared/helpers' },
  { find: '@interfaces', path: './src/shared/interfaces' },
  { find: '@enums', path: './src/shared/enums' },
  { find: '@components', path: './src/components' },
  { find: '@layouts', path: './src/layouts' }
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
