// vue-cli3 的 vue.config.js 文件
const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
    // gzip 配置
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 生产环境
            return {
                plugins: [new CompressionWebpackPlugin({
                    test: /\.js$|\.html$|\.css/,    // 匹配文件名
                    threshold: 10240,               // 文件压缩阈值，对超过10k的进行压缩
                    deleteOriginalAssets: false     // 是否删除源文件
                })]
            }
        }
    },
}
