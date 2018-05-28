$(document).ready(function() {

    $('#sortable').sortable();

    $(".trigger").click(function() {
        var list = $('#sortable').sortable("toArray");
        console.log(list);
    })

});