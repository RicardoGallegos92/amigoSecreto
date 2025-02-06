// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

var listaAmigos = [];

function mostrarSorteado(amigoSorteado) {
    document.getElementById("listaAmigos").innerHTML =
                                `<h1> El Sorteado es: </h1>
                                <ul> ${amigoSorteado} </ul>`;
}

function sortearAmigo() {
    if ( listaAmigos.length == 0 ){
        mostrarSorteado("No hay amigos en la lista aún");
        return;
    }else{
        let seleccionado = Math.round( Math.random() * (listaAmigos.length - 1) ) ;
//    console.log(`Seleccionado : ${seleccionado}`);
        mostrarSorteado(listaAmigos[seleccionado]);
    }
}

function actualizarListaFront() {
    let listaFront = document.getElementById("listaAmigos");
//    console.log(listaFront);
    listaFront.innerHTML = "";
    listaAmigos.forEach( amigo => {
        listaFront.innerHTML += `<ul> ${amigo} </ul>`;
    });
}

function limpiarInput() {
    document.getElementById("amigo").value = "";
}

function agregarAmigo() {
    let nuevoAmigo = document.getElementById("amigo").value;
//    console.log(nuevoAmigo);
    if ( nuevoAmigo != "" && nuevoAmigo ){
        listaAmigos.push(nuevoAmigo);
//        console.log(`nuevo amigo: ${nuevoAmigo}`);
    }
    actualizarListaFront();
    limpiarInput();
}