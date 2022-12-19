const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
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

function game() {
    let p1Score = 0;
    let p2Score = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Choose an option: Rock, Paper, or Scissors.');
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        switch(result) {
            case 1:
                p1Score++;
                console.log(`You win! ${playerSelection} beats ${computerSelection}`);
                break;
            case 0:
                console.log(`You tied. ${playerSelection} ties with ${computerSelection}`);
                break;
            case -1:
                p2Score++;
                console.log(`You lose! ${playerSelection} loses to ${computerSelection}`);
                break;
    }

    }

    console.log(`The score is ${p1Score} : ${p2Score}`);
    if (p1Score > p2Score) console.log('Congratulations! You won!');
    else if (p1Score < p2Score) console.log('You lost! Unlucky :(');
    else console.log('Wow, you tied!');
}

game();