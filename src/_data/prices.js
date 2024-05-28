const apiKey = process.env.SECRET;

const stripe = require('stripe')(apiKey);

async function getPrices() {
	const response = await stripe.prices.list({
		expand: ['data.product'],
	});

	return response.data.filter((price) => price.active);
}

module.exports = async function () {
	return await getPrices();
};
