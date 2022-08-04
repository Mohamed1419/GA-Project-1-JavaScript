const start = document.getElementById("start-button");
const grid = document.getElementById("cell-container");
const spaceship = document.querySelector(".spaceship");
const scoreboard = document.getElementById("scoreboard");
let score = 0;
scoreboard.innerText = `${score}`;
let level = 1;
let spaceshipPosition = 390;
let cells = [];
let gridCount = 400;
let rightPressed = false;
let leftPressed = false;
let spacePressed = false;
let enemy1positions = [];
let enemy2positions = [];
let enemy3positions = [];
let enemy4positions = [];
let enemyPositions = [];
let projectilePositions = [];

//adding left, right and fire functionality for spaceship
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
    updatePosition();
    // console.log("right arrow has been pressed!");
    // console.log(rightPressed);
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
    updatePosition();
    // console.log("left arrow has been pressed");
  } else if (e.key == "Space" || e.keyCode == 32) {
    spacePressed = true;
    spawnProjectile();
    // console.log("spacebar has been pressed");
  }
}

function keyUpHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
    updatePosition();
    // console.log("right arrow has been released!");
    // console.log(rightPressed);
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
    updatePosition();
    // console.log("left arrow has been released!");
  } else if (e.key == "Space" || e.keyCode == 32) {
    spacePressed = false;
    // console.log("spacebar has been released!");
  }
}

//projectile funtionality
const projectilePath = setInterval(() => {
  for (let i = 0; i < projectilePositions.length; i++) {
    if (projectilePositions[i] > 20) {
      cells[projectilePositions[i]].classList.remove("projectile");
      projectilePositions[i] -= 20;
      cells[projectilePositions[i]].classList.add("projectile");

      // console.log(projectilePositions + " MOVING");
    } else if (projectilePositions[i] <= 20 /*if its on the first row*/) {
      // console.log("one has reached the end" + projectilePositions);
      cells[projectilePositions[i]].classList.remove("projectile");
      // projectilePositions.splice(projectilePositions.indexOf(i), 1);
      projectilePositions.shift();
      // console.log(projectilePositions);
    } else if (
      projectilePositions[i] <= 20 ||
      projectilePositions.length <= 1
    ) {
      console.log("STOP CODE");
      cells[projectilePositions[i]].classList.remove("projectile");
      // projectilePositions.splice(projectilePositions.indexOf(i), 1);
      projectilePositions.shift();
      clearInterval(projectilePath);
    }
  }
}, 100);

//projectile fire when space is pressed
function spawnProjectile() {
  let newProjectilePositon = spaceshipPosition - 20;
  projectilePositions.push(newProjectilePositon);
  cells[
    //should be a number 1-400
    projectilePositions[projectilePositions.indexOf(newProjectilePositon)] //
  ].classList.add("projectile");
  //number on the grid is pushed into projectilePositions array

  const projectilePath = setInterval(() => {
    //projectile hit

    for (let i = 0; i < enemyPositions.length; i++) {
      for (let j = 0; j < projectilePositions.length; j++) {
        console.log(enemyPositions[i], projectilePositions[j]);
        if (enemyPositions[i] === projectilePositions[j]) {
          score += 100;
          scoreboard.innerText = `${score}`;
          cells[enemyPositions[i]].classList.remove(
            "enemy1",
            "enemy2",
            "enemy3",
            "enemy4"
          );

          if (enemy1positions.indexOf(enemyPositions[i]) >= 0) {
            enemy1positions.splice(
              enemy1positions.indexOf(enemyPositions[i]),
              1
            );
          }

          // [].splice(-1, 1) -> removes the last item in array

          if (enemy2positions.indexOf(enemyPositions[i]) >= 0) {
            enemy2positions.splice(
              enemy2positions.indexOf(enemyPositions[i]),
              1
            );
          }

          if (enemy3positions.indexOf(enemyPositions[i]) >= 0) {
            enemy3positions.splice(
              enemy3positions.indexOf(enemyPositions[i]),
              1
            );
          }

          if (enemy4positions.indexOf(enemyPositions[i]) >= 0) {
            enemy4positions.splice(
              enemy4positions.indexOf(enemyPositions[i]),
              1
            );
          }

          // enemy2positions.splice(enemy2positions.indexOf(enemyPositions[i]), 1);
          // enemy3positions.splice(enemy3positions.indexOf(enemyPositions[i]), 1);
          // enemy4positions.splice(enemy4positions.indexOf(enemyPositions[i]), 1);

          enemyPositions = enemy1positions.concat(
            enemy2positions,
            enemy3positions,
            enemy4positions
          );
          // clearInterval(projectilePath);
          cells[projectilePositions[j]].classList.remove("projectile");
          projectilePositions.splice(j, 1);
        }
      }
    }
  }, 400);
}

