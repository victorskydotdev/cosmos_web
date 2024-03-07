// variables

const mobileMenu = document.querySelector('.nav-links');
const burgerButton = document.querySelector('.hamburger');

export const showHideNav = () => {
	burgerButton.addEventListener('click', () => {
		mobileMenu.classList.add('show-nav');

		// hide the burger btn
		if (burgerButton) {
			burgerButton.style.display = 'none';
		}
	});
};
