window.onload = function() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content').style.display = 'block';
};

window.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("IdAudio");
    audio.muted = false;
    audio.volume = 0.6;
    audio.play().catch(error => console.log("Autoplay bloqueado por el navegador:", error));
});
setInterval(actualizarCuentaRegresiva, 1000);

const fechaObjetivo = new Date("2025-02-28T17:00:00").getTime();

function actualizarCuentaRegresiva() {
    const ahora = new Date().getTime();
    const tiempoRestante = fechaObjetivo - ahora;

    if (tiempoRestante <= 0) {
        document.getElementById("countdown").innerHTML = "¡La espera termino!";
        clearInterval(intervalo);
        return;
    }

    const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

const intervalo = setInterval(actualizarCuentaRegresiva, 1000);
actualizarCuentaRegresiva();
