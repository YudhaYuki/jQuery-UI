$(document).ready(function() {

    $('.draggable').draggable();
    $('.droppable').droppable({

        accept: ".draggable",
        drop: function(event, ui) {
            $(this).addClass('accepted');
            console.log(ui.draggable.attr("class"));
        },
        out: function(event, ui) {
            $(this).removeClass('accepted');

        }
    });

});