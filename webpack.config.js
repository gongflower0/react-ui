const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={//node.js 模块定义
    mode:'production',//生产模式
    entry:{
        index:'./lib/index.tsx'
    },
    output:{
        path:path.resolve(__dirname,'dist/lib'),
        library:'react-ui',
        libraryTarget:'umd',//统一了amd和commonJS，libraryTarget是为了告诉webpack我要把我的代码封装成什么样的模块定义。
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                loader:'awesome-typescript-loader'//将tsx文件翻译成js文件
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}