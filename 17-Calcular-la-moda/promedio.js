/* const lista1=[
    100,
    200,
    300,
    500,
];  */

/* metodo inserta al final de la lista */
var lista=[];
function InsertarL(){
    const input=document.getElementById("InputInsertar");
    const value = input.value;
    lista.push(value) /* push insertamos al final de la lista */
    return lista;
}

/* convertir array String a Enteros */
function convertirArrayAentero(listaString){
    const nuevo = listaString.map((i) => Number(i));
    lista=nuevo;
    return lista;
}

/* metodo que calcula el promedio */
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



function ImprimirL(){
    const ver= document.getElementById("imprimirInsertar");
    ver.innerText="La lista es: " + calcularMediaArimetica(convertirArrayAentero(lista))
}