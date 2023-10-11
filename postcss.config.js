const postCssConfig = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}

if (process.env.NODE_ENV === 'production') {
  postCssConfig.plugins.cssnano = {}
}

export default postCssConfig
