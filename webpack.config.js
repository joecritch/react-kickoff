const path = require('path');
const webpack = require('webpack');
const port = process.env.PORT || 3000;

module.exports = {
	port,
	devtool: 'eval',
	entry: [
		`webpack-dev-server/client?http://localhost:${port}`,
		'webpack/hot/only-dev-server',
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['react-hot', 'babel'],
			include: path.join(__dirname, 'src'),
			exclude: /node_modules/
		}, {
			test: /\.scss$/,
			loaders: ['style', 'css', 'sass']
		}]
	}
};
