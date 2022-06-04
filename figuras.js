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

//Funciones cambiar vista
let circle = document.getElementById('circleSection');
let triangle = document.getElementById('triangleSection');
let square = document.getElementById('squareSection');

function circleWindows(){
    triangle.style.display = 'none';
    square.style.display = 'none';
    circle.style.display = 'flex';
}
function triangleWindows(){
    triangle.style.display = 'flex';
    square.style.display = 'none';
    circle.style.display = 'none';
}

function squareWindows(){
    triangle.style.display = 'none';
    square.style.display = 'flex';
    circle.style.display = 'none';
}

//Respuesta Circulo
function circleAnswers(){
    let radio = document.getElementById('radio');
    let perimetroAnswer = document.getElementById('answerPerimeterCircle');
    let areaAnswer = document.getElementById('answerAreaCircle');
    // Valores de los input
    let valueRadio = parseFloat(radio.value);
    //Respuestas
    let perimetro = perimetroCirculo(valueRadio);
    perimetroAnswer.innerHTML = perimetro;
    let area = areaCirculo(valueRadio);
    areaAnswer.innerHTML = area;
}
//Respuesta Cuadrado
function squareAnswers(){
    let side = document.getElementById('sides');
    let perimetroAnswer = document.getElementById('answerAreaSquare');
    let areaAnswer = document.getElementById('answerPerimeterSquare');
    // Valores de los input
    let valueSides = parseFloat(side.value);
    //Respuestas
    let perimetro = perimetroCuadrado(valueSides);
    perimetroAnswer.innerHTML = perimetro;
    let area = areaCuadrado(valueSides);
    areaAnswer.innerHTML = area;
}

function delte(){
    let triangleHeight = document.getElementById('height');
    let triangleBase = document.getElementById('base');
    let triangleSideA = document.getElementById('sideA');
    let triangleSideB = document.getElementById('sideB');
    let radio = document.getElementById('radio');
    let side = document.getElementById('sides');

    let perimetroAnswerCircle = document.getElementById('answerPerimeterCircle');
    let areaAnswerCircle = document.getElementById('answerAreaCircle');
    let perimetroAnswerSquare = document.getElementById('answerAreaSquare');
    let areaAnswerSquare = document.getElementById('answerPerimeterSquare');
    let perimetroAnswer = document.getElementById('answerPerimeter');
    let areaAnswer = document.getElementById('answerArea');

    triangleHeight.value = '';
    triangleBase.value = '';
    triangleSideA.value = '';
    triangleSideB.value = '';
    radio.value = '';
    side.value = '';
    perimetroAnswerCircle.innerHTML = '';
    areaAnswerCircle.innerHTML = '';
    perimetroAnswerSquare.innerHTML = '';
    areaAnswerSquare.innerHTML = '';
    perimetroAnswer.innerHTML = '';
    areaAnswer.innerHTML = '';
}