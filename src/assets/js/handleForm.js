const customerForm = document.querySelector('.booking-form');

const storeUserDetails = () => {
	if (customerForm) {
		customerForm.addEventListener('submit', (event) => {
			event.preventDefault();

			const firstName = document.getElementById('first-name').value;
			const lastName = document.getElementById('last-name').value;
			const phoneNumber = document.getElementById('phone').value;
			const emailAddress = document.getElementById('email').value;
			const rideService = document.getElementById('ride-service').value;
			const price = document.getElementById('price').value;
			const rideDuration = document.getElementById('duration').value;
			const rideStartDate = document.getElementById('date').value;
			const rideStartTime = document.getElementById('time').value;

			const customerDetails = {
				name: `${firstName} ${lastName}`,
				phone: phoneNumber,
				email: emailAddress,
				service: rideService,
				price: price,
				duration: rideDuration,
				rideDate: rideStartDate,
				rideTime: rideStartTime,
			};

			sessionStorage.setItem(
				'customerDetails',
				JSON.stringify(customerDetails)
			);

			window.location.href = '/_pages/payment';
		});
	} else console.log('other processes running');
};

export { storeUserDetails };
