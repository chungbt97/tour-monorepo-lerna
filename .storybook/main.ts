import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
  addons: [
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
          modules: {
            mode: 'local',
            auto: true,
            localIdentName: '[name]__[local]___[hash:base64:5]',
            exportGlobals: true
          }
        }
      }
    },
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: {
          implementation: require('postcss')
        }
      }
    },
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-mock'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  core: {
    builder: '@storybook/builder-vite' // 👈 The builder enabled here.
  },
  stories: ['../src/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ['storybook-dark-mode']
      }
    })
  }
}

export default config as StorybookConfig
