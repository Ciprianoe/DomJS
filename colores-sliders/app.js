/* seleccionamos los elementos que vamos a modificar */

const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');


const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');


let  rojo = inputRojo.value;
let  verde = inputVerde.value;
let  azul = inputAzul.value;

/* ACTUALIZAR EL TEXTO DE LOS PARRAFOS  */
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

function actColor(rojo, verde, azul){
  const colorRGB = `rgb(${rojo},${verde},${azul})`;
  document.body.style.backgroundColor = colorRGB;
}

/* PARA ACTUALIZAR EL RED */

inputRojo.addEventListener('change', (e)=>{
    rojo = e.target.value;
   textoRojo.innerText = rojo;
   actColor(rojo, verde, azul);
});

/* para actualizar verde */


inputVerde.addEventListener('change', (e)=>{
  verde = e.target.value;
 textoVerde.innerText = verde;
 actColor(rojo, verde, azul);
});

/* azul */

inputAzul.addEventListener('change', (e)=>{
  azul = e.target.value;
 textoAzul.innerText = azul;
 actColor(rojo, verde, azul);
});