/**
 *  Il software deve chiedere per 5 volte all'utente di inserire un numero.
 *  Il programma stampa la somma di tutti i numeri inseriti.
 *  Esegui questo programma in due versioni, con il for e con il while.
 */

let somma = 0;
const listaNum = [];

 for (let i = 0; i < 5; i++) {

     listaNum.push(parseInt(prompt("dai numero muoviti")));
 }
 console.log(listaNum);
 for (let i = 0; i < listaNum.length; i++) {

     somma += listaNum[i];

 }
 console.log(somma);


//  let i = 0;
//  while (i < 5 ) {
//      listaNum.push(parseInt(prompt("dai numero muoviti")));
//      i++;
//  }
//  console.log(listaNum);
//  let sommaWhile = 0;
//  let j = 0;

//  while (j < 5) {
//      sommaWhile += listaNum[i];
//      i++;
//  }
//  console.log(somma);