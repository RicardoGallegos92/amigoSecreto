// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

var listaAmigos = [];

function mostrarSorteado(amigoSorteado) {
    document.getElementById("listaAmigos").innerHTML =
                                `<h1> El Sorteado es: </h1>
                                <ul> ${amigoSorteado} </ul>`;
}

function sortearAmigo() {
    let seleccionado = Math.random() * listaAmigos.length;
    mostrarSorteado(listaAmigos[seleccionado]);

}

function actualizarListaFront() {
    let listaFront = document.getElementById("listaAmigos");
    console.log(listaFront);
    listaFront.innerHTML = "";
    listaAmigos.forEach( amigo => {
        listaFront.innerHTML += `<ul> ${amigo} </ul>`;
    });
}

function agregarAmigo() {
    let nuevoAmigo = document.getElementById("amigo").value;
    console.log(nuevoAmigo);
    if ( nuevoAmigo != "" && nuevoAmigo ){
        listaAmigos.push(nuevoAmigo);
//        console.log(`nuevo amigo: ${nuevoAmigo}`);
    }
    actualizarListaFront();
}