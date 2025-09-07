function getLineEndCoordinates(startX, startY, angleInDegrees, l) {
  // Convert angle from degrees to radians. Math functions in JS use radians.
  const angleInRadians = angleInDegrees * Math.PI / 180;
  // Calculate the x and y offsets using trigonometry.  Cosine for x, sine for y.
  const endX = startX + l * Math.cos(angleInRadians);
  const endY = startY + l * Math.sin(angleInRadians);

  return [endX, endY];
}

function renderCube(pos, color, start) {
  let sPos = [start[0], start[1]];
  sPos = getLineEndCoordinates(sPos[0], sPos[1], 180+angle, sideLength*pos[0]);
  sPos = getLineEndCoordinates(sPos[0], sPos[1], -angle, sideLength*pos[2]);
  sPos[1] -= sideLength*pos[1];

  let bottomNLeftBottom = [sPos, getLineEndCoordinates(sPos[0], sPos[1], 180+angle, sideLength)];
  let bottomNRightBottom = [sPos, getLineEndCoordinates(sPos[0], sPos[1], -angle, sideLength)];
  let bottomNUpper = [sPos, [sPos[0], sPos[1]-sideLength]];
  let leftBottomNLeftUpper = [bottomNLeftBottom[1], [bottomNLeftBottom[1][0], bottomNLeftBottom[1][1]-sideLength]];
  let rightBottomNRightUpper = [bottomNRightBottom[1], [bottomNRightBottom[1][0], bottomNRightBottom[1][1] - sideLength]];
  let upperNLeftUpper = [bottomNUpper[1], leftBottomNLeftUpper[1]];
  let upperNRightUpper = [bottomNUpper[1], rightBottomNRightUpper[1]];
  let leftUpperNTop = [leftBottomNLeftUpper[1], getLineEndCoordinates(leftBottomNLeftUpper[1][0], leftBottomNLeftUpper[1][1], -angle, sideLength)];
  let rightUpperNTop = [rightBottomNRightUpper[1], leftUpperNTop[1]];

  fill(color[0], color[1], color[2]);
  noStroke();
  beginShape();
  vertex(sPos[0], sPos[1]);
  vertex(bottomNLeftBottom[1][0], bottomNLeftBottom[1][1]);
  vertex(leftBottomNLeftUpper[1][0], leftBottomNLeftUpper[1][1]);
  vertex(leftUpperNTop[1][0], leftUpperNTop[1][1]);
  vertex(rightBottomNRightUpper[1][0], rightBottomNRightUpper[1][1]);
  vertex(rightBottomNRightUpper[0][0], rightBottomNRightUpper[0][1]);
  endShape();

  let lines = [
    bottomNLeftBottom, bottomNRightBottom, bottomNUpper, leftBottomNLeftUpper,
    upperNLeftUpper, upperNRightUpper, leftUpperNTop, rightBottomNRightUpper,
    rightUpperNTop
  ];
  fill(0);
  stroke('black');
  strokeWeight(2);
  for (let i = 0; i < lines.length; i++) {
    line(lines[i][0][0], lines[i][0][1], lines[i][1][0], lines[i][1][1]);
  }
}
