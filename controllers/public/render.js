const nav = document.getElementById('render-nav');

nav.innerHTML = `<nav class="nav">
    <div class="logo">
        <img src="../../resources/img/logo_blanco.png" alt="logo">
    </div>
    <div class="opciones">
        <ol class="ol-list" id="ol-list">
            <li><a href="../../views/public/index.html">INICIO</a></li>
            <li><a href="../../views/public/productos.html">PRODUCTOS</a></li>
            <li><a href="../../views/public/servicios.html">SERVICIOS</a></li>
            <li><a href="../../views/public/reservacion.html">RESERVAR</a></li>
        </ol>
        <div class="iniciar-sesion">
            <svg width="30" height="30" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M21.4875 25.7436C24.3973 25.7436 26.7562 23.3846 26.7562 20.4748C26.7562 17.5649 24.3973 15.2061 21.4875 15.2061C18.5777 15.2061 16.2188 17.5649 16.2188 20.4748C16.2188 23.3846 18.5777 25.7436 21.4875 25.7436Z"
                    stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path
                    d="M31.2188 37.8746C31.2188 33.5059 26.8687 29.9434 21.4875 29.9434C16.1063 29.9434 11.7563 33.4871 11.7563 37.8746"
                    stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path
                    d="M39.375 23.4375C39.375 33.2812 31.4062 41.25 21.5625 41.25C11.7188 41.25 3.75 33.2812 3.75 23.4375C3.75 13.5938 11.7188 5.625 21.5625 5.625C24.0187 5.625 26.3625 6.11248 28.5 7.01248C28.2562 7.76248 28.125 8.55 28.125 9.375C28.125 10.7812 28.5187 12.1125 29.2125 13.2375C29.5875 13.875 30.075 14.4562 30.6375 14.9437C31.95 16.1437 33.6938 16.875 35.625 16.875C36.45 16.875 37.2375 16.7437 37.9688 16.4812C38.8687 18.6187 39.375 20.9813 39.375 23.4375Z"
                    stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path
                    d="M43.125 9.375C43.125 9.975 43.05 10.5562 42.9 11.1187C42.7312 11.8687 42.4313 12.6 42.0375 13.2375C41.1375 14.7562 39.6938 15.9375 37.9688 16.4812C37.2375 16.7437 36.45 16.875 35.625 16.875C33.6938 16.875 31.95 16.1437 30.6375 14.9437C30.075 14.4562 29.5875 13.875 29.2125 13.2375C28.5187 12.1125 28.125 10.7812 28.125 9.375C28.125 8.55 28.2562 7.76248 28.5 7.01248C28.8562 5.92498 29.4562 4.95004 30.2437 4.14379C31.6125 2.73754 33.525 1.875 35.625 1.875C37.8375 1.875 39.8437 2.83129 41.1937 4.36879C42.3937 5.70004 43.125 7.4625 43.125 9.375Z"
                    stroke="white" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M38.4187 9.33789H32.8312" stroke="white" stroke-width="3" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                <path d="M35.625 6.59961V12.2058" stroke="white" stroke-width="3" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <a href="">INICIAR SESION</a>
        </div>
    </div>
    <button class="menu-hamburguesa" id="menu-hamburguesa" onclick="menu_active()">
        <span></span>
        <span></span>
        <span></span>
    </button>
</nav>`;


const footer_sc = document.querySelector('footer');
if (footer_sc !== null) {
    footer_sc.innerHTML = `<svg class="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#393534" fill-opacity="2"
        d="M0,192L120,176C240,160,480,128,720,106.7C960,85,1200,75,1320,69.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
    </path>
</svg>`;
}
const footer = document.getElementById('render-footer');
footer.innerHTML = `<footer class="footer">
    <span>2023 Makers @copyright</span>
</footer>`;

const menu_active = () => {
    let menu = document.getElementById('menu-hamburguesa');
    let list = document.getElementById('ol-list');
    //seleccionar container, para dar opacidad cuando el menú resposivo este desplegado
    let container = document.querySelector('.main');
    menu.classList.toggle('menu-hamburguesa-active');
    list.classList.toggle('ol-list-active')
    //validación: cuando cambie el width del navagador se removerá la clase que da opacidad al contenido
    container.classList.toggle('responsive-menu-active')//clase para dar opacidad al container cuando este activo este event
}