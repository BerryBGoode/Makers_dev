/*Funcionalidad del dropdwon menu*/
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

/* se le asigna que al momento de dar click, el menu burger se despliegue */
toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open')

    toggleBtnIcon.classList =  isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}

function toogle() {
    document.getElementById('burger').classList.toggle('active')
}
