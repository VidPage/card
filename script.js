function actualizarCuentaRegresiva() {
    const fechaEvento = new Date('2025-02-28T00:00:00').getTime();
    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `Faltan: ${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
}

setInterval(actualizarCuentaRegresiva, 1000);
