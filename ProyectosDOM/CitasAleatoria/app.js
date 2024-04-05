let botonElem = document.getElementById("boton-cambiar-cita");
let citaElem = document.getElementById("cita");
let autorElem = document.getElementById("autor");

enteroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

cambiarCita = () => {
  let indiceAleatorio = enteroAleatorio(0, citas.length);
  citaElem.innerText = `${citas[indiceAleatorio].texto}`;
  autorElem.innerText = citas[indiceAleatorio].autor;
};

cambiarCita();

botonElem.addEventListener('click', cambiarCita)
