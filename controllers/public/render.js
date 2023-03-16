const header = document.getElementById('render-header');
header.innerHTML = `<div class="row">
    <div class="col col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="navbar">
            <!--Logo y links que redireccionan a las otras páginas web-->
            <div class="logo">
                <a href="#"><img src="../../resources/img/logo_blanco.png" alt="" /></a>
            </div>
            <ul class="links">
                <li><a href="index.html">INICIO</a></li>
                <li><a href="reservacion.html">RERSERVAS</a></li>
                <li><a href="productos.html">PRODUCTOS</a></li>
                <li><a href="servicios.html">SERVICIOS</a></li>
            </ul>
            <a href="login.html" class="action_btn"> INICIAR SESION </a>
            <div class="toggle_btn">
                <svg class="ham hamRotate180 ham5" id="burger" viewBox="0 0 100 100" width="80" onclick="toogle();">
                    <path class="line top"/>
                    <path class="line middle" d="m 70,50  h -40" />
                    <path class="line bottom" d="m 30,67 h 40 c  
                        -6.122707,-9.002293 -8.5,-6.625 l -11.071429" />
                </svg>
            </div>
        </div>
        <!--Menú burger para dispositivos pequeños-->
        <div class="dropdown_menu">
            <li><a href="index.html">INICIO</a></li>
            <li><a href="reservacion.html">RERSERVAS</a></li>
            <li><a href="productos.html">PRODUCTOS</a></li>
            <li><a href="servicios.html">SERVICIOS</a></li>
            <li>
                <a href="login.html" class="action_btn"> INICIAR SESION </a>
            </li>
        </div>
        <div class="pato"></div>
    </div>
</div>`;


const footer = document.querySelector('footer');
if (footer !== null) {
    footer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#393534" fill-opacity="2"
        d="M0,192L120,176C240,160,480,128,720,106.7C960,85,1200,75,1320,69.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
    </path>
    </svg>`;
}