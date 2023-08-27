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