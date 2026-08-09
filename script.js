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
let humanScore =0;
let computerScore =0;
function playRound(humanChoice,computerChoice){
    if ((humanChoice==="rock" && computerChoice ==="scissors") || (humanChoice==="paper" && computerChoice==="rock") || (humanChoice==="scissors" && computerChoice==="paper")){
        humanScore+=1;
        return "You win! "+humanChoice+" beats " + computerChoice;
    }
    else if ((humanChoice==="scissors" && computerChoice==="rock")|| (humanChoice==="rock" && computerChoice==="paper") || (humanChoice==="paper" && computerChoice==="scissors")){
         computerScore+=1;
         return "You lose! "+computerChoice +" beats " +humanChoice;
    }
    else{
        return "Draw";
    }
}