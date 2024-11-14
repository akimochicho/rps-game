let humanScore = 0;
let computerScore = 0;
let humanChoice = 0;
let computerChoice = 0;
let roundCount = 0;

for(roundCount = 0; roundCount ++; roundCount < 5){
    function getComputerChoice(){
        const rock = "Rock"; //ran < 2
        const paper = "Paper"; // 2
        const scissors = "Scissors"; // ran > 2
        const ran = Math.ceil(Math.random() / 0.3);
        // choices: ran < 2, 2, ran > 2 
        if( ran < 2 ) {
            computerChoice = rock;
            return rock + "," + ran;
        }
        else if (ran == 2){
            computerChoice = paper;
            return paper + "," + ran;
        }
        else {
            computerChoice = scissors;
            return scissors + "," + ran;
        }
    }  
    
    function getHumanChoice(){
        // let choice=prompt("Choose: (1) Rock, (2) Paper, or (3) Scissors?");
        
        // const rock = "Rock"; //ran < 2
        // const paper = "Paper"; // 2
        // const scissors = "Scissors"; // ran > 2
    
        // if (choice == 1) {
        //     computerChoice = rock;
        //     return rock;
        // }
        // else if (choice == 2) {
        //     computerChoice = paper;
        //     return paper;
        // }
        // else if (choice == 3) {
        //     computerChoice = scissors;
        //     return scissors;
        // }
        let choice = prompt("Choose: (1) Rock, (2) Paper, or (3) Scissors?");
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
                console.log("You lose! Scissors beats Rock.");
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
        roundCount ++;
    }
    console.log("You chose: ", getHumanChoice());
    console.log("Computer chose: ", getComputerChoice());
    playRound(humanChoice, computerChoice);
    
}
if (roundCount < 5) {
    console.log("Human Score: ", humanScore, " Computer Score: ", computerScore);
    getHumanChoice();
}
else {
    console.log("Human Score: ", humanScore, " Computer Score: ", computerScore);
    console.log("End");
}

