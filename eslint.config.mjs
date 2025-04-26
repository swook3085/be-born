import { FlatCompat } from '@eslint/eslintrc'
import pluginJs from '@eslint/js'
import react from 'eslint-plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tseslint from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname
})

/** @type {import('eslint').Linter.Config[]} */
export default tseslint.config(
  pluginJs.configs.recommended,
  tseslint.configs.recommended,
  {
    plugins: {
      react
    }
  },
  ...compat.config({
    extends: ['next', 'next/core-web-vitals']
  })
)
