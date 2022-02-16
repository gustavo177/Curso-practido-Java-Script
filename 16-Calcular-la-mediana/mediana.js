function calcularMediaArimetica(lista){
    /* let sumaLista = 0;
    for (let i=0; i<lista.length; i++){
    sumaLista=sumaLista+lista[i];
    } */

    const sumaLista = lista.reduce(
        function(valorAcomulado = 0, nuevoElemento){
            return valorAcomulado + nuevoElemento;
        }
    );

    const promedioLista=sumaLista/lista.length;
    return promedioLista;
}

/* ------------------------------------------------ */
/* solucion en varios pasos */
/* ------------------------------------------------ */
/* 
const list1 = [ 100,200,500,20,];
list1.sort(function(a, b) {
  return a - b;
});
console.log(list1);


const mitadLista1 = parseInt(list1.length/2);

function esPar(numerito){
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

let mediana;

if (esPar(list1.length)) {
    const elemento1 = list1[mitadLista1-1];
    const elemento2 = list1[mitadLista1];

    const promedioElemento1y2= calcularMediaArimetica([elemento1,elemento2]);
    mediana = promedioElemento1y2;
} else {
    mediana = list1[mitadLista1];
} */

/* ------------------------------------------------ */
/* solucion en una sola funsión*/
/* ------------------------------------------------ */
function calcularMediana(list1){

    list1.sort(function(a, b) {
        return a - b;
      });

      const mitadLista1 = parseInt(list1.length/2);

      function esPar(numerito){
        if (numerito % 2 === 0) {
            return true;
        } else {
            return false;
        }
    };

    let mediana;

    if (esPar(list1.length)) {
        const elemento1 = list1[mitadLista1-1];
        const elemento2 = list1[mitadLista1];

        const promedioElemento1y2= calcularMediaArimetica([elemento1,elemento2]);
        mediana = promedioElemento1y2;
    } else {
        mediana = list1[mitadLista1];
    }
    console.log("--------------------")
    console.log("Lista ordenada: "+list1)
    console.log("--------------------")

    return mediana

} 