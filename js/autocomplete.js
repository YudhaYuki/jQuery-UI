$(document).ready(function() {

    var list = [
        "ford",
        "chevy",
        "honda"
    ]

    $('#tags').autocomplete({
        source: list,
        minlength: 3
    });

});