function getComputerChoice(){
    let x = Math.random()*3;
    if (x<1) {
        return "rock"
    }
    else if (x<2){
        return "paper"
    }
    else {
        return "scissors"
    }
}
function getHumanChoice(){
    let y = prompt().toLowerCase();
    return y;
}
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let drawCount = 0;
    for(let i=0;i<5;i++){
        let human = getHumanChoice();
        let computer = getComputerChoice();
        let result = playRound(human,computer);
        console.log(result);
        if(result.includes("You win!")) humanScore+=1;
        else if (result.includes("You lose!")) computerScore+=1;
        else drawCount+=1;
    }
    if(humanScore>computerScore) console.log("You won the game!");
    else if (humanScore<computerScore) console.log("You lost the game");
    else console.log("Its a tie!");
}
function playRound(humanChoice,computerChoice){
    if ((humanChoice==="rock" && computerChoice ==="scissors") || (humanChoice==="paper" && computerChoice==="rock") || (humanChoice==="scissors" && computerChoice==="paper")){
        return "You win! "+humanChoice+" beats " + computerChoice;
    }
    else if ((humanChoice==="scissors" && computerChoice==="rock")|| (humanChoice==="rock" && computerChoice==="paper") || (humanChoice==="paper" && computerChoice==="scissors")){
         return "You lose! "+computerChoice +" beats " +humanChoice;
    }
    else{
        return "Draw";
    }
}