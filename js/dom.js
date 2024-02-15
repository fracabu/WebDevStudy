// questo codice rimuove tutto quello che c'è nel body e lo sostituisce con la stringa 'Hello'
/*
document.body.innerHTML = 'Hello';
document.title = 'Laziomerda';
*/

/*
console.log(document.title);
document.title = 'changed';

console.log(document.body);


// la proprietà innerHTML serve per sostituire tutto il contenuto del body
// con il valore che gli passo che può essere una stringa o un elemento html
document.body.innerHTML = '<button class= "btn"> boss</button>';
console.log(typeof document.body)

// i metodi in js sono funzioni unzioni associate agli oggetti, che forniscono 
//un meccanismo per operare sui dati dell'oggetto o per eseguire azioni relative all'oggetto stesso.
*/

// per ottenere elementi dal dom
// console.log(document.querySelector('button'));
// document.querySelector('button').innerHTML = 'bravo';

// console.log(document.querySelector('.btn'));


// let message = 'daje';
// function printMessage(){
//     alert(message);
// }

// const buttonElement = document.querySelector('.btn');
// console.log(buttonElement);

// const buttonElement = document.querySelector('.js-button');

const titleOfParagraph = document.querySelector('.js-title');
titleOfParagraph.innerText = 'YouTube Subscribe Button';



function subscribe() {
    const titleOfParagraph = document.querySelector('.js-title');
    titleOfParagraph.innerText = 'YouTube Subscribe Button';
    const buttonElement = document.querySelector('.js-button');
    // innerText o textContent per ottenere/confrontare il testo del bottone
    if (buttonElement.innerText === 'Subscribe') {
        buttonElement.innerText = 'Subscribed'; // Assegno un nuovo valore usando innerText o textContent
        buttonElement.classList.add('is-subscribed');
        const paragraphElement = document.querySelector('.js-paragraph');
        paragraphElement.innerText = 'u r subscribed';
        paragraphElement.classList.add('js-red-title');
        titleOfParagraph.classList.add('title-color');

    } else {
        buttonElement.innerText = 'Subscribe'; // Assegno un nuovo valore usando innerText o textContent
        buttonElement.classList.remove('is-subscribed');
        const paragraphElement = document.querySelector('.js-paragraph');
        paragraphElement.innerText = 'u r unsuscribed' ;
        paragraphElement.classList.remove('js-red-title');
        const titleOfParagraph = document.querySelector('.js-title');
        titleOfParagraph.classList.remove('title-color');

    }
}


