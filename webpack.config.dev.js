const base =require('./webpack.config')

const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports= Object.assign({},base,{    //node.js 模块定义
    mode:'development',
    
    plugins:[
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    
})