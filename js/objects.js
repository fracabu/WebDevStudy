/*
const product = {
    name : 'socks',
    price: 1090
};
console.log(product); // stampa "{name: 'socks', price: 1090}"
console.log(product.name); // stampa "sokcs"
console.log(product.price); // stampa "1090"

// cambiare valore alla proprietà name dell'oggetto product
product.name = 'cotton socks';
console.log(product); // stampa "{name: 'cotton socks', price: 1090}"

// aggiungere una nuova proprietà
product.newProperty = true;
console.log(product) // stampa "{name: 'cotton socks', price: 1090 , newProperty: true}"



*/
/*
const product2 = {
    name:'xbox series x',
    price: 1590,
    'delivery time' : '1 day',
    rating:{
        stars: 4.5,
        count: 87
    },
    fun: function function1(){
        console.log('function inside object')
    }
}

console.log(product2);
console.log(product2.name);
console.log(product2.price);
console.log(product2['name']);
console.log(product2['price']);
console.log(product2['delivery time']);

console.log('this product has', product2.rating.count, 'count');
console.log('this product has', product2.rating.stars, 'stars');
product2.fun();

console.log(typeof product2.price);

// gli oggetti js possono essere trasformati in json

console.log('questo è un oggetto js convertito in json con stringify ', JSON.stringify(product2));

// oggetto converito da json a js
const jsonString = JSON.stringify(product2);
console.log(JSON.parse(jsonString));

// LocalStorage save values more permanently

localStorage.setItem('message' , 'hello');

*/

/*

// creo un oggetto con due proprietà e due valori
const product3 = {
    name: 'basketball', 
    price: 2095,
    'delivery time' : '3 day',
}
// incremento il prezzo di 500
product3.price += 500;
// stampo il prezzo con il valore incrementato
console.log(product3.price);
// stampo il prezzo aggiornato
console.log(product3);

*/


// const product3 = {
//     name: 'basketball', 
//     price: 2095,
//     'delivery time' : '3 day',
// }

// const product4 = {
//     name: 'baseball',
//     price: '25',
//     'delivery time' : '3 day',
// }

// function comparePrice(productA,productB){
//  if(productA.price <= productB.price){
//     return productA;

//  }else{
//     return productB;
//  }
// }

// // salvo il risultato della funzione dentro una variabile

// const cheaperProduct = comparePrice(product3,product4);
// console.log(cheaperProduct);


/*Crea una funzione che prende un array di numeri e restituisce:

La somma di tutti i numeri nell'array.
Il numero più grande.
Il numero più piccolo.

*/



/*


//Hai un oggetto che rappresenta un veicolo.
// Scrivi una funzione che modifica il colore del veicolo
// e aggiunge un proprietario.

// Definizione dell'oggetto vehicle con le sue proprietà iniziali.
const vehicle = {
    brand: 'Ford',
    model: 'Mustang',
    year: 2023,
    color: 'red'
};

// Definizione della funzione updateVehicle. 
// La funzione prende come parametri il veicolo, il nuovo colore e il nuovo proprietario.
function updateVehicle(vehicle, newColor, owner) {
    vehicle.color = newColor;  // Aggiorna il colore del veicolo con il nuovo colore fornito.
    vehicle.owner = owner;     // Aggiunge la proprietà owner all'oggetto vehicle e la imposta con il valore fornito.
}

// Chiamata della funzione updateVehicle per aggiornare l'oggetto vehicle.
updateVehicle(vehicle, 'yellow', 'Alice');

// Stampa dell'oggetto vehicle aggiornato per visualizzare le modifiche.
console.log(vehicle);


*/

/*
const learningPath = {
    copilot: 'off',
    chatGPT: 'off',
    documentation: 'on',
    exercises: 'on',
    startLearning: function() {
        console.log(`Stato attuale: CoPilot ${this.copilot}, Chat GPT ${this.chatGPT}`);
        console.log(`È tempo di accendere: Documentazione ${this.documentation}, Esercizi ${this.exercises}`);
        if(this.documentation === 'on' && this.exercises === 'on') {
            console.log('Inizia il tuo percorso di apprendimento con solide basi e pratica costante. Buona fortuna!');
        } else {
            console.log('Per imparare efficacemente, assicurati di leggere la documentazione ufficiale e fare molti esercizi!');
        }
    }
};

learningPath.startLearning();


*/



// **Esercizio: Gestione di un Negozio di Libri**

// 1. **Aggiungere nuovi libri al negozio**:
//    - Scrivi una funzione `addBook` che prende quattro parametri: `bookstore`, `title`, `author`, e `quantity`.
//    - La funzione deve aggiungere un nuovo oggetto libro all'oggetto `bookstore`. Il titolo del libro sarà la chiave e avrà un oggetto come valore che contiene `author` e `quantity`.

// 2. **Aggiornare la quantità di un libro specifico**:
//    - Scrivi una funzione `updateQuantity` che prende tre parametri: `bookstore`, `title`, e `quantity`.
//    - La funzione deve aggiornare la quantità del libro specificato nel `bookstore`.

// 3. **Rimuovere un libro dal negozio**:
//    - Scrivi una funzione `removeBook` che prende due parametri: `bookstore` e `title`.
//    - La funzione deve rimuovere il libro con il titolo specificato dall'oggetto `bookstore`.

// 4. **Stampare in console il titolo e l'autore dei libri disponibili in magazzino**:
//    - Scrivi una funzione `printBooksInStock` che prende un parametro: `bookstore`.
//    - La funzione deve iterare attraverso tutti i libri nel `bookstore` e stampare in console il titolo e l'autore di ogni libro che ha una quantità maggiore di zero.

// Suggerimento: Ricorda di controllare se il libro esiste già prima di aggiungerlo o di aggiornarne la quantità e considera cosa fare se si cerca di rimuovere un libro che non esiste.


const bookstore = {
    'The Great Gatsby': {
        author: 'F. Scott Fitzgerald',
        quantity: 5
    },
    '1984': {
        author: 'George Orwell',
        quantity: 8
    }
    

};

function addBook(bookstore, title, author, quantity) {
    // Controlla se il libro esiste già nel negozio
    if (bookstore[title]) {
        console.log('Il libro esiste già. Aggiornare la quantità o modificare il titolo.');
        // aggiorna la quantità se il libro esiste già
         bookstore[title].quantity += quantity;
    } else {
        // Aggiungi il nuovo libro al negozio
        bookstore[title] = {
            author: author,
            quantity: quantity
        };
        console.log(`Il libro '${title}' è stato aggiunto con successo.`);
    }
}
// Aggiungi un nuovo libro
addBook(bookstore, 'Il piccolo principe', 'Antoine de Saint-Exupéry', 4);

// Aggiorna la quantità di un libro esistente
addBook(bookstore, 'The Great Gatsby', 'F. Scott Fitzgerald', 2);

console.log(bookstore);


function copyCode() {
    // Ottieni il testo del codice e sostituisci i tag <br> con nuove linee
    const code = document.querySelector('.code-container code').innerHTML.replace(/<br>/g, '\n');
    
    // Utilizza l'API Clipboard per copiare il testo negli appunti
    navigator.clipboard.writeText(code).then(function() {
        //  mostra un messaggio di conferma
        alert('Codice copiato negli appunti!');
    }).catch(function(error) {
        // Gestisci gli errori, ad esempio se l'accesso agli appunti è negato
        console.error('Errore nel copiare il testo: ', error);
        alert('Errore nel copiare il codice.');
    });
}