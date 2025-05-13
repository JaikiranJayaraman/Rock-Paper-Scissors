const choices = ["Rock","Paper","Scissors"];
const playersdisplay1 = document.getElementById("playersdisplay");
const computerdisplay1 = document.getElementById("computerdisplay");
const result1 = document.getElementById("result");
const playersscore1 = document.getElementById("playersscore")
const computersscore1 = document.getElementById("computersscore")
let playerscore = 0;
let computerscore = 0;


function playgame(playerschoice){
    const computerchoice = choices[Math.floor(Math.random()*3)];
    let result2="";
    if(playerschoice === computerchoice)
    {
        result2="IT'S A TIE";
    }
    else{
        switch(playerschoice)
        {
        case "Rock":
            result2 = (computerchoice === "Scissors") ? "YOU WIN" : "YOU LOSE";
            break;
        case "Paper":
            result2 = (computerchoice === "Rock") ? "YOU WIN" : "YOU LOSE";
            break;
        case "Scissors":
                result2 = (computerchoice === "Paper") ? "YOU WIN" : "YOU LOSE";
                break;    
        
        }
    }

    playersdisplay1.textContent = `PLAYERS: ${playerschoice}`
    computerdisplay1.textContent= `COMPUTERS: ${computerchoice}`
    result1.textContent = result2;
    result1.classList.remove("greentext", "redtext","bluetext")

switch(result2)
{
    case "YOU WIN":
        result1.classList.add("greentext")
        playerscore++;
        playersscore1.textContent=playerscore;
        break;
    case "YOU LOSE":
        result1.classList.add("redtext")
        computerscore++;
        computersscore1.textContent=computerscore;
        break;  
    case "IT'S A TIE":
        result1.classList.add("bluetext")
        break;  
   
}
}