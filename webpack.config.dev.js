const { merge } = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
	mode: 'development',
	// Allow watching and live reloading of assets
	watch: true,

	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'style-loader', // step 3, injects our js styles into the DOM
					'css-loader', // step 2, turn css into commonJS
					'sass-loader', // this happens first and turns sass files into css
				],
			},
		],
	},
});
