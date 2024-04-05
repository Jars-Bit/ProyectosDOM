const cronometro = document.getElementById('cronometro');
const botonInitPaus = document.getElementById('boton-inicio-pausa');
const botonReinit = document.getElementById('boton-reiniciar');

let [horas, minutos, segundos] = [0, 0, 0];

let tiempo;
let estado = 'pausado';

actualizarCronometro = () => {
    segundos++

    if (segundos / 60 === 1) {
        segundos = 0;
        minutos++;


        if (minutos / 60 === 1) {
            minutos = 0;
            horas++
        }
    }

    const segundosFormatos = asignarFormato(segundos)
    const minutosFormatos = asignarFormato(minutos)
    const horasFormatos = asignarFormato(horas)

    cronometro.innerText = `${horasFormatos}:${minutosFormatos}:${segundosFormatos}`;    

}

asignarFormato = (unidadTiempo) => {
    return unidadTiempo < 10 ? '0' + unidadTiempo : unidadTiempo
}

botonInitPaus.addEventListener('click', () => {
    if (estado === 'pausado') {
        tiempo = window.setInterval(actualizarCronometro, 1000);
        botonInitPaus.innerHTML = '<i class="bi bi-pause-fill"></i>';
        botonInitPaus.classList.remove('iniciar');
        botonInitPaus.classList.add('pausar');
        estado = 'andando';
    }
    else {
        window.clearInterval(tiempo);
        botonInitPaus.innerHTML = '<i class="bi bi-play-fill"></i>';
        botonInitPaus.classList.remove('pausar');
        botonInitPaus.classList.add('iniciar');
        estado = 'pausado';
    }
})

botonReinit.addEventListener('click', () => {
    window.clearInterval(tiempo);

    horas = 0;
    minutos = 0;
    segundos = 0;

    cronometro.innerText = '00:00:00';

    botonInitPaus.innerHTML = '<i class="bi bi-play-fill"></i>';
    botonInitPaus.classList.remove('pausar');
    botonInitPaus.classList.add('iniciar');
    estado = 'pausado';

})