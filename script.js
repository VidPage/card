window.onload = function () {
    // Mostrar el contenido
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content').style.display = 'block';

    let audio = document.getElementById("miAudio");
    let hasPlayed = false;  // Control para asegurar que el audio solo se reproduce una vez

    function activarAudio() {
        if (!hasPlayed) {
            let playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    console.log("Audio reproduciéndose...");
                }).catch(error => {
                    console.log("Error al reproducir el audio:", error);
                });
            }

            hasPlayed = true;
            // Remover los listeners después de la primera interacción
            document.removeEventListener("click", activarAudio);
            document.removeEventListener("touchstart", activarAudio);
            document.removeEventListener("scroll", activarAudio);
        }
    }

    // Comprobación continua: Interacción con clic, toque o scroll
    document.addEventListener("click", activarAudio);       // Para hacer clic
    document.addEventListener("touchstart", activarAudio);  // Para tocar la pantalla
    document.addEventListener("scroll", activarAudio)
    // Inicializar cuenta regresiva
    actualizarCuentaRegresiva();
    setInterval(actualizarCuentaRegresiva, 1000);
};

const fechaObjetivo = new Date("2025-02-28T17:00:00").getTime();

function actualizarCuentaRegresiva() {
    const ahora = new Date().getTime();
    const tiempoRestante = fechaObjetivo - ahora;

    if (tiempoRestante <= 0) {
        document.getElementById("countdown").innerHTML = "¡La espera terminó!";
        return;
    }

    const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

