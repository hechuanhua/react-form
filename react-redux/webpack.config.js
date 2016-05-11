var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

var prod = process.env.NODE_ENV === 'production' ? true : false;
module.exports = {
    entry: { index: './dev/index.js' },
    output: {
        path: path.resolve(__dirname, prod ? "./deploy" : "./build"), 
        filename: prod ? "js/[name].min.js" : "js/[name].js",
        chunkFilename: 'js/[name].chunk.js',
        publicPath: prod ? "http:cdn.hechuanhua.com" : ""
    },
    resolve: {
        extensions: ['', '.js', '.less', '.css', '.png', '.jpg'],
        root: './src',
    },
    module: {
        loaders: [{
            test: /\.(png|jpg|jpeg|gif)$/,
            loader: 'url?limit=10000&name=img/[name].[ext]'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css')
        }, {
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel?presets[]=es2015&presets[]=react'
        }, {
            test: /\.html$/,
            loader: 'html?attrs=img:src img:srcset'
        },{
           test   : /\.woff|\.woff2|\.svg|.eot|\.ttf/,
           loader : 'url?prefix=font/&limit=10000&name=font/[name].[ext]'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        }),
        new CleanPlugin(['deploy','build']),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('[name].css', {
            allChunks: true
        }),
        new webpack.NoErrorsPlugin(),
        new CommonsChunkPlugin({
            name: 'common',
            minChunks: Infinity
        }),
    ]
};
if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = (module.exports.plugins || [])
        .concat([
            new webpack.DefinePlugin({
                __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
            }),//输出{"definitions":{"__DEV__":"false"}}
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
            new webpack.optimize.OccurenceOrderPlugin(),//按引用频度来排序 ID，以便达到减少文件大小的效果
        ]);
} else {
    module.exports.devtool = 'source-map';
    module.exports.devServer = {
        port: 8080,
      
        hot: true,
        historyApiFallback: true,
        publicPath: "",
        stats: {
            colors: true
        },
        plugins: [
        new webpack.HotModuleReplacementPlugin()
        ]
    };
}

// webpack 最基本的启动webpack命令
// webpack -w 提供watch方法，实时进行打包更新
// webpack -p 对打包后的文件进行压缩
// webpack -d 提供SourceMaps，方便调试
// webpack --colors 输出结果带彩色，比如：会用红色显示耗时较长的步骤
// webpack --profile 输出性能数据，可以看到每一步的耗时
// webpack --display-modules 默认情况下 node_modules 下的模块会被隐藏，加上这个参数可以显示这些被隐藏的模块