'use strict';

for (let year = 2017; year < 2064; year = year +3){
    console.log(`la próxima luna del cazador será el 5 de octubre del ${year}`);
}

/*Si quisiesemos ver las siguientes 40 */

let startYear = 2017;

for (let i = 0; i < 40; i++){
    startYear += 3;
    console.log(startYear);
}