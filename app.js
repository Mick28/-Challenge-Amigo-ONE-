// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let listaAmigos = [];
let yaSorteado = false; // letiable para rastrear si ya se realizó el sorteo

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim(); // Elimina espacios innecesarios

    if (nombre === "") {
        alert("Por favor, escribe un nombre para continuar");
        return;
    }

    // Agrega el nombre al array y actualiza la lista visual
    listaAmigos.push(nombre);
    actualizarLista();
    input.value = ""; // Limpia el campo de texto
}

// Función para actualizar la lista visual en la página
function actualizarLista() {
    let listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = ""; // Limpia la lista antes de actualizar

    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = (i + 1) + ". " + listaAmigos[i];
        listaElement.appendChild(li);
    }
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    if (yaSorteado) {
        // Reinicia el juego
        listaAmigos = [];
        yaSorteado = false;

        // Limpia la lista visual y el resultado
        document.getElementById('listaAmigos').innerHTML = "";
        document.getElementById('resultado').innerHTML = "";

        alert("Reiniciaste el juego. Ahora puedes agregar nuevos amigos!");
        return;
    }

    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para realizar el sorteo.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];

    // Muestra el resultado del sorteo
    let resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = "<li>¡El amigo sorteado es: <strong>" + amigoSorteado + "</strong>!</li>";

    // Marca que ya se realizó un sorteo
    yaSorteado = true;
}
