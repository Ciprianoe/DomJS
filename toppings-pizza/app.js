const container = document.getElementById('container');
const titulo = document.getElementById('titulo');
// console.log(titulo);
 titulo.innerText = 'Hola Pizza 🍕'
const lista = document.getElementsByClassName('topping');
//console.log(lista)
const etiqueta = document.getElementsByTagName('li');
// console.log(etiqueta)
const marron = document.getElementsByClassName('fondo-marron');
//console.log(marron)
const selector = document.querySelector('#aceitunas')
// console.log(selector)
/* asignando estilos con JS */
const primerTopping = document.querySelector('.topping');
/* primerTopping.style.backgroundColor = 'blue';
console.log(primerTopping.style)
 */
const listaToppings = document.getElementById('lista-toppings');
/* console.log(listaToppings.innerText);
console.log(listaToppings.textContent); */

/* Eventos */
//const toppings = document.getElementsByClassName('topping');
const albahaca = document.getElementById('albahaca');
const toppings = document.getElementsByClassName('topping');
console.log(toppings)


//albahaca.addEventListener('click', mostratClick);


for (const topping of toppings){
    topping.addEventListener('click',(e)=>{
        console.log(e.target.innerText);    
    });
    console.log(topping);
}


