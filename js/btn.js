let cartQuantity = 0;


// Naming convention
// camelCase = cartQuantiy is the standard naming convention for variables in JavaScript

// tre modi per creare variabili in JS
// var, let e const
// var è la vecchia versione di JS, non si usa più ma si può cambiare il valore della variabile in qualsiasi momento
// let è la nuova versione di JS, si usa sempre ma si può cambiare il valore
// const è la nuova versione di JS, si usa sempre ma non si può riassegnare

// rendi il titolo dell'header giallo
document.querySelector('header h1').style.color = 'yellow';
// rendi il background giallo
document.body.style.background = 'yellow';
// rendi tutti pulsanti neri con testo giallo
document.querySelectorAll('button').forEach(button => {
    button.style.background = 'black';
    button.style.color = 'yellow';
});