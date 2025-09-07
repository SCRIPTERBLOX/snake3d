function renderSideViewX(x, y) {
  fill(255, 0, 0);
  
  rect(x, y, sideViewWidth-10, sideViewWidth-10);
  fill(51);
  rect(x+1, y+1, sideViewWidth-10-2, sideViewWidth-10-2);

  let width = sideViewWidth-10-2;
  let height = width;

  let tileWidth = width/widthTiles;
  let tileHeight = height/heightTiles;

  fill(0, 255, 0);
  for (let i = 0; i < snake.length; i++) {
    let bodyPart = snake[i];
    rect(x+(bodyPart[2]*tileWidth), (y+tileHeight*heightTiles)-(bodyPart[1]*tileHeight), tileWidth, tileHeight);
  }
  fill(255, 0, 0);
  rect(x+(food[2]*tileWidth), (y+tileHeight*heightTiles)-(food[1]*tileHeight), tileWidth, tileHeight);
}

function renderSideViewZ(x, y) {
  fill(0, 0, 255);
  
  rect(x, y, sideViewWidth-10, sideViewWidth-10);
  fill(51);
  rect(x+1, y+1, sideViewWidth-10-2, sideViewWidth-10-2);

  let width = sideViewWidth-10-2;
  let height = width;

  let tileWidth = width/widthTiles;
  let tileHeight = height/heightTiles;

  fill(0, 255, 0);
  for (let i = 0; i < snake.length; i++) {
    let bodyPart = snake[i];
    rect(x+(bodyPart[0]*tileWidth), (y+tileHeight*heightTiles)-(bodyPart[1]*tileHeight), tileWidth, tileHeight);
  }
  fill(255, 0, 0);
  rect(x+(food[0]*tileWidth), (y+tileHeight*heightTiles)-(food[1]*tileHeight), tileWidth, tileHeight);
}

function renderSideViewY(x, y) {
  fill(0, 255, 0);
  
  rect(x, y, sideViewWidth-10, sideViewWidth-10);
  fill(51);
  rect(x+1, y+1, sideViewWidth-10-2, sideViewWidth-10-2);

  let width = sideViewWidth-10-2;
  let height = width;

  let tileWidth = width/widthTiles;
  let tileHeight = height/heightTiles;

  fill(0, 255, 0);
  for (let i = 0; i < snake.length; i++) {
    let bodyPart = snake[i];
    rect(x+(bodyPart[2]*tileWidth), y+(bodyPart[0]*tileHeight), tileWidth, tileHeight);
  }
  fill(255, 0, 0);
  rect(x+(food[2]*tileWidth), y+(food[0]*tileHeight), tileWidth, tileHeight);
}

function render3DArea(x, y, width, height, boardWidth, boardHeight, boardDepth, s) {
  fill(255);
  rect(x, y, width, height);
  fill(51);
  rect(x+1, y+1, width-2, height-2);
  
  render3D(x+1, y+1, width-2, width-2, boardWidth, boardDepth, boardHeight, s);
}

function render(boardWidth, boardHeight, boardDepth, s) {
  noStroke();
  fill(0, 0, 0);
  
  rect(winWidth, 0, 1, winHeight);
  renderSideViewX(winWidth+1+5, 5);
  renderSideViewY(winWidth+1+5, 5+sideViewWidth-10+5);
  renderSideViewZ(winWidth+1+5, 5+sideViewWidth-10+5+sideViewWidth-10+5);
  render3DArea(5, 5, winWidth-10, winHeight-10, boardWidth, boardHeight, boardDepth, s)
}
