const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('show-layout');
		} else {
			entry.target.classList.remove('show-layout');
		}
	});
});

const hiddenElements = document.querySelectorAll('.hidden');

const animateOnScroll = () => {
	hiddenElements.forEach((element) => {
		observer.observe(element);
	});
};

export { animateOnScroll };
