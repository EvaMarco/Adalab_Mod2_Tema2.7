'use strict';

const text = document.querySelector('.js__text');
const container = document.querySelector('.js__container');

for(let i = 0; i < 100; i++){
    container.innerHTML += `
    <button class="container__button js__button button${i+1}"> Botón ${i+1}</button>
    `;
}

// Si queremos que le bucle empiece desde 1.

// for(let i = 1; i <= 100; i++){
//     container.innerHTML += `
//     <button class="container__button js__button button${i}"> Botón ${i}</button>
//     `;
// }

/*Si queremos que nuestros botones es numeren desde 001 hasta 1 usando el bucle dentro de una función.*/

/* Esto es bueno tenerlo separado por si lo queremos reutilizar*/

function getNewI(number){
    let newI;
    if (number < 10){
        newI = '00' + number; 
    }
    else if(number >= 10 && number < 100){
        newI = '0' + number; 
    }
    else{    
        newI = number;
    }
    return newI;
}

for(let i = 1; i <= 100; i++){
    container.innerHTML += `
    <button class="container__button js__button button${getNewI(i)}"> Botón ${getNewI(i)}</button>
    `;
}
/* El ciclo if else lo habiamos puesto al principio dentro del bucle for y ya al ver que funcionaba lo hemos sacado fuera*/

//Si lo ponemos antes de los bucles hace una array vacia porque los elementos a un no se han definido. 

const buttons = document.querySelectorAll('.js__button');

function clickMe(event){
    console.log('🍕️');
   text.innerHTML = event.currentTarget.innerHTML;
}

for (const item of buttons){
    item.addEventListener('click', clickMe);
}