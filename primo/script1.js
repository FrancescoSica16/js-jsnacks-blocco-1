/*
 * L'utente inserisce due parole in successione, con due prompt. 
 * Il software stampa prima la parola più corta, poi la parola più lunga.
 */

let primaParola = prompt("inserisci la prima parola");
let secondaParola = prompt("inserisci la seconda parola");

if (primaParola.length > secondaParola.length) {
    console.log(secondaParola + " " + primaParola);
}
else if(primaParola.length < secondaParola.length){
    console.log(primaParola + " " + secondaParola);
}
else if(primaParola.length == secondaParola.length) {
    console.log("le parole hanno la stessa lunghezza");
}