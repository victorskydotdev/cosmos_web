const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const serverless = require('serverless-http');

const app = express();

app.use(bodyParser.json());

app.post('/create-stripe-checkout-session', async (req, res) => {
	const { items, successUrl, cancelUrl } = req.body;

	try {
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

		res.status(200).json({ sessionId: session.id });
	} catch (error) {
		console.error('Error creating Stripe checkout session:', error);
		res.status(500).json({ error: error.message });
	}
});

exports.handler = serverless(app);
