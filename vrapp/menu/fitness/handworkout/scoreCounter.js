AFRAME.registerComponent('scorecounter', {
    init: function () {
      var scoreBoard = document.querySelector('#score');
      
      this.el.sceneEl.addEventListener('sabercollided', function (event) {
        if (isGameOver) {
          return;
        }

        score++;
        localStorage.setItem('score', score);
        var newScore = `Score: ${score}`;
        scoreBoard.setAttribute('text', 'value',  newScore);
        // this.el.components.haptics.pulse();
        // event.srcElement.components.haptics.pulse();

        var entity = document.querySelector('[hitSound]');
        entity.components.sound.playSound();

        cubeHits++;
      });
    }
  });