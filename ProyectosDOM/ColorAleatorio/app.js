// Seleccionar Elementos del DOM

const boton = document.querySelector('button');
const color = document.getElementById('color');

function hexColorAleatorio() {
    let digitos = '0123456789ABCDEF';
    let colorHex = '#' 
    for (let i =0; i < 6; i++) {
        let aleatorio = Math.floor(Math.random() * 16 );
        colorHex += digitos[aleatorio];
    }
     
    return colorHex;
}

boton.addEventListener('click', () => {
    let colorAleatorio = hexColorAleatorio();
    //actualizar el texto
    color.textContent = colorAleatorio;
    //actualizar el background
    document.body.style.backgroundColor = colorAleatorio; 
});