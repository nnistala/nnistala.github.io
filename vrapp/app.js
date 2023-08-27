/*AFRAME.registerComponent('log', {
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
}*/

$(function() {
    ;
    setTimeout(() => {
        $('#idIntroLogoScene').hide();
        $("#idMainMenuScene").show();
    }, 5000);

});

function openTherapySubMenu(){
    $("#idMainMenuScene").hide();
    $("#idSmartTherapyScene").show();
}

function openFitnessSubMenu(){
    $("#idMainMenuScene").hide();
    $('#idHandTrackingScene').show();
}