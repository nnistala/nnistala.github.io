AFRAME.registerComponent('scorecounter', {
    init: function () {
      var scoreBoard = document.querySelector('#score');
      var heightElement = document.querySelector("#height");
      var score = 0;
      
      this.el.sceneEl.addEventListener('sabercollided', function (event) {
        score++;
        var newScore = `Score: ${score}`;
        scoreBoard.setAttribute('text', 'value',  newScore);
        // this.el.components.haptics.pulse();
        event.srcElement.components.haptics.pulse();

        var entity = document.querySelector('[sound]');
        entity.components.sound.stopSound();

        var position = getUserPosition();
        if (position) {
          heightElement.setAttribute("text", "value", "Height " + position.y);
        } 
      });
    }
  });