AFRAME.registerComponent('scorecounter', {
    init: function () {
      var scoreBoard = document.querySelector('#score');
      var score = 0;
      
      this.el.sceneEl.addEventListener('sabercollided', function (event) {
        score++;
        var newScore = `Score: ${score}`;
        newScore = Math.floor(newScore);
        scoreBoard.setAttribute('text', 'value',  newScore);
        this.el.components.haptics.pulse();
      });
    }
  });