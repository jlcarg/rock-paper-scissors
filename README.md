# rock-paper-scissors

## Version One

This is the third project in The Odin Project Foundations curriculum and the first using Javascript. It is a Rock Paper Scissors game using only the console. 

1. Declare getComputerChoice function that gets a random number between 1 and 3 included. This number is then utilized to determine the computer choice: 1 = Rock, 2 = Paper, and 3 = Scissors. This function returns a variable that represents the computer's choice.
2. Declare getHumanChoice, a function that prompts the player to get a choice for the round. The answer is stored inside a variable and it is returned as the player's choice.
3. Declare function called playGame
    - Inside this function we declare three variables (humanScore, computerScore, and roundNumber) and a function to play a single round.
    - Play round function:
        - 2 parameters, humanChoice and computerChoice
        - Compare the two choices and determines the outcome of the round
        - Change one of the score variables depending on the result of the round
        - Add 1 to the roundNumber variable
    - Call 5 times the playRound function passing the returned values from invoking the getHumanChoice and getComputerChoice as the 2 arguments
    - Compares the score variables after 5 rounds and declares the winner or if it ended in a draw
4. Call playGame function

## Version Two

After going through the first lesson on DOM Manipulation, we were tasked to add a basic UI to it. 

[Live Preview](https://jlcarg.github.io/rock-paper-scissors/)

## Practiced skills

* Use git and github
* Practice to commit early and often
* Practice writing good commit messages
* Javascript
    - Declaring Variables
    - Expressions and Operators
    - Function Basics
    - Understanding Errors
        - Using developer Tools to identify, understand and fix errors
    - Conditionals

## About The Odin Project

> The Odin Project is one of those "What I wish I had when I was learning" resources. Not everyone has access to a computer science education or the funds to attend an intensive coding school and neither of those is right for everyone anyway. This project is designed to fill in the gap for people who are trying to hack it on their own but still want a high quality education.

[The Odin Project](https://www.theodinproject.com/)  
[Project: Rock Paper Scissors](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors)

