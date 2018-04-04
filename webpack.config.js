const webpack = require('webpack');
const { resolve } = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ROOT_PATH = resolve(__dirname);
const SRC_PATH = resolve(ROOT_PATH, 'src');
const DIST_PATH = resolve(ROOT_PATH, 'dist');
const loaders = [
    {loader: 'css-loader'},
    {
		loader: 'postcss-loader',
		options: {
			sourceMap: true,
			config: { path: 'postcss.config.js' }
		}
	},
	{loader: 'sass-loader'}
];
const config = {
	entry: { main: SRC_PATH },
	output: {
    path: DIST_PATH,
		publicPath: '/',  //静态资源目录
		filename: '[name].bundle.[hash:8].js'
	},
	module: {
		rules:[
			{
				test: /\.(scss|css)$/,
				use: ExtractTextPlugin.extract({fallbackLoader: 'style-loader', use: loaders}),
				include: SRC_PATH
			},
			{
				test:/\.(png|svg|jpg|gif)$/,
				use: ['url-loader?limit=8192&name=img/[name][hash:8].[ext]','image-webpack-loader']
			},
			{
				test : /\.(ttf|eot|svg|woff(2))(\?[a-z0-9]+)?$/,
    		use : ['file-loader?name=font/[name][hash:6].[ext]']
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				include: SRC_PATH,
				options: { presets: ["env"] }
			}
		]
	},
	
	devServer: {
	    historyApiFallback: true,
	    contentBase: DIST_PATH,
	    stats: 'errors-only',
	    hot: true,
			inline: true,
			overlay: true,
			compress: true
	},
  
	plugins: [
	    new HtmlwebpackPlugin({
	      title: '卓阳视觉',
	      filename: 'index.html',
	      template: './src/Template/index.ejs',
	      favicon: ""
	    }),
	    new ExtractTextPlugin("css/[name].min.css"),
	    new webpack.HotModuleReplacementPlugin()
	]
}

module.exports = config;