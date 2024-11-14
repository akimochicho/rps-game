let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;

function getComputerChoice(){
    const choiceArray = ["Rock", "Paper", "Scissors" ];
    const ran = Math.floor(Math.random() / 0.4);
    return computerChoice = choiceArray[ran];
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
    if(humanChoice == computerChoice) {
        console.log ("It's a draw! You both chose", humanChoice +".");
    }
    else if (
        humanChoice == "Rock" && computerChoice == "Scissors"||
        humanChoice == "Paper" && computerChoice == "Rock"||
        humanChoice == "Scissors" && computerChoice == "Paper") {
        console.log("You won!", humanChoice, "beats", computerChoice + ".");
        humanScore++;
    }
    else {
        console.log("You lose!", computerChoice, "beats", humanChoice + ".");
        computerScore++;
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
