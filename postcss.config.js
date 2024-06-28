/* Debemos agregar esta configuración con postcss para
que se pueda integrar postcss con Next.js e indicarle que utilice
Tailwind: */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}