//spaceship movement
function updatePosition() {
  if (rightPressed && spaceshipPosition < 399) {
    cells[`${spaceshipPosition}`].classList.remove("spaceship");
    spaceshipPosition++;
    // console.log(cells[`${spaceshipPosition}`]);
    cells[`${spaceshipPosition}`].classList.add("spaceship");
  } else if (leftPressed && spaceshipPosition > 380) {
    cells[`${spaceshipPosition}`].classList.remove("spaceship");
    spaceshipPosition--;
    cells[`${spaceshipPosition}`].classList.add("spaceship");
  }
}

//need to clear array to stop addition of 400 elements everytime user presses start

//load grid
function loadGrid() {
  for (let i = 0; i < gridCount; i++) {
    const newCell = document.createElement("div");
    newCell.setAttribute("id", `cell${i + 1}`);
    cells.push(newCell);
    grid.append(cells[i]);
  }
}
loadGrid();

function loadSpaceship() {
  cells[`${spaceshipPosition}`].classList.add("spaceship");
  // console.log("spaceship has been loaded");
}

//121 - 139
function loadEnemy1() {
  for (let i = 121; i < 140; i += 2) {
    cells[i].classList.add("enemy1");

    enemy1positions.push(i);
  }
}

//81 - 99
function loadEnemy2() {
  for (let i = 80; i < 99; i += 2) {
    cells[i].classList.add("enemy2");

    enemy2positions.push(i);
  }
}

function loadEnemy3() {
  for (let i = 41; i < 60; i += 2) {
    cells[i].classList.add("enemy3");

    enemy3positions.push(i);
  }
}

function loadEnemy4() {
  for (let i = 0; i < 19; i += 2) {
    cells[i].classList.add("enemy4");

    enemy4positions.push(i);
  }
}

function gameOver() {
  //remove enemies
  for (let i = 0; i < enemy1positions.length; i++) {
    cells[`${enemy1positions[i]}`].classList.remove("enemy1");
  }
  for (let i = 0; i < enemy2positions.length; i++) {
    cells[`${enemy2positions[i]}`].classList.remove("enemy2");
  }
  for (let i = 0; i < enemy3positions.length; i++) {
    cells[`${enemy3positions[i]}`].classList.remove("enemy3");
  }
  for (let i = 0; i < enemy4positions.length; i++) {
    cells[`${enemy4positions[i]}`].classList.remove("enemy4");
  }
  enemy1positions = [];
  enemy2positions = [];
  enemy3positions = [];
  enemy4positions = [];
  enemyPositions = enemy1positions.concat(
    enemy2positions,
    enemy3positions,
    enemy4positions
  );
  for (let i = 0; i < projectilePositions.length; i++) {
    cells[projectilePositions[i]].classList.remove("projectile");
  }
  projectilePositions = [];

  //reset score
  alert(`Game Over! Your final score was ${score}`);
  score = 0;
  scoreboard.innerText = `${score}`;
}

start.addEventListener("click", () => {
  // clearArray();
  // console.log(cells);
  //loadGrid();
  loadSpaceship();
  // console.log(cells[390]);
  // console.log(cells[`${cells[390].classList}`]);
  // cell 390 has spaceship in its class
  loadEnemy1();
  loadEnemy2();
  loadEnemy3();
  loadEnemy4();
});

//enemy descent

//GENERAL OUTLOOK: every second (for the sake of testing) every enemy will be removed from its position, given a new position on grid, and then added to those new positions on the grid
const enemyMovement = setInterval(() => {
  //cells[`${enemy1positions}`].classList.remove("enemy1"); //will need to loop through the enemy1positions

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

  enemyPositions = enemy1positions.concat(
    enemy2positions,
    enemy3positions,
    enemy4positions
  );
  // console.log(enemyPositions);

  // if any of the values in any of the 4 enemy position arrays are greater than 380, call gameOver function
  enemy1positions.every((position) => {
    if (position > 380) {
      gameOver();
      return false;
    }
    return true;
  });

  enemy2positions.every((position) => {
    if (position > 380) {
      gameOver();
      return false;
    }
    return true;
  });

  enemy3positions.every((position) => {
    if (position > 380) {
      gameOver();
      return false;
    }
    return true;
  });

  enemy4positions.every((position) => {
    if (position > 380) {
      gameOver();
      return false;
    }
    return true;
  });
}, 1000);
