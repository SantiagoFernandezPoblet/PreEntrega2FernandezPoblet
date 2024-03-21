let FoV = prompt("Ingrese el tipo de producto. (Verdura o Fruta)");
let precioMax = prompt("Ingrese el precio máximo.");
let precioMin = prompt("Ingrese el precio mínimo");


const busqueda = {
    Type: FoV,
    PrecioMaximo: precioMax,
    PrecioMinimo: precioMin,
}

function filtrarTipo(item){
    if(busqueda.Type){
        return item.Tipo === busqueda.Type;
    }
    return item;
}

function filtrarPrecioMax(item){
    if(busqueda.PrecioMaximo){
        return item.Precio <= busqueda.PrecioMaximo;
    }
    return item;
}

function filtrarPrecioMin(item){
    if(busqueda.PrecioMinimo){
        return item.Precio >= busqueda.PrecioMinimo;
    }
    return item;
}


function filtrarCatalogo(){
    const resultado = catalogo.filter(filtrarTipo).filter(filtrarPrecioMax).filter(filtrarPrecioMin);
    if(resultado.length>0){
        console.table(resultado);
    }else {
        console.log("Ingrese filtros dentro de los parámetros.");
    }
}

console.table(catalogo); //catálogo original

console.log("------------------------------------------");

filtrarCatalogo(); //trae el catálogo filtrado


// Agrego métodos para ordenar la el catálogo, no lo relacioné bien con el catálogo original porque volvía demasiado denso el utilizar la página mediante prompts, para la siguiente entrega entiendo que ya es con DOM así que podría agregar esta función de manera práctica (se filtra y ordena independientemente de lo que haga el resto de funciones)

console.log("------------------------------------------");

//ordena de menor a mayor precio

function menorMayor(lista){
    lista.sort((a, b) => a.Precio - b.Precio);
    console.table(lista);
}

menorMayor(catalogo);

console.log("------------------------------------------");

//ordena de mayor a menor precio

function mayorMenor(lista){
    lista.sort((a, b) => b.Precio - a.Precio);
    console.table(lista);
}

mayorMenor(catalogo);

console.log("------------------------------------------");

// No supe generar una funcion que agregue a un array los productos para usar de carrito de compras, dejé esto abajo para simular esa función hasta poder solucionarlo

// Mi problema es que no supe agarrar info de un prompt para seleccionar un objeto del array catalogo para agregarlo al array carrito que generé como array vacío (lo borré para mayor prolijidad), ¿Como podría hacer para tomar un objeto entero solo teniendo el nombre del producto por ejemplo?

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
};

alert("Pagará $" + monto + " en " + cantidadCuotas + " cuotas de $" + cuotas.toFixed(2) + " cada una.");
console.log("Pagará $" + monto + " en " + cantidadCuotas + " cuotas de $" + cuotas.toFixed(2) + " cada una.");
