const liPages = document.querySelector('.li-pages');
const menuPages = document.querySelector('.menu-pages');

liPages.addEventListener('click', () => menuPages.classList.toggle('rotate-for-menu-pages'));

const emailInput = document.querySelector('.email-footer');
const btnFooterSubmit = document.querySelector('.submit-email-footer');

btnFooterSubmit.addEventListener('click', e => {
    emailInput.value === '' ? e.preventDefault() : true;
});