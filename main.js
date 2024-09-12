/* Leemos las entradas de las opciones */
const piedraOpcion = document.getElementById("piedra");
const papelOpcion = document.getElementById("papel");
const tijeraOpcion = document.getElementById("tijera"); // Cambiado de tijeraa a tijera

/* Leemos las entradas de los resultados */
const resultadosJuego = document.getElementById("resultado");

// Iniciamos el juego
piedraOpcion.addEventListener("click", () => {
    iniciarJuego('piedra'); // Cambiado de inicarJuego a iniciarJuego
});
papelOpcion.addEventListener("click", () => {
    iniciarJuego('papel'); // Cambiado de inicarJuego a iniciarJuego
});
tijeraOpcion.addEventListener("click", () => {
    iniciarJuego('tijera'); // Cambiado de inicarJuego a iniciarJuego
});

function iniciarJuego(opcion) {
    // Movimiento PC
    const movPc = movimientoPc();
    // Movimiento usuario
    const movUsuario = opcion;
    // Comparación de movimiento
    const comp = comparacion(movPc, movUsuario); // Cambiado de com a comp
    // Resultado
    if (comp == 1) {
        resultadosJuego.innerHTML = "Usuario elige " + movUsuario + "<br> Pc elige " + movPc + "<br> <span class='ganador'>El ganador es usted 😒</span>";
    }
    if (comp == 2) {
        resultadosJuego.innerHTML = "Usuario elige " + movUsuario + "<br> Pc elige " + movPc + "<br> <span class='perdedor'>El perdedor es usted JAJA 😂 </span>";
    }
    if (comp == 3) {
        resultadosJuego.innerHTML = "Usuario elige " + movUsuario + "<br> Pc elige " + movPc + "<br> <span class='empate'>La partida es un empate 😅 </span>";
    }
}

function movimientoPc() {
    const opciones = ['piedra', 'papel', 'tijera'];
    const random = Math.floor(Math.random() * 3);
    const mov = opciones[random];
    return mov;
}

function comparacion(pc, usuario) {
    switch (usuario + pc) { // Invertimos la comparación a usuario+pc
        case 'tijerapapel':
        case 'piedratijera':
        case 'papelpiedra':
            return 1; // Gana 
        case 'papeltijera':
        case 'tijerapiedra':
        case 'piedrapapel':
            return 2; // Pierde 
        case 'papelpapel':
        case 'piedrapiedra':
        case 'tijeratijera':
            return 3; // Empate
    }
}

