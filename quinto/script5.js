/**
 * Calcola la somma e la media dei primi 10 numeri
 */

let somma = 0;
let media = 0;

// for (let i = 0; i <= 10; i++) {
//     somma += i;
//     media = somma / 10;  
// }

let i = 0;
while(i <= 10){
    somma += i;
    media = somma/ 10;
    i++;
}

console.log(somma);
console.log(media);