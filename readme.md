# Project 1: Space Invaders

## Description

This is a game which resembles the classic Space Invaders. This was my first project in my Software Engineering course after I had completed learning HTML, CSS and JavaScript. It is a more simplified version which does include all the core features of the original Space Invaders. The start date was Tuesday 26th July 2022 and the end date is Friday 5th August 2022. I used a tech stack of HTML, CSS and JavaScript. 

## Deployment link

https://mohamed1419.github.io/GA-Project-1-JavaScript/


## Timeframe & Working Team (Solo/Pair/Group)


For this project I had 11 days from Tuesday 26th July to Friday 5th of August. I was working alone from beginning to end. 


## Technologies Used


Technologies used: HTML, CSS, JavaScript, Git


## Brief

The player can only move left or right. The aliens move downwards.

Once the player has destroyed a wave of aliens, the game starts again. The aim is to achieve the highest score possible before either being destroyed by the aliens, or allowing them to reach the planet's surface.


Requirements:
- The player should be able to clear at least one wave of aliens
- The player's score should be displayed at the end of the game

Suggested enhancements
- Responsive design
- Each wave gets more difficult
Challenges
- The main challenge here is the movement of large groups of aliens in formation, and the animation of the bombs and player's shots. There are several approaches here, with collision detection being the more challenging.


## Planning

First I needed to breakdown the Space Invaders game into small chunks which I can work on in a step by step and chronologically sound method. I plan to use an agile approach to this project as I think it was more suitable due to the need of constant testing throughout the project. 

Initial thoughts:
- Will need to load up grid
    - How to create sense of direction with grid??
        - Will assign numbers 1-400 to each cell in the grid, therefore grid will be 20x20 and so an increment or decrement of 20 will mean vertical movement
- Load up space ship
    - Increments or decrements of 1 will mean horizontal movement
    - Restrict movement between cells 381 - 400 (bottom row) so spaceship does not go off grid or into the row above it
- Load up enemy invaders
    - Need to be able to single out all the enemy cells and create an array which holds the enemy positions
    - If invaders reach spaceship row, game over
    - Loop through each enemy position array and add condition that if the cell was more than 380 call game over function
    - Game over function resets enemies on grid, resets level, reset difficulty
- Load up score board
- Gun firing
    - Projectile needs to be loaded in when spacebar is pressed, invoke spawn projectile function which spawns projectile based on the position of the spaceship and then use a setInterval to move the projectile independent of the spaceship position
- Movements of space ship
- Movement of invaders
- Score tracker update
- Enemy invaders dying when rockets hit them
- Game over when invader reaches space ship row
- Levelling system

This was my initial plan broken down into chunks, which provided me with guidance and a general outlook on how the game will function. I will be using Trello boards and specifically the Kanban template in order to keep track and better able to manage my project. You can see my board here: https://trello.com/b/xM4OhKAR/kanban-template. I mapped out my initial plan chunks into the Trello board and when I start work on a specific section, I will constantly be updating the Trello board and reviewing my approach if I do come to realise that a change needs to be made. 


## Build/Code Process

In this code snippet below, I was able to code in enemy movement row by row. the reason I decided to break the enemies down into arrays based on their rows is because each row contains a different enemy entity that has different pictures which represent them. Therefore when first loading them in, it was not possible to do it all at once. Although looking back now, it would have made the code much cleaner if I figured out a way to somehow group all the enemies in 1 array so that the movement of all enemies can be executed in 1 for loop rather than 4 different for loops for each unique enemy (which I actually later needed to incorporate anyway). 

```js
cells.forEach((cell) => {
    if (
      cell.classList.contains("enemy1") ||
      cell.classList.contains("enemy2") ||
      cell.classList.contains("enemy3") ||
      cell.classList.contains("enemy4")
    ) {
      cell.classList.remove("enemy1", "enemy2", "enemy3", "enemy4");
    }
  });

enemy1positions = enemy1positions.map((position) => {
  position += 20;
  cells[position].classList.add("enemy1");
  return position; // This is the new value of the enemy position!
});

enemy2positions = enemy2positions.map((position) => {
  position += 20;
  cells[`${position}`].classList.add("enemy2");
  return position;
});

enemy3positions = enemy3positions.map((position) => {
  position += 20;
  cells[`${position}`].classList.add("enemy3");
  return position;
});

enemy4positions = enemy4positions.map((position) => {
  position += 20;
  cells[`${position}`].classList.add("enemy4");
  return position;
});
```

In the code below I use an every method on the enemy1 array which loops through all the elements in enemy1 to check if it has reached the bottom row (earth) and then uses a function which compares its position using a conditional. Return lines are needed because the .every method returns a boolean.

```js
enemy1positions.every((position) => {
    if (position > 380) {
      gameOver();
      return false;
    }
    return true;
  });
```

The code below is made for ending the level and initiating a new one. This was an interesting block because I needed to figure out a way to increase the level and difficulty after each level had ended - bearing in mind endLevel is completely different to gameOver as it indicated successfully completing a level and moving to the next one. My solution was to stop the enemyMovement setInterval by clearInterval and creating an identical setInterval but with the count being altered to reflect the count of the new difficulty, therefore making the enemies move down in shorter intervals and giving the player a harder level. 

