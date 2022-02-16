/* perimetro de un cuadrado */
/* const significa que una variable que nunca se va alterar */
console.group("Cuadrados") /* group agrupa mensajes */

function perimetroCuadrado(lado){
    return lado*4;
}
 
function areaCuadrado(lado){
    return lado*lado;
}
 
console.groupEnd(); /* cierre del group */

function perimetroTriangulo(lado1, lado2, base){
    return lado1+lado2+base;
} 
function areaTriangulo(base, altura){
    return (base*altura)/2;
} 

console.groupEnd();

/* Codigo del circulo */

console.group("Circulo");

//Diametro
function diametroCirculo(radio){
    return radio*2;
} 

//PI
const PI=Math.PI;
console.log("PI es: "+PI);

//Circuferencia
function perimetroCirculo(radio){
    const diametro=diametroCirculo(radio);
    return diametro*PI;
}

//Area
function areaCirculo(radio){
    return (radio*radio)*PI;
} 
 
console.groupEnd();
 
 