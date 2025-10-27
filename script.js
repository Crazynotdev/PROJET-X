document.addEventListener('DOMContentLoaded', () => {
    const burgerToggle = document.getElementById('burger-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (burgerToggle && mobileMenu) {
        burgerToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }
});
