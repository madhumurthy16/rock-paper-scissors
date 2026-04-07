function getComputerChoice() {
    let randomNum = Math.random()*10;

    if(randomNum >= 0 && randomNum <= 3) {
        return "rock";
    }
    else if(randomNum >=4 && randomNum <= 7) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Enter a choice between 'rock', 'paper' and 'scissors'");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        console.log(`Its a tie. Both chose ${humanChoice}`)
    }
    else if((humanChoice === "rock"  && computerChoice === "paper") 
        || (humanChoice === "paper" && computerChoice === "scissors") 
        || (humanChoice === "scissors" && computerChoice === "rock")) {
            console.log("You lose the round");
            computerScore++;
    }
    else {
        console.log("You win the round");
        humanScore++;
    }
}

function playGame() {
    let humanChoice;
    let computerChoice;

    for(let i = 1; i<=5; i++) {
        humanChoice = getHumanChoice();
        while(humanChoice === null) {
            alert("Please enter a valid choice");
            humanChoice = getHumanChoice();
        }
        humanChoice = humanChoice.toLowerCase();
        computerChoice = getComputerChoice();  
        computerChoice = computerChoice.toLowerCase();
        console.log(`Human choice is: ${humanChoice}`);
        console.log(`Computer choice is: ${computerChoice}`); 
        playRound(humanChoice, computerChoice);
    }
}

playGame();

if(humanScore === computerScore) {
    console.log("Its a tie.  No winners in the best of 5 game of Rock, Paper and Scissors");
}
else if(humanScore > computerScore) {
    console.log("You win in the best of 5 game of Rock, Paper and Scissors");
}
else {
    console.log("You lose in the best of 5 game of Rock, Paper and Scissors");
}





