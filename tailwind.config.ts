import { Config } from "tailwindcss";

const config: Config = {
  /* Debemos espcificar dónde se encuentran los archivos
  que vamos a estilar para que Tailwind los procese de forma
  correcta: */
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {}
  },
  /* Podemos configurar las variables que vienen predefinidas
  por Tailwind (fontSize, border, etc): */
  fontSize: {
    xs: '14px',
    sm: '16px',
    md: '18px',
    lg: '20px',
    xl: '24px',
    '2xl': '32px',
  }
}

export default config;