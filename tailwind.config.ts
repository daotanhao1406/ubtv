/* eslint-disable import/no-extraneous-dependencies, global-require */
import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './src/**/*.{js,ts,jsx,tsx,json}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  prefix: '',
  theme: {
    extend: {},
  },
  plugins: [
    nextui({
      defaultTheme: 'dark',
      themes: {
        light: {
          colors: {
            primary: '#FFFFFF',
          },
        },
        dark: {
          colors: {
            primary: '#000000',
          },
        },
      },
    }),
  ],
} satisfies Config;

export default config;
