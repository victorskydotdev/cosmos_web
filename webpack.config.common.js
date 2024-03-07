// webpack common
const path = require('path');

module.exports = {
	// Our "entry" point
	entry: './src/assets/js/index.js',
	output: {
		// The global variable name any `exports` from `index.js` will be available at
		// library: 'SITE',
		// Where webpack will compile the assets
		path: path.resolve(__dirname, 'src/compiled-assets'),
	},
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
};
