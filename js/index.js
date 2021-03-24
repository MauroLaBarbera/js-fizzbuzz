/**
 * Scrivi un programma che stampi i numeri da 1 a 100, 
 * ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
 *  Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
 */

//GENERAZIONE NUMERI

var numero = 100;
var x = 0;

for (var i = 1; i <= numero; i++) {
    if ( ( i % 5 == 0) && ( i % 3 == 0) ) {
        x = 'fizzbuzz';
    } else if ( i % 5 == 0) {
        x = 'buzz';
    } else if (i % 3 == 0) {
        x = 'fizz';
    } else {
        x = i;
    }
    console.log('Numero ' + x);
}