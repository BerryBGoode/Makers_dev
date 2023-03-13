const header = document.getElementById('render-header');
if (header !== null) {
    header.innerHTML = `<div class="navbar">
                <!--Logo y links que redireccionan a las otras páginas web-->
                <div class="logo">
                    <a href="#"><img src="../../resources/img/logo_blanco.png" alt="" /></a>
                </div>
                <ul class="links">
                    <li><a href="../../views/public/index.html">INICIO</a></li>
                    <li><a href="../../views/public/reservacion.html">RERSERVAS</a></li>
                    <li><a href="../../views/public/productos.html">PORDUCTOS</a></li>
                    <li><a href="../../views/public/servicios.html">SERVICIOS</a></li>
                </ul>
                <a href="login.html" class="action_btn"> INICIAR SESION </a>
                <div class="toggle_btn">
                    <svg class="ham hamRotate180 ham5" id="burger" viewBox="0 0 100 100" width="80"
                        onclick="toogle();">
                        <path class="line top" d="m 30,33 h 40 c  0,0 8.5,-0.68551 8.5,10.375 0,-8.292653 
                        -6.122707,9.002293 -8.5,6.625 l -11.071429" />
                        <path class="line middle" d="m 70,50  h -40" />
                        <path class="line bottom" d="m 30,67 h 40 c  
                        -6.122707,-9.002293 -8.5,-6.625 l -11.071429" />
                    </svg>
                </div>
            </div>
            <!--Menú burger para dispositivos pequeños-->
            <div class="dropdown_menu">
                <li><a href="../../views/public/index.html">INICIO</a></li>
                <li><a href="../../views/public/reservacion.html">RERSERVAS</a></li>
                <li><a href="../../views/public/productos.html">PORDUCTOS</a></li>
                <li><a href="../../views/public/servicios.html">SERVICIOS</a></li>
                <li>
                    <a href="../../views/public/login.html" class="action_btn"> INICIAR SESION </a>
                </li>
            </div>
    <div class="pato"></div>`;
}

const footer = document.querySelector('footer');
if (footer !== null) {
    footer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#393534" fill-opacity="2"
        d="M0,192L120,176C240,160,480,128,720,106.7C960,85,1200,75,1320,69.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
    </path>
    </svg>`;
}