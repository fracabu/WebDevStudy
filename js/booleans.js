/*Booleans are another data type in JavaScript. They are either true or false.
true
false
// Booleans are used to compare values using comparison operators.
console.log(3 < 5); // stampa true
console.log(3 === 5); // stampa false
console.log(3 === 3); // stampa true
console.log(3 == '3'); // stampa true ma non è buona pratica perché non controlla il tipo
console.log(3 !== 5); // stampa true
console.log(3 > 5); // stampa false


// Comparisons operators have the same precedence as arithmetic operators

// <   less than
// >   greater than
// <=  less than or equal to
// >=  greater than or equal to
// === equal to
// !== not equal to

// console.log(5 === '5.00'); // false (different types)

// if(false) {
//     console.log('This code runs if the condition is true');
// }else {
//     console.log('This code runs if the condition is false');
// }

// If Statements
// If statements are used to run code only if a condition is true.
// If the condition is false, the code is not executed.

// if (condition) {
//     // code to run if condition is true
// }

// if(30 >= 16) {
//     console.log('you can drive a car');
// }




// If else statements are used to run code when a condition is true and another code when the condition is false.
// if (condition) {
//     // code to run if condition is true
// } else {
//     // code to run if condition is false
// }

// const age = 15;

// if(age >= 16) {
//     console.log('you can drive a car');
//     console.log('congratulations');
// }else if(age>=14){
//     console.log('Almost there');
// } else {
//     console.log('you cannot drive a car');
// }

// Syntax Rules for if else statements
// if and else must be lowercase
// there must be a space between if and the condition
// there must be a space between else and the opening curly brace
// there must be a space between the closing parenthesis and the opening curly brace
// there must be a space between the closing curly brace and else
// there must be a space between else and the opening curly brace for the else code block

*/

/*
// Logical Operators
// Logical operators are used to combine multiple conditions.
// &&  and

// ||  or
// !   not

console.log('Verifico se i due valori a destra e sinistra di && sono true:', true && true);
 // true
console.log('se i due valori non sono entrambi true mi restituisce false:', true && false); // false

console.log( 0.2 >= 0 && 0.2 < 1 / 3); // true

// or operator
console.log(true || false); // true

// not operator
console.log(!true); // false

+/

/**********************ruthy and Falsy value**********************/
// All values in JavaScript are either truthy or falsy.
// Values that are considered falsy are treated as false when encountered in a Boolean context.
// Values that are considered truthy are treated as true when encountered in a Boolean context.

// Falsy values
// false
// 0
// ''
// null
// undefined
// NaN

// Truthy values
// true
// 1
// 'hello'
// -5
// {}
// []

// esempio di utilizzo di truthy e falsy value

// se il valore di una variabile è truthy allora stampa il valore della variabile

/*
// dichiaro una variabile e le assegno un valore truthy
    const cartQuantity = 1;
// se il valore della variabile è truthy allora stampa il messaggio con il valore della variabile
    if(cartQuantity){
        console.log(`You have ${cartQuantity} products in your cart`);

    }

    // zero è un valore false però viene flippato
    console.log(!0);

    // se provo a fare un calcolo tra stringa e numero ottengo NaN
    console.log('text' / 5);    

    // in questo modo posso verificare se una variabile è undefined    
    let variabile1;
    console.log(variabile1);


*/

// ShortCut per operatore ternario

// true rappresenta la condizione che deve essere verificata
// ? rappresenta il punto interrogativo
// 'truthy' rappresenta il valore che deve essere restituito se la condizione è true
// : rappresenta i due punti
// 'falsy' rappresenta il valore che deve essere restituito se la condizione è false


true ? 'truthy' : 'falsy';

// è possibile salvare il valore restituito da un operatore ternario in una variabile
const result = true ? 'truthy' : 'falsy';
console.log(`Il risultato di questa condizione ("true ? 'truthy' : 'falsy';") è : "${result}". True rappresenta
la condizione che deve essere verificata, ? rappresenta il punto interrogativo, 'truthy' rappresenta il valore che deve essere restituito se la condizione è true, : rappresenta i due punti, 'falsy' rappresenta il valore che deve essere restituito se la condizione è false
é la shortcut di: let result; if(true){ result = 'truthy'; }else{ result = 'falsy'; }`);

