const nav = document.getElementById('render-nav');

nav.innerHTML = `<nav class="nav">
    <div class="logo">
        <img src="../../resources/img/logo_blanco.png" alt="logo">
    </div>
    <div class="opciones">
        <ol>
            <li><a href="../../views/public/index.html">INICIO</a></li>
            <li><a href="../../views/public/productos.html">PRODUCTOS</a></li>
            <li><a href="../../views/public/servicios.html">SERVICIOS</a></li>
            <li><a href="../../views/public/reservacion.html">RESERVAR</a></li>
        </ol> 
        <div class="iniciar-sesion">
            <a href="">INICIAR SESION</a>
        </div>           
    </div>
    <div class="menu-hamgurguesa">
        <span></span>
        <span></span>
        <span></span>
    </div>    
    </nav>
    <div class="curva"></div>`;


const footer_sc = document.querySelector('footer');
if (footer_sc !== null) {
    footer_sc.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#393534" fill-opacity="2"
        d="M0,192L120,176C240,160,480,128,720,106.7C960,85,1200,75,1320,69.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
    </path>
    </svg>`;
}
const footer = document.getElementById('render-footer');
footer.innerHTML = `<footer class="footer">
    <span>2023 Makers @copyright</span>
</footer>`;