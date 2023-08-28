AFRAME.registerComponent('cubedestroyer', {
    init: function() {
      this.position = this.el.getAttribute('position');
    },
    
    tick: function () {
      if (this.position.z >= 10) {
        this.el.sceneEl.components.pool__cubes.returnEntity(this.el);
      }

      if(window && window.sessionStorage) {
        let cubesGenerated = +window.sessionStorage.getItem('cubesGenerated');
        let maxCubeMisses = +window.sessionStorage.getItem('maxCubeMisses');
        let cubeHits = +window.sessionStorage.getItem('cubeHits');

        if(cubesGenerated !== null && cubesGenerated != undefined) {
          if((cubesGenerated - cubeHits) >= maxCubeMisses) {
            showGameOver();
          }
        }
      }
    }
  });