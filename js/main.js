/* alert("Bienvenido a la calculadora de cuotas.");

let entrada = prompt("¿Desea ingresar al sistema? Ingrese NO para salir del sistema");

while(entrada != "NO"){
    let monto = Number(prompt("Ingrese el monto a pagar"));
    let cantidadCuotas = Number(prompt("¿Desea pagar en 1, 3 o 6 cuotas sin interés, o en 12 o 18 cuotas fijas con un recargo del 7%? (Ingrese el número de cuotas)"));

    function cuotasSinInteres (monto, cantidadCuotas){
        cuotas = monto/cantidadCuotas;
    };

    function cuotasFijas (monto, cantidadCuotas){
        cuotas = (monto + 7*monto/100)/cantidadCuotas;
    };

    switch(cantidadCuotas){
        case 1:
            cuotasSinInteres(monto, cantidadCuotas);
            break;
        case 3:
            cuotasSinInteres(monto, cantidadCuotas);
            break;
        case 6:
            cuotasSinInteres(monto, cantidadCuotas);
            break;
        case 12:
            cuotasFijas(monto, cantidadCuotas);
            break;
        case 18:
            cuotasFijas(monto, cantidadCuotas);
            break;
        default:
            alert("Seleccione entre las cuotas disponibles.");
            continue;
    };

    alert("Pagará $" + monto + " en " + cantidadCuotas + " cuotas de $" + cuotas.toFixed(2) + " cada una.");

    entrada = prompt("¿Desea volver a la calculadora? Ingrese NO para salir.");
}; */

console.table(catalogo);

let elemento = prompt("Seleccione un producto de la lista para agregarlo al carrito");

let busqueda = {
    //Type: type,
    Product: elemento,
    //Price: price,
}

function comprarProducto(item){
    carrito.push(item);
}

if (busqueda.Product === catalogo.Producto){
    comprarProducto(busqueda.Product);
}

console.log("-------------------");

console.log(carrito);