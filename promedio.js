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