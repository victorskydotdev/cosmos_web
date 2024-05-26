exports.handler = async function (event, context) {
	const apiKey = process.env.BLOCK_CODE_PW;
	const stripe = require('stripe')(apiKey);

	const referer = event.headers.referer;

	const params = new URLSearchParams(event.body);
	const price_id = params.get('priceId');

	// const firstName = params.get;
	// const lastName = params.get;
	// const userName = `${firstName} ${lastName}`;
	// const userPhone = params.get;
	// const userEmail = params.get;

	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				price: price_id,
				quantity: 1,
			},
		],
		mode: 'payment',
		success_url: 'https://www.cosmoscoaches.com/_pages/thank-you',
		cancel_url: referer,
	});

	return {
		statusCode: 303,
		headers: {
			Location: session.url,
		},
	};
};
