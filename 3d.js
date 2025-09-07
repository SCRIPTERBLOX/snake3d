let angle = 25;
let sideLength = 25;
// To the Right is z axis
// To the Left is x axis
// And obviously up is y axis

function renderOutsideLines(x, y, width = 5, depth = 5, height = 5) {
  let start = [x, y];
  let upper = [x, y-height*sideLength];
  let rightLower = getLineEndCoordinates(start[0], start[1], -angle, depth*sideLength);
  let leftLower = getLineEndCoordinates(start[0], start[1], angle+180, width*sideLength);
  let top = getLineEndCoordinates(leftLower[0], leftLower[1]-height*sideLength, -angle, depth*sideLength)

  fill(0);
  stroke('black');
  strokeWeight(3);
  line(start[0], start[1], rightLower[0], rightLower[1]);
  line(start[0], start[1], leftLower[0], leftLower[1]);
  line(start[0], start[1], upper[0], upper[1]);
  line(leftLower[0], leftLower[1], leftLower[0], leftLower[1]-height*sideLength);
  line(rightLower[0], rightLower[1], rightLower[0], rightLower[1]-height*sideLength);
  line(upper[0], upper[1], leftLower[0], leftLower[1]-height*sideLength);
  line(upper[0], upper[1], rightLower[0], rightLower[1]-height*sideLength);
  line(leftLower[0], leftLower[1]-height*sideLength, top[0], top[1]);
  line(top[0], top[1], rightLower[0], rightLower[1]-height*sideLength);
}

function render3D(x, y, width, height, boardWidth, boardHeight, boardDepth, s) {
  stroke('black');
  renderOutsideLines(
    x+width/2, y+height-5,
    boardWidth, boardDepth, boardHeight
  );

  let renderSnake = s.slice(0, s.length);
  renderSnake.push(food);

  renderSnake.sort((a, b) => {
    // First compare first element (descending)
    if (a[0] !== b[0]) {
      return b[0] - a[0];
    }
    // Then compare third element (descending)
    if (a[2] !== b[2]) {
      return b[2] - a[2];
    }
    // Finally compare second element (ascending)
    return a[1] - b[1];
  });

  strokeWeight(2);
  for (let i = 0; i < renderSnake.length; i++) {
    console.log("Rendering cube: "+renderSnake[i]);
    if (renderSnake[i] == snake[0])
      renderCube(renderSnake[i], [0, 200, 0], [x+width/2, y+height-5]);
    else if (renderSnake[i] == food)
      renderCube(renderSnake[i], [255, 0, 0], [x+width/2, y+height-5]);
    else
      renderCube(renderSnake[i], [0, 255, 0], [x+width/2, y+height-5]);
  }
}
