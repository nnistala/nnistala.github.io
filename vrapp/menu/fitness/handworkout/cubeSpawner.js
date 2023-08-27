// random num generator
function getRandomNumber(value, offset) {
    return Math.floor(Math.random() * value + offset);
  }
  

function getBlueColor() {
  return "blue";
}

function getRedColor() {
  return "red";
}

AFRAME.registerComponent('cubespawner', {
  init: function () {
    this.timeStep = 0;
    this.isLeft = true;
    this.isTop = true;
    this.index = 0;
    this.basicPlan = true;
    this.zPos = -25;
    this.isKids = false;
    this.basicWorkOutPlan = [
      { type: 'leftHandTopStretch', position: { x: -0.5, y: 2, z: this.zPos }, count: 1, handCount: 1, handDirection: 'left', workOutType: 'sameHand' },
      { type: 'rightHandTopStretch', position: { x: 0.5, y: 2, z: this.zPos }, count: 1, handCount: 1, handDirection: 'right', workOutType: 'sameHand' },
      { type: 'leftHandCrossStretch', position: { x: 0.5, y: 0.5, z: this.zPos }, count: 2, handCount: 1, handDirection: 'left', workOutType: 'crossHand' },
      { type: 'rightHandCrossStretch', position: { x: -0.5, y: 0.5, z: this.zPos }, count: 2, handCount: 1, handDirection: 'right', workOutType: 'crossHand' },
      { type: 'twoHandsTopStretch', position: { x: 0, y: 2, z: this.zPos }, count: 1, handCount: 2, handDirection: 'both', workOutType: 'sameHand' },
      { type: 'twoHandsBottomStretch', position: { x: 0, y: 0.5, z: this.zPos }, count: 1, handCount: 2, handDirection: 'both', workOutType: 'sameHand' },
    ];

    this.handBlockColors = {
      left: 'red',
      right: 'blue',
    }
  },

  tick: function (time, timeDelta) {
    if (this.timeStep < 2000) {
      this.timeStep += timeDelta;
      return;
    }

    this.timeStep = 0;

    if(this.isKids) {
      this.generateTopDownCubes();
      return;
    }

    let cubeEl;
    if (this.index < this.basicWorkOutPlan.length && this.basicPlan) {
      let plan = this.basicWorkOutPlan[this.index];
      if (plan) {
        if (plan.handCount == 1) {
          cubeEl = this.el.components.pool__cubes.requestEntity();
          let position = Object.assign(plan.position, {});

          let cubeColor = 'red';
          if (plan.workOutType === 'crossHand') {
            cubeColor = plan.handDirection === 'left' ? this.handBlockColors.left : this.handBlockColors.right;
          } else if (plan.workOutType === 'sameHand') {
            cubeColor = plan.handDirection === 'left' ? this.handBlockColors.left : this.handBlockColors.right;
          }

          cubeEl.setAttribute('position', { x: position.x, y: position.y, z: position.z });
          cubeEl.setAttribute('material', `color: ${cubeColor}`);
          cubeEl.setAttribute("id", ``);
          // cubeEl.setAttribute("id", `0`);
          cubeEl.setAttribute('class', 'cubes');
          cubeEl.setAttribute('height', '10');
          cubeEl.setAttribute('width', '10');

          cubeEl.play();
        } else if (plan.handCount == 2) {
          this.generateMultipleCubesBasicPlan();
        }
      }

      this.index = (this.index + 1) % this.basicWorkOutPlan.length;
    } else {
      this.basicPlan = false;
    }
  },
  generateMultipleCubesBasicPlan: function () {
    let cubeElArr = [];
    let plan = this.basicWorkOutPlan[this.index];
    console.log(plan);
    for (let i = 0; i < 2; i++) {
      let cubeColor = i === 0 ? this.handBlockColors.left : this.handBlockColors.right;
      var element = this.el.components.pool__cubes.requestEntity();
      element.setAttribute("id", `${i}`);
      element.setAttribute('position', { x: plan.position.x, y: plan.position.y, z: plan.position.z });
      element.setAttribute('material', `color: ${cubeColor}`);
      element.setAttribute('class', 'cubes');
      element.setAttribute('height', '10');
      element.setAttribute('width', '10');

      cubeElArr.push(element);
    }

    cubeElArr.forEach((cubeEl, index) => {
      cubeEl.play();
    });
  },

  generateTopDownCubes: function () {
    let leftColors = ['red', 'blue'];

    let x = 0, y = 2.2, negY = 0.5;

    let cubeElArr = [];
    for (let i = 0; i < 2; i++) {
      var element = this.el.components.pool__cubes.requestEntity();
      element.setAttribute("id", `${i}`);
      cubeElArr.push(element);
    }

    var positionX, positionY, positionZ = -25;

    if (this.isTop) {
      positionY = y
    } else {
      positionY = negY;
    }
    if (this.isLeft) {
      positionX = x;
    } else {
      positionX = x;
    }

    cubeElArr.forEach((cubeEl, index) => {

      if (index == 1) {
        positionX += 0.5;
      }

      var cubeColor = this.isLeft ? leftColors[index] : leftColors[index];

      cubeEl.setAttribute('position', { x: positionX, y: positionY, z: positionZ });
      cubeEl.setAttribute('material', `color: ${cubeColor}`);
      cubeEl.setAttribute('class', 'cubes');
      cubeEl.play();
    });

    this.isTop = !this.isTop;
  }
});