Project 1: space raiders
Thinking out all the main aspects of the game:
- load up arena grid
    - PROBLEM: how to create direction with grid??
        - will use multiples of 20 to reference rows
- load up space ship
    - restrict movement between cells 381 - 400
    - came across an issue with making the code block for the movement working , the problem was that i had the functions coded in however it was not being called. Therefore, i called the function in the keyup and keydown handlers and the code was running.
- load up invaders
    - need to be able to single out all the enemy cells. created an array which changes the enemy positions every few seconds, had a problem with that code block only running once, fixed by changing .forEach to .map as the original enemy1positions array was not being affected by forEach
    - if invaders reach spaceship row, gameOver. looped through each enemyposition array and added condition that if the cell was more than 380 call gameover function
    - gameover function resets enemies on grid
- load up score board

thinking of all the aspects that dont manifest upon loading up
- gun firing
- movements of space ship
- movement of invaders
- score tracker update
- invaders dying when bullets hit them
- game over when invader reaches space ship row

thoughts for later more complex problems
- waves within levels
- levelling system with difficulty increase