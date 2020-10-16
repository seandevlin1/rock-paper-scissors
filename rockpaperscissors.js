/*
===================
ROCK PAPER SCISSORS
===================

1. *DONE* Your game is going to play against the computer,
so begin with a function called computerPlay that will
randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

2. We’ll use this function in the game to make the
computer’s play. Write a function that plays a single
round of Rock Paper Scissors. The function should take two
parameters - the playerSelection and computerSelection -
and then return a string that declares the winner of the
round like so: "You Lose! Paper beats Rock"

3. *DONE* Make your function case insensitive (so users can input
rock, ROCK, RocK or any other variation)

4. Important note: you want to return the results of this
function call, not console.log() them.

5. Write a NEW function called game(). Use the previous
function inside of this one to play a 5 round game that
keeps score and reports a winner or loser at the end.
    
    a. You have not officially learned how to “loop” over
    code to repeat function calls… if you already know about
    loops from somewhere else (or if you feel like doing
    some more learning) feel free to use them. If not, don’t
    worry! Just call your playRound function 5 times in a
    row. Loops are covered in the next lesson.
*/

let roundCount = 0;
const moveOption = ["rock", "paper", "scissors"];

function comPlay() {
    const comChoice = Math.floor(Math.random() * moveOption.length);
    return comChoice;
}

function playRound(playerSelection, comSelection) {
    console.log("Game start!\n");
    let playerChoice = prompt(
    "Make your move! Rock, paper, or scissors?\n"
    );
    /*
    if (playerChoice is in moveOption) {
    do something
    }
    
    if (playerChoice.toLowerCase());
    */

    console.log("Computer chose " + comChoice + ".\n");

    // return roundCount += 1;
}

function keepPlaying() {
    let continuePlay = prompt("Play again?\n");
    /*
    TODO: switch case for whether the player wants to
    play again
    */
    switch (continuePlay) {
    case "Yes".toLowerCase():
    case "Y".toLowerCase():
    case "Sure".toLowerCase():
        game();
        break;
    }
}

function game() {
    comPlay();
    playRound(playerChoice, comChoice);
    keepPlaying();
}

game();