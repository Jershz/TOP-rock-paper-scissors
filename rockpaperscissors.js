let humanScore = 0;
let computerScore = 0;
const choiceButtons = document.querySelectorAll("button");
const gameOutput = document.querySelector("#game-result");
const roundOutput = document.querySelector("#round-result");
const scoreboard = document.querySelector("#scoreboard");
initializeGame();

function initializeGame() {
    humanScore = 0;
    computerScore = 0;
    scoreboard.textContent = `Player: ${humanScore}     Computer: ${computerScore}`;
}   

choiceButtons.forEach(button => {
    button.addEventListener("click", () => {
        clearOutput();
        playRound(button.id, getComputerChoice());        
    });
});

function clearOutput() {
    while (gameOutput.firstChild) {
        gameOutput.removeChild(gameOutput.firstChild);
    }
}

function updateGameOutput(str) {    
    const result = document.createElement("p");
    result.textContent = str;
    gameOutput.appendChild(result);
    scoreboard.textContent = `Player: ${humanScore}     Computer: ${computerScore}`;
}

function checkForWinner() {
    if(humanScore >= 5) {
        clearOutput();
        updateGameOutput("You were the first to 5 points! You win!");
        initializeGame();
    }
    if(computerScore >= 5) {
        clearOutput();
        updateGameOutput("The computer beat you to 5 points! You lose!");
        initializeGame();
    }
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
    checkForWinner();
}

function lose() {
    updateGameOutput("You lose! +1 point to computer")
    computerScore++;
    checkForWinner();
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice == computerChoice ) {
        updateGameOutput("Tie! No points.");
        updateGameOutput(humanChoice + " " + computerChoice);
        return;  
    }
    
    updateGameOutput(humanChoice + " " + computerChoice);        
    let result = humanChoice == "rock" && computerChoice == "paper" ? lose() : 
        humanChoice == "paper" && computerChoice == "scissors" ? lose() :
        humanChoice == "scissors" && computerChoice == "rock" ? lose() : win();
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


