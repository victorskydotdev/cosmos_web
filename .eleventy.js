module.exports = function (eleventyConfig) {
	// Watch our compiled assets for changes
	eleventyConfig.addWatchTarget('./src/compiled-assets/main.css');
	eleventyConfig.addWatchTarget('./src/compiled-assets/main.js');

	// Copy src/compiled-assets to /assets
	eleventyConfig.addPassthroughCopy({ 'src/compiled-assets': 'assets' });
	// Copy all images
	eleventyConfig.addPassthroughCopy('src/images');

	return {
		dir: {
			includes: '_components',
			input: 'src',
			layouts: '_layouts',
			output: 'dist',
		},
	};
};
