/*Funcionalidad delos botones "registrarse" e "Iniciar sesion"*/
const  wrapper = document.querySelector('.wrapper');
const  loginLink = document.querySelector('.login-link');
const  registerLink = document.querySelector('.register-link');
/*Al momento de dar clic en los botones, remueve los elementos de uno para que el otro tome su  lugar */
registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});