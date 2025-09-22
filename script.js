
function getComputerChoice() {
    min = Math.ceil(-1);
    max = Math.floor(1);
    let x = Math.floor(Math.random() * (max - min + 1)) + min;
    if (x == -1) {
        return "rock"
    }
    if (x == 1) {
        return "paper"
    }
    if (x == 0) {
        return "scissors"
    }
}

function getHumanChoice() {
    let answer = prompt("Select between: rock, paper or scissors. Enter as text!")
    return answer
}

function playGame() {
    let humanScore = 0
    let computerScore = 0
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock" && computerChoice == "paper") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            computerScore++
        }
        if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log(`You won! ${humanChoice} beats ${computerChoice}`)
            humanScore++
        }
        if (humanChoice == "paper" && computerChoice == "rock") {
            console.log(`You won! ${humanChoice} beats ${computerChoice}`)
            humanScore++
        }
        if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            computerScore++
        }
        if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            computerScore++
        }
        if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log(`You won! ${humanChoice} beats ${computerChoice}`)
            humanScore++
        }
        if (humanChoice == computerChoice) {
            console.log(`Draw!`)
        }

    }
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice().toLowerCase()
        // console.log(humanSelection)
        const computerSelection = getComputerChoice()
        // console.log(computerSelection)
        playRound(humanSelection, computerSelection)
    }
    if (humanScore > computerScore) {
        console.log("You Won!")
    }
    else if (computerScore > humanScore) {
        console.log("You Lose!")
    } else {
        console.log("Draw!")
    }
}

playGame()