let humanScore = 0;
let computerScore = 0;
const choiceButtons = document.querySelectorAll("button");
const gameOutput = document.querySelector("#game-result");
const roundOutput = document.querySelector("#round-result");
const scoreboard = document.querySelector("#scoreboard");
initializeGame();

function initializeGame() {
    scoreboard.textContent = `Player: ${humanScore}     Computer: ${computerScore}`;
}   

choiceButtons.forEach(button => {
    button.addEventListener("click", () => {
        while(gameOutput.firstChild) {
            gameOutput.removeChild(gameOutput.firstChild);
        }
        playRound(button.id, getComputerChoice());        
    });
});

function updateGameOutput(str) {
    
    const result = document.createElement("p");
    result.textContent = str;
    gameOutput.appendChild(result);
    scoreboard.textContent = `Player: ${humanScore}     Computer: ${computerScore}`;
}

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
    updateGameOutput("You win! +1 point to you.");
    humanScore++;
}

function lose() {
    updateGameOutput("You lose! +1 point to computer")
    computerScore++;
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice == computerChoice ) {
        updateGameOutput("Tie! No points.");
        updateGameOutput(humanChoice + " " + computerChoice);
        return;  
    }

    let result = humanChoice == "rock" && computerChoice == "paper" ? lose() : 
        humanChoice == "paper" && computerChoice == "scissors" ? lose() :
        humanChoice == "scissors" && computerChoice == "rock" ? lose() : win();
    updateGameOutput(humanChoice + " " + computerChoice);        
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if(humanScore == computerScore) {
        updateGameOutput("Tie Game! The score was: " + humanScore + " to: " + computerScore);
        return;
    }
    else if(humanScore > computerScore) {
        updateGameOutput("You win! The score was: " + humanScore + " to: " + computerScore);
        return;
    }
    else {
        updateGameOutput("You lose! The score was: " + humanScore + " to: " + computerScore);
        return;
    }
}


