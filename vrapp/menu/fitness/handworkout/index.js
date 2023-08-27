var startTimerId;

AFRAME.registerComponent('log', {
    schema: {type: 'string'},
    init: function () {
      var stringToLog = this.data;
      console.log(stringToLog);
    }
});

function getUserPosition() {
    var userEntity = document.getElementById('playerCamera');
    var worldPosition = new THREE.Vector3();
    return userEntity.object3D.getWorldPosition(worldPosition);
}

function startPlay() {
  window.sessionStorage.clear();

  var startBtn = document.querySelector('#startPlay');
  startBtn.remove();

  var scene = document.querySelector('a-scene');
  scene.setAttribute('cubeSpawner');
  enterVRMode();
  startGameTimer();
}

function enterVRMode() {
  $('.a-enter-vr-button').click();
}

function showGameOver() {
  clearInterval(startTimerId);
  let element = document.querySelector('#gameover');
  let exit = document.querySelector('#exit');

  element.setAttribute('height', 0.5);
  element.setAttribute('width', 1);
  element.setAttribute('position', {x: -0.5, y : 1, z: -1});
  element.setAttribute('visible', true);

  exit.setAttribute('visible', true);
  exit.setAttribute('position', {x: 0, y: 0.5, z: -5});
}

function exitFitness() {
  location.href = '/vrapp/menu';
}

function startGameTimer() {
  startTimerId = setTimeout(function () {
    clearInterval(startTimerId);
    location.href = 'score.html';
  }, 3 * 60 * 1000);
}