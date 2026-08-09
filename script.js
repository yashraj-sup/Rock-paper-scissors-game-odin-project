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