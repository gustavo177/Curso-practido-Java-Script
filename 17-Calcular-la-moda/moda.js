const lista1=[1,2,3,1,2,3,4,2,2,2,1];

const lista1Count={}; /* es un objeto */

lista1.map(
    function(elemento){
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;

        }
    }
);

/* converitimos el objeto a un arrays */
const lista1Array= Object.entries(lista1Count).sort(
    function(valorAcomulado, nuevoValor){
       return valorAcomulado[1] - nuevoValor[1];
    }
);

const moda = lista1Array[lista1Array.length - 1];

/* ------------------------------------------------ */
/* solucion en una sola funsión*/
/* ------------------------------------------------ */
function calcularModa(lista1){
    
    const lista1Count={};
    
    /* devuelve la lista ordenada de menos a mayor  */
    lista1.map(
        function(elemento){
            if (lista1Count[elemento]) {
                lista1Count[elemento] += 1;
            } else {
                lista1Count[elemento] = 1;
    
            }
        }
    );
    
    /* converitimos el objeto a un arrays */
    const lista1Array= Object.entries(lista1Count).sort(
        function(valorAcomulado, nuevoValor){
           return valorAcomulado[1] - nuevoValor[1];
        }
    );
    
    const moda = lista1Array[lista1Array.length - 1];
    return moda;
    

}