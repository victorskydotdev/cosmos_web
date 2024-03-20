const availBtn = document.querySelectorAll('.check-avail-btn');
const bookingModal = document.querySelector('.booking-section-modal');
const closeBtn = document.getElementById('modal-close-btn');
export const bodyElement = document.querySelector('.body');

const checkAvailFunct = () => {
	availBtn.forEach((btn) => {
		btn.addEventListener('click', () => {
			bookingModal.style.display = 'block';
			bodyElement.classList.add('modal-hidden');
		});
	});

	if (closeBtn) {
		closeBtn.addEventListener('click', () => {
			bookingModal.style.display = 'none';
			bodyElement.classList.remove('modal-hidden');
		});
	}
};

export { checkAvailFunct };
