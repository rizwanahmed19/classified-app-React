var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/src/index.html',
	filename: 'index.html',
	inject: 'body'
});
module.exports = {
	entry: __dirname + '/src/app.js',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style.css', 'css-loader')
			}
		]
	},
	output: {
		filename: 'index.js',
		path: __dirname + '/dist/'
	},
	devServer: {
		port: 3000,
		inline: true
	},
	plugins: [
		HtmlWebpackPluginConfig,
		new ExtractTextPlugin('style.css', {allChunks: false})
	]
};