```js
function endLevel() {
  cells[spaceshipPosition].classList.remove("spaceship");
  spaceshipPosition = null;
  alert(`level ${level} complete. Press OK to start next level`);
  for (let I = 0; I < projectilePositions.length; i++) {
    cells[projectilePositions[i]].classList.remove("projectile");
  }
  level += 1;

  difficulty -= difficulty * 0.2;

  loadSpaceship();
  loadEnemy1();
  loadEnemy2();
  loadEnemy3();
  loadEnemy4();
  clearInterval(enemyMovement);
  enemyMovement = setInterval(() => {
    moving();
    console.log("Second level counter");
  }, difficulty);
}
```

As an extension of the last block, this snippet below is a conditional which ensures that the array of enemies is cleared and that the spaceship has a truthy position. The reason the second condition is there is because since an empty array occurs not only when the player destroys all the enemies but also technically when a new game is started, hence if I was to make the condition only that the array is empty then the endLevel function will be called even if the player has not yet killed a single enemy. 

```js
if (enemyPositions.length <= 0 && spaceshipPosition) {
    endLevel();
  }
```

## Challenges

- Came across an issue with making the code block for the moving working, the problem was that I had the functions coded in however it was not being called. Therefore, I called the function in the keyup and keydown handlers and the code was running
- For movement of enemies, created an array which changes the enemy positions every few seconds, had a problem with that code block only running once when the game is started, fixed by changing .forEach to .map as the original enemy1positions array was not being affected by using forEach method
- Ran into trouble with firing multiple projectiles had to move from a number variable to an array and alter my code so that I could store multiple projectile positions based on their positions on the grid
- Ran into some problems with using the splice method when removing the elements that got hit, but realised that the problem was I was splicing all 4 enemy rows and even if there was not an element which matched the condition that I was putting in the splice method, it would result in removing the last element of the array as .splice would return -1 if the condition was not met
- Projectiles kept speeding up past the interval speed I set every time a projectile was fired, to fix this, I moved the function which called on firing (space) called spawnProjectile out of the setInterval so that fixed the issue because a new setInverval was being called every time the player clicked 'space'
- Ran into an issue with the projectiles not being able to remove the first element of the enemy array, fixed by changing the condition from > 0 to >= 0 because it was not applying to the enemyxpositions (x meaning 1, 2, 3, or 4) which were at index 0
- Every time a new game was started, a level complete message appeared even though no level was complete and this was happening because the condition I set for starting a new level called endLevel was being met as there were 0 elements in the enemyPositions array before you clicked the start game button; to fix this I simply added another condition using && to the  condition which invokes endLevel which was that the spaceship needed to be present, so I coded this by just checking if spaceshipPosition was truthy, and if it was then you could invoke endLevel; I also needed to make sure that after each level was cleared, spaceship needed to be removed and when a new level was started, it needed to be spawned in again, so I set the spaceshipPosition to null every time the level was cleared. 
- After a certain amount of levels, because the count for the enemyMovement setInterval was being decremented by 1000 every level, after 5 levels the game just broke because the count for each interval reached 0. to fix this, I simply made the count for the interval decrease by 20% of whatever the difficulty was at the time so this way it will indefinitely become increasingly more difficult and wont break after a certain level
- Had a problem with the gameOver function which worked properly however when a new game started it did not reset the difficulty back to level 1 difficulty (5000 count timer), to fix this, I added a small snipper of code which I extracted from my endLevel function which reset the interval so that the change in difficulty was reflected on the game

## Wins

- I was able to meet all the targets in the project brief and meet my deadline
- The functionality of the projectiles and projectiles colliding with the enemies was very complex and had many issues along the way, in the end I was very proud of the code and the way it was functioning very smoothly during the game-play
- I was also impressed by how quickly and easily I understood how I should add a levelling system, I feel like the code was written and structured well enough such that even in the end (because the levelling system was the last thing added) it was fairly straightforward to add in that functionality, I believe this was because of the meticulous planning beforehand
- Being able to make sure that the game does not just break after a certain amount of levels and can just go on indefinitely was another win because I think my solution was quite creative


## Key Learnings/Takeaways

In this project I believe my skills were tested, especially in understanding how loops and setIntervals work. I was also heavily using arrays and therefore made use of a lot of different array methods during my development process, constantly researching the best methods to use in the different situations which popped up, and although I had gone through a lot of them in theory, using them in real life situations gave me more depth of understanding of how they work. It also helped that I was constantly revising and getting a feel for the more common ones. I believe this experience will be valuable in the future as an engineer. 
More specifically I got to understand the correct usage of the .splice method and the .forEach method which I was misusing and was a big cause of problems for me. 
I was also very much employing a lot of various testing techniques which helped me a lot to debug. For example making use of console.log 
and seeing what exactly was going on in the background. 

## Bugs

- When the game first starts and all the entities are loaded, there is a short interval where you can shoot projectiles however the projectiles to not hit the enemies
- When the enemyMovement interval gets faster and faster in later levels, sometimes the projectiles phase through the enemies, I have a feeling this is coming from the fact that 2 setIntervals are at play here 

## Future Improvements

- Adding a high score system
- Improving on the CSS