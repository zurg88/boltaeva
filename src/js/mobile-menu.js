export default () => {
	const hamburgerMenu = document.querySelector('.hamburger-menu');
	const mobileMenu = document.querySelector('.mobile-menu');

	const addActiveClassToMobileMenu = () => {
		hamburgerMenu.addEventListener('click', ()=> {
			hamburgerMenu.classList.toggle('hamburger-menu_active');
			mobileMenu.classList.toggle('mobile-menu_active');
		})
	};
	addActiveClassToMobileMenu();
}