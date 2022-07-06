function computerPlay()
{
    const gameoptions = ["Rock", "Paper", "Scissors"];

    let randguess = Math.floor(Math.random() * gameoptions.length);

    return gameoptions[randguess];
}

function playRound(playerGuess)
{
    let decision;
    let computerGuess = computerPlay();
    let winner;

    if(playerGuess == computerGuess)
    {
        decision = `Draw! Both picked ${playerGuess}`;
        winner = "D";
    }
    else
    {
        switch (playerGuess)
        {
            case "Rock":
                if(computerGuess == "Paper")
                {   
                    decision = "Lose! Paper beats Rock";
                    winner = "C";
                }
                else
                {
                    decision = "Win! Rock beats Scissors";
                    winner = "P";
                }
            break;
            
            case "Paper":
                if(computerGuess == "Scissors")
                {   
                    decision = "Lose! Scissors beats Paper";
                    winner = "C";
                }
                else
                {
                    decision = "Win! Paper beats Rock";
                    winner = "P";
                }
            break;

            case "Scissors":
                if(computerGuess == "Rock")
                {   
                    decision = "Lose! Rock beats Scissors";
                    winner = "C";
                }
                else
                {
                    decision = "Win! Scissors beats Paper";
                    winner = "P";
                }
            break;
        }
    }

    alert(decision);
    gameTracker(winner);
}

let compWins = 0;
let playerWins = 0;

function gameTracker(gameWinner)
{
    const playerPara = document.querySelector('.playerResults');
    const computerPara = document.querySelector('.computerResults');
    
    if(gameWinner == "C")
    {
        compWins++;
        computerPara.textContent = compWins.toString();
    }
    else if(gameWinner == "P")
    {
        playerWins++;
        playerPara.textContent = playerWins.toString();
    }

    if(compWins >=3)
    {
        alert("The Computer Has Won HAHA Lame");
        compWins = 0;
        playerWins = 0;
        computerPara.textContent = "";
        playerPara.textContent = "";
    }

    if(playerWins >=3)
    {
        alert("You won against the Computer. Here have a cookie!");
        compWins = 0;
        playerWins = 0;
        computerPara.textContent = "";
        playerPara.textContent = "";
    }

    
}

//gets the players choice via the three buttons and calls the playRound function
const btnChoice = document.querySelectorAll('button');


btnChoice.forEach((button) => {

    button.addEventListener('click', () => {
        playRound(button.id);
    });
});





// function game()
// {
//     let user;
//     let output;

//     for(let i = 0; i < 5; i++)
//     {
//         user = prompt("Enter you choice (Rock, Paper, Scissors)");
//         computer = computerPlay();

//         output = playRound(user, computer);

//         alert(output);
//     }
// }

//game();