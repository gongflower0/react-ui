const path = require('path')
module.exports = {
  entry: {
    index: './lib/index.tsx'//node.js 模块定义
    //mode:'production',//生产模式
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'react-ui',
    libraryTarget: 'umd',//统一了amd和commonJS，libraryTarget是为了告诉webpack我要把我的代码封装成什么样的模块定义。
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  // plugins:[
    //     new HtmlWebpackPlugin({
    //         template: 'index.html'
    //     })
    // ],
    // externals: {//告诉webpack，这是外部的库，不需要打包。
    //     react: {
    //         commonjs: 'react',
    //         commonjs2: 'react',
    //         amd: 'react',
    //         root: 'React',
    //     },
    //     'react-dom': {
    //         commonjs: 'react-dom',
    //         commonjs2: 'react-dom',
    //         amd: 'react-dom',
    //         root: 'ReactDOM',
    //     },
    // }
}