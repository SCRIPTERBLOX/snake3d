let winWidth = 800;
let winHeight = 800;

let sideViewWidth = 266;

// Snake Variables
let food = [5, 5, 5];
let defaultSnake = [[3, 3, 3]];
let snake = [[3, 3, 3]];
let widthTiles = 10;
let heightTiles = 10;
let depthTiles = 10;
let dir = "i";

function setup() {
  let canvas = createCanvas(winWidth+sideViewWidth, winHeight);
  frameRate(60);
}

let framesI = 0;
let frameDelay = 60;

let dirs = [
  'w',
  's',
  'a',
  'd',
  'i',
  'k'
]

function keyPressed() {
  if (key === 'w' || 's', 'a', 'd', 'i', 'k') {
    dir = key;
  }
}

function draw() {
  framesI++;
  
  if (framesI >= frameDelay) {
    framesI -= frameDelay;
    everyInterval();
  }

  background(51, 51, 51);
  render(widthTiles, heightTiles, depthTiles, snake.slice(0, snake.length));
}

function everyInterval() {
  if (food == [-1, -1, -1]) {
    food = spawnFood();
  }

  let currentHead = snake[0];
  
  let newHead = [currentHead[0], currentHead[1], currentHead[2]];
  if (dir == "w") newHead[2]++;
  else if (dir == "s") newHead[2]--;
  else if (dir == "a") newHead[0]++;
  else if (dir == "d") newHead[0]--;
  else if (dir == "i") newHead[1]++;
  else if (dir == "k") newHead[1]--;

  if (
    newHead[0] >= widthTiles ||
    newHead[1] >= heightTiles ||
    newHead[2] >= depthTiles ||

    newHead[0] < 0 ||
    newHead[1] < 0 ||
    newHead[2] < 0
  ) {
    // Dead
    snake = defaultSnake.slice(0, 1);
    return;
  }

  /*if (snake.contains(newHead)) {
    snake = defaultSnake.slice(0, 1);
    return;
  }*/

  let newSnake = [newHead];
  for (let i = 0; i < snake.length-1; i++) {
    newSnake.push(snake[i]);
  }

  if (newHead[0] === food[0] && newHead[1] === food[1] && newHead[2] === food[2]) {
    food = [-1, -1, -1];
    newSnake.push(newSnake[newSnake.length-1]);
    food = spawnFood();
  }
  snake = newSnake;
}

function snakeContains(pos) {
  return false;//snake.contains(pos);
}

function spawnFood() {
  let x = Math.floor(Math.random() * (widthTiles));
  let y = Math.floor(Math.random() * (heightTiles));
  let z = Math.floor(Math.random() * (depthTiles));
  
  if (snakeContains([x, y, z])) return spawnFood();
  else return [x, y, z];
}
