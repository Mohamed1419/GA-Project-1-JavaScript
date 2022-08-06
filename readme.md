Project 1: space raiders
Thinking out all the main aspects of the game:
- load up arena grid
    - how to create direction with grid??
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

ReadMe Sections

Description

Instructions

Here, give a short description of the project. It can be a couple of sentences where you discuss the point in time during the course that you completed it, the topic of the project and potentially the tech stack.

Insert your Description here:

This is a game which resembles the classic Space Invaders. This was my first project in my Software Engineering course after i had completed learning HTML CSS and JavaScript. It is a more simplified version which does include all the features of the original Space Invaders, however the fundamental logic by which the originial fame operates is all there. The start date was Tuesday 26th July 2022 and the end date is Friday 5th August 2022. I used a tech stack of HTML, CSS and JavaScript. 

Deployment link


Instructions

Here include the information on where the deployed project can be found. If login details are needed to access the full project, make sure you include them.

If you have not yet deployed your project, you can add this in later.

Insert your Deployment link here:

NOT YET COMPLETED


Getting Started/Code Installation

Instructions

Explain how the reader accesses your code. Include a step by step approach.

Insert your Getting Started/Code Installation here:





Timeframe & Working Team (Solo/Pair/Group)

Instructions

Share the timeframe given for the project and whether you worked independently, in a pair, or in a group.

If you worked in a pair or group, include the names of the people you collaborated with. As a bonus, you can also provide links to their GitHub repo.

Insert your Timeframe & Working Team here:
For this project I had a timeframe of 11 days from Tuesday 26th July to Friday 5th of August. I was working alone from beginning to end. 



Technologies Used

Instructions

List every technology you used to complete the project. This can be in one long list, or broken down into categories (Back End, Front End, Development Tools).

Insert your Technologies Used here:
Technologies used: HTML, CSS, JavaScript.




Brief
Instructions

Include the brief set by your instructional team here. This sets the context of the project you were working towards and mimics briefs you will be set later in your future roles.

This can either be in bullets or in a paragraph.


Insert your Brief here:

The player can only move left or right. The aliens also move from left to right, and also down each time the reach the side of the screen. The aliens also periodically drop bombs towards the player.

Once the player has destroyed a wave of aliens, the game starts again. The aim is to achieve the highest score possible before either being destroyed by the aliens, or allowing them to reach the planet's surface.


Requirements
The player should be able to clear at least one wave of aliens
The player's score should be displayed at the end of the game
Suggested enhancements
Responsive design
Each wave gets more difficult
Persistent leaderboard using localStorage
Challenges
The main challenge here is the movement of large groups of aliens in formation, and the animation of the bombs and player's shots. There are several approaches here, with collision detection being the more challenging.


Planning

Instructions

The planning stage is important, as all projects in your future roles will have detailed plans before any coding happens. It is a great experience to share with potential engineer employers, as this reflects real engineering team practices. 

Start by explaining the initial steps you took in the project. 

Did you do any sketches? If so, discuss this and include images.
Any wireframes of the front end and UI? You did? Then explain this and include images.
Any ERDs? Same here, explain and include images.
Use a project management tool to plan the sprint? If so, talk through this - what tool did you use? How you allocated tickets/responsibilities, sprint timeline etc. Also include screenshots of this.
Any pseudocode? 
If it was a group or pair project - Discuss who was designated which tasks. This is very important, as engineers want to understand who owned the different code elements when looking at a group project.

For each project, review the above bullets and discuss every step you took in the planning stage, including the relevant images.

Not every project will include the above, but it’s important to discuss any of the bullets that you did implement.

Insert your Planning here:

My first steps in planning out this project is to determine which technology deck i want to use and this is HTML, CSS, and JavaScript. Next I need to breakdown the Space Invaders game into small chunks which i can work on in a step by step and chronologically sound method. i plan to use an agile approach to this project as i think it was more suitable than waterfall and that testing will be a crucial aspect of the development process. 

- load up arena grid
    - how to create sense of direction with grid??
        - will assign numbers 1-400 to each cell in the grid, therefore grid will be 20x20 and so an increment or decrement of 20 will mean vertical movement and
- load up space ship
    - increments or decrements of 1 will mean horizontal movement
    - restrict movement between cells 381 - 400 (bottom row) so spaceship does not go off grid or into the row above it
- load up invaders
    - need to be able to single out all the enemy cells. create an array which changes the enemy positions every few seconds
    - if invaders reach spaceship row, gameOver. loop through each enemyposition array and added condition that if the cell was more than 380 call gameover function
    - gameover function resets enemies on grid, resets level, reset difficulty
- load up score board

- gun firing
    - projectile needs to be loaded in when spacebar pressed, invoke spawnProjectile function which spawns projectile based on the position of the spaceship and then use a setinterval to move the projectile independant of the spaceship position
