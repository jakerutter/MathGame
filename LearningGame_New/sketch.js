//rain drop code
var raindrop = [];
var H = window.screen.availHeight
var W = window.screen.availWidth
var colorR;
var colorG;
var colorB;
if (!colorR) {
  colorR = 138;
};
if (!colorG) {
  colorG = 43;
}
if (!colorB) {
  colorB = 226;
}

function setup(colorR, colorG, colorB) {
  if (colorR !== 0 && !colorR) colorR = 138;
  if (colorG !== 0 && !colorG) colorG = 43;
  if (colorB !== 0 && !colorB) colorB = 226;

  createCanvas(W, H);
  for (var i = 0; i < 30; i++) {
    raindrop[i] = new Rain(colorR, colorG, colorB);
  }
}

function draw() {
  background(230, 230, 250);
  for (var i = 0; i < raindrop.length; i++) {
    raindrop[i].fall();
    raindrop[i].show();
  }
}
