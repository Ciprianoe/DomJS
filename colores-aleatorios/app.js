/* seleccionamos los elementos del DOM  */
const boton = document.querySelector("button");
const color = document.getElementById("color");

function generarColor() {
  let digitosColor = '0123456789ABCDEF';
  let colorHex = '#';

  for (let i = 0; i<6; i++){
    let indiceRandom = Math.floor(Math.random() *16);
    colorHex += digitosColor[indiceRandom];
    
  }
 // console.log(colorHex);
return colorHex;

}

boton.addEventListener('click', function(){
  let colorRandom = generarColor();
  /* act el texto */
  color.textContent = colorRandom;
  /* act color de fondo */
  document.body.style.backgroundColor = colorRandom;
})