const path = require('path');

module.exports = {
	entry: './src/assets/js/index.js',
	output: {
		// The global variable name any `exports` from `index.js` will be available at
		// library: 'SITE',
		// Where webpack will compile the assets
		path: path.resolve(__dirname, 'src/compiled-assets'),
	},
};
