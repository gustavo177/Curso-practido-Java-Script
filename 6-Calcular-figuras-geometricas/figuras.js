/* perimetro de un cuadrado */
/* const significa que una variable que nunca se va alterar */
console.group("Cuadrados") /* group agrupa mensajes */
const lodoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+lodoCuadrado+"cm");

const perimetroCuadrado=lodoCuadrado*4;
console.log("El perimetor del cuadro es: "+perimetroCuadrado+"cm");

const areaCuadrado=lodoCuadrado*lodoCuadrado;
console.log("El area del cuadro es: "+areaCuadrado+"cm^2");

console.groupEnd(); /* cierre del group */

/* Codigo del triangulo */

console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.log(
    "Los lados del triangulo miden: "
    +ladoTriangulo1
    +"cm, "
    +ladoTriangulo2
    +"cm, "
    +baseTriangulo
    +"cm"
);
const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: "+alturaTriangulo+"cm");

const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
console.log("El perimetor del triangulo es: "+perimetroTriangulo+"cm");

const areaTriangulo=(baseTriangulo*alturaTriangulo)/2;
console.log("El area del triangulo es: "+areaTriangulo+"cm^2");

console.groupEnd();

/* Codigo del circulo */

console.group("Circulo");

//Radio
const radioCirculo = 4;
console.log("El radio del circulo es: "+radioCirculo+"cm");

//Diametro
const diamteroCirculo=radioCirculo*2;
console.log("El diametro del circulo es: "+diamteroCirculo+"cm");


//PI
const PI=Math.PI;
console.log("PI es: "+PI);

//Circuferencia
const perimetroCirculo= diamteroCirculo*PI;
console.log("El perimetro del circulo es: "+perimetroCirculo+"cm");

//Area
const areaCirculo=(radioCirculo*radioCirculo)*PI;
console.log("El area del circulo es: "+areaCirculo+"cm^2");

console.groupEnd();
 
 