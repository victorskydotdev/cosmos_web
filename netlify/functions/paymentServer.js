const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
	console.log('Environment:', process.env.STRIPE_SECRET_KEY);

	if (event.httpMethod !== 'POST') {
		return {
			statusCode: 405,
			body: JSON.stringify({ error: 'Method Not Allowed' }),
		};
	}

	try {
		const { items, successUrl, cancelUrl } = JSON.parse(event.body);

		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],

			line_items: items.map((item) => ({
				price_data: {
					currency: 'usd',
					product_data: {
						name: item.name,
						description: item.description,
					},
					unit_amount: item.price * 100,
				},
				quantity: item.quantity,
			})),
			mode: 'payment',
			success_url: successUrl,
			cancel_url: cancelUrl,
		});

		return {
			statusCode: 200,
			body: JSON.stringify({ sessionId: session.id }),
		};
	} catch (error) {
		console.error('Error creating Stripe checkout session:', error);

		return {
			statusCode: 500,
			body: JSON.stringify({ error: error.message }),
		};
	}
};
