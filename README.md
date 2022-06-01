# Arcade
Arcade Project for FullStack

Start with createing a grid to store pictures of X's and O's
Hold buttons in the Grid that are invisiable but will change state when the user clicks a button
Each X and O will have its own id in order to quantify them for parsing to check for wins

HOw to determine whose turn it is currently?
Flip a boolean froim tru to false for player1's turn
if player1 === true, the onClick place an X
else if not player1's turn, place an O onClick

for the JS, continuously loop to check for 3 unique IDs in any given row column or diag
Refer back to sudoku workshop for the logic

Center the entire board in the window

Reset Button, And a general scoreboard that resets when the page is refreshed

Make the computer stupid hard to play against, no difficulty options, inpiration from From Software games

