const precioOriginal = document.getElementById('precioOriginal');
const porcentaDescuento = document.getElementById('procentajeDescuento');

function precioPorPagar(precio , porcentaje)
{
    let valorPorPagar = (precio * (1 - (porcentaje/100)));
    return valorPorPagar;
}

let precio = document.getElementById('precioOriginal');
let descuento = document.getElementById('procentajeDescuento');
let respuesta = document.getElementById('respuestaPorcentaje');

function respuetaDesceunto(){
    if(descuento.value == '' | precio.value == ''){
        respuesta.innerHTML = '';
    }
    else{
        let valorPorPagar = Math.round(precioPorPagar(precio.value , descuento.value) * 100) / 100;
        respuesta.innerHTML = 'El precio a pagar con el descuento aplicado es de ' + valorPorPagar;
    }
}
function borrar(){
    precio.value = '';
    descuento.value = '';
    respuesta.innerHTML = '';
}

// Pruebas
function codigosDescuento(codigo,porcentaje){
    this.codigo =  codigo;
    this.porcentaje = porcentaje;
}

let condigosDescuentoVigentes = [
    new codigosDescuento('Platzi', 0.15),
    new codigosDescuento('VMX50', 0.23),
    new codigosDescuento('MM89X', 0.60),
    new codigosDescuento('S4VITAR', 0.03),
    new codigosDescuento('NATE89', 0.05),
];

let valorDescontado = document.getElementById('descuento');
let valorAnterior = document.getElementById('valorAnterior');
let porcetajeDescuentoAplicado = document.getElementById('descuentoAplicado');
