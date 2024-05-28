// const stripe = require('stripe')(
// 	'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'
// );

// console.log(key);

async function getPrices() {
	const response = await stripe.prices.list({
		expand: ['data.product'],
	});

	return response.data.filter((price) => price.active);
}

module.exports = async function () {
	return await getPrices();
};
