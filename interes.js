//Simbolo de modena
let opcionTipoModeda = document.getElementById('tipoMoneda');
let simboloMoneda = document.getElementById('simboloMoneda');
let simboloMonedaPagoAdicional = document.getElementById('simboloMonedaPagoAdicional');
let simboloMonedaRespuesta = document.getElementById('simboloMonedaRespuesta');

function selecionMoneda(){
    simboloMoneda.innerHTML = opcionTipoModeda.value;
    simboloMonedaPagoAdicional.innerHTML = opcionTipoModeda.value;
    simboloMonedaRespuesta.innerHTML = opcionTipoModeda.value;
}

let limpiarInversionInicial = document.getElementById('limpiarInversionInicial');
function limpiarInput(){
    inversionInicial.value = '';
}

//Import input type number, info value
let inversionInicial = document.getElementById('inversionInicial');
let tasaInteres = document.getElementById('tasaInteres');
let periodo = document.getElementById('periodo');
let pagosAdicionales = document.getElementById('pagosAdicionales');
let respuestaMonto = document.getElementById('respuetaMonto');

//Import the selects, info magnitud
let tipoTasaInteres = document.getElementById('tipoTasaInteres');
let plazoPagoAdicional = document.getElementById('plazoPagoAdicional');
let periodoCapitalizable = document.getElementById('periodoCapitalizable');
let tiempoInversion = document.getElementById('tiempoInversion');

//Array que contine la magnitud del tiempo y detalla la cantidad de meses que es y la cantidad que hay en un annio.
const capitalizacionesAnnio = [
    { nombre : 'anual', valor: 1, meses: 12},
    { nombre : 'mensual', valor: 12, meses: 1},
    { nombre : 'diario', valor: 365, meses: 0.03287671232876712},
    { nombre : 'semestral', valor: 2, meses: 6},
    { nombre : 'trimestral', valor: 4, meses: 3},
    { nombre : 'cuatrimestre', valor: 3, meses: 4},
    { nombre : 'bimensual', valor: 6, meses: 2},
]

//Convierte el tiempo a annios
function tiempoAnnio(tiempo, periodo)
{
    const tiempoPeriodo = [];
    tiempoPeriodo['annio'] = 1;
    tiempoPeriodo['mes'] = (1/12);
    let tiempoAnnio = tiempoPeriodo[tiempo] * periodo;
    return tiempoAnnio;
}

//Capitalizaciones totales que se tendran en el periodo de inversion, se necesita el tiempo en annio
function capitalizacionesTotales(periodo, tiempo)
{
    let cantidadCapitalizaciones = capitalizacionesAnnio.find(valor => valor.nombre === periodo).valor;
    return cantidadCapitalizaciones * tiempo;
}

//Muestra el porcentaje aplicable a cada periodo de capitalizacion, primero establecemos el porcentaje mensual correspondiente, esto lo multiplicamos por los meses que representa la capitalizacion.
function porcentajeCapitalizacion(periodoTasa,tasa,periodo)
{
    let meses = capitalizacionesAnnio.find(a => a.nombre === periodoTasa).meses;
    let porcentajeMes = (tasa / meses) /100;
    let multiplicar = capitalizacionesAnnio.find(valor => valor.nombre === periodo).meses;
    return porcentajeMes * multiplicar;
}


function calculoMonto()
{
    let tiempo = tiempoAnnio(tiempoInversion.value, periodo.value);
    let capitalizacion = capitalizacionesTotales(periodoCapitalizable.value, tiempo);
    let porcentaje = porcentajeCapitalizacion(tipoTasaInteres.value,tasaInteres.value, periodoCapitalizable.value);
    let respueta = (parseFloat(inversionInicial.value) * ((1 + porcentaje) **capitalizacion));

    
    console.log('monto: ' + parseFloat(inversionInicial.value) + ' porcentaje: ' + porcentaje + ' periodos: ' + capitalizacion)
    respuestaMonto.value= respueta;
}

//Limpia todos los inputs
function limpiarDatos()
{
    inversionInicial.value = '';
    tasaInteres.value = '';
    periodo.value = '';
    respuestaMonto.value= '';
}