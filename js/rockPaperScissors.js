// creo l'oggetto per salvare lo score

// converto il json in oggetto js per poterlo utilizzare all'interno
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0

};


// if (score === null) 
/*
if(!score){
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
}
*/

function playGame(playerMove) {

    const computerMove = pickComputerMove();

    updateScoreElement();

    let result = '';

    if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = ('You lose!');
        } else if (computerMove === 'Paper') {
            result = ('You win!');
            generaCoriandoli();
        } else if (computerMove === 'Scissors') {
            result = ('Tie. Try again');
        }

    } else if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = ('Tie. Try again');
        } else if (computerMove === 'Paper') {
            result = ('You lose!');
        } else if (computerMove === 'Scissors') {
            result = ('You win!');
            generaCoriandoli();
        }
    }
    else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = ('You win!');
            generaCoriandoli();
        } else if (computerMove === 'Paper') {
            result = ('Tie. Try again');
        } else if (computerMove === 'Scissors') {
            result = ('You lose!');
        }
    }

    if (result === 'You win!') {
        score.wins += 1;
    } else if (result === 'You lose!') {
        score.losses += 1;
    } else if (result === 'Tie. Try again') {
        score.ties += 1;
    }

    // localStorage permette di salvare dati in modo più permanente ma accetta solo stringhe
    // quindi se devo covertire gli oggetti js in json

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = `${result}`.toUpperCase();
    document.querySelector('.js-move').innerHTML =  `You picked ${playerMove}. Computer picked ${computerMove}`.toUpperCase();
}


function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`.toUpperCase();
}

function pickComputerMove() {
    const randomNumber = (Math.random());
    let computerMove = '';
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'Scissors';
    }
    return computerMove;
}

function generaCoriandoli() {
    for (let i = 0; i < 200; i++) { // Genera 100 pezzi di coriandoli
        const coriandolo = document.createElement('div');
        coriandolo.classList.add('coriandolo');
        coriandolo.style.left = `${Math.random() * 100}%`; // Posizione casuale in orizzontale
        coriandolo.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // Colore casuale
        coriandolo.style.animationDuration = `${Math.random() + 2}s`; // Durata casuale dell'animazione
        coriandolo.style.opacity = 0; // Inizia invisibile per evitare un appaiono all'improvviso in cima
        document.body.appendChild(coriandolo);

        // Rimuovi il coriandolo dopo che l'animazione è completata per pulire il DOM
        coriandolo.addEventListener('animationend', function () {
            coriandolo.remove();
        });

        // Rendi il coriandolo visibile dopo un breve ritardo per farlo "cadere" dall'alto
        setTimeout(() => coriandolo.style.opacity = 1, 10);
    }
}

