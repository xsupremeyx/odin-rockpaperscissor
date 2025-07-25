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

getHumanChoice();