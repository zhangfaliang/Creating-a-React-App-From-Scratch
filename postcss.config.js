//您可以在不同的目录中使用不同的postcss.config.js文件。配置查找从path.dirname（文件）开始，向上走文件树，直到找到配置文件。
module.exports  =({file})=>({
    parser: file.extname==='.sss'? 'sugarss': false, 
  //exec: true,//如果使用JS样式而没有[postcss-js] [postcss-js]解析器，请添加exec选项。
  plugins: [
    require('postcss-import')(),
    require('postcss-cssnext')(),
    require('autoprefixer')(),
    require('cssnano')()
  ]
})