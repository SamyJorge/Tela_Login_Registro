const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

const btnPopup = document.querySelector('.btnLogin-popup');

const iconClose = document.querySelector('.icon-close');

/* Adicionando a palavra active a classe wrapper */
registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

/* Removendo a palavra active da classe wrapper */
loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

/* Adicionando a palavra "active-popup" a classe wrapper */
btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

/* Removendo a palavra "active-popup" da classe wrapper */
iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});
