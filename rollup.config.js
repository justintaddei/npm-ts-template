import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'
import { uglify } from 'rollup-plugin-uglify'
import resolve from '@rollup/plugin-node-resolve'

const nonESBuildTSConfig = {
  target: 'es5',
  removeComments: true,
  declaration: false
}

const external = Object.keys(pkg.peerDependencies ?? {})

export default [
  {
    input: './src/index.ts',
    plugins: [
      typescript({
        useTsconfigDeclarationDir: true,
        tsconfigOverride: {
          compilerOptions: {
            declarationDir: pkg.types
          }
        }
      })
    ],
    external,
    output: [
      {
        file: pkg.module,
        format: 'es'
      }
    ]
  },
  {
    input: './src/index.ts',
    plugins: [
      typescript({
        tsconfigOverride: {
          compilerOptions: nonESBuildTSConfig
        }
      })
    ],
    external,
    output: [
      {
        file: pkg.main,
        format: 'cjs'
      }
    ]
  },
  {
    input: './src/index.ts',
    plugins: [
      typescript({
        tsconfigOverride: {
          compilerOptions: nonESBuildTSConfig
        }
      }),
      uglify({
        sourcemap: false,
        output: {
          comments: 'all'
        }
      }),
      resolve({
        mainFields: ['unpkg']
      })
    ],
    external,
    output: [
      {
        file: pkg.unpkg,
        format: 'iife',
        extend: true,
        name: 'window'
      }
    ]
  }
]
