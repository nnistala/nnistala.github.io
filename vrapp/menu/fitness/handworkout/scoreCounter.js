AFRAME.registerComponent('scorecounter', {
    init: function () {
      var scoreBoard = document.querySelector('#score');
      var score = 0;
      
      this.el.sceneEl.addEventListener('sabercollided', function (event) {
        score++;
        localStorage.setItem('score', score);
        var newScore = `Score: ${score}`;
        scoreBoard.setAttribute('text', 'value',  newScore);
        // this.el.components.haptics.pulse();
        event.srcElement.components.haptics.pulse();

        var entity = document.querySelector('[hitSound]');
        entity.components.sound.playSound();

        if(window && window.sessionStorage) {
          let existingCubeHitCount =  window.sessionStorage.getItem('cubeHits');
          if(existingCubeHitCount !== null &&existingCubeHitCount !== undefined) {
            existingCubeHitCount = +existingCubeHitCount;
            existingCubeHitCount++;
          } else {
            existingCubeHitCount = 0;
          }
          
          window.sessionStorage.setItem('cubeHits', existingCubeHitCount);
        }

        var position = getUserPosition();
        if (position) {
          heightElement.setAttribute("text", "value", "Height " + position.y);
        } 
      });
    }
  });