var listas= [];

function InsertarL(lista){
    const input=document.getElementById("inputInsertar");
    const value = input.value;
    listas.unshift(value)

}

function ImprimirL(){
    const ver= document.getElementById("imprimirInsertar");
    ver.innerText="La lista es:   " + listas
}
