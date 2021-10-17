// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: '/src',
    public: { url: '/', static: true }
  },
  plugins: [
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-postcss',
    'snowpack-plugin-glslify',
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'eslint src --ext .ts'
      }
    ]
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    port: 8000,
    open: 'none'
  },
  buildOptions: {
    /* ... */
  }
};
