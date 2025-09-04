let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)]
}

function getHumanChoice () {
    let choice = prompt("Choose rock, paper, or scissors: ", "rock");
    choice = choice.toLowerCase();
    if(choice[0] == "r") return "rock";
    else if(choice[0] == "p") return "paper";
    else if(choice[0] == "s") return "scissors";
    else return "rock";
}

function win() {
    console.log("You win! +1 point to you.");
    humanScore++;
}

function lose() {
    console.log("You lose! +1 point to computer")
    computerScore++;
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice == computerChoice ) {
        console.log("Tie! No points.");
        console.log(humanChoice + " " + computerChoice);
        return;  
    }

    let result = humanChoice == "rock" && computerChoice == "paper" ? lose() : 
        humanChoice == "paper" && computerChoice == "scissors" ? lose() :
        humanChoice == "scissors" && computerChoice == "rock" ? lose() : win();
    console.log(humanChoice + " " + computerChoice);        
}

playRound(getHumanChoice(), getComputerChoice());
