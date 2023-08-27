
AFRAME.registerComponent('cubemovement', {
    init: function() {
      this.position = this.el.getAttribute('position');
    },
    
    tick: function (time, timeDelta) {
      this.position.z += 0.01 * timeDelta;
      if(this.el.id && (+this.el.id % 2) == 1) {
        this.position.x = 0.25;
      } else if(this.el.id) {
        this.position.x = -0.25;
      }
    }
  });