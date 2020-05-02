const headsBtn = document.querySelector('#heads');
const tailsBtn = document.querySelector('#tails');

const p0 = document.querySelector('#p0');
const computer = document.querySelector('#p1');
const whoWins = document.querySelector('#p2');
const winCount = document.querySelector('#p3');

const arr = ['Heads', 'Tails'];

let playerWins = 0;
let computerWins = 0;

headsBtn.addEventListener('click', winner);
tailsBtn.addEventListener('click', winner);

function winner(e) {

    const playerChoice = e.target.innerHTML; //e.target allows you to see which element was clicked

    p0.textContent = "";

    const coinFlip = random(); //generate coin toss
    const toss = arr[coinFlip]; //either heads or tails

    computer.textContent = `Computer Selected ${toss}`;
    let winner;
    if(playerChoice === toss) {
        winner = 'Player Wins';
        playerWins++;
    }
    else {
        winner = 'Computer Wins';
        computerWins++;
    }

    whoWins.textContent = winner;
    winCount.textContent = `Player ${playerWins} Computer ${computerWins}`;
}

function random() {
    return Math.floor(Math.random() * arr.length);
}
