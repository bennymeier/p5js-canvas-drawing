function setup() {
  createCanvas(450, 450);
  strokeWeight(3);
  stroke('black');
  addButtons();
}

function touchMoved() {
  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}

function resetCanvas() {
  drawingContext.clearRect(0, 0, 450, 450);
}

function selectButton(btn) {
  btn.toggleClass('selected');
}

function addButtons() {
  addResetButton();
  addColorBlackButton();
  addColorGreenButton();
  addColorYellowButton();
  addColorRedButton();
  addSmallSizeButton();
  addMiddleSizeButton();
  addBigSizeButton();
}

function addResetButton() {
  buttonReset = createButton('Löschen');
  buttonReset.position(15, 15);
  buttonReset.mousePressed(resetCanvas);
}

function addColorBlackButton() {
  buttonBlack = createDiv('');
  buttonBlack.class('btn black');
  buttonBlack.position(85, 5);
  buttonBlack.mousePressed(function () {
    stroke('black');
  });
}

function addColorGreenButton() {
  buttonGreen = createDiv('');
  buttonGreen.class('btn green');
  buttonGreen.position(125, 5);
  buttonGreen.mousePressed(function () {
    stroke('green');
  });
}

function addColorYellowButton() {
  buttonYellow = createDiv('');
  buttonYellow.class('btn yellow');
  buttonYellow.position(165, 5);
  buttonYellow.mousePressed(function () {
    stroke('yellow');
  });
}

function addColorRedButton() {
  buttonRed = createDiv('');
  buttonRed.class('btn red');
  buttonRed.position(205, 5);
  buttonRed.mousePressed(function () {
    stroke('red');
  });
}

function addSmallSizeButton() {
  buttonSmall = createDiv('');
  buttonSmall.class('btn size black small');
  buttonSmall.position(245, 5);
  buttonSmall.mousePressed(function () {
    strokeWeight(5);
  });
}

function addMiddleSizeButton() {
  buttonMiddle = createDiv('');
  buttonMiddle.class('btn size black middle');
  buttonMiddle.position(275, 5);
  buttonMiddle.mousePressed(function () {
    strokeWeight(8);
  });
}

function addBigSizeButton() {
  buttonBig = createDiv('');
  buttonBig.class('btn size black big');
  buttonBig.position(305, 5);
  buttonBig.mousePressed(function () {
    strokeWeight(11);
  });
}
