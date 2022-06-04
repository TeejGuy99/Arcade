const btn = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const resetBtn = document.getElementById("resetBtn");

const playerScoreCard = document.getElementById("playerScore");

let playerScore = 0;
let computerScore = 0;
let player1Turn = true;

//Assign an event listener to each button, when clicked, flip the player turn bool and disable the button, then check for a win state
btn.addEventListener('click', function onClick(){
    //If it is player1's turn, place an X on CLick, then flip the boolean for player1Turn
    //Or if it is not player1's turn, place an O and flip the boolean
    if(player1Turn){
        btn.innerText = "X";
        player1Turn = !player1Turn;
    }else if(!player1Turn){
        btn.innerText = "O";
        player1Turn = !player1Turn;
    }
    //makes the button ugly, but works for now
    btn.disabled = true;
    checkWin();
});
btn2.addEventListener('click', function onClick(){
    //If it is player1's turn, place an X on CLick, then flip the boolean for player1Turn
    //Or if it is not player1's turn, place an O and flip the boolean
    if(player1Turn){
        btn2.innerText = "X";
        player1Turn = !player1Turn;
    }else if(!player1Turn){
        btn2.innerText = "O";
        player1Turn = !player1Turn;
    }
    btn2.disabled = true;
    checkWin();
});
btn3.addEventListener('click', function onClick(){
    //If it is player1's turn, place an X on CLick, then flip the boolean for player1Turn
    //Or if it is not player1's turn, place an O and flip the boolean
    if(player1Turn){
        btn3.innerText = "X";
        player1Turn = !player1Turn;
    }else if(!player1Turn){
        btn3.innerText = "O";
        player1Turn = !player1Turn;
    }
    btn3.disabled = true;
    checkWin();
});
btn4.addEventListener('click', function onClick(){
    //If it is player1's turn, place an X on CLick, then flip the boolean for player1Turn
    //Or if it is not player1's turn, place an O and flip the boolean
    if(player1Turn){
        btn4.innerText = "X";
        player1Turn = !player1Turn;
    }else if(!player1Turn){
        btn4.innerText = "O";
        player1Turn = !player1Turn;
    }
    btn4.disabled = true;
    checkWin();
});
btn5.addEventListener('click', function onClick(){
    //If it is player1's turn, place an X on CLick, then flip the boolean for player1Turn
    //Or if it is not player1's turn, place an O and flip the boolean
    if(player1Turn){
        btn5.innerText = "X";
        player1Turn = !player1Turn;
    }else if(!player1Turn){
        btn5.innerText = "O";
        player1Turn = !player1Turn;
    }
    btn5.disabled = true;
    checkWin();
});
btn6.addEventListener('click', function onClick(){
    //If it is player1's turn, place an X on CLick, then flip the boolean for player1Turn
    //Or if it is not player1's turn, place an O and flip the boolean
    if(player1Turn){
        btn6.innerText = "X";
        player1Turn = !player1Turn;
    }else if(!player1Turn){
        btn6.innerText = "O";
        player1Turn = !player1Turn;
    }
    btn6.disabled = true;
    checkWin();
});
btn7.addEventListener('click', function onClick(){
    //If it is player1's turn, place an X on CLick, then flip the boolean for player1Turn
    //Or if it is not player1's turn, place an O and flip the boolean
    if(player1Turn){
        btn7.innerText = "X";
        player1Turn = !player1Turn;
    }else if(!player1Turn){
        btn7.innerText = "O";
        player1Turn = !player1Turn;
    }
    btn7.disabled = true;
    checkWin();
});
btn8.addEventListener('click', function onClick(){
    //If it is player1's turn, place an X on CLick, then flip the boolean for player1Turn
    //Or if it is not player1's turn, place an O and flip the boolean
    if(player1Turn){
        btn8.innerText = "X";
        player1Turn = !player1Turn;
    }else if(!player1Turn){
        btn8.innerText = "O";
        player1Turn = !player1Turn;
    }
    btn8.disabled = true;
    checkWin();
});
btn9.addEventListener('click', function onClick(){
    //If it is player1's turn, place an X on CLick, then flip the boolean for player1Turn
    //Or if it is not player1's turn, place an O and flip the boolean
    if(player1Turn){
        btn9.innerText = "X";
        player1Turn = !player1Turn;
    }else if(!player1Turn){
        btn9.innerText = "O";
        player1Turn = !player1Turn;
    }
    btn9.disabled = true;
    checkWin();
});

resetBtn.addEventListener('click', function onClick(){
    resetGame();
});

//Brute force check for each possible win state for the player and computer
//Hacky, but I already created an HTML skeleton of buttons instead of a JS object to manipulate through the DOM
function checkWin(){
    // if((btn.innerText === "X") && (btn2.innerText === "X") && (btn3.innerText === "X")
    // || (btn4.innerText === "X") && (btn5.innerText === "X") && (btn6.innerText === "X")
    // || (btn7.innerText === "X") && (btn8.innerText === "X") && (btn9.innerText === "X")){
    //  playerScore++;
    //  playerScoreCard.innerText = playerScore;
    // }
    // console.log(btn4.innerText);
    if((btn.innerText === "X") && (btn2.innerText === "X") && (btn3.innerText === "X")){
        disableButtons();
        playerScore++;
        playerScoreCard.innerText = playerScore;
    }
    if((btn4.innerText === "X") && (btn5.innerText === "X") && (btn6.innerText === "X")){
        disableButtons();
    }
    if((btn7.innerText === "X") && (btn8.innerText === "X") && (btn9.innerText === "X")){
        disableButtons();
    }
}

//Everything that gets changed to a permanent state during gameplay 
//needs to be reset to 0 or baseline in this function
//player 1 turn, buttons enabled, etc...
function resetGame(){
    player1Turn = true;
    enableButtons();
    clearButtonText();
}

//Additional helper functions below

//Disable all buttons
function disableButtons(){
    btn.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;
}

//Enable all buttons
function enableButtons(){
    btn.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    btn4.disabled = false;
    btn5.disabled = false;
    btn6.disabled = false;
    btn7.disabled = false;
    btn8.disabled = false;
    btn9.disabled = false;
}

//Clear text in all buttons
function clearButtonText(){
btn.innerText = "";
btn2.innerText = "";
btn3.innerText = "";
btn4.innerText = "";
btn5.innerText = "";
btn6.innerText = "";
btn7.innerText = "";
btn8.innerText = "";
btn9.innerText = "";
}