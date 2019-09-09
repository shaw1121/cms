module.exports = {
  presets: [
    '@vue/app'
  ],

  // mint-ui 按需引入
  plugins: ["@babel/plugin-syntax-dynamic-import", ['component', 
    {
      "libraryName": "mint-ui",
      "style": true
    }
  ]]
}
