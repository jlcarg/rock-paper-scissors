let humanScore = 0;
let computerScore = 0;

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
    let humanChoice =  prompt("Please select between Rock, Paper and Scissors:\n");
    humanChoice = humanChoice[0].toUpperCase() + humanChoice.substring(1).toLowerCase();
    return humanChoice
}

console.log(`Human's choice is: ${getHumanChoice()}`)
console.log(`Computer's choice is: ${getComputerChoice()}`)

// Write logic to play single round





// Create logic to play 5 rounds