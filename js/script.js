// human code train ticket

// Chiedi distanza e età all'utente
// Se l'età e maggiore di 65 applica 40% di sconto
// Oppure l'età e minore di 18 applica 0% di sconto
// Altrimenti nessuno sconto 
// Calcola il prezzo in base alla tariffa, alla distanza e all'eventuale sconto
// Restituisci il risultato 

const tariff = 0.21;
let distance;
let age;
let discount;
let price;

// input 
distance = parseInt(prompt("Inserisci i chilometri da percorrere:"));
age = parseInt(prompt("Inserisci la tua età:"));

// console.log(distance, age);

// discount
if (age >= 65) {
    discount = 0.4;
}
else if (age < 18) {
    discount = 0.2;
}
else {
    discount = 0;
}

// console.log(discount);

// price
let tot= tariff * distance;
price = (tot - (tot * discount)).toFixed(2);

// output
console.log("Il prezzo è di " + price + "€");


