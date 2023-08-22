AFRAME.registerComponent('log', {
    schema: {type: 'string'},

    init: function () {
        var stringToLog = this.data;
        console.log(stringToLog);
    }
});
setTimeout(() => {
    $("#intro").hide();
    $("#initial").show();
}, 3500);
function turnOnBgm(){
    $("#bgmaudio").attr('src','assets/sounds/bgm.ogg');
    $("#bgmsound").attr('src','assets/sounds/bgm.ogg');
}
function turnOffBgm(){
    $("#bgmaudio").attr('src','');
    $("#bgmsound").attr('src','');
}