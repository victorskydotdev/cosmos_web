// variables

const mobileMenu = document.querySelector('.nav-links');
const burgerButton = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');

export const showHideNav = () => {
	burgerButton.addEventListener('click', () => {
		mobileMenu.classList.add('show-nav');
		burgerButton.style.display = 'none';
		closeBtn.style.display = 'block';
	});

	closeBtn.addEventListener('click', () => {
		mobileMenu.classList.remove('show-nav');
		burgerButton.style.display = 'block';
		closeBtn.style.display = 'none';
	});
};
