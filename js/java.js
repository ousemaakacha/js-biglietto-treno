/* 
Il programma dovrà chiedere all'utente il numero di 
chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo). 
Questo richiederà un minimo di ricerca. */

/*
TOOLS:
- creazione const / let
- calcolo prezzo
- applicazione scoto under 18
- applicazione sconto over 65
- prezzo in decimale
*/

// creo variabili eta

const eta = Number(prompt("Iserisci la tua etá"));
console.log(eta);

// creo variabile per distanza

const dist = Number(prompt("Inserisci Km"));
console.log(dist);

// calcolo prezzo
if (eta < 18) {
  // prezzo scontato under 18
  const perc_20 = dist * 0.21 - dist * 0.21 * 0.02;
  // prezzo in decimale
  const perc_20_decimal = perc_20.toFixed(2);
  console.log(perc_20_decimal);
} else if (eta > 64) {
  // prezzo scontato over 65
  const perc_40 = dist * 0.21 - dist * 0.21 * 0.04;
  // prezzo in decimale
  const perc_40_decimal = perc_40.toFixed(2);
  console.log(perc_40_decimal);
} else {
  // prezzo intero
  const full_price = dist * 0.21;
  // prezzo in decimale
  const full_price_decimal = full_price.toFixed(2);
  console.log(full_price);
}
