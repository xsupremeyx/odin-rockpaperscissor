

function getComputerChoice(){
    let choice = Math.round(Math.random()*100)+1;
    if(choice <= 33) return "rock";
    else if(choice <= 66) return "paper";
    else return "scissor";
}

function getHumanChoice(){
    let choice = prompt("Enter your choice: ");
    return choice;
}



function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
        if(!((humanChoice=='rock')||(humanChoice=='paper')||(humanChoice=='scissor'))){
            console.log("Wrong Player Input! Try Again next time!");
            return 'invalid';
        }
        if ((humanChoice === 'rock' && computerChoice ==='scissor')||(humanChoice === 'scissor' && computerChoice ==='paper')||(humanChoice === 'paper' && computerChoice ==='rock')){
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
            humanScore++;
        }
        else if (humanChoice === computerChoice){
            console.log(`Draw! Both chose ${humanChoice}!`);
        }
        else{
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}!`);
            computerScore++;
        }
        return 'success';
    }
    let rounds = 5;
    for(let i = 0; i < rounds; i++){
        let success = playRound(getHumanChoice(),getComputerChoice())
        if (success==='invalid'){
            rounds++;
        }
    }
    if(humanScore > computerScore){
        console.log(`You won the Game by ${humanScore-computerScore} points!`);
    }
    else if(humanScore < computerScore){
        console.log(`You lost the Game by ${computerScore-humanScore} points!`);
    }
    else{
        console.log('Game was a Draw!');
    }
    return;
}

playGame();