
// EL OBJETIVO ES HACER UN CARRITO DE COMPRAS QUE VAYA SUMANDO LOS PRODUCTOS, Y QUE SI LA SUMA ES MAYOR A $7.000 EL PRODUCTO SEA CON ENVIO GRATIS

//inicializamos las variables a utilizar
const productos = [];

let entrada;
let sumaPrecios = 0;
let precioEnvio = 800;

//inicializamos la variable que va a contener los precios
let precio;


do {
    entrada = prompt('Indique que productos va a llevar, ingrese FIN para terminar');
    
    
    if (entrada != 'FIN') {
        productos.push(entrada);
        precio = prompt('Ingrese el precio del producto.');
        const precioParseado = parseFloat(precio);
        sumaPrecios = sumaPrecios + precioParseado;
    }
} while (entrada != 'FIN');


//SI LA SUMA ES MENOR A $7.000, SE LE SUMAN $800 CORRESPONDIENTES AL VALOR DEL ENVIO
if (sumaPrecios < 7000) {
    sumaPrecios = sumaPrecios + precioEnvio;
}
console.log(sumaPrecios); 
//MUESTRO LOS RESULTADOS
alert('la lista tiene ' + productos.length + ' productos.');
alert('La lista tiene: \n' + productos.join ('\n'));

alert('La suma total a pagar es de: ' + sumaPrecios);