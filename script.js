function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
        return 1;
    } else if (randomNumber < 2 / 3) {
        return 2;
    } else {
        return 3;
    }
};

function getPlayerChoice() {
    let playerChoice = prompt("1.rock, 2.paper, 3.scissor");

    while (playerChoice != 1 && playerChoice != 2 && playerChoice != 3) {
        playerChoice = prompt("1.rock, 2.paper, 3.scissor");
    }
    return parseInt(playerChoice);
};



function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    function playRound(computerStr, playerStr) {
        function print_win(player, computer) {
            console.log(`You won! ${player}, beats ${computer}!`);
            playerScore += 1;
        }
        function print_lose(player, computer) {
            console.log(`You lose! ${computer}, beats ${player}!`);
            computerScore += 1;
        }
        function return_name_move(i) {
            switch (i) {
                case 1:
                    return "rock";
                case 2:
                    return "paper";
                case 3:
                    return "scissor";
            }
        }

        let difference = (((playerStr - computerStr) % 3) + 3) % 3;

        if (difference == 0) {
            console.log("Tie!");
        } else if (difference == 1) {
            print_win(return_name_move(playerStr), return_name_move(computerStr));
        } else if (difference > 1) {
            print_lose(return_name_move(playerStr), return_name_move(computerStr));
        }


    }

    const roundLenght = 5;
    let computer = "";
    let player = "";

    for (let i = 0; i < roundLenght; i++) {
        computer = getComputerChoice();
        player = getPlayerChoice();
        playRound(computer, player);
    }

    if (playerScore > computerScore) {
        console.log("Player won the game!");
    } else if (computerScore > playerScore) {
        console.log("Computer won the game!");
    } else if (computerScore == playerScore) {
        console.log("Game is tie!");
    }
}

playGame();