let playerScore = 0;
let computerScore = 0;

const result_display = document.querySelector("#win-text");

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

async function play_round(player_choice) {
    function print_win(player, computer) {
        result_display.textContent = (`You won! ${player}, beats ${computer}!`);
        playerScore += 1;
        document.querySelector("#player > .score").textContent = playerScore;
    }
    function print_lose(player, computer) {
        result_display.textContent = (`You lose! ${computer}, beats ${player}!`);
        computerScore += 1;
        document.querySelector("#computer > .score").textContent = computerScore;
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
    if (check_win_condition(playerScore, computerScore)) {
        let com_choice = getComputerChoice();
        console.log(com_choice);
        let difference = (((player_choice - com_choice) % 3) + 3) % 3;

        if (difference == 0) {
            result_display.textContent = ("Tie");
        } else if (difference == 1) {
            print_win(return_name_move(player_choice), return_name_move(com_choice));
        } else if (difference > 1) {
            print_lose(return_name_move(player_choice), return_name_move(com_choice));
        }
    } if (check_win_condition(playerScore, computerScore) === false) {
        await wait(1000);
        playerScore = 0;
        computerScore = 0;
        document.querySelector("#player > .score").textContent = playerScore;
        document.querySelector("#computer > .score").textContent = computerScore;
    }

}

function check_win_condition(p_score, c_score) {
    if (p_score < 5 && c_score < 5) {
        return true;
    } else {
        return false;
    }
}

let button_array = document.querySelectorAll("#choose-ul > button");
button_array.forEach((button, index) => {
    button.addEventListener("click", e => {
        play_round(index + 1);
    });
});

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));