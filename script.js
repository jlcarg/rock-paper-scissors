function getRandomInt (min, max) {

    let randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber

}

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



function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    let roundNumber = 1;
    let scoreText = document.querySelector('.score');

    function checkWinner() {
        if (humanScore > 4) return true;
        else if (computerScore > 4) return true;
        else return false;
    }

    function playRound (humanChoice, computerChoice) {

        console.log(`Human's choice is: ${humanChoice}`)
        console.log(`Computer's choice is: ${computerChoice}`)

        let battlegroundText = document.querySelector('.battleground');
        let roundText = document.createElement("p");
    
        if (humanChoice === computerChoice) {
    
            console.log(`It's a draw! You both chose ${humanChoice}!`);
            roundText.textContent = `Round ${roundNumber}: It's a draw! You both chose ${humanChoice}!`;
            battlegroundText.appendChild(roundText);
    
        } else if (humanChoice === "Rock" && computerChoice === "Scissors" ||
            humanChoice === "Paper"  && computerChoice === "Rock" ||
            humanChoice === "Scissors" && computerChoice === "Paper") {
    
            console.log(`You Win this round! ${humanChoice} beats ${computerChoice}!`);
            roundText.textContent = `Round ${roundNumber}: You Win this round! ${humanChoice} beats ${computerChoice}!`;
            battlegroundText.appendChild(roundText);
            humanScore++;
    
        } else {
    
            console.log(`You Lose this round! ${computerChoice} beats ${humanChoice}!`);
            roundText.textContent = `Round ${roundNumber}: You Lose this round! ${computerChoice} beats ${humanChoice}!`;
            battlegroundText.appendChild(roundText);
            computerScore++;

        }

        scoreText.textContent = `Player ${humanScore} x ${computerScore} Machine`
        roundNumber++;
    
        return
    
    }
    
    let playerButtons = document.querySelectorAll(".button");
    let playerOptions = document.querySelector('.player-choice-box');
    
    playerButtons.forEach((button) => {
        let playerChoice = button.textContent;
        button.addEventListener("click", () => {

            playRound(playerChoice, getComputerChoice())

                if (checkWinner()) {

                const winnerText = document.createElement("div");
                winnerText.classList.add("winner-msg");
                scoreText.remove();

                    if (humanScore > 4) {

                        winnerText.textContent = `Congratulations, you Won! \nThe final score is: \nPlayer ${humanScore} x ${computerScore} Computer`;
                        playerOptions.replaceWith(winnerText);
                        
                        return;
                
                    } else {

                        winnerText.textContent = `Oh Shoot, you Lost! \nThe final score is: \nPlayer ${humanScore} x ${computerScore} Computer`;
                        playerOptions.replaceWith(winnerText);

                        return;
                    }

                }
        
            }
)
})
    
}

playGame();