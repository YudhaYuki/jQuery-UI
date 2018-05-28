$(document).ready(function() {

    $(document).click(function() {

        $('.button').addClass("otherClass", 1000, function() {
            
            $(this).removeClass('otherClass', 1000)

        })
    
    });

});