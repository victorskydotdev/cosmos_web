const apiKey = process.env.BLOCK_CODE_PW;
const stripe = require('stripe')(apiKey);

exports.handler = async function (event, context) {
	const referer = event.headers.referer;

	const params = new URLSearchParams(event.body);
	const price_id = params.get('priceId');

	// const firstName = params.firstname;
	// const lastName = params.lastname;
	// const userName = `${firstName} ${lastName}`;
	// const userPhone = params.phone;
	// const userEmail = params.email;
	// const rideDuration = params.rideDuration;

	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				price: price_id,
				quantity: 1,
			},
		],
		mode: 'payment',
		success_url: 'https://www.cosmoscoaches.com',
		cancel_url: referer,
	});

	return {
		statusCode: 303,
		headers: {
			Location: session.url,
		},
	};
};
