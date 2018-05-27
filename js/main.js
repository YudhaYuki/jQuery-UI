$(document).ready(function() {

    $('.draggable').draggable({
        // axis: "x"
        cancel: ".not_this",
        containment: "parent",
        grid: [50, 20],
        handle: ".handle",
        opacity: ".35"
    });

});