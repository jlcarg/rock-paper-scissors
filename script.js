let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;

// Create computer's random choice function
function getComputerChoice () {

    let randomInt = getRandomInt(1, 4);
    let computerChoice;
    switch (randomInt) {
        case 1:
            computerChoice = "Rock";
            break;
        case 2:
            computerChoice = "Paper";
            break;
        case 3:
            computerChoice = "Scissors";
            break;
    }
    return computerChoice

}

function getRandomInt (min, max) {

    let randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber

}

// Create user's choice function with input

function  getHumanChoice () {

    let humanChoice =  prompt("Please select between Rock, Paper and Scissors:");
    humanChoice = humanChoice[0].toUpperCase() + humanChoice.substring(1).toLowerCase();
    return humanChoice

}



// Write logic to play single round

function playRound (humanChoice, computerChoice) {

    console.log(`Round number ${roundNumber}`)
    console.log(`Human's choice is: ${humanChoice}`)
    console.log(`Computer's choice is: ${computerChoice}`)

    if (humanChoice === computerChoice) {

        console.log(`It's a draw! You both chose ${humanChoice}!`);

    } else if (humanChoice === "Rock" && computerChoice === "Scissors" ||
        humanChoice === "Paper"  && computerChoice === "Rock" ||
        humanChoice === "Scissors" && computerChoice === "Paper") {

        console.log(`You Win! ${humanChoice} beats ${computerChoice}!`);
        humanScore += 1;

    } else {

        console.log(`You Lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore += 1;
    }

    console.log(`The current score is: \nPlayer ${humanScore} x ${computerScore} Computer`);
    roundNumber += 1;

    return

}

playRound(getHumanChoice(), getComputerChoice());

// Create logic to play 5 rounds