$(document).ready(function() {

    $('.draggable').draggable({
        // axis: "x"
        cancel: ".not_this",
        containment: "parent",
        grid: [50, 20],
        handle: ".handle",
        opacity: ".35",
        drag: function(event, ui) {
            console.log(ui.position);
        }
    });


    // $('.draggable').draggable("disable");

    // $('.draggable').draggable("destroy");

    // $('.draggable').draggable("enable");


});