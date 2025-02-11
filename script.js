setInterval(actualizarCuentaRegresiva, 1000);
// Fecha objetivo: 28 de febrero a las 5:00 PM
const fechaObjetivo = new Date("2025-02-28T17:00:00").getTime();

function actualizarCuentaRegresiva() {
    const ahora = new Date().getTime();
    const tiempoRestante = fechaObjetivo - ahora;

    if (tiempoRestante <= 0) {
        document.getElementById("countdown").innerHTML = "¡Tiempo terminado!";
        clearInterval(intervalo);
        return;
    }

    const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
        `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

// Actualizar cada segundo
const intervalo = setInterval(actualizarCuentaRegresiva, 1000);

// Ejecutar la función inmediatamente para evitar el primer segundo vacío
actualizarCuentaRegresiva();