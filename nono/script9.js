/**
 *  A)
 *   Crea due array che hanno un numero di elementi diversi (di almeno 6 elementi).
 *   Aggiungi elementi casuali all'array che ha meno elementi, fino a quando ne avrà 
 *   tanti quanti l'altro.
 * 
 *  B)
 *  Mostriamo in HTML le due liste in parallelo
 */

 const listaUno = ["casa", "chiesa", "paolo", "luca","pane", "acqua"];
 const listaDue = ["pera", "mela", "cocco", "bello","peto", "ruota","auto", "mobile","botola"];
 
 let differenza = Math.abs(listaUno.length - listaDue.length);
 
 let nomeCaso = 0;
 console.log(differenza);
 
 for (let i = 0; i < differenza ; i++) 
 {    
     if(listaUno.length < listaDue.length)
         listaUno.push( nomeCaso= Math.random().toString(36).substring(0,6));
 
     else {
         listaDue.push( nomeCaso= Math.random().toString(36).substring(0,6));
     }
 }
 
 // for (let i = 0; i < listaUno.length; i++) {
 //     document.getElementById("lista-uno").innerHTML +=  "<li>" + listaUno[i] + "</li> "; 
 // }
 
 // for (let i = 0; i < listaDue.length; i++) {
 //     document.getElementById("lista-due").innerHTML +=  "<li>" + listaDue[i] + "</li> ";  
 // }
 
 
  document.getElementById("lista-uno").innerHTML = listaUno;
  document.getElementById("lista-due").innerHTML = listaDue;   