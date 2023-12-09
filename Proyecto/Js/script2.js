/*      segundo script          */
/*      autor: Ezequiel Vargas */


/********** Cesta *************/

let carrito = [];
let totalCarrito = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    totalCarrito += precio;

    actualizarContadorCesta();

}

function actualizarContadorCesta() {
    const contadorCesta = document.getElementById('contador-cesta');
    contadorCesta.textContent = carrito.length;
}

