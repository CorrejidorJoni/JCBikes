///PRODUCTOS

const productos = [
    ///MTB
    {
        
        modelo: "Epic Pro",
        imagen: "./img/Epic_Pro_2022_SatinCarbon_01.jpg",
        categoria: {
            nombre: "mtb",
            id: "mtb",
        },
        precio: 1850000,
        id: "mtb-1",
    },
    {
        modelo: "Epic Expert",
        imagen: "./img/Specialized_Epic_Expert_2021_GlossRedTint_01.jpg",
        categoria: {
            nombre: "mtb",
            id: "mtb",
        },
        precio: 2100000,
        id: "mtb-2",
    },
    {
        modelo: "Epic Expert",
        imagen: "./img/Specialized_Epic_Expert_2021_SatinCarbon_01.jpg",
        categoria: {
            nombre: "mtb",
            id: "mtb",
        },
        precio: 2100000,
        id: "mtb-3",
    },
    {
        modelo: "Epic Expert New",
        imagen: "./img/Specialized_EpicExpert2022_GlossPine_01.jpg",
        categoria: {
            nombre: "mtb",
            id: "mtb",
        },
        precio: 2400000,
        id: "mtb-4",
    },

    ///ROAD
    {
        modelo: "Roubaix Sport",
        imagen: "./img/Specialized_Roubaix_Sport_SatinFlakeSilver_01.jpg",
        categoria: {
            nombre: "road",
            id: "road",
        },
        precio: 1400000,
        id: "ruta-1",
    },
    {
        modelo: "Tarmac SL6 Sport",
        imagen: "./img/Specialized_Tarmac_SL6_Sport_Oasis_01.jpg",
        categoria: {
            nombre: "road",
            id: "road",
        },
        precio: 980000,
        id: "ruta-2",
    },
    {
        modelo: "Tarmac Sworks SL7",
        imagen: "./img/Sworks_Tarmarc_SL7_Shimano_RedTint_01.jpg",
        categoria: {
            nombre: "road",
            id: "road",
        },
        precio: 3760000,
        id: "ruta-3",
    },
    {
        modelo: "Tarmac SL7 Expert",
        imagen: "./img/Tarmac_SL7_Expert_Marron_01.jpg",
        categoria: {
            nombre: "road",
            id: "road",
        },
        precio: 1200000,
        id: "ruta-4",
    },

    ///GRAVEL
    {
        modelo: "Diverge Expert Carbon",
        imagen: "./img/Diverge_Expert_Carbon_GlossRaspberry01.jpg",
        categoria: {
            nombre: "gravel",
            id: "gravel",
        },
        precio: 1180000,
        id: "gravel-1",
    },
    {
        modelo: "Diverge Comp Carbon",
        imagen: "./img/DivergeCompCarbon2022_Gunmetal_01.jpg" ,
        categoria: {
            nombre: "gravel",
            id: "gravel",
        },
        precio: 995000,
        id: "gravel-2",
    },
    {
        modelo: "Diverge Sport Carbon",
        imagen: "./img/DivergeSportCarbon_GlossWhiteSage_01.jpg",
        categoria: {
            nombre: "gravel",
            id: "gravel",
        },
        precio: 870000,
        id: "gravel-3",
    },
    {
        modelo: "Diverge Sworks",
        imagen: "./img/S-Works_Diverge_GlossLightSilver_01.jpg",
        categoria: {
            nombre: "gravel",
            id: "gravel",
        },
        precio: 3400000,
        id: "gravel-4",
    },

    ///E-Bike
    {
        modelo: "Turbo Levo SL Expert",
        imagen: "./img/Specialied_Turbo_Levo_SL_Expert_CarbonWhite_01.jpg",
        categoria: {
            nombre: "ebike",
            id: "ebike",
        },
        precio: 2700000,
        id: "ebike-1",
    },
    {
        modelo: "Turbo Levo Comp",
        imagen: "./img/Specialized_Turbo_Levo_Comp_Carbon_2022_Black_01.jpg",
        categoria: {
            nombre: "ebike",
            id: "ebike",
        },
        precio: 2200000,
        id: "ebike-2",
    },
    {
        modelo: "Turbo Levo Alloy", 
        imagen: "./img/Turbo_Levo_Comp_Alloy_2022_SageGreen_01.jpg",
        categoria: {
            nombre: "ebike",
            id: "ebike",
        },
        precio: 1800000,
        id: "ebike-3",
    }

];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numero = document.querySelector("#numero");

function cargaProductos (productosElegidos) {

contenedorProductos.innerHTML= "";

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

cargaProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) =>{

        botonesCategorias.forEach(boton => boton.classList.remove("active"));

        e.currentTarget.classList.add ("active");

        if (e.currentTarget.id != "all") {

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);

            cargaProductos(productosBoton);

        } else {
            cargaProductos(productos);
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
 const productosCarrito = [];

 function agregarAlCarrito(e) {

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

































