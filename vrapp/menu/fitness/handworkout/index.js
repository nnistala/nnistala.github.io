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
  if(startBtn) {
    startBtn.remove(); 
  }

  var mainMenuBtn = document.querySelector('#mainMenu');
  if(mainMenuBtn) {
    mainMenuBtn.remove();
  }

  var replayBtn = document.querySelector('#replay');
  if(replayBtn) {
    replayBtn.remove();
  }

  var scene = document.querySelector('a-scene');
  scene.setAttribute('cubeSpawner');
  enterVRMode();
  startGameTimer();
}

function enterVRMode() {
  $('.a-enter-vr-button').click();
}

function showGameOver() {
  const sceneElement = document.querySelector('#workoutScene');
  if(sceneElement) {
    sceneElement.removeAttribute('cubeSpawner');
    // sceneElement.removeAttribute('pool__cubes');
  }

  clearInterval(startTimerId);
  let element = document.querySelector('#gameover');
  let exit = document.querySelector('#exit');
  let replay = document.querySelector('#replay');
  // let finalscore = document.querySelector('#finalscore');
  

  element.setAttribute('height', 0.5);
  element.setAttribute('width', 1);
  element.setAttribute('position', {x: -0.5, y : 1, z: -1});
  element.setAttribute('visible', true);

  exit.setAttribute('visible', true);
  exit.setAttribute('position', {x: 0.5, y: 0.5, z: -5});

  if(replay) {
    replay.setAttribute('visible', true);
    replay.setAttribute('position', { x: 0.5, y: 1, z: -5 });
  }


  // const score = window.localStorage.getItem('score');
  // finalscore.setAttribute('visible', true);
  // finalscore.setAttribute('value', `Your score is ${score}`);
  // finalscore.setAttribute('position', {x: 0, y: 0.5, z: -5});
}

function exitFitness() {
  location.href = '/vrapp/menu';
}

function startGameTimer() {
  startTimerId = setTimeout(function () {
    clearInterval(startTimerId);
    location.href = 'score.html';
  }, 1 * 60 * 1000);
}

function backToMainMenu() {
  exitFitness();
}

function replay() {

  startPlay();
}