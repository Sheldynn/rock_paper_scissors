/* PSEUDOCODE SECTION */
//It turns out that I overcomplicated things a bit here. There's a much simpler way to code this as I've recently learned!
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

const choices = ["rock", "paper", "scissors"]; //using and array makes sense here for the randomNumber function. 
// The array has 3 items indexed at 0, 1, & 2, corresponding to: rock, paper, scissors, respectively. 

//Later on, these variables will be used as input for the GUI witin HTML.
 const playerDisplay = document.getElementById("playerDisplay");
 const computerDisplay = document.getElementById("computerDisplay");
 const resultDisplay = document.getElementById("resultDisplay");

 /*here, I'll calculate the computer choice within the variable assignment
 using two call methods to two standard functions within the Math library: floor & random
 but I will call it within the function so that it resets by itself each iteration 
 */
 //This function is to address my ocd for capitalizing the first letter of Rock, Paper, & Scissors, regardless of how the user inputs them. 
 //Eventually, user input will be based on button clicking anyway, but still. This is satisfying.
 function capitalizeFirstLetter(choice) {
    return choice
           .charAt(0)
           .toUpperCase()
           + choice.substr(1)
           .toLowerCase();
        }


//Here is  a simpler version of writing the playGame function that I found
//on a YouTube tutorial. God this makes so much more sense...Lol

 let playerChoice;
 
 function playRound(playerChoice) {

    playerChoice = prompt("Please enter rock, paper, or scissors.").toLowerCase();
    const computerChoice = choices[Math.floor(Math.random() *3)];
    //this will return a random integer between 0 and 2, corresponding to the string values in the choices array index
    let result = "";
    
    //used this to check that random result works with: console.log(computerChoice);

    if(playerChoice === computerChoice) {
        result = "It's a draw!";
    }
    else {
        switch(playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "You win!" : "You lose!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You win!" : "You lose!";
                break;
            case "scissors":
            result = (computerChoice === "paper") ? "You win!" : "You lose!";
            break;
        }
    }

    console.log("Player choice: " + capitalizeFirstLetter(playerChoice) + " | " + "Computer choice: " + capitalizeFirstLetter(computerChoice) + " | " + result);

    /*
    //Displaying the result of each round.
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;
    */

}

// Checking that the external javascript file is successfully linked. 
console.log("Hello World!");
console.log("You have to specify the relative path file for an externally linked js file, such as the ./ abbreviation, where the dot represents current directory!");
//Ahh, you live and you learn. 

