// const environment = process.env.BLOCK_CODE_PW;
// const key = environment;
const stripe = require('stripe')(
	'sk_test_51PE5NqP1gBFRxfeqyFlI42bpS5NyVWIVmSYrQsaTHbnMwWZEkSOOIu3iskMOq6FSM0fP09ax6rLx8EiMTphrfm8v0018VfjZ4c'
);

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
