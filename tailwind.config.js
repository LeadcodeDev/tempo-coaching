/* eslint-disable import/no-extraneous-dependencies, global-require */
const { addDynamicIconSelectors } = require('@iconify/tailwind');

module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
    './node_modules/astro-boilerplate-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2B8D59',
        'dark-primary': '#0d2e1c',
      },
      backgroundImage: () => ({
        'circle-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
      }),
    },
  },
  plugins: [
    addDynamicIconSelectors({}),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
