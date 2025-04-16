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

console.log(`Computer's choice is: ${getComputerChoice()}`)


// Create user's choice function with input

// Create Function that compares both choices and returns Winner

// Create logic to keep track of score

// Create logic to play 5 rounds