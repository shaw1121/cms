module.exports = {
  presets: [
    '@vue/app'
  ],

  // mint-ui 按需引入
  plugins: [['component', 
    {
      "libraryName": "mint-ui",
      "style": true
    }
  ]]
}
