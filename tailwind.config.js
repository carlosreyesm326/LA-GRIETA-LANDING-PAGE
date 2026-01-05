/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'denim-dive': '#001524',
        'ocean-floor': '#07525E',
        'buttercream-fog': '#FFECD1',
        'marmalade-muse': '#EB7300',
        'cider-spark': '#702006',
      },
    },
  },
  plugins: [],
}