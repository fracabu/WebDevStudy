// inserisco il titolo nell'header attraverso una classe
document.querySelector('.js-header-title').innerHTML = 'Javascript Arrays And Loops';
// recupero il data container e lo salvo
const container = document.getElementById('dataContainer');
// recupero il paragrafo e lo salvo
const paragraphElement = document.getElementById('paragraph');


// recupero elemento button e lo salvo
let myBtn = document.getElementById('btn');
// let clipboard = navigator.clipboard;
let message ='work in progress...try later'

function copyCode() {
    alert(message);

    // let code = document.querySelector('.js-code');
    // navigator.clipboard.writeText(code);



}

/***************************                 ****************************/
/*************************** Arrays And Loops****************************/
/***************************                 ****************************/

/*
const myArray = [10, 20, 30];
//console.log(myArray);
// stampa il primo numero dell'array
//console.log(myArray[0]);
// cammbia il valore del primo numero dell'array
myArray[0] = 99;
//console.log(myArray);


// creo un array con tipi di valori diversi
let mixedValuesArray = [1, 'string', true, { name: 'Francesco', age: 44 }];
// console.table(mixedValuesArray)
// console.log(mixedValuesArray[3]);

// modifico l'array inserendoci un altro array dentro
mixedValuesArray = [1, 'string', true, { name: 'Francesco' }, [1, 2]];
// verifico il tipo di valore dell'array che restuirà object
console.log(typeof [1, 2]);
// verifico se l'array è un array restituirà true
console.log(Array.isArray([1, 2]));
// utilizzo il metodo length per misurare la lunghezza dell'array cioè quanti valori contiene
console.log(myArray.length);
// inserisco un valore nell'array alla fine con push
myArray.push(100);
console.table(myArray);
// rimuovo un valore dall'array con splice passandogli l'indice e la posizione del valore da rimuovere
myArray.splice(2, 1)
console.table(myArray);

*/
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".js-example-btn").forEach(function(button) {
        button.addEventListener("click", function() {
            const targetId = button.getAttribute("data-target");
            const code = document.getElementById(targetId);
            if (code && !code.style.display || code.style.display === "none") { // Controlla se il codice è nascosto
                code.style.display = "block"; // Mostra il codice
                animateCode(code);
            }
        });
    });

    function animateCode(codeElement) {
        const fullText = codeElement.textContent;
        codeElement.textContent = ""; // Pulisce il testo iniziale

        let i = 0;
        function typing() {
            if (i < fullText.length) {
                codeElement.textContent += fullText.charAt(i);
                i++;
                setTimeout(typing, 50); // Regola la velocità di digitazione
            }
        }

        typing();
    }
});




// Esercizio: crea un array e rimuove l'ultimo elemento dell'array
let fruits = [
    "mela",
    "pera",
    "banana",
    "ananas",
    "fragola"
];
console.log(fruits)
// let removeItem = fruits.pop();
// console.log("Elemento rimosso:", removeItem);
// console.log("Array dopo pop()", fruits);

// aggiugno elemento all'array

let addItem = fruits.push("albicocca"); // aggiungo albicocca all'array
console.log("Elemento aggiunto:", fruits[fruits.length-1]); // l'ultimo elemento dell'array
console.log("Array dopo push()",  fruits); // stampo array aggiornato



/***************************                 ****************************/
/***************************       Loops     ****************************/
/***************************                 ****************************/



// ciclo while 
// fino a quando la condizione è vero esegue il codice nelle graffe se è false non lo esegue
// e passa al blocco di codice successivo
// dichiaro che i = 1 fino a quando i è minore o uguale a 10 stampa in console in numeri da 1 a 10
// se è falso

/*
let i = 1;

while (i <= 5) {
    console.log(i, 'ciclo while');
    i += 1;

}


for (let i = 1; i <= 5; i++) {
    console.log(i, 'ciclo for');
    
}


let randomNumber = 0;

while(randomNumber < 0.5){
    randomNumber = Math.random();
}
console.log(randomNumber);
*/

// ciclare dentro un array e stampare i valori

// const todolist = [
//     'make dinner',
//     'lava i piatti',
//     'studia javascript'
// ];

// for (let index = 0; index < todolist.length; index++){
//     console.table(index);
//     let value = todolist[index];
//     console.table(value);
// }

// const calciatori = [
//     'dybala',
//     'el sharawi',
//     'lucacu'
// ]

// for(let index = 0; index < calciatori.length; index++){
//     console.log(index);
//     let value = calciatori[index];
//     console.log(value);

// }

// calciatori.push('zoff');
// console.table(calciatori);
// calciatori.splice(3, 1);
// console.log(Array.isArray(['dybala', 'el sharawi', 'lucacu']) + '', 'è un array');

// calcola la somma di un array di numeri
// accumulator pattern : creo una variabile per storare il result poi ciclo nell'array e 
// aggiorno il result

const nums = [1, 1, 2];
let total = 0;

for (let i = 0;i < nums.length; i++){
    const num = nums[i];
    total += num;
    
}

console.log(total);

