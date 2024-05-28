exports.handler = async function (event, context) {
	const apiKey = process.env.SECRET;
	const stripe = require('stripe')(apiKey);

	const referer = event.headers.referer;

	const params = new URLSearchParams(event.body);
	const price_id = params.get('priceId');

	console.log(params);

	const firstName = params.get('firstname');
	const lastName = params.get('lastname');
	const userName = `${firstName} ${lastName}`;
	const userPhone = params.get('phone');
	const rideIntent = params.get('rideintent');
	const numOfRiders = params.get('numberofriders');
	const startDate = params.get('ridedate');
	const starttime = params.get('ridetime');
	// const riderPickupLocation = params.get("pickuplocation")

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

		// metadata
		payment_intent_data: {
			metadata: {
				userName: userName,
				userPhone: userPhone,
				rideIntent: rideIntent,
				numOfRiders: numOfRiders,
				rideStartDate: startDate,
				rideStarttime: starttime,
			},
		},
	});

	return {
		statusCode: 303,
		headers: {
			Location: session.url,
		},
	};
};
