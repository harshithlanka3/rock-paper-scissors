const choices = ['Rock', 'Paper', 'Scissors'];
let score1 = 0;
let score2 = 0;
const ENDSCORE = 5;

const p1score = document.querySelector('#p1_score');
const p2score = document.querySelector('#p2_score');
const roundResult = document.querySelector('.round-result')
const options = document.querySelector('.options').childNodes;
const final = document.querySelector('.final');
const gameResult = document.querySelector('.game-result');
const restartButton = document.querySelector('.restart');

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function round(e) {
    const playerSelection = this.textContent;
    const result = playRound(playerSelection);
    switch(result) {
        case 1:
            roundResult.textContent = `Round Result: You chose ${playerSelection} and WON this round!`;
            score1++;
            p1score.textContent = score1;
            if (score1 == ENDSCORE) {
                endGame();
            }
            break;
        case 0:
            roundResult.textContent = `Round Result: You chose ${playerSelection} and TIED this round.`;
            break;
        case -1:
            roundResult.textContent = `Round Result: You chose ${playerSelection} and LOST this round :(`;
            score2++;
            p2score.textContent = score2;
            if (score2 == ENDSCORE) {
                endGame();
            }
            break;
    }
}

function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') return 0;
        if (computerSelection === 'paper') return -1;
        if (computerSelection === 'scissors') return 1;
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') return 1;
        if (computerSelection === 'paper') return 0;
        if (computerSelection === 'scissors') return -1;
    }
    else {
        if (computerSelection === 'rock') return -1;
        if (computerSelection === 'paper') return 1;
        if (computerSelection === 'scissors') return 0;
    }
}

function endGame() {
    final.classList.toggle('visibility');
    options.forEach(button => {
        button.removeEventListener('click', round);
    });
    if (score1 > score2) {
        gameResult.textContent = "You have won, congratulations! Want to play again?";
    } else {
        gameResult.textContent = "You lost... Want another go?";
    }
}

function restart() {
    final.classList.toggle('visibility');
    
    options.forEach(button => {
        button.addEventListener('click', round);
    });

    score1 = 0;
    score2 = 0;

    p1score.textContent = 0;
    p2score.textContent = 0;

    roundResult.textContent = '';
}

function start() {
    options.forEach(button => {
        button.addEventListener('click', round);
    });
    
    restartButton.addEventListener('click', restart);
}

start();