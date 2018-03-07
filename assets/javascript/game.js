const letter="abcdefghijklmnopqrstuvwxyz";
var wins=0;
var losses=0;
var guessCounter=10;
var guessArray=[];
var guessArrayText="";
var computerGuess="";

function turn(computerGuess){
    document.onkeyup=function(pressed){
        var userGuess=pressed.key;
        if(letterChecker(userGuess) === true){
            document.getElementById("reset").diabled=false;
            guessesCheck(computerGuess,userGuess);
        }
    }
}
function displayStats(){ //updates stats//
    document.getElementById("wins").innerText=wins;
    document.getElementById("losses").innerText=losses;
    document.getElementById("guessCounter").innerText=guessCounter;
    var guessArrayText=guessArray.join(", ");
    document.getElementById("guessArray").innerText=guessArrayText;
}
function reset(){ //wipes stats and restarts on press of "reset"//
    if (confirm("Press OK to Confirm Reset of Game")===true){
        document.getElementById("reset").disabled=true;
        document.getElementById("start").diabled=false;
        document.getElementById("wins").innerText="";
        document.getElementById("losses").innerText="";
        document.getElementById("guessCounter").innerText="";
        document.getElementById("guessArray").innerText="";
        wins=0;
        losses=0;
        guessArray=[];
        guessArrayText="";
        guessCounter=10;
    }
}
function gameStart(){ //starts game//
    document.getElementById("start").diabled=true;
    displayStats();
    newRound();
}
function newRound(){ //starts new round//
    guessCounter=10;
    guessArray=[];
    displayStats(); 
    computerGuess=computerSelect();
    turn(computerGuess);
}
function computerSelect(){ //computer selects letter//
    computerGuess=letter.charAt(Math.floor(Math.random()*letter.length));
    return computerGuess;
}
function guessesCheck(computerGuess,userGuess){ //checks for a match or miss//
    if(userGuess===computerGuess){
        wins++; //adjusts win# up on correct guess//
        newRound();
    }   
    else{
        miss(computerGuess,userGuess);
    }
}
function miss(computerGuess,userGuess){ //runs miss function//
    guessCounter--; //adjusts counter down with each miss//
    if(guessCounter ===0){
        losses++; //after 10th miss loss counter increased//
        newRound(); //new round started after loss//
    }
    else{
        guessArray.push(userGuess);
        displayStats();
        turn(computerGuess);
    }
}
function letterChecker(l){
    l=l.toLowerCase();
    if(letter.indexOf(l)===-1) {
        return false;
    }
    else{
        return true;
    }
}