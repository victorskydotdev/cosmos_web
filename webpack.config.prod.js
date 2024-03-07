// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
	// Enable minification and tree-shaking
	mode: 'production',
	optimization: {
		minimizer: [
			// new OptimizeCssAssetsPlugin({}),
			new TerserPlugin({
				extractComments: false,
			}),
		],
	},

	plugins: [new MiniCssExtractPlugin({ filename: 'main.css' })],

	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader', // step 2, turn css into commonJS
					'sass-loader', // this happens first and turns sass files into css
				],
			},
		],
	},
});
