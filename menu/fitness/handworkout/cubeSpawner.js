// random num generator
function getRandomNumber(value, offset) {
  return Math.floor(Math.random() * value + offset);
}

// get either red or blue
function getRedOrBlue() {
  return getRandomNumber(10, 0) > 5 ? "blue" : "red";
}

AFRAME.registerComponent("cubespawner", {
  init: function () {
    this.timeStep = 0;
    this.isLeft = true;
    this.isTop = true;
  },

  tick: function (time, timeDelta) {
    if (this.timeStep < 1000) {
      this.timeStep += timeDelta;
      return;
    }
    this.timeStep = 0;

    var cubeEl = this.el.components.pool__cubes.requestEntity();
    if (!cubeEl) { 
      return;
    }

    // var positionX = getRandomNumber(-3, 3);
    let positionX = 2;
    var positionY = 2;
    var positionZ = -25;

    let testPositionY = 0.1;
    let testPositionX = 0.2;

    if(this.isTop) {
      positionY = testPositionY;
      if(this.isLeft) {
        positionX = testPositionX;
        this.isLeft = false;
      } else {
        positionX = -testPositionX;
        this.isLeft = true;
        this.isTop = false;
      }
    } else {
      positionY = testPositionY;
      if(this.isLeft) {
        positionX = testPositionX;
        this.isLeft = false;
      } else {
        positionX = -testPositionX;
        this.isLeft = true;
        this.isTop = true;
      }
    }
    

    var cubeColor = getRedOrBlue();

    cubeEl.setAttribute("position", {
      x: positionX,
      y: positionY,
      z: positionZ,
    });
    cubeEl.setAttribute("rotation", { x: 0, y: 0, z: 0 });
    cubeEl.setAttribute("material", `color: ${cubeColor}`);
    cubeEl.setAttribute("class", "cubes");
    cubeEl.play();
  },
});
