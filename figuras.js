//Codigo del cuadrado
function perimetroCuadrado(lado){
    let resultado = lado * 4; 
    return resultado; 
}
function areaCuadrado(lado)
{
    return lado ** 2;
}

//Codigo del triangulo
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base *  altura) / 2;
}

//Codigo del circulo
function perimetroCirculo (radio){
    return Math.round((2 * Math.PI * radio) * 100) / 100;
} 

function areaCirculo (radio) {
    return Math.round(((radio ** 2) * Math.PI) * 100) / 100;
} 


//Aqui interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const inputCuadrado = document.getElementById('inputCuadrado');
    const respuestaPerimetro = document.getElementById('respuestaPerimetro');
    const value = parseFloat(inputCuadrado.value);
    const perimetro = perimetroCuadrado(value);
    respuestaPerimetro.innerHTML = 'El perimetro del cuadrado es: ' + perimetro;
}
function calcularAreaCuadrado(){
    const inputCuadrado = document.getElementById('inputCuadrado');
    const respuestaArea = document.getElementById('respuestaArea');
    const value = parseFloat(inputCuadrado.value);
    const area = areaCuadrado(value);
    respuestaArea.innerHTML = 'El area del cuadrado es: ' + area;
}