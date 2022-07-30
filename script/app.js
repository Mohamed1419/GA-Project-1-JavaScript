const start = document.getElementById("start-button");
const grid = document.getElementById("cell-container");
const spaceship = document.querySelector(".spaceship");
let level = 1;
let spaceshipPosition = 390;
let cells = [];
let gridCount = 400;
let rightPressed = false;
let leftPressed = false;
let enemy1positionsGlobal = [];
let enemy2positionsGlobal = [];
let enemy3positionsGlobal = [];
let enemy4positionsGlobal = [];

//adding left right functionality for spaceship
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
    updatePosition();
    console.log("right arrow has been pressed!");
    console.log(rightPressed);
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
    updatePosition();
    console.log("left arrow has been pressed");
  }
}

function keyUpHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
    updatePosition();
    console.log("right arrow has been released!");
    console.log(rightPressed);
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
    updatePosition();
    console.log("left arrow has been released!");
  }
}

function updatePosition() {
  if (rightPressed && spaceshipPosition < 399) {
    cells[`${spaceshipPosition}`].classList.remove("spaceship");
    spaceshipPosition++;
    console.log(cells[`${spaceshipPosition}`]);
    cells[`${spaceshipPosition}`].classList.add("spaceship");
  } else if (leftPressed && spaceshipPosition > 380) {
    cells[`${spaceshipPosition}`].classList.remove("spaceship");
    spaceshipPosition--;
    cells[`${spaceshipPosition}`].classList.add("spaceship");
  }
}
//need to clear array to stop addition of 400 elements everytime user presses start
// function clearArray() {
//   cells = [];
// }

function loadGrid() {
  for (let i = 0; i < gridCount; i++) {
    const newCell = document.createElement("div");
    newCell.setAttribute("id", `cell${i + 1}`);
    cells.push(newCell);
    grid.append(cells[i]);
  }
}

function loadSpaceship() {
  cells[`${spaceshipPosition}`].classList.add("spaceship");
  console.log("spaceship has been loaded");
}

//121 - 139
function loadEnemy1() {
  for (let i = 121; i < 140; i += 2) {
    cells[i].classList.add("enemy1");

    enemy1positionsGlobal.push(i + 1);
  }
}

//81 - 99
function loadEnemy2() {
  for (let i = 80; i < 99; i += 2) {
    cells[i].classList.add("enemy2");

    enemy2positionsGlobal.push(i + 1);
  }
}

function loadEnemy3() {
  for (let i = 41; i < 60; i += 2) {
    cells[i].classList.add("enemy3");

    enemy3positionsGlobal.push(i + 1);
  }
}

function loadEnemy4() {
  for (let i = 0; i < 19; i += 2) {
    cells[i].classList.add("enemy4");

    enemy4positionsGlobal.push(i + 1);
  }
}

start.addEventListener("click", () => {
  // clearArray();
  console.log(cells);
  loadGrid();
  loadSpaceship();
  console.log(cells[390]);
  console.log(cells[`${cells[390].classList}`]);
  // cell 390 has spaceship in its class
  loadEnemy1();
  loadEnemy2();
  loadEnemy3();
  loadEnemy4();

  let enemy1positions = enemy1positionsGlobal;
  let enemy2positions = enemy2positionsGlobal;
  let enemy3positions = enemy3positionsGlobal;
  let enemy4positions = enemy4positionsGlobal;

  //enemy descend
  const enemyMovement = setInterval(() => {
    //targeting enemy cells
    //update enemy1 positions
    //cells[`${enemy1positions}`].classList.remove("enemy1"); //idea of what i want to happen, will need to loop throught the enemy1positions

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

    enemy1positions.forEach((position) => {
      position += 19;
      cells[`${position}`].classList.add("enemy1");
    });

    enemy2positions.forEach((position) => {
      position += 19;
      cells[`${position}`].classList.add("enemy2");
    });

    enemy3positions.forEach((position) => {
      position += 19;
      cells[`${position}`].classList.add("enemy3");
    });

    enemy4positions.forEach((position) => {
      position += 19;
      cells[`${position}`].classList.add("enemy4");
    });
  }, 1000);
});

//projectile
/*
const projectile = setInterval(() => {
  if (projectilePosition === enemy - 20) {
    //despawn enemy , despawn projectile, add 100 points
  } else projectilePosition += 20;
}, 1000);

*/