- movements of space ship
- movement of invaders
- score tracker update
- invaders dying when bullets hit them
- game over when invader reaches space ship row
- levelling system

This was my initial plan which provided me with guidance and a general outlook on what the game will look like. I will be using Trello boards and specifically the Kanban template in order to keep track and better able to manage my project. https://trello.com/b/xM4OhKAR/kanban-template. I mapped out my initial plan chunks into the Trello board and when i start work on a specific section, i will constantly be updating the Trello board and reviewing my approach if i do come to realise that a change needs to be made. 

Throughout this project i will be using 


Build/Code Process

Instructions

The Build/Code Process will be the longest section of your ReadMe and will be most insightful to the engineers that review them. This is where you will discuss the steps you took to code the project.

You want to see your ReadMes as a way to walk the engineers through your approach and problem solving from the start of the project through to the end.

You'll need to include a minimum of 3-4 code snippets, highlighting code you're particularly proud of and these code snippets will have descriptions on what you did, how and why to set the context of the snippet you include. These explanations are important for the engineers, as they will want to understand what you did and the reasoning behind the steps you took.

You don't need to document every single thing you coded, but walk them through the key sections of the project build.

For any group project, you will just focus on your contributions. 

Some people will document the build/code process by discussing the key stages they worked on. Others will do a day by day guide. It’s entirely up to you how you structure this, as long as you discuss all the key things above.

Insert your Build/Code Process here:
In this code snippet below, i was able to code in enemy movement row by row. the reason i decided to break the enemies down into arrays based on their rows is because each row contains a different enemy entity that has different pictures which represent them. therefore when first loading them in, it was not possible to do it all at once. Although looking back now, it would have made the code much cleaner if i figured out a way to somehow group all the enemies in 1 array so that the movement of all enemies can be executed in 1 for loop rather than 4 different for loops for each unique enemy. 
In the code below i use an every method on the enemy1 array which loops through all the elements in enemy1 to check if it has reached the bottom row (earth) and then uses a function which compares its position using a conditional. return lines are needed because the .every method returns a boolean 
 enemy1positions.every((position) => {
    if (position > 380) {
      gameOver();
      return false;
    }
    return true;
  });


The code below is made for ending the level and initiating a new one. this was an interesting block because i needed to figure out a way to increase the level and difficulty after each level had ended - bearing in mind endLevel is completely different to gameOver as it indicated successfully completing a level and moving to the next one. My solution was to stop the enemyMovement setInterval by clearInterval and creating an identical setInterval but with the count being altered to reflect the count of the new difficulty, therefore making the enemies move down in shorter intervals and giving the player a harder level. 

