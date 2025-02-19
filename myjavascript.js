/* PSEUDOCODE SECTION */

/*
My goal is to create a simple program that emulates the Rock-Paper-Scissors game
via the Console. It will:
    1.) *Prompt the User to input (button select method) either Rock, Paper, or Scissors.*
    2.) *Randomly generate either a Rock, Paper, or Scissors value in response to User.*
    3.) *Then, it will evaluate the pair of values and determine the winner.*
    4.) *It will then tabulate a score until winning score is met by
        either the User or Console.*
    5.) *It will then display various cheezy responses for winning, losing, or tying.*
*/

//Later on, these variables will be used as input for the GUI witin HTML.
 const playerDisplay = document.getElementById("playerDisplay");
 const computerDisplay = document.getElementById("computerDisplay");
 const resultDisplay = document.getElementById("resultDisplay");

// Get computer choice randomly using an array.
const choices = ["rock", "paper", "scissors"]; //using and array makes sense here for the randomNumber function.

function getComputerChoice(choice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice;

}
let playerChoice = "";
function getPlayerChoice (choice) {
    playerChoice = prompt("Please enter rock, paper, or scissors.");
    return playerChoice.toLowerCase();

}

let playerScore=0;
let computerScore=0;

 function playGame(rounds) {
    let result = "";
    let i = 0;
    while (i < 5) {
        playRound();
        console.log("Score: " + playerScore + " vs " + computerScore);
        i++;
    }
    if (playerScore === computerScore) {
      result = "Your score: " + playerScore + " | " + "Computer score: " + computerScore + ". It's a tie! Lol try again."; 
      console.log(result); 
    } else if (playerScore > computerScore) {
      result = "Your score: " + playerScore + " | " + "Computer score: " + computerScore + ". You win the game!";
      console.log(result);
    } else {
      result = "Your score: " + playerScore + " | " + "Computer score: " + computerScore + ". You lose the game!"
      console.log(result);
    }

    playerScore = 0;
    computerScore = 0;
    i = 0;

 }

 
 function playRound(playerChoice, computerChoice) {
    const playerSelection = getPlayerChoice();
    //console.log(playerSelection);
    const computerSelection = getComputerChoice();
    //console.log(computerSelection);
    let result = "";
    
    if(playerSelection == computerSelection) {
        result = "It's a draw!";
        console.log("You: " + playerSelection + " | " + "Computer: " + computerSelection + ". " + result)
    }
    else if(playerSelection !== "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        result = "Invalid selection!";
        console.log("You: " + playerSelection + " | " + "Computer: " + computerSelection + ". " + result)
    }
    else {
        switch(playerSelection) {
            case "rock":
                if(computerSelection === "scissors") {
                    result= "You win the round!";
                    console.log("You: " + playerSelection + " | " + "Computer: " + computerSelection + ". " + result);
                    playerScore++;
                 } else { 
                    result= "You lose the round!";
                    console.log("You: " + playerSelection + " | " + "Computer: " + computerSelection + ". " + result);
                    computerScore++;
                 }
                break;
            case "paper":
                if(computerSelection === "rock") {
                    result = "You win the round!";
                    console.log("You: " + playerSelection + " | " + "Computer: " + computerSelection + ". " + result);
                    playerScore++;
                } else {
                    result = "You lose the round!";
                    console.log("You: " + playerSelection + " | " + "Computer: " + computerSelection + ". " + result);
                    computerScore++;
                }
                break;
            case "scissors":
                if(computerSelection === "paper") {
                    result = "You win the round!";
                    console.log("You: " + playerSelection + " | " + "Computer: " + computerSelection + ". " + result);
                    playerScore++;
                } else {
                    result = "You lose the round!";
                    console.log("You: " + playerSelection + " | " + "Computer: " + computerSelection + ". " + result);
                    computerScore++;
                }
                break;
        }
    }

}

// Checking that the external javascript file is successfully linked. 
console.log("Hello World!");
console.log("You have to specify the relative path file for an externally linked js file, such as the ./ abbreviation, where the dot represents current directory!");
//Ahh, you live and you learn. 

 //This function is to address my ocd for capitalizing the first letter of Rock, Paper, & Scissors, regardless of how the user inputs them. 
 //Eventually, user input will be based on button clicking anyway, but still. This is satisfying.
 function capitalizeFirstLetter(word) {
    return word
           .charAt(0)
           .toUpperCase()
           + word.substr(1)
           .toLowerCase();
        }

