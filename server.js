const path = require('path');
const publicPath = path.join(__dirname, 'public');

useWebpackDev(require('./webpack.config'));

function useWebpackDev(config) {
	const WebpackDevServer = require('webpack-dev-server');
	const webpack = require('webpack');

	new WebpackDevServer(webpack(config), {
		contentBase: publicPath,
		publicPath: config.output.publicPath,
		hot: true,
		historyApiFallback: true
	})
	.listen(config.port, 'localhost', err => {
		if (err) {
			console.error(err);
		}
		console.log(`WebpackDevServer listening at localhost: ${config.port}`);
	});
}
