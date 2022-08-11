//SE AÑADE LO QUE PIDE LA COSIGNA DE LA PRE-ENTREGA 1

//OBJ
/* class Producto {
    constructor(producto) {
        this.id = producto.id;
        this.marca = producto.marca;
        this.precio = producto.precio;
        this.cantidad = 1;
        this.precioTotal = producto.precio;
    }

    agregarProducto() {
        this.cantidad++;
    }

    actualizarPrecio() {
        this.precioTotal = this.precio * this.cantidad;
    }
}


//SE INICIALIZA EL ARRAY
const productos = [ 
    {
        id: 0,
        tipo: 'zapato',
        marca: 'Nike AirMax',
        precio: 38000,
    },
    {
        id: 1,
        tipo: 'zapato',
        marca: 'Nike AirMax97',
        precio: 43000,
    },
    {
        id: 2,
        tipo: 'zapato',
        marca: 'Nike AirMax95',
        precio: 32000,
    },
    {
        id: 3,
        tipo: 'zapato',
        marca: 'Adidas Ozwivo',
        precio: 27000,
    },
    {
        id: 4,
        tipo: 'zapato',
        marca: 'Vans Classic',
        precio: 15000,
    },
    {
        id: 5,
        tipo: 'zapato',
        marca: 'Fila Sport',
        precio: 12000,
    },
    {
        id: 6,
        tipo: 'campera',
        marca: 'Nike SportWear',
        precio: 19000,
    },
    {
        id: 7,
        tipo: 'campera',
        marca: 'Adidas Classic',
        precio: 18000,
    },
    {
        id: 8,
        tipo: 'remera',
        marca: 'Adidas Sport',
        precio: 9000,
    },
    {
        id: 9,
        tipo: 'Remera',
        marca: 'Nike Jordan',
        precio: 7000,
    },


]

//SE INICIALIZA EL ARRAY CARRITO Y VAR
let carrito = [];
let precioTotal;

let nombre = prompt(`Por favor ingrese su nombre de usuario.`);

function saludo(){
    alert(`Bienvenido a DrippingSneakers ${nombre} , elegi tus productos`);
}

//CATALOGO

function catalogo() {
    let listaProductos = "";

    for (const producto of productos) {
        listaProductos += `  ${producto.id}: ${producto.tipo} ${producto.marca} ${producto.precio} \n`
    }


    let idProdcuto = prompt(`Escribi el numero de producto que quieras agregar al carrito, o escribi "FIN" para terminar ${listaProductos} \n`);

    while (idProdcuto !== 'FIN') {
        let productoSelec = carrito.find((element) => element.id == idProdcuto);

        if (productoSelec) {
            let index = carrito.findIndex((element) => element.id === productoSelec.id);
            carrito[index].agregarProducto();
            carrito[index].actualizarPrecio();
            alert(`Agregaste otro ${carrito[index].marca} al carrito de compras, ya tenes ${carrito[index].cantidad} unidades`);
            console.table(carrito);
            
        } else {
            carrito.push(new Producto(productos[idProdcuto]));
            alert(`Agregaste ${productos[idProdcuto].marca} al carrito de compras`);
            console.table(carrito);
        }

        idProdcuto = prompt(`Queres seguir comprando? Escribi el numero de producto que desees o escribi ${listaProductos}`)
    }
}

function precioFinal() {
    let precioTotal = 0;
    for (const item of carrito){
        precioTotal += item.precioTotal;
    }
    return precioTotal;
}



saludo();
catalogo();
precioTotal = precioFinal();

alert(`El total a pagar es de ${precioTotal}.`);
console.table(carrito);




 */

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
//HASTA ACA


//clase de eventoss 
const mensajeString = localStorage.getItem('mensaje');
const mensajeParseado = JSON.parse(mensajeString);
console.log(mensajeParseado);

const form = document.getElementById('formulario')

const tabla = document.getElementById('tabla');

mensajeParseado.forEach((mensaje) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${mensaje.nombre}</td>
        <td>${mensaje.email}</td>
        <td>${mensaje.asunto}</td>
        <td>${mensaje.texto}</td>
    `;
    
    tabla.append(tr);
})


form.addEventListener('submit', (e) => { // e es el parametro de evento
    e.preventDefault();
    
    const formulario = e.target;

    const mensaje = {
        nombre: formulario[1].value,
        email: formulario[2].value,
        asunto: formulario[3].value,
        texto: formulario[4].value,
    }
    console.log(mensaje);



    const tabla = document.getElementById('tabla');
    
    const tr = document.createElement('tr');
    
    tr.innerHTML = `
        <td>${mensaje.nombre}</td>
        <td>${mensaje.email}</td>
        <td>${mensaje.asunto}</td>
        <td>${mensaje.texto}</td>
    `;
    
    tabla.append(tr);

    const mensajeString = localStorage.getItem('mensaje');
    let mensajeParseado = [];
    if (mensajeString) {
        mensajeParseado = JSON.parse(mensajeString);
    }

    mensajeParseado.push(mensaje);

    localStorage.setItem('mensaje', JSON.stringify(mensajeParseado));



/*     document.querySelectorAll('#formulario input').forEach((input) => {
        input.value = '';
    }); */
});
//clase de eventoss fin. 


// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}