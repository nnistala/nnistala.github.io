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
  var startBtn = document.querySelector('#startPlay');
  startBtn.remove();

  var scene = document.querySelector('a-scene');
  scene.setAttribute('cubeSpawner');
}

function enterVRMode() {
  $('.a-enter-vr-button').click();
}