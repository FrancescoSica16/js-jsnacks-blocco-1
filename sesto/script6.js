/*
 *	Crea un array vuoto.
 * 	Chiedi all'utente di inserire cinque parole.
 *	Quando una parola è scritta con tutti i caratteri in maiuscolo stampa un alert,
 *	altrimenti inseriscila nell'array.
 *
 */

const parole = [];
let parola = 0;
let isUpper = true;

for (let i = 0; i < 5; i++) {
     parola = prompt("dammi una parola");

     if ( parola.toUpperCase() == parola) {
         alert("non urlare");
     }

     else parole.push(parola);
}

console.log(parole);