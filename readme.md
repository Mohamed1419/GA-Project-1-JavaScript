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
    - projectile needs to be loaded in when spacebar pressed, invoke spawnProjectile function which spawns projectile based on the position of the spaceship and then use a setinterval to move the projectile independant of the spaceship position
    - upon contact with cell containing an enemy despawn enemy, despawn projectile, update score, and update projectile position
        - in order for game tto recognise contact with enemy, every interval needs to check upon enemypositions via a loop 
        - ran into trouble with firing multiple projectiles had to move from a number variable to an array and alter my code so that i can store multiple projectile positions based on their positions on the grid, ran into some problems with using the splice method when removing the elements that got hit , but realised that the rpoblem was i was splicing all 4 enemy rows and even if there wasnt an element which matched the condition that i was putting in the splice method, it would result in removing the last element of the array
        - projectiles kept speeding up past the interval speed i set, to fix this, i moved the function which called on firing (space) called spawnProjectile out of the setInterval so that fixed the issue
        - ran into an issue with the projectiles not being able to remove the first element of the enemy array, fixed by changing the condition from > 0 to >= 0 because it was not applying to the enemyxpositions which were at index 0
- movements of space ship
- movement of invaders
- score tracker update
- invaders dying when bullets hit them
- game over when invader reaches space ship row

thoughts for later more complex problems
- waves within levels
- levelling system with difficulty increase