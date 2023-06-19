import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'nebulaTest',
      fileName: (format) => `nebulaTest.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        'three',
        'three-nebula',
        'nebula.gl',
        '@babel/runtime/helpers/objectWithoutProperties',
        '@babel/runtime/helpers/defineProperty',
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          three: 'THREE',
          'three-nebula': 'Nebula',
          'nebula.gl': 'nebulaGL',
          '@babel/runtime/helpers/objectWithoutProperties':
            'objectWithoutProperties',
          '@babel/runtime/helpers/defineProperty': 'defineProperty',
        },
      },
    },
  },
  ssr: {
    external: [
      'nebula.gl',
      'three',
      'three-nebula',
      '@babel/runtime/helpers/objectWithoutProperties',
      '@babel/runtime/helpers/defineProperty',
    ],
  },
})
