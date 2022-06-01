const btn = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");

let player1Turn = false;

btn.addEventListener('click', function onCLick(){
    //If it is player1's turn, place an X on CLick, then flip the boolean for player1Turn
    //Or if it is not player1's turn, place an O and flip the boolean
    if(player1Turn){
        btn.innerText = "X";
        player1Turn = !player1Turn;
    }else if(!player1Turn){
        btn.innerText = "O";
        player1Turn = !player1Turn;
    }
    
});
btn2.addEventListener('click', function onCLick(){
    //If it is player1's turn, place an X on CLick, then flip the boolean for player1Turn
    //Or if it is not player1's turn, place an O and flip the boolean
    if(player1Turn){
        btn2.innerText = "X";
        player1Turn = !player1Turn;
    }else if(!player1Turn){
        btn2.innerText = "O";
        player1Turn = !player1Turn;
    }
    
});
btn3.addEventListener('click', function onCLick(){
    //If it is player1's turn, place an X on CLick, then flip the boolean for player1Turn
    //Or if it is not player1's turn, place an O and flip the boolean
    if(player1Turn){
        btn3.innerText = "X";
        player1Turn = !player1Turn;
    }else if(!player1Turn){
        btn3.innerText = "O";
        player1Turn = !player1Turn;
    }
    
});
btn4.addEventListener('click', function onCLick(){
    //If it is player1's turn, place an X on CLick, then flip the boolean for player1Turn
    //Or if it is not player1's turn, place an O and flip the boolean
    if(player1Turn){
        btn4.innerText = "X";
        player1Turn = !player1Turn;
    }else if(!player1Turn){
        btn4.innerText = "O";
        player1Turn = !player1Turn;
    }
    
});
btn5.addEventListener('click', function onCLick(){
    //If it is player1's turn, place an X on CLick, then flip the boolean for player1Turn
    //Or if it is not player1's turn, place an O and flip the boolean
    if(player1Turn){
        btn5.innerText = "X";
        player1Turn = !player1Turn;
    }else if(!player1Turn){
        btn5.innerText = "O";
        player1Turn = !player1Turn;
    }
    
});
btn6.addEventListener('click', function onCLick(){
    //If it is player1's turn, place an X on CLick, then flip the boolean for player1Turn
    //Or if it is not player1's turn, place an O and flip the boolean
    if(player1Turn){
        btn6.innerText = "X";
        player1Turn = !player1Turn;
    }else if(!player1Turn){
        btn6.innerText = "O";
        player1Turn = !player1Turn;
    }
    
});
btn7.addEventListener('click', function onCLick(){
    //If it is player1's turn, place an X on CLick, then flip the boolean for player1Turn
    //Or if it is not player1's turn, place an O and flip the boolean
    if(player1Turn){
        btn7.innerText = "X";
        player1Turn = !player1Turn;
    }else if(!player1Turn){
        btn7.innerText = "O";
        player1Turn = !player1Turn;
    }
    
});
btn8.addEventListener('click', function onCLick(){
    //If it is player1's turn, place an X on CLick, then flip the boolean for player1Turn
    //Or if it is not player1's turn, place an O and flip the boolean
    if(player1Turn){
        btn8.innerText = "X";
        player1Turn = !player1Turn;
    }else if(!player1Turn){
        btn8.innerText = "O";
        player1Turn = !player1Turn;
    }
    
});
btn9.addEventListener('click', function onCLick(){
    //If it is player1's turn, place an X on CLick, then flip the boolean for player1Turn
    //Or if it is not player1's turn, place an O and flip the boolean
    if(player1Turn){
        btn9.innerText = "X";
        player1Turn = !player1Turn;
    }else if(!player1Turn){
        btn9.innerText = "O";
        player1Turn = !player1Turn;
    }
    
});