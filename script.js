// Selección de botones por sus ids
const btnCirculo = document.getElementById('btnCirculo');
const btnCuadrado = document.getElementById('btnCuadrado');
const btnFiltroGris = document.getElementById('btnFiltroGris');
const btnTresColumnas = document.getElementById('btnTresColumnas');

//query selector coge todo (img y botones en mi caso)
const imagenes = document.querySelectorAll('.grid-item img');
const botones = document.querySelectorAll('button.boton');

// Función para remover la clase 'active' de botones específicos
function removerActivos(excluir = null) {
    botones.forEach(boton => {
        if (boton !== excluir && boton !== btnFiltroGris && boton !== btnTresColumnas) {
            boton.classList.remove('active');
        }
    });
}

// Función para manejar los botones "Círculo" y "Cuadrado"
function manejarForma(boton, accion) {
    removerActivos(boton);

    if (boton.classList.contains('active')) {
        // Si ya está activo desactivalo
        boton.classList.remove('active');
        if (accion === 'circular') {
            imagenes.forEach(imagen => {
                imagen.classList.remove('circular');
            });
        } else if (accion === 'cuadrado') {
            imagenes.forEach(imagen => {
                imagen.classList.remove('circular');
            });
        }
    } else {
        // Si no está activo, actívalo y aplica la acción
        boton.classList.add('active');
        if (accion === 'circular') {
            imagenes.forEach(imagen => {
                imagen.classList.add('circular');
            });
        } else if (accion === 'cuadrado') {
            imagenes.forEach(imagen => {
                imagen.classList.remove('circular');
            });
        }
    }
}

// Círculo
btnCirculo.addEventListener('click', () => {
    manejarForma(btnCirculo, 'circular');
});

// Cuadrado
btnCuadrado.addEventListener('click', () => {
    manejarForma(btnCuadrado, 'cuadrado');
});

// Filtro Gris
btnFiltroGris.addEventListener('click', () => {

    btnFiltroGris.classList.toggle('active');

    // Alternar la clase 'page-gris' en el body para aplicar el filtro gris
    document.body.classList.toggle('page-gris');
});

// 3 Columnas
btnTresColumnas.addEventListener('click', () => {
    btnTresColumnas.classList.toggle('active');

    // selecciono las imagenes
    const gridContainer = document.querySelector('.grid-container');
    //y aplico el nuevo grid de 3 columnas
    gridContainer.style.gridTemplateColumns = 'repeat(3, minmax(200px, 1fr))';

});

btnDosColumnas.addEventListener('click', () => {
    btnDosColumnas.classList.toggle('active');

    // selecciono las imagenes
    const gridContainer = document.querySelector('.grid-container');
    //y aplico el nuevo grid de 3 columnas
    gridContainer.style.gridTemplateColumns = 'repeat(2, minmax(200px, 1fr))';

});


//que al iniciar la pagina el boton cuadrado este activado
window.addEventListener('DOMContentLoaded', () => {
    manejarForma(btnCuadrado, 'cuadrado');
});