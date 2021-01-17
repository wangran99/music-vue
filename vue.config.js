const webpack = require("webpack");
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
// require("babel-polyfill");
module.exports = {
    publicPath: './',//打包后的位置(如果不设置这个静态资源会报404)
    // publicPath: process.env.NODE_ENV === 'production' ? 'http://47.92.237.225:8080/dist' : './',
    outputDir: 'dist',//打包后的目录名称
    assetsDir: 'static',//静态资源目录名称
    indexPath: 'index.html',
    productionSourceMap: false,  //去掉打包的时候生成的map文件
    lintOnSave: false,
    filenameHashing: true,
    devServer: {
        overlay: { // 让浏览器 overlay 同时显示警告和错误
            warnings: true,
            errors: true
        },
        host: "localhost",
        port: 8088,
        open: true, // 是否打开浏览器
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:5000/',  //跨域的域名
                secure: false,
                ws: true,  // 代理 websockets
                changeOrigin: true, //是否开启跨域
                pathRewrite: {
                    '^/api': '/laowang'  // 重写地址
                }
            }
            //   headers: {
            //             'Access-Control-Allow-Origin': '*',
            //         }
        },
    },
    // 可能遇到的坑：如果个别地方不想转化px。可以简单的使用大写的 PX 或 Px 。
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-plugin-px2rem')({
                        //换算基数，1rem相当于10px,值为37.5时,1rem为20px,淘宝的flex默认为1rem为10px 
                        rootValue: 37.5, //换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
                        // unitPrecision: 5, //允许REM单位增长到的十进制数字。
                        //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
                        // propBlackList: [], //黑名单
                        exclude: /(node_module)/i,  //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
                        // selectorBlackList: [], //要忽略并保留为px的选择器
                        // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
                        // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
                        mediaQuery: false,  //（布尔值）允许在媒体查询中转换px。
                        minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
                    }),
                ]
            }
        }
    },
    // configureWebpack: {
    //     plugins: [
    //         // 配置jquery
    //         new webpack.ProvidePlugin({
    //             $: "jquery",
    //             jQuery: "jquery",
    //             "window.jQuery": "jquery",
    //             Popper: ["popper.js", "default"]
    //         }),
    //         new CompressionWebpackPlugin({
    //             filename: '[path].gz[query]',
    //             algorithm: 'gzip',
    //             test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),  //匹配文件名
    //             // test: /\.js$|\.html$|.\css/,
    //             threshold: 10240,  //对超过10k的数据压缩
    //             minRatio: 0.8,
    //             deleteOriginalAssets: false  //不删除源文件
    //         })
    //     ]
    // }
}