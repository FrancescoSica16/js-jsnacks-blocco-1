/**
 *   In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
 *   chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
 */

const invitati = ["pippo", "pluto","paperino", "topo"];

let utente = prompt("Io sono Gasby e questa è la mia festa, tu chi sei?");

let conferma = false;

for (let i = 0; i < invitati.length; i++) {
    if(utente == invitati[i]){
        conferma = true ;
    }
    
}
if (conferma === true) {
    console.log(utente + " puoi entrare")
}
else console.log(utente + " non puoi entrare non sei invitato")