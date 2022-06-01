//Codigo del cuadrado
console.group('cuadrados')
const ladoCuadrado = 5;
console.log('Los lados del cuadrado miden: ' + ladoCuadrado + ' cm');

const perimetroCuadrado = ladoCuadrado * 4;
console.log('El perímetro del cuadrado es: ' + perimetroCuadrado + ' cm');

const areaCuadrado = ladoCuadrado **2;
console.log('El area del cuadrado es: ' + areaCuadrado + ' cm²');
console.groupEnd();

//Codigo del triangulo
console.group('triangulo');
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 5;
const baseTriangulo3 = 7;
console.log('Los lados del triangulo miden: base ' + baseTriangulo3 + ' cm, ' + ladoTriangulo1 + ' cm y ' + baseTriangulo3 + ' cm');

const perimetroTriangulo = ladoTriangulo1  + ladoTriangulo2 + baseTriangulo3;
console.log('El perímetro del triangulo es: ' + perimetroTriangulo + ' cm');

const alturaTriangulo = 10;
const areaTriangulo = ( baseTriangulo3 * alturaTriangulo) / 2;
console.log('El area del triangulo es: ' + areaCuadrado + ' cm²');
console.groupEnd();

//Codigo del circulo
console.group('circulo');
const radioCirculo = 5;
console.log('EL radio del circulo miden: ' + radioCirculo + ' cm');

const primetroCirculo = Math.round((2 * Math.PI * radioCirculo) * 100) / 100;
console.log('EL perimetro del circulo miden: ' + primetroCirculo + ' cm');

const areaCirculo = Math.round(((radioCirculo ** 2) * Math.PI) * 100) / 100;
console.log('EL area del circulo miden: ' + areaCirculo + ' cm²');
console.groupEnd();
