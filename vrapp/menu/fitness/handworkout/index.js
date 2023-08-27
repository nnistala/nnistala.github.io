AFRAME.registerComponent('log', {
    schema: {type: 'string'},
    init: function () {
      var stringToLog = this.data;
      console.log(stringToLog);

      var userEntity = document.getElementById('playerCamera');
    var worldPosition = new THREE.Vector3();
    userEntity.object3D.getWorldPosition(worldPosition);
    alert('User height' + worldPosition.y);
    }
});