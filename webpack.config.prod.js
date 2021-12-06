const base =require('./webpack.config')

module.exports= Object.assign({},base,{//node.js 模块定义
    mode:'production',//生产模式
    externals: {//告诉webpack，这是外部的库，不需要打包。
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React',
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDOM',
        },
    }
})