//Promedio
function promedio(vector)
{
    const sumaLista = vector.reduce(
        (valorAcumulado, nuevoElemento )=> parseInt(valorAcumulado) + parseInt(nuevoElemento),
    )
    const promedio = Math.round((sumaLista / vector.length)*100) /100;
    return promedio;
}

let inputNumeros = document.getElementById('ingresoValores');
function calcularPromedio(){
    let lista = inputNumeros.value.split(',');
    
    let respueta = document.getElementById('respuestaPromedio');
    respueta.innerHTML = promedio(lista)
   
}

//Mediana
function mediana(lista){
    let mediana, posicion, posicion2;
    let listaOrdenada = lista.sort((a,b)=> a - b);

    if(listaOrdenada.length % 2 == 0)
    {
        posicion = (listaOrdenada.length / 2);
        posicion2 =  posicion - 1;
        mediana = (parseInt(listaOrdenada[posicion]) + parseInt(listaOrdenada[posicion2])) / 2
    }
    else{
        posicion = Math.floor((listaOrdenada.length / 2));
        mediana =  listaOrdenada[posicion];
    }
    return mediana;
}

let inputNumerosMediana = document.getElementById('ingresoValoresMediana');
function calcularMediana(){
    let lista = inputNumerosMediana.value.split(',');
    let respueta = document.getElementById('respuestaMediana');
    respueta.innerHTML = mediana(lista)
   
}
//Moda
function moda(lista){
    let moda;
    const listaConteo = {};
    lista.map(
        function (elemento){
            if(listaConteo[elemento]){
                listaConteo[elemento] += 1;
            }
            else{
                listaConteo[elemento] = 1
            }   
        }
    );
    const listaConteoArray = Object.entries(listaConteo).sort((a,b) => a[1] - b[1]);
    moda = listaConteoArray[listaConteoArray.length - 1]
    return moda[0];
}

let inputNumerosModa = document.getElementById('ingresoValoresModa');
function calcularModa(){
    let lista = inputNumerosModa.value.split(',');
    let respueta = document.getElementById('respuestaModa');
    respueta.innerHTML = moda(lista)
   
}

// Media geométrica
function mediaGeometrica(lista){
    let producto = lista.reduce((a,b) => parseInt(a) * parseInt(b));
    let resultado = Math.round((producto ** (1/lista.length))*100) /100;
    return resultado;
}

let inputNumerosMediaGeometrica = document.getElementById('ingresoValoresMediaGeometrica');
function calcularMediaGeometrica(){
    let lista = inputNumerosMediaGeometrica.value.split(',');
    let respueta = document.getElementById('respuestaMediaGeometrica');
    respueta.innerHTML = mediaGeometrica(lista)
}

// Media armónica
function mediaArmonica(lista){
    let numerador = lista.length;
    let denominador = 0;
    for(var l = 0; l < lista.length; l++){
        let division = (1/lista[l]);
        denominador = denominador + division
    }
    let respuesta = Math.round((numerador / denominador) * 100) /100;
    console.log(respuesta);
    return respuesta
}

let inputNumerosMediaArmonica = document.getElementById('ingresoValoresMediaArmonica');
function calcularMediaArmonica(){
    let lista = inputNumerosMediaArmonica.value.split(',');
    let respueta = document.getElementById('respuestaMediaArmonica');
    respueta.innerHTML = mediaArmonica(lista)
}
//Promedio Ponderado
const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];
function promedioPonderado(lista)
{
    let numerador =  lista.map(elemento => elemento.note * elemento.credit).reduce((a,b) => a + b);
    let denominador = lista.map(elemento => elemento.credit).reduce((a,b) => a + b);
    let respuesta = Math.round((numerador / denominador)* 100) /100;
    console.log('El promedio pondenderados es: ' + respuesta);
}
promedioPonderado(notes)