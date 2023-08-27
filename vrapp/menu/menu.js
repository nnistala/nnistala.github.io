
AFRAME.registerComponent('cursor-listener', {
    init: function () {
      var lastIndex = -1;
      var COLORS = ['red', 'green', 'blue'];
      this.el.addEventListener('hover', function (evt) {
        console.log('hover');
        alert('hover');
      });
    }
  });

function onMenuItemClick(event) {
  console.log(event);
  const id = event.srcElement.id;

  switch (id) {
    case "therapyBtn":
        window.location.href = 'therapy';
      break;

    case "fitnessBtn":
        window.location.href = 'fitness';
      break;

    case "exitBtn":
        showConfirmExit();
      break;
  }
}

function showConfirmExit() {}

function confirmExit() {}

