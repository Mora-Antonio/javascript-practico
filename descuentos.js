const precioOriginal = document.getElementById('precioOriginal');
const porcentaDescuento = document.getElementById('procentajeDescuento');

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

let valorDescontado = document.getElementById('descuento');
let valorAnterior = document.getElementById('valorAnterior');
let porcetajeDescuentoAplicado = document.getElementById('porcentajeAplicado');
let opcionesDescuento = document.getElementById('opcionesDescuento');
let ingresoCodigoDescuento = document.getElementById('ingresoCodigoDescuento');
let precioPorPagarProducto =  document.getElementById('precioPorPagar');
let codigoIngresado = document.getElementById('codigoIngresado');
let valorOriginal = document.getElementById('valorAnteriorTachado');
let valorRealPagar = document.getElementById('precioPorPagar');
let codigoIngreso;
let laptopAsus = {
    nombre: 'ASUS ROG Strix G15 Gaming Laptop',
    precio: 2299.00,
}

function precioPorPagar(precio , porcentaje)
{
    let valorPorPagar = Math.round(((precio * (1 - (porcentaje/100)))) * 100) /100;
    return valorPorPagar;
}

function descuentoAplicado(precio , porcentaje)
{
    let descuento = Math.round((precio * (porcentaje / 100))*100) /100;
    return descuento
}

function codigosDescuento(codigo,porcentaje){
    this.codigo =  codigo;
    this.porcentaje = porcentaje;
}

let condigosDescuentoVigentes = [
    new codigosDescuento('platzi', 25.00),
    new codigosDescuento('VMX50', 23.00),
    new codigosDescuento('MM89X', 60.00),
    new codigosDescuento('S4VITAR', 25.00),
    new codigosDescuento('NATE89', 5.00),
];

function buscadora(codigoBuscado)
{
    let buscar = condigosDescuentoVigentes.find(function(codigo){
        return codigo.codigo === codigoBuscado;
    })
    if(buscar == undefined)
    {
        valorDescontado.style.display = 'initial';
        valorDescontado.style.color = '#ff4200';
        limpiar()
        valorDescontado.innerHTML = 'Codigo de descuento invalidado';
        valorOriginal.style.display = 'none';
        porcetajeDescuentoAplicado.style.display = 'none';
    }
    else{
        let resultado = Object.values(buscar)[1];
        valorDescontado.innerHTML= '';
        return resultado;
    }
}

function tipoDescuento(){
    if(opcionesDescuento.value == 'cupon'){
        porcetajeDescuentoAplicado.style.display = 'none';
        ingresoCodigoDescuento.style.display = 'flex';
        valorDescontado.innerHTML= '';
        precioPorPagarProducto.innerHTML = '$ ' + laptopAsus.precio + '.00';
        limpiar();
    }
    else{
        ingresoCodigoDescuento.style.display = 'none';
        valorDescontado.innerHTML= '';
        codigoIngreso = 'platzi';
        mostarValoresPorPagar()
    }
}

function mostarValoresPorPagar(){
    let porcentaje;
    let descuento;
    let precioReal;
    porcetajeDescuentoAplicado.style.display = 'initial';
    if(codigoIngreso == 'platzi')
    {
        porcentaje = buscadora(codigoIngreso);
        console.log(porcentaje);
        valorOriginal.innerHTML = '$ ' + laptopAsus.precio + '.00';
        porcetajeDescuentoAplicado.innerHTML = porcentaje + '%';
        codigoIngreso = '';
        descuento = descuentoAplicado(laptopAsus.precio, porcentaje);
        valorDescontado.innerHTML = 'Ahorraste $ ' + descuento;
        precioReal = precioPorPagar(laptopAsus.precio, porcentaje);
        precioPorPagarProducto.innerHTML = '$ ' + precioReal;
    }
    else{
        porcentaje = buscadora(codigoIngresado.value);
        console.log(porcentaje);
        if(porcentaje !== undefined)
        {
            valorOriginal.style.display = 'initial';
            valorOriginal.innerHTML = '$ ' + laptopAsus.precio + '.00';
            porcetajeDescuentoAplicado.innerHTML = porcentaje + '%';
            descuento = descuentoAplicado(laptopAsus.precio, porcentaje);
            valorDescontado.style.color = '#0faf73'
            valorDescontado.innerHTML = 'Ahorraste $ ' + descuento;
            precioReal = precioPorPagar(laptopAsus.precio, porcentaje);
            precioPorPagarProducto.innerHTML = '$ ' + precioReal;
        }
    }
   
}

function limpiar(){
    valorOriginal.innerHTML = '';
    porcetajeDescuentoAplicado.innerHTML = '';
}

