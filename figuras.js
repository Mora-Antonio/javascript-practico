//Codigo del cuadrado
console.group('cuadrados')

function perimetroCuadrado(lado){
    let resultado = lado * 4; 
    return resultado; 
}

function areaCuadrado(lado)
{
    return lado **2;
}

console.groupEnd();

//Codigo del triangulo
console.group('triangulo');

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

console.log('El perímetro del triangulo es: ' + perimetroTriangulo + ' cm');
function areaTriangulo(base, altura){
    return (base *  altura) / 2;
}

console.groupEnd();

//Codigo del circulo
console.group('circulo');


function primetroCirculo (radio){
    return Math.round((2 * Math.PI * radio) * 100) / 100;
} 

function areaCirculo (radio) {
    return Math.round(((radio ** 2) * Math.PI) * 100) / 100;
} 

console.groupEnd();
