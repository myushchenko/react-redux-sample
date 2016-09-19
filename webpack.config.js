var path = require('path'),
	DIST_DIR = path.resolve(__dirname, 'dist'),
	SRC_DIR = path.resolve(__dirname, 'src'),
	config = {
		entry: SRC_DIR + '/app/index.js',
		output: {
			path: DIST_DIR + '/app',
			filename: 'bundle.js',
			publicPath: '/app/'
		},
		module: {
			loaders: [{
				test: /\.js?/,
				include: SRC_DIR,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-2'],
					plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
				}
			}]
		}
	};

module.exports = config;
