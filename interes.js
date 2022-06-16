//Simbolo de modena
let simboloMoneda = document.getElementById('simboloMoneda');
let opcionTipoModeda = document.getElementById('tipoMoneda');
let simboloMonedaPagoAdicional = document.getElementById('simboloMonedaPagoAdicional');

function selecionMoneda(){
    simboloMoneda.innerHTML = opcionTipoModeda.value;
    simboloMonedaPagoAdicional.innerHTML = opcionTipoModeda.value;
}

//Inicia el verdadero proyecto
let inversionInicial = document.getElementById('inversionInicial');

let limpiarInversionInicial = document.getElementById('limpiarInversionInicial');
function limpiarInput(){
    inversionInicial.value = '';
}

//Traemos los input tipo numero
let tasaInteres = document.getElementById('tasaInteres');

let pagosAdicionales = document.getElementById('pagosAdicionales');
let valorPagosAdicionales = pagosAdicionales.value;

let periodo = document.getElementById('periodo');

//Traemos los select
let tipoTasaInteres = document.getElementById('tipoTasaInteres');
let plazoPagoAdicional = document.getElementById('plazoPagoAdicional');
let periodoCapitalizable = document.getElementById('periodoCapitalizable');
let tiempoInversion = document.getElementById('tiempoInversion');
let respuestaMonto = document.getElementById('respuetaMonto');


function tiempoAnnio(tiempo, periodo)
{
    const tiempoPeriodo = [];
    tiempoPeriodo['annio'] = 1;
    tiempoPeriodo['mes'] = (1/12);
    let tiempoAnnio = tiempoPeriodo[tiempo] * periodo;
    return tiempoAnnio;
}

const capitalizacionesAnnio = [
    { nombre : 'anual', valor: 1, meses: 12},
    { nombre : 'mensual', valor: 12, meses: 1},
    { nombre : 'diario', valor: 365},
    { nombre : 'semestral', valor: 2, meses: 6},
    { nombre : 'trimestral', valor: 4, meses: 3},
    { nombre : 'cuatrimestre', valor: 3, meses: 4},
    { nombre : 'bimensual', valor: 6, meses: 2},
]

function capitalizacionesPorAnnio(periodo, tiempo)
{
    let cantidadCapitalizaciones = capitalizacionesAnnio.find(valor => valor.nombre === periodo).valor;
    return cantidadCapitalizaciones * tiempo;
}
function porcentajeCapitalizacion(porcentaje,tasa,periodo)
{
    let meses = capitalizacionesAnnio.find(a => a.nombre === porcentaje).meses;
    let porcentajeMes = (tasa / meses) /100;
    let multiplicar = capitalizacionesAnnio.find(valor => valor.nombre === periodo).meses;
    return porcentajeMes * multiplicar;
}

function calculoMonto()
{
    let tiempo = tiempoAnnio(tiempoInversion.value, periodo.value);
    let capitalizacion = capitalizacionesPorAnnio(periodoCapitalizable.value, tiempo);
    let porcentaje = porcentajeCapitalizacion(tipoTasaInteres.value,tasaInteres.value, periodoCapitalizable.value);
    let respueta = (parseFloat(inversionInicial.value) * ((1 + porcentaje) **capitalizacion));
    respuestaMonto.value= respueta;

}