// Guard operator (&&)
// && è usato per controllare se una variabile è truthy o falsy
// se la variabile è truthy allora viene restituito il valore della variabile
// se la variabile è falsy il codice dopo && non viene eseguito e viene restituito il valore della variabile
console.log('Guard operator (&&) è usato per controllare se una variabile è truthy o falsy. Se la variabile è truthy allora viene restituito il valore della variabile. Se la variabile è falsy il codice dopo && non viene eseguito e viene restituito il valore della variabile');
console.log('Esempio di utilizzo di && con una variabile truthy "true && console.log(This code is never executed)"');
true && console.log('This code is never executed');

message = false && 'hello'; // stampa false perché il codice dopo && non viene eseguito
console.log(message);

message = true && 'questo codice viene eseguito perchè la variabile message è stata riassegnata da false a true e il programma esegue il codice dopo &&'; // stampa hello perché il codice dopo && viene eseguito
console.log(message);

// scrivi un programma che saluta Federica e chiede se vuole un caffè
// se Federica risponde si allora il programma risponde con un messaggio di conferma

// alert('Ciao Federica, vuoi un caffè?');
// let answer = prompt('Rispondi con si o no');
// message = answer === 'si' && 'Ok, ti porto un caffè';
// console.log(message);

// default operator (||)
// || è usato per controllare se una variabile è truthy o falsy
// se la variabile è truthy allora viene restituito il valore della variabile
// se la variabile è falsy allora viene restituito il valore dopo ||
console.log('default operator (||) è usato per definire una valore di default per una variabile. Se la variabile è truthy allora viene restituito il valore della variabile. Se la variabile è falsy allora viene restituito il valore dopo ||');
console.log('Esempio di utilizzo di || con una variabile truthy "true || console.log(This code is never executed)"');
true || console.log('This code is never executed');
false || console.log('This code is executed');

// Esempio : in questo esempio definisco un valore di default truthy per la variabile currency quindi viene
// restituito il valore della variabile currency sena eseguire il codice dopo ||
let currency = 'EUR' || 'USD';
console.log(currency);

currency = undefined || 'USD'; // in questo esempio definisco un valore di default falsy per la variabile currency quindi viene
// restituito il valore dopo ||
console.log(currency);

// crea una variabile chiamata hour e salva il corrente valore di ora e data usando il formato 24 ore
// se l'ora è minore di 12 allora stampa buongiorno
// se l'ora è maggiore o uguale a 12 allora stampa buonasera
// usa l'operatore ternario per risolvere questo esercizio

// let hour = new Date().getHours();
// console.log(hour);
// let greeting = hour < 12 ? 'Buongiorno' : 'Buonasera';
// console.log(greeting);

// dichiaro un variabile e come valore le assegno un oggetto
let date = new Date();
// dichiaro una variabile e come valore le assegno il giorno del mese
let day = date.getDate();
// dichiaro una variabile e come valore le assegno il mese
let month = date.getMonth() + 1; // I mesi iniziano da 0 in JavaScript
// dichiaro una variabile e come valore le assegno l'anno
let year = date.getFullYear();
// dichiaro una variabile e come valore le assegno le ore
let hours = date.getHours();
// dichiaro una variabile e come valore le assegno i minuti
let minutes = date.getMinutes();
// dichiaro una variabile e come valore le assegno i secondi
let seconds = date.getSeconds();
// dichiaro una variabile e come valore le assegno la data formattata
let formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
// stampo la data formattata
console.log(formattedDate);


// let firstName = 'Federica';
// let lastName = 'Tuti';
// let age = 7;

// let message = age >= 18 
//     ? `${firstName} ${lastName} is an adult` 
//     : age >= 8 
//         ? `${firstName} ${lastName} is a child` 
//         : `${firstName} ${lastName} is a baby`;

// console.log(message);

    // ternary operator
    // condition ? true : false;
    // se la condizione è true allora viene eseguito il codice dopo ?
    // se la condizione è false allora viene eseguito il codice dopo :


    document.body.style.background = 'yellow'; // rende il background rosso
    // rendi i titoli gialli
    document.querySelector('h1').style.color = 'black';
    
    
    // rendi i paragrafi gialli
    document.querySelector('p').style.color = 'black';
    // rendi il titolo dell'header giallo
        document.querySelector('header').style.color = 'black';

        // se l'h1 è dell'header è nero rendilo giallo
        document.querySelector('header h1').style.color = 'yellow';


    
