$(document).ready(function() {

    $('#slider').slider({
        min: 0,
        max: 1000,
        step:100,
        range: true,
        change: function(event, ui) {
            console.log(ui.values[0]);
            console.log(ui.values[1]);

        }
    });

});