//inizializzazione variabile, dichiarazione variabile, assegnazione variabile
let variable1 = 3;
console.log(variable1);

// variabile per fare una somma semplice e stampare in console il risultato

const calculation = 2 + 2;
console.log(calculation);

// variabile per fare una somma semplice e stampare in console il risultato
const result = calculation + 2;
console.log(result)

// stampa un messaggio in console
const message = "Hello World";
console.log(message);

let variable2 = ';';
console.log(variable2);


//riassegnazione variabile
variable1 = 5;
console.log(variable1);

variable1 = variable1 + 1;
console.log(variable1);

//dichiarazione variabile con var
var variable3 = 10;
console.log(typeof variable3);
console.log(typeof message);

function copyCode() {
    // Ottieni il testo del codice e sostituisci i tag <br> con nuove linee
    const code = document.querySelector('.code-container code').innerHTML.replace(/<br>/g, '\n');
    // Utilizza l'API Clipboard per copiare il testo negli appunti
    navigator.clipboard.writeText(code).then(function () {
        showDialog() ;
    }).catch(function (error) {

        // Gestisci gli errori, ad esempio se l'accesso agli appunti è negato
        console.error('Errore nel copiare il testo: ', error);
        showDialog() ;

    });
}

// Ottieni l'elemento della finestra di dialogo
var modal = document.getElementById("myModal");

// Ottieni l'elemento <span> che chiude la finestra di dialogo
var span = document.getElementsByClassName("close")[0];

// Quando l'utente clicca sul <span> (x), chiudi la finestra di dialogo
span.onclick = function() {
  modal.style.display = "none";
}

// Funzione per mostrare la finestra di dialogo
function showDialog() {
  modal.style.display = "block";
}

// Quando l'utente clicca da qualsiasi parte fuori dalla finestra di dialogo, chiudila
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


