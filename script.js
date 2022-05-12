// Your JavaScript goes here!
function computerPlay()
{
  const plays = ['rock', 'paper','scissors'];

  let c = Math.floor(Math.random(2) * 3);
  //console.log("cpu Plays " + plays[c] + c);
  return plays[c];
}

function playRound(e)
{
    console.log(e.target.id);
    let playerSelection = e.target.id;
    let computerSelection = computerPlay();

    const cpuPlay = document.querySelector('#cpu');
    cpuPlay.textContent = "Cpu Plays: " + computerSelection;

    // 0 = tie, 1 = p1 wins, 2 = cpu wins

    let result = 0;

    if (playerSelection != computerSelection)
    {
      if (playerSelection == 'rock')
      {
        if (computerSelection == 'paper')
        { result = 2;}
        else result = 1;
      }
      if (playerSelection == 'paper')
      {
        if (computerSelection == 'scizzors')
        { result = 2;}
        else result = 1;
      }
      if (playerSelection == 'scissors')
      {
        if (computerSelection == 'rock')
        { result = 2;}
        else result = 1;
      }
    }

    const outcome = document.querySelector('#outcome');
    const pScore = document.querySelector('#pScore');
    const cScore = document.querySelector('#cScore');

    let pPoints = parseInt(pScore.textContent.charAt(14));
    let cPoints = parseInt(cScore.textContent.charAt(11));
    console.log(pPoints);
    console.log(cPoints);

    if (result == 0)
    {
        outcome.textContent = "It's a tie!";
    }
    if (result == 1)
    {
        outcome.textContent = "You win! " + playerSelection + " beats " + computerSelection;
        pPoints++;
    }
    if (result == 2)
    {
        outcome.textContent = "You lose! " + computerSelection + " beats " + playerSelection;
        cPoints++;
    }

    pScore.textContent = "Player Score: " + pPoints;
    cScore.textContent = "CPU Score: " + cPoints;

    if (pPoints >= 5)
        alert("You win!");
    if (cPoints >= 5)
        alert("CPU wins!");
}

function game()
{
    let playerScore = 0;
    let cpuScore = 0;

    for (let i = 0; i < 5; i++)
    {
        let result = playRound(prompt("What is your play?"), computerPlay())
        
        if (result == 1)
          playerScore++;
        if (result == 2)
          cpuScore++;

        console.log(playerScore);
        console.log(cpuScore);
    }
    if ( playerScore > cpuScore)
      console.log("You win!");
    if ( playerScore < cpuScore)
      console.log("You lose!")
    if (playerScore == cpuScore)
      console.log("A tie??");
}

function uiSetup()
{
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) =>
    {
        button.addEventListener('click', playRound);
    });
}

uiSetup();
//game();
