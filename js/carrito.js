const productosCarrito = JSON.parse(localStorage.getItem("productos-carrito"));
console.log(productosCarrito)


 const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
 const contenedorCarritoProductos = document.querySelector("#carrito-productos");
 const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
 const contenedorCarritoComprado = document.querySelector("#carrito-comprado");


 if (productosEnCarrito) {

    contenedorCarritoVacio.classList.add("disabled");
     contenedorCarritoProductos.classList.remove("disabled");
     contenedorCarritoAcciones.classList.remove("disabled");
     contenedorCarritoComprado.classList.add("disabled");

}