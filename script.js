function computerPlay()
{
    const gameoptions = ["Rock", "Paper", "Scissors"];

    let randguess = Math.floor(Math.random() * gameoptions.length);

    return gameoptions[randguess];
}

function playRound(playerGuess, computerGuess)
{
    let decision;

    if(playerGuess == computerGuess)
    {
        decision = `Draw! Both picked ${playerGuess}`;
        return(decision);
    }

    switch (playerGuess)
    {
        case "Rock":
            if(computerGuess == "Paper")
            {   
                decision = "Lose! Paper beats Rock";
            }
            else
            {
                decision = "Win! Rock beats Scissors";
            }
        break;
        
        case "Paper":
            if(computerGuess == "Scissors")
            {   
                decision = "Lose! Scissors beats Paper";
            }
            else
            {
                decision = "Win! Paper beats Rock";
            }
        break;

        case "Scissors":
            if(computerGuess == "Rock")
            {   
                decision = "Lose! Rock beats Scissors";
            }
            else
            {
                decision = "Win! Scissors beats Paper";
            }
        break;
    }

    return(decision);
}


function game()
{
    let user;
    let output;

    for(let i = 0; i < 5; i++)
    {
        user = prompt("Enter you choice (Rock, Paper, Scissors)");
        computer = computerPlay();

        output = playRound(user, computer);

        alert(output);
    }
}

game();