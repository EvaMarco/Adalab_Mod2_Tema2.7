'use strict';

const container = document.querySelector('.container');
const food = [
    'tortilla de patata',
    'tostadas', 
    'Cocido',
    'Pizza de ayer, fría',
    'tostada de aguacate y salmón'
];
/* Escribe todos los elementos*/

for (let i = 0; i<food.length; i++){
    container.innerHTML += `
    <li class="container__item item${i + 1}">${food[i]}</li>
    `;
    console.log(food[i]);
}

/* Para escribir solo los elementos con índices pares */

for (let i = 0; i<food.length; i++){
    if(i%2 === 0){
        container.innerHTML += `
        <li class="container__item item${i + 1}">${food[i]}</li>
        `;
    }
}

/* El primero elemento tiene una clase especial y se escribe en titulo */

for (let i = 0; i<food.length; i++){
    if(i === 0){
        container.innerHTML += `
        <li class="container__item item${i + 1} item__title"><h1>${food[i]}</h1></li>
        `;
    }
    else{
        container.innerHTML += `
        <li class="container__item item${i + 1}">${food[i]}</li>
        `;
    }
}

/* Usando el for... of */

let index = 0;
for (const item of food){
    container.innerHTML += `
    <li class="container__item item${index++}">${item}</li>
    `;
}