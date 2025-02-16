window.onload = function () {
    // Mostrar el contenido
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content').style.display = 'block';

    let playButton = document.getElementById("playButton");
    let audio = document.getElementById("miAudio");

    function toggleAudio() {
        if (audio.paused) {
            let playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    console.log("Audio reproduciéndose...");
                }).catch(error => {
                    console.log("Error al reproducir el audio:", error);
                });
            }
            playButton.innerHTML = '<i class="fa fa-pause"></i> Pausar Audio';
        } else {
            audio.pause();
            playButton.innerHTML = '<i class="fa fa-play"></i> Reproducir Audio';
        }
    }
    // Añadir el evento de clic al botón
    playButton.addEventListener("click", toggleAudio);
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