function endLevel() {
  cells[spaceshipPosition].classList.remove("spaceship");
  spaceshipPosition = null;
  alert(`level ${level} complete. Press OK to start next level`);
  for (let i = 0; i < projectilePositions.length; i++) {
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

As an extension of the last block, this snippet below is a conditional which ensures that the array of enemies is cleared and that the spaceship has a truthy position. The reason the second condition is there is because since an empty array occurs not only when the player destroys all the enemies but also technically when a new game is started. hence if i was to make the condition only that the array is empty then the endLevel function will be called even if the player has not yet killed a single enemy. 

if (enemyPositions.length <= 0 && spaceshipPosition) {
    endLevel();
  }



Challenges

Instructions

Challenges are great for showing your learning journey and problem solving, and this is a section that many engineers will check out. Every day of your engineering career you’ll encounter challenges, this is part of your growth and development. It’s the challenges you encounter that helps you become a stronger and more competent engineer. 

Here you will detail any particular challenges you encountered as you were coding the project. 

Questions to answer here:

What technical challenges did you come across? 
Why were these challenges? 
What problem solving did you do to rectify them?
Team dynamics/ Project management
Tools/Tech you used

Insert your Challenges here:

- came across an issue with making the code block for the moving working , the problem was that i had the functions coded in however it was not being called. Therefore, i called the function in the keyup and keydown handlers and the code was running.
- for movement of enemies, created an array which changes the enemy positions every few seconds, had a problem with that code block only running once when the game is started, fixed by changing .forEach to .map as the original enemy1positions array was not being affected by using forEach method
 - ran into trouble with firing multiple projectiles had to move from a number variable to an array and alter my code so that i can store multiple projectile positions based on their positions on the grid,
 - ran into some problems with using the splice method when removing the elements that got hit , but realised that the problem was i was splicing all 4 enemy rows and even if there wasnt an element which matched the condition that i was putting in the splice method, it would result in removing the last element of the array as .splice would return -1 if the condition was not met
 - projectiles kept speeding up past the interval speed i set every time a projectile was fired, to fix this, i moved the function which called on firing (space) called spawnProjectile out of the setInterval so that fixed the issue because a new setInveral was being called every time the player clicked 'space'
- ran into an issue with the projectiles not being able to remove the first element of the enemy array, fixed by changing the condition from > 0 to >= 0 because it was not applying to the enemyxpositions (x meaning 1, 2, 3, or 4) which were at index 0
- every time a new game was started, a level complete message appeared even though no level was complete. This was happening because the condition i set for starting a new level called endLevel was being met as there were 0 elements in the enemyPositions array before you clicked the start game button. To fix this i simply added another condition using && to the  condition which invokes endLevel which was that the spaceship needed to be present, so i coded this by just checking if spaceshipPosition was truthy, and if it was then you could invoke endLevel. i also needed to make sure that after each level was cleared, spaceship needed to be removed and when a new level was started, it needed to be spawned in again, so i set the spaceshipPosition to null every time the level was cleared. 
- after a certain amount of levels, because the count for the enemyMovement setInterval was being decremented by 1000 every level, after 5 levels the game just broke because the count for each interval reached 0. to fix this, i simply made the count for the interval decrease by 20% of whatever the difficulty was at the time so this way it will indefinitely become increasingly more difficult and wont break after a certain level
- had a problem with the gameOver function which worked properly however when a new game started it did not reset the difficulty back to level 1 difficulty (5000 count timer). to fix this, i added a small snipper of code which i extracted from my endLevel function which reset the interval so that the change in difficulty was reflected on the game.

Wins

Instructions

The Wins section is your opportunity to highlight the aspects of your project you are most proud of. See this as your chance to showcase these parts of your projects to the engineers reading your ReadMes.

Things you could discuss here:

Interesting problem solving you did
Strong sections of code
Collaboration with other team members
Visual design of the project

Insert your Wins here:
- i was able to meet all the targets in the project brief and meet my deadline
- the functionality of the projectiles and projectiles colliding with the enemies was very complex and had many issues along the way. in the end i was very proud of the code and the way it was functioning very smoothly during the game-play. 
- i was also impressed by how quickly and easily i understood how i should add a levelling system, i feel like the code was written well enough and structures such that even in the end (because the levelling system was the last thing added) it was fairly straightforward to add in that functionality. i believe this was the way that it was because of the meticulous planning beforehand. also just being able to make sure that the game doesnt just break after a certain amount of levels and can just go on indefinitely i belive was a creative way to fix the issue of the game breaking after a certain amount of levels



Key Learnings/Takeaways

Instructions

This section is one of the other most important parts of your ReadMe from an engineers’ perspective and helps to differentiate each of you from your classmates and team members. 

Engineers love to understand what you learn from each project and how it has shaped you as an engineer. 

See this as your opportunity to show the engineers how your skills grew during each project sprint. 

Things you could discuss here:

What Technologies/Tools do you now feel more confident with? Tell them specifically what you learnt about these. 
What engineering processes did you become more comfortable with? Standups? Pair programming? Project management? Tell them what you learnt from these processes?

Insert your Key Learnings/Takeaways here:

In this project i believe my skills were truly tested, especially in understanding how loops and setIntervals work. i was also heavily using arrays and therefore made use of a lot of different array methods during my development process, constantly researching the best methods to use in the different situations which popped up, and although i had gone through a lot of them in theory, using them in real life situations gave me depth of understanding of how they work. I was constantly testing out the different methods which were available and seemed feasible at first. It also helped that i was constantly revising and getting a feel for the more common ones. I believe this experience will be valuable in the future as an engineer. 
more specifically i got to understand the correct usage of the .splice method and the .forEach method which i was misusing and was a big cause of problems for me. 
I was also very much employing a lot of various testing techniques which helped me a lot to debug. for example making use of console.log 
and seeing what exactly was going on in the background. 

Bugs

Instructions

If you have any bugs in your project, it’s important that you flag them in your ReadMe. This helps the engineers reviewing your projects to understand that you are aware that there are issues - if you don’t flag these, then they won’t have that visibility that you know these problems are in your code and it can result in them not having a full understanding of your technical knowledge. 

In either sentences or bullets, explain what the bugs are.

If you have no bugs, you can leave this section blank.

Insert your Bugs here:
- When the game first starts and all the entities are loaded, there is a short interval where you can shoot projectiles however the projectiles to not hit the enemies. 
- when the enemyMovement interval gets faster and faster in later levels, sometimes the projectiles phase through the enemies, i have a feeling this is coming from the fact that 2 setIntervals are at play here 

Future Improvements

Instructions

It’s common to get to the end of your project and have ideas on what you would do if you have more time, as well as how you might improve it. 

If you do, you should detail this here. It’s great to give that context on potential future improvements, to share your creative or technical ideas with the engineers reading your ReadMes.

In either sentences or bullets, explain what your future improvements would be.

Insert your Future Improvements here:
For future improvements,  i hope to be able to include a larger variety of ways to approach problems. for example, i did not use objects at all in this whole project although there were probably some places where i could made use of it. 
I was also not able to do a lot of refactoring of my code to make it more concise due to time constraints. 