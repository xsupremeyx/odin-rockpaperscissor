

function getComputerChoice(){
    let choice = Math.round(Math.random()*100)+1;
    if(choice <= 33) return "rock";
    else if(choice <= 66) return "paper";
    else return "scissor";
}

function playGame(){

    function playRound(humanChoice, computerChoice){
        function showOutput(result,id){
            const roundOutput = document.querySelector(id);
            roundOutput.textContent = result;
        }

        function gameEnd(){
            if(humanScore === 5){
                showOutput(`You won the Game by ${humanScore-computerScore} points!`,'#finalResult');
                return 'end';
            }

            else if(computerScore === 5){
                showOutput(`You lost the Game by ${computerScore-humanScore} points!`,'#finalResult');
                return 'end';
            }
            else{
                showOutput('FIRST to WIN 5 ROUNDS will WIN the GAME!','#finalResult');
                return 'continue';
            }
        }

        if ((humanChoice === 'rock' && computerChoice ==='scissor')||(humanChoice === 'scissor' && computerChoice ==='paper')||(humanChoice === 'paper' && computerChoice ==='rock')){
            showOutput(`You win! ${humanChoice} beats ${computerChoice}!`,'#roundInfo');
            humanScore++;
        }
        else if (humanChoice === computerChoice){
            showOutput(`Draw! Both chose ${humanChoice}!`,'#roundInfo');
        }
        else{
            showOutput(`You Lose! ${computerChoice} beats ${humanChoice}!`,'#roundInfo');
            computerScore++;
        }
        showOutput(`Human: ${humanScore} and Computer: ${computerScore}`,'#runningScore');
        let result = gameEnd();
        return result;
    }

    let humanScore = 0;
    let computerScore = 0;

    const bttns = document.querySelectorAll("button");
    bttns.forEach((bttn) => {
        const click = bttn.addEventListener("click",(event)=>{
        const choice = event.target.id;
        let success = playRound(choice,getComputerChoice());
        if( success === 'end'){
            bttns.forEach((bttn)=>bttn.disabled=true);
        };
        });

    });
}

playGame();