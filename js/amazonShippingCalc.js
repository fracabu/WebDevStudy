document.title = 'Amazon Shipping Calculator';
document.getElementById('p-1').innerText = 'Orders under $40 = +$10 shipping ';
document.getElementById('p-2').innerText = 'Orders over $40 = FREE shipping';
// document.querySelector('div').innerText = 'test';


// creo la funzione calculate 
// ottengo il valore inserito dall'utente e lo salvo in una variabile
//salvarlo in una variabile per poterlo usare dopo
// creare le condizioni
// ottenere un result
// mostrare il result



function handleCostKeyDown(event){
    console.log(event.key);
    if(event.key === 'Enter'){
        calculate();
    }
}
document.querySelector('.js-input').addEventListener('keydown', handleCostKeyDown);


function calculate() {
    // Correggi il selettore aggiungendo il punto '.' per classi CSS
    const inputElement = document.querySelector('.js-input'); 
    let cost = Number(inputElement.value); // Number per convertire in numero 
    console.log(cost);
    console.log(typeof cost);

    if (cost < 40) {
        cost += 10; // Aggiunge 10 al costo se inferiore a 40
    }

    // Aggiorna il contenuto dell'elemento con classe .js-total-cost
    document.querySelector('.js-total-cost').innerHTML = `Total cost is: $${cost}`;
}

