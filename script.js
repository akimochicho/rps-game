let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;

function getComputerChoice(){
    const rock = "Rock"; //ran < 2
    const paper = "Paper"; // 2
    const scissors = "Scissors"; // ran > 2
    const ran = Math.ceil(Math.random() / 0.3);
    // choices: ran < 2, 2, ran > 2 
    if( ran < 2 ) {
        computerChoice = rock;
        return rock;
    }
    else if (ran == 2){
        computerChoice = paper;
        return paper;
    }
    else {
        computerChoice = scissors;
        return scissors;
    }
}  

function getHumanChoice(){
    choice = prompt("Choose: (1) Rock, (2) Paper, or (3) Scissors?");
    choice = choice.charAt(0).toUpperCase() + choice.slice(1);
    if (choice == "Rock" || choice == "Paper" || choice == "Scissors") {
        humanChoice = choice;
        return choice;
    }
    else {
        getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == "Rock") {
        if(computerChoice == "Paper") {
            console.log("You lose! Paper beats Rock.");
            computerScore ++;
        }
        else if(computerChoice == "Scissors") {
            console.log("You win! Rock beats Scissors.");
            humanScore ++;
        }
        else {
            console.log("It's a draw! You both chose Rock.");
        }
    }
    else if (humanChoice == "Paper") {
        if(computerChoice == "Scissors") {
            console.log("You lose! Scissors beats Paper.");
            computerScore ++;
        }
        else if (computerChoice == "Rock") {
            console.log("You win! Paper beats Rock."); 
            humanScore ++;
        }
        else {
            console.log("It's a draw! You both chose Paper.")
        }
    }
    else { //scissors
        if (computerChoice == "Rock") {
            console.log("You win! Scissors beats Rock.");
            humanScore ++;
        }
        else if (computerChoice == "Paper") {
            console.log("You lose! Paper beats Scissors.");
            computerScore ++;
        }
        else {
            console.log("It's a draw! You both chose Scissors.");
        }
    }
  
}
function startRound(){
    for(let roundCount = 0; roundCount < 5; roundCount++ ){
        console.log("You chose: ", getHumanChoice());
        console.log("Computer chose: ", getComputerChoice());
        playRound(humanChoice, computerChoice);
    }
}
startRound();
console.log("Human Score: ", humanScore, " Computer Score: ", computerScore);
