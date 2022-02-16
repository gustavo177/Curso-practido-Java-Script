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
 
 // Aquí interactuamos con el HTML

 function calcularPerimetroCuadrado(){
    const input=document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
 }

function calcularAreaCuadrado(){
    const input=document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
 }
 /* --------Triangulo------------ */

 function calcularPerimetroTriangulo(){
     const input1=document.getElementById("InputTriangulo1");
     const value1 = input1.value;

     const input2=document.getElementById("InputTriangulo2");
     const value2 = input2.value;

     const input3=document.getElementById("InputTriangulo3");
     const value3 = input3.value;

     const pTriangulo = perimetroTriangulo(Number(value1), Number(value2), Number(value3));
     alert(pTriangulo);
 }

 function calcularAreaTriangulo(){
    const input1=document.getElementById("InputTriangulo3");
    const value1 = input1.value;

    const input2=document.getElementById("InputTriangulo4");
    const value2 = input2.value;

    const aTriangulo = areaTriangulo(Number(value1), Number(value2));
    alert(aTriangulo);
 }

  /* --------Circulo------------ */
function calcularDiametroCirculo(){
    const input=document.getElementById("InputCirculo");
    const value1 = input.value;

    const dCirculo = diametroCirculo(Number(value1));
    alert(dCirculo);
}

function calcularPerimetroCirculo(){
    const input=document.getElementById("InputCirculo");
    const value1 = input.value;

    const dCirculo = perimetroCirculo(Number(value1));
    alert(dCirculo);
}

function calcularAreaCirculo(){
    const input=document.getElementById("InputCirculo");
    const value1 = input.value;

    const dCirculo = areaCirculo(Number(value1));
    alert(dCirculo);
}