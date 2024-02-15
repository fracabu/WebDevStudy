document.title = 'Todolist';


// creo l'array per storare le todo
// quando clicco add devo ottenere il testo inserito nell'input
// devo aggiungere il testo dell'input all'array
// stampo in console l'array aggiornato
// svuoto l'input

// creo l'array per storare le todo
let todoActivities = [];
// quando clicco add devo ottenere il testo inserito nell'input
function addTodo() {
    // ottendo l'input e lo salvo
    let inputName = document.querySelector('.js-name-input')
    // ottengo il valore inserito e lo salvo
    let name = inputName.value;
    //pusho il value dentro l'array
    todoActivities.push(name);
    // stampo l'array in console
    console.log(todoActivities);
    // svuoto l'input
    inputName.value = '';

}