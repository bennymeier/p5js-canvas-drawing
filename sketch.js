function setup() {
  createCanvas(450, 450);
  strokeWeight(3);
  stroke('black');
  addButtons();
}

function touchMoved() {
  line(mouseX, mouseY, pmouseX, pmouseY);
  console.log(pmouseX);
  console.log(mouseX);
  return false;
}

function resetCanvas() {
  drawingContext.clearRect(0, 0, 450, 450);
}

function addButtons() {
  addResetButton();
  addColorBlackButton();
  addColorGreenButton();
  addColorYellowButton();
  addColorRedButton();
}

function addResetButton() {
  button = createButton('Löschen');
  button.position(15, 15);
  button.mousePressed(resetCanvas);
}

function addColorBlackButton() {
  button = createDiv('');
  button.class('btn black');
  button.position(85, 5);
  button.mousePressed(function () {
    stroke('black');
  });
}

function addColorGreenButton() {
  button = createDiv('');
  button.class('btn green');
  button.position(125, 5);
  button.mousePressed(function () {
    stroke('green');
  });
}

function addColorYellowButton() {
  button = createDiv('');
  button.class('btn yellow');
  button.position(165, 5);
  button.mousePressed(function () {
    stroke('yellow');
  });
}

function addColorRedButton() {
  button = createDiv('');
  button.class('btn red');
  button.position(205, 5);
  button.mousePressed(function () {
    stroke('red');
  });
}
