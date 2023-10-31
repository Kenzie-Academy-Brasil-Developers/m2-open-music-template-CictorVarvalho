/* Desenvolva sua lógica aqui ... */

const button = document.querySelector('.header__btn');
const body = document.body
let darkMode = false;

function themeChange () {
    darkMode = !darkMode;
    button.classList.toggle('header__btn--dark-mode');
    body.classList.toggle('dark-mode:root')
}

button.addEventListener('click',themeChange);