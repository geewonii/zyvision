var webpack = require('webpack');
var path = require("path");
var HtmlwebpackPlugin = require('html-webpack-plugin');
var extractTextPlugin = require('extract-text-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var DIST_PATH = path.resolve(ROOT_PATH, 'dist');
var loaders = [
		{
	    loader: 'css-loader'
	    // options: {
	    //   modules: true
	    // }
		},
		{
	  	loader: 'autoprefixer-loader'
		},
		{
	    loader: 'sass-loader'
		}
];
var config = {
	entry: {
		main: SRC_PATH
	},
	output: {
		path: DIST_PATH,
		publicPath: './', //上线时记得改为 ‘./’
		filename: '[name].bundle.[hash:8].js'
	},
	module: {
		rules:[
			{
				test: /\.(scss|css)$/,
				use: extractTextPlugin.extract({fallbackLoader: 'style-loader',loader: loaders}),
				// use:[ 'style-loader','css-loader','sass-loader','autoprefixer-loader'],
				include: SRC_PATH
			},
			{
				test:/\.(png|svg|jpg|gif)$/,
				use: ['url-loader?limit=8192&name=img/[name][hash:8].[ext]','image-webpack-loader']
			},
			{
				test : /\.(ttf|eot|svg|woff(2))(\?[a-z0-9]+)?$/,
    		use : ['file-loader?name=../font/[name][hash:6].[ext]']
			},
			{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        include: SRC_PATH,
        options: {
            presets: ["es2015"]
          }
		    }
		]
	},
	
	devServer: {
	    historyApiFallback: true,
	    contentBase: DIST_PATH,
	    stats: 'errors-only',
	    hot: true,
	    inline: true
	},
  
	plugins: [
	    new HtmlwebpackPlugin({
	      title: '卓阳视觉',
	      filename: 'index.html',
	      template: './src/Template/index.ejs',
	      favicon: ""
	    }),
	    new extractTextPlugin("css/[name].min.css"),
	    new webpack.HotModuleReplacementPlugin()
	]
}

module.exports = config;
