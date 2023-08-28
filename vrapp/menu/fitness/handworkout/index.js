var startTimerId;
var isGameOver = false;
var cubesGenerated = 0;
var cubeHits = 0
const maxCubeMisses = 12;
var score = 0;

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
  isGameOver = false;
  cubesGenerated = 0;
  cubeHits = 0;
  score = 0;
  window.localStorage.clear();

  resetScore();
  var startBtn = document.querySelector('#startPlay');
  if(startBtn) {
    // startBtn.remove(); 
    startBtn.setAttribute('visible', 'false');
  }

  var mainMenuBtn = document.querySelector('#mainMenu');
  if(mainMenuBtn) {
    mainMenuBtn.setAttribute('visible', 'false');
  }

  var exitBtn = document.querySelector('#exit');
  if(exitBtn) {
    exitBtn.setAttribute('visible', 'false');
  }

  var replayBtn = document.querySelector('#replay');
  if(replayBtn) {
    replayBtn.setAttribute('visible', 'false');
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
  isGameOver = true;
  const sceneElement = document.querySelector('#workoutScene');
  if(sceneElement) {
    sceneElement.removeAttribute('cubeSpawner');
    // sceneElement.removeAttribute('pool__cubes');
  }

  clearInterval(startTimerId);

  let exit = document.querySelector('#exit');

  exit.setAttribute('visible', true);
  exit.setAttribute('position', {x: 0.5, y: 0.5, z: -5});

  let replay = document.querySelector('#replay');
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
    showGameOver();
  }, 2 * 60 * 1000);
}

function backToMainMenu() {
  exitFitness();
}

function replay() {
  startPlay();
}
function resetScore() {
  var scoreElement = document.querySelector('#score');
  scoreElement.setAttribute('text', 'value', `Score: 0`);
}