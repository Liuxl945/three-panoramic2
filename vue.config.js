/*
 * @Author: your name
 * @Date: 2020-10-30 10:02:15
 * @LastEditTime: 2020-11-17 10:54:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \three-panoramic2\vue.config.js
 */

const Timestamp = new Date().getTime()
module.exports = {
    configureWebpack:{
        module:{
            rules:[
            ]
        },
        externals: {
            "vue":"Vue"
        },
        output: {
            filename: `js/[name].${Timestamp}.js`,
            chunkFilename: `js/[name].${Timestamp}.js`
        }
    },
    lintOnSave: false,
    publicPath: "./",
    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
    chainWebpack: config => {
        config
        .module
        .rule("images")
        .test(/\.(jpg|png|gif)$/)
        .use("url-loader")
        .loader("url-loader")
        .options({
            limit: 10,
            // 以下配置项用于配置file-loader
            // 根据环境使用cdn或相对路径
            publicPath: process.env.NODE_ENV === 'production' ? '' : '',
            // 将图片打包到dist/img文件夹下, 不配置则打包到dist文件夹下
            outputPath: 'img',
            // 配置打包后图片文件名
            name: '[name].[hash:10].[ext]',
        })
        .end()

        config
        .module
        .rule("media")
        .test(/\.(mp4)(\?.*)?$/)
        .use("url-loader")
        .loader("url-loader")
        .options({
            limit: 10,
            // 以下配置项用于配置file-loader
            // 根据环境使用cdn或相对路径
            publicPath: process.env.NODE_ENV === 'production' ? '' : '',
            // 将图片打包到dist/img文件夹下, 不配置则打包到dist文件夹下
            outputPath: 'media',
            // 配置打包后图片文件名
            name: '[name].[hash:10].[ext]',
        })
        .end()
    }
}