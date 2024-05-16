const checkout = document.getElementById('payment-form');

// Get elements to parse user info
const usernameElement = document.getElementById('customer-name');
const serviceDetails = document.querySelector('.service-selected');
const totalPrice = document.querySelector('.total-amount');

// Parse customer name into the usernameElement
const parseInfo = () => {
	const customerDetails = JSON.parse(sessionStorage.getItem('customerDetails'));

	if (customerDetails) {
		usernameElement.textContent = customerDetails.name;
		serviceDetails.textContent = customerDetails.service;
		totalPrice.textContent = customerDetails.price;
	} else {
		console.log('No customer details found in session storage.');
	}
};

parseInfo(); // calling the parseInfo function

const pTrigger = () => {
	if (checkout) {
		checkout.addEventListener('submit', async (event) => {
			event.preventDefault();

			const customerDetails = JSON.parse(
				sessionStorage.getItem('customerDetails')
			);

			if (!customerDetails) {
				console.log('No customer details found.');
				return;
			}

			const ep = '/netlify/functions/paymentServer';

			try {
				const response = await fetch(ep, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						items: [
							{
								name: customerDetails.name,
								description: 'Service description',
								price: customerDetails.price,
								quantity: customerDetails.quantity,
							},
						],
						// successUrl: window.location.origin + '/_pages/success',
						// cancelUrl: window.location.origin + '/_pages/cancel',
					}),
				});

				if (!response.ok) {
					throw new Error('Network response was not ok');
				}

				const { sessionId, error } = await response.json();
				if (error) {
					console.error('Error from server:', error);
					alert('Error: ' + error);
					return;
				}

				const stripe = Stripe('your-publishable-key-here');
				stripe.redirectToCheckout({ sessionId });
			} catch (error) {
				console.error('Error:', error);
				alert('An error occurred while creating the checkout session.');
			}
		});
	}
};

export { pTrigger };
