// le funzioni servono per riutilizzare il codice

// Return serve per estrarre un valore da una funzione

//Parametri servono per passare un valore alla funzione

// function function1() {
//     console.log("prova 1");
//     console.log("prova 2")
// }

// function1();

// esempio di funzione con parametri

// function calculateTax(cost , taxRate){
//     console.log(cost * taxRate);

// }
// calculateTax(1000, 0.22);
// calculateTax(2000, 0.22);

// crea una funzione chiamata greet che stampa il messaggio 'Hello!' in console. Chiama la funzione qualche volta 
// usando greet()
// aggiungi un parametro chiamato name alla funzione greet e stampa il messaggio 'Hello ${name}!'
// chiama la funzione con nomi diversi greet('Simon')

// chima greet senza un nome e ricevi 'Hello undefined'
// modifica la funzione in modo che se name è undefined stampa 'hi there'

// let name = '';

// function greet(name){
//     console.log('hello' +  `${name}` , 'nice to meet u!');
//     // if (name === undefined) sapendo che è undefined e quindi falsy posso utilizzare if (!name)
//     if (!name){
//         console.log('hi there!')
//     }
// }

// greet('antonio');
// greet('luigi');

// greet();


/**************esercizio******************/

// crea una funzione che converte i gradi celsius in gradi fahrenheit

// creo la funzione e gli passo celsius come input e mi ritorna la formula per il calcolo
function convertFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// dichiaro una variabile e le assegno un valore
let tempCelsius = 25;
// il risultato della funzione viene salvato nella variabile tempFahrenheit
let tempFahrenheit = convertFahrenheit(tempCelsius);
// stampa il risultato in console
console.log(tempCelsius + "°C è equivalente a " + tempFahrenheit + "°F");


// crea una funzione che converte i gradi fahrenheit in celsius

function convertCelsius(fahrenheit){
    return (fahrenheit -32) * 5 / 9;
}
tempFahrenheit = 86;

tempCelsius = convertCelsius(tempFahrenheit);
console.log(tempFahrenheit + "°F è equivalente a " + tempCelsius + "°C");

// crea una funzione convertTemperature(degrees,unit) che prende un numero e una unità C o F e lo converte nell'altra unita
// ritorna una stringa e prova a riusare le funzioni precedenti

// Funzione per convertire la temperatura in base all'unità fornita
function convertTemperature(degrees, unit) {
    if (unit === 'C') {
        // Converti da Celsius a Fahrenheit
        let fahrenheit = convertFahrenheit(degrees);
        return degrees + "°C è equivalente a " + fahrenheit + "°F";
    } else if (unit === 'F') {
        // Converti da Fahrenheit a Celsius
        let celsius = convertCelsius(degrees);
        return degrees + "°F è equivalente a " + celsius + "°C";
    } else  {
        return "Unità non riconosciuta. Usa 'C' per Celsius o 'F' per Fahrenheit.";
    }
}

// Test della funzione convertTemperature
console.log(convertTemperature(25, 'C'));  // Output: "25°C è equivalente a 77°F"
console.log(convertTemperature(77, 'F'));  // Output: "77°F è equivalente a 25°C"
console.log(convertTemperature(50, 'X'));  // Output: "Unità non riconosciuta. Usa 'C' per Celsius o 'F' per Fahrenheit."
