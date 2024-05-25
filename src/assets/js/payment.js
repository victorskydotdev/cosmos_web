const checkout = document.getElementById('payment-form');

// Get elements to parse user info
const usernameElement = document.getElementById('customer-name');
const serviceDetails = document.querySelector('.service-selected');
const totalPrice = document.querySelector('.total-amount');

// Select radio buttons within duration-element
const radioButtons = document.querySelectorAll(
	'.duration-element input[type="radio"]'
);
let priceIdElem = document.querySelector('.price-id');

const handleRadioChange = (event) => {
	const checkedRadio = event.target;

	if (checkedRadio.checked) {
		const priceId = checkedRadio.value;
		console.log(priceId);

		priceIdElem.value = priceId;

		console.log(priceIdElem.value);
	}
};

// Attach change event listener to each radio button
radioButtons.forEach((radioButton) => {
	radioButton.addEventListener('change', handleRadioChange);
});
// end of radio event towards parsing it to the button.

// =====================================

// const pTrigger = () => {
// 	checkout.addEventListener('submit', async (event) => {
// 		event.preventDefault();

// 		console.log('Heeeeeeeeeeeeey, button clicked!');

// 		const endPoint = '/.netlify/functions/createCheckoutSession';

// 		const response = await fetch(endPoint, {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/x-www-form-urlencoded',
// 			},
// 		});
// 	});
// };

export { handleRadioChange };
