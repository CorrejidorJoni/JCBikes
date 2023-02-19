let productos = [];

fetch("./js/productos.json")
.then(response => response.json())
.then(data => {
    productos = data;
    cargarProductos(productos);
})

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numero = document.querySelector("#numero");

function cargarProductos (productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        
        <img class= "producto-imagen" src="${producto.imagen}"  alt="${producto.modelo}">
        <div class="producto-detalles">
        <h5 class="producto-modelo">${producto.modelo}</h5>
        <p class="producto-precio">${producto.precio}</p>
        <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
        `;

        contenedorProductos.append(div);
    })
    refreshBotonesAgregar ();
    console.log(botonesAgregar);
    
}



botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) =>{

        botonesCategorias.forEach(boton => boton.classList.remove("active"));

        e.currentTarget.classList.add ("active");

        if (e.currentTarget.id != "all") {

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);

            cargarProductos(productosBoton);

        } else {
            cargarProductos(productos);
        }
       
    })
})

;
 function refreshBotonesAgregar () {
     botonesAgregar = document.querySelectorAll(".producto-agregar");
 

     botonesAgregar.forEach(boton => {
         boton.addEventListener("click", agregarAlCarrito);
     });
 
}

let productosCarrito;

let productosCarritoLS = localStorage.getItem("prodcutos-carrito");


if (productosCarritoLS) {
    productosCarrito = JSON.parse(productosCarritoLS);
    actualizarNumero();
} else {

    productosCarrito = [];
}


 function agregarAlCarrito(e) {

   
Swal.fire({
    icon: 'success',
    title: '¡Buena elección!',
    text: 'El producto se agregó al carrito',
    
  })

     const idBoton = e.currentTarget.id;
     const productoAgregado = productos.find(producto => producto.id === idBoton );
     
     if ( productosCarrito.some(producto => producto.id === idBoton)) {
          const index = productosCarrito.findIndex(producto => producto.id === idBoton);
          productosCarrito[index].cantidad++;
     }else {
        productoAgregado.cantidad = 1;
        productosCarrito.push(productoAgregado);
     }

     actualizarNumero();

     localStorage.setItem("productos-carrito", JSON.stringify(productosCarrito));
   
 }


 function actualizarNumero() {
    let nuevoNumero = productosCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numero.innerText = nuevoNumero;
 }






























 