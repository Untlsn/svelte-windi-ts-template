module.exports = {
  extract: {
    include: ['**/*.{svelte,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {},
  plugins: [
    require('@windicss/plugin-interaction-variants'),
  ],
};