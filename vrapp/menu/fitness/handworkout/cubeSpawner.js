// random num generator
function getRandomNumber(value, offset) {
    return Math.floor(Math.random() * value + offset);
  }
  
  // get either red or blue
  function getRedOrBlue() {
    return getRandomNumber(10, 0) > 5 ? "blue" : "red";
  }

  function getBlueColor() {
    return "blue";
  }
  
  function getRedColor() {
    return "red";
  }

  AFRAME.registerComponent('cubespawner', {
    init: function() {
      this.timeStep = 0;
      this.isLeft = true;
      this.isTop = true;
    },
    
    tick: function (time, timeDelta) {
      if (this.timeStep < 2000) {
        this.timeStep += timeDelta;
        return;
      }
      this.timeStep = 0;

      let leftColors = ['red', 'blue'];

      let x = 0, y = 2, negY= 0.1;
      
      let cubeElArr = [];
      for (let i = 0; i < 2; i++) {
        var element = this.el.components.pool__cubes.requestEntity();
        element.setAttribute("id", `${i}`);
        cubeElArr.push(element);
      }

      var positionX, positionY, positionZ = -25;

      if(this.isTop) {
        positionY = y
      } else {
        positionY = -negY;
      }
      if (this.isLeft) {
        positionX = x;
      } else {
        positionX = x;
      }

      cubeElArr.forEach((cubeEl, index) => {
        
      if(index == 1) {
        positionX+= 0.5;
      }
      
      var cubeColor = this.isLeft ? leftColors[index]: leftColors[index];
      
      cubeEl.setAttribute('position', {x: positionX, y: positionY, z: positionZ});
      cubeEl.setAttribute('material', `color: ${cubeColor}`);
      cubeEl.setAttribute('class', 'cubes');
      cubeEl.play();
      });

      this.isLeft = !this.isLeft;
      this.isTop = !this.isTop;
    }
  });