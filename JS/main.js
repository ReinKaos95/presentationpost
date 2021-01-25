const btnRegresar = document.getElementById('btnRegreso');
const fichapersona = document.querySelector('.ficha-persona');
const imgpersona = document.querySelector('.img-persona');
const conFrente = document.querySelector('.contenedor-frente');
const conReverso = document.querySelector('.contenedor-reverso');
const btnFicha = document.getElementById('btnFicha');
const body = document.querySelector('body');


btnFicha.addEventListener('click', (e) => {
    e.preventDefault();

    fichapersona.classList.add('arriba-ficha');
    imgpersona.classList.add('arriba-ficha');
    conFrente.classList.add('arriba-contenedor');

    conReverso.classList.add('arriba-reverso');
    body.classList.add('oscuro');
})


btnRegresar.addEventListener('click', (e) => {
  e.preventDefault();

    fichapersona.classList.remove('arriba-ficha');
    imgpersona.classList.remove('arriba-ficha');
    conFrente.classList.remove('arriba-contenedor');

    conReverso.classList.add('abajo-contenedor');
    conReverso.classList.remove('arriba-reverso');

    body.classList.remove('oscuro');
});