$(document).ready(function() {
    $(".cloud").click(function() {
        var audio = $("#storm")[0];
        if (audio.paused) {
            audio.play();
            $(this).attr("id", "true");
        } else {
            audio.pause();
            $(this).attr("id", "false");
        }
    });
});