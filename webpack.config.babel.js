import path from 'path'
import webpack from 'webpack'

/* ---------------------------------------- *
 *  General configuration
 * ---------------------------------------- */
const config = {
	entry: [
		'./frontend/app/index',
	],
	output: {
		path: path.join(__dirname, 'public/js'),
		filename: 'bundle.js',
		publicPath: '/assets/'
	},
	plugins: [],
	module: {
		loaders: [{
			test: /\.jsx?/,
			loaders: ['babel'],
			include: path.join(__dirname, 'frontend/app')
		}]
	}
}

/* ---------------------------------------- *
 *  Development environment configuration
 * ---------------------------------------- */
if ( process.env.NODE_ENV == 'development' || process.env.NODE_ENV == undefined ) {
	config.entry.unshift('webpack-hot-middleware/client')
	config.devtool = 'cheap-module-eval-source-map'
	config.plugins.push(new webpack.HotModuleReplacementPlugin())
	config.plugins.push(new webpack.NoErrorsPlugin())
}

/* ---------------------------------------- *
 *  Production environment configuration
 * ---------------------------------------- */
if ( process.env.NODE_ENV == 'production' ) {
	config.devtool = 'source-map'
}

export default config
