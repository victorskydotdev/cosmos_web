require('dotenv').config();

const apiKey = process.env.SECRET;
console.log(`API Key: ${apiKey ? 'Exists' : 'Does not exist'}`);

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
