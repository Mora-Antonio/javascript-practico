const salario = guatemala.map(nombre => nombre.salary);
salario.sort((a,b) => a -b);

let total = salario.reduce((a,b) => a +b);


//Formula para obtener el promedio general
function promedioSalarios(lista)
{
    let resultado = Math.round((total / lista.length)*100) /100;
    return resultado;
}

//Formula para calcular la mediana de los salarios
function medianaSalarios(lista){
    let mediana, posicion, posicion2;
    lista.sort((a,b)=> a - b);

    if(lista.length % 2 == 0)
    {
        posicion = (lista.length / 2);
        posicion2 =  posicion - 1;
        mediana = (parseInt(lista[posicion]) + parseInt(lista[posicion2])) / 2
    }
    else{
        posicion = Math.floor((lista.length / 2));
        mediana =  lista[posicion];
    }
    return mediana;
}
let medianaGeneral = medianaSalarios(salario);

//Formula para obtener un array con objetos de los n salarios mas altos
function mejoresPagados(lista,porcentaje)
{
    let cantidadPersonas = Math.floor(lista.length * (porcentaje /100));
    let listaOrdenda = lista.sort((a,b) => b.salary - a.salary);
    let listaTop10 = [];
    for(var l = 0 ; l < cantidadPersonas; l++)
    {
        listaTop10.push({nombre: listaOrdenda[l].name, salario: listaOrdenda[l].salary});
    }
    return listaTop10;
};
let listaMejoresPagagos = mejoresPagados(guatemala,10);
let medianaMejoresPagados = medianaSalarios(listaMejoresPagagos.map(nombre => nombre.salario));

//Mejores pagados Clase 