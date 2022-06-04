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
//Iniciamos con los temas
function triangleAnswers(){
    let triangleHeight = document.getElementById('height');
    let triangleBase = document.getElementById('base');
    let triangleSideA = document.getElementById('sideA');
    let triangleSideB = document.getElementById('sideB');
    let perimetroAnswer = document.getElementById('answerPerimeter');
    let areaAnswer = document.getElementById('answerArea');
    // Valores de los input
    let height = parseFloat(triangleHeight.value);
    let base = parseFloat(triangleBase.value);
    let sideA = parseFloat(triangleSideA.value);
    let sideB = parseFloat(triangleSideB.value);
    //Respuestas
    let perimetro = perimetroTriangulo(base, sideA, sideB);
    perimetroAnswer.innerHTML = perimetro;
    let area = areaTriangulo(base, height);
    areaAnswer.innerHTML = area;
}
