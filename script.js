window.onload = function () {
    //mostrar el contenido
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content').style.display = 'block';

    let audio = document.getElementById("miAudio");
    let hasPlayed = false; 

    function activarAudio() {
        if (!hasPlayed) {
            audio.muted = false;
            audio.play().then(() => {
                console.log("Audio reproduciéndose...");
            }).catch(error => {
                console.log("Error al reproducir el audio:", error);
            });

            hasPlayed = true;
            document.removeEventListener("scroll", activarAudio);
            document.removeEventListener("touchstart", activarAudio);
            document.removeEventListener("click", activarAudio);
        }
    }

    document.addEventListener("scroll", activarAudio);
    document.addEventListener("touchstart", activarAudio);
    document.addEventListener("click", activarAudio);

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
