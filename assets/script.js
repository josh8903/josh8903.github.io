$(document).ready(function() {
    $("#cloud").click(function() {
        var audio = $("#storm")[0];
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }

    });
});