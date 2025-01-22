// Checking that the external javascript file is successfully linked. 
console.log("Hello World!");
console.log("You have to specify the relative path file for an externally linked js file, such as the ./ abbreviation, where the dot represents current directory. Ya Dingus.");
//Ahh, you live and you learn. 

/* PSEUDOCODE SECTION */

/*
My goal is to create a simple program that emulates the Rock-Paper-Scissors game
via the Console. It will:
    1.) *Prompt the User to input (button select method) either Rock, Paper, or Scissors.*
    2.) *Randomly generate either a Rock, Paper, or Scissors value in response to User.*
    3.) *Then, it will evaluate the pair of values and determine the winner.*
    4.) *In a later edition, it will tabulate a score until winning score is met by
        either the User or Console.*
    5.) *It will then display various cheezy responses for winning, losing, or tying.*
*/


// Get computer choice, randomly

 
function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let computerSelection;

function getComputerSelection () { 
    randomNumber = getRandomNumber(1, 3);
    if (randomNumber === 1) {
        computerSelection = "Rock";
    } else if (randomNumber === 2) {
        computerSelection = "Paper";
    } else if (randomNumber === 3) {
        computerSelection = "Scissors";
    }
    console.log(randomNumber);
    console.log(computerSelection);
    // randomNumber = Math.floor(Math.random() * 100) + 1;
}

// Get user input as selection, not case sensitive.

function capitalizeUserSelection(userSelection) {
    return userSelection
           .charAt(0)
           .toUpperCase()
           + userSelection.substr(1)
           .toLowerCase();
        }

let userSelection;

function getUserSelection (input) {
    userSelection = prompt("Please enter Rock, Paper, or Scissors: ");
    userSelection = capitalizeUserSelection(userSelection);    
    if (userSelection != "Rock" && userSelection != "Paper" && userSelection != "Scissors")  {
        console.log("You have made an invalid selection, try again");
    } else { console.log("You have selected: " + userSelection); }
}

let userScore = 0;
let computerScore = 0;

function playRound(userSelection, computerSelection) {

    //my code here
    }
    const userChoice = getUserSelection; 
    const computerChoice = getComputerSelection;


playRound(userChoice, computerChoice);


/* A huge block of code I'm not sure what to do with. 

    
    if (userChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You played: " + userChoice + "; the Computer played: " + computerChoice + ". Nice! You win the round.");
        ++userScore;
        console.log("Current Score: User:" + userScore
                    + "Computer: " + computerScore);

    } else if (userChoice === "Rock" && computerChoice === "Paper") {
        console.log("You played: " + userChoice + "; the Computer played: " + computerChoice + ". Damn! You lost this round.");
        ++computerScore;
        console.log("Current Score: User:" + userScore
                    + "Computer: " + computerScore);
                    
    } else if (userChoice === "Rock" && computerChoice === "Rock") {
        console.log("You both played: " + userChoice + ". Lol, it's a draw.");
        console.log("Current Score: User:" + userScore
                    + "Computer: " + computerScore);

    } else if (userChoice === "Scissors" && computerChoice === "Rock") {
        console.log("You played: " + userChoice + "; the Computer played: " + computerChoice + ". Damn! You lost this round");
        ++computerScore;
        console.log("Current Score: User:" + userScore
                    + "Computer: " + computerScore);

    } else if (userChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You played: " + userChoice + "; the Computer played: " + computerChoice + ". Nice! You win the round.");
        ++userScore;
        console.log("Current Score: User:" + userScore
                    + "Computer: " + computerScore);
                    
    } else if (userChoice === "Scissors" && computerChoice === "Scissors") {
        console.log("You both played: " + userChoice + ". Lol, it's a draw.");
        console.log("Current Score: User:" + userScore
                    + "Computer: " + computerScore);

    } else if (userChoice === "Paper" && computerChoice === "Scissors") {
        console.log("You played: " + userChoice + "; the Computer played: " + computerChoice + ". Damn! You lost this round");
        ++computerScore;
        console.log("Current Score: User:" + userScore
                    + "Computer: " + computerScore);

    } else if (userChoice === "Paper" && computerChoice === "Rock") {
        console.log("You played: " + userChoice + "; the Computer played: " + computerChoice + ". Nice! You win the round.");
        ++userScore;
        console.log("Current Score: User:" + userScore
                    + "Computer: " + computerScore);
                    
    } else if (userChoice === "Paper" && computerChoice === "Paper") {
        console.log("You both played: " + userChoice + ". Lol, it's a draw.");
        console.log("Current Score: User:" + userScore
                    + "Computer: " + computerScore);

    }
} 
*/