export default {
  plugins: {
    'tailwindcss/nesting': {},
    tailwindcss: {
      config: './tailwind.build.config.js'
    },
    autoprefixer: {},
    cssnano: {
      preset: 'default'
    }
  }
}
