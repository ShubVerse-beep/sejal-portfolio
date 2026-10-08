/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        fg: 'var(--fg)',
        muted: 'var(--mut)',
        card: 'var(--card)',
        line: 'var(--line)',
        accent: 'var(--acc)',
        glow: 'var(--glow)',
        btn: 'var(--btn)',
        btnfg: 'var(--btnfg)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'Menlo', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow-lg': '0 40px 120px var(--glow)',
        'glow-md': '0 30px 90px var(--glow)',
      }
    },
  },
  plugins: [],
}
