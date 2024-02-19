import * as path from 'path'

module.exports = {
  presets: [import('./tailwind.config')],
  prefix: 'pu-',
  mode: 'jit',
  purge: [
    path
      .resolve(__dirname + '/src/**/*.tsx')
      .split(path.sep)
      .join('/'),
    path
      .resolve(__dirname + '/src/**/*.ts')
      .split(path.sep)
      .join('/')
  ],
  corePlugins: {
    preflight: false
  }
}
