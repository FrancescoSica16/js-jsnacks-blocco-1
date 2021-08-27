/**
 * Crea un array vuoto.
 * Chiedi per 6 volte all'utente di inserire un numero,
 * se è dispari inseriscilo nell'array.
 */

const listaNum = [];
let numUtente = 0;

for (let i = 0; i < 6; i++) {
        numUtente = parseInt (prompt("dammi un numero"));

    if (numUtente % 2 == 1) {
        listaNum.push(numUtente);
    } 
}

console.log(listaNum);