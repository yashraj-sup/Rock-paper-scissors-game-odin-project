let humanScore=0;
let computerScore=0;
let drawCount=0;
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
document.getElementById("rock").addEventListener("click",function(){handleClick("rock");});
document.getElementById("paper").addEventListener("click",function(){handleClick("paper");});
document.getElementById("scissors").addEventListener("click",function(){handleClick("scissors");});
let gameOver=false;
function handleClick(humanChoice){
    if(gameOver) return;
    let computerChoice=getComputerChoice();
    let result=playRound(humanChoice,computerChoice);
    if (result.includes("You win!")) humanScore+=1;
    else if (result.includes("You lose!")) computerScore+=1;
    else drawCount+=1;
    document.getElementById("result").textContent=result;
    document.getElementById("score").textContent="Human:" +  humanScore + "| Computer:" + computerScore;
    if(humanScore>=5) {document.getElementById("result").textContent="You won the game!";gameOver=true;}
    else if(computerScore>=5){ document.getElementById("result").textContent="You lost the game!"; gameOver=true;}
}  
