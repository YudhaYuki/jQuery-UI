$(document).ready(function() {

    // $(document).click(function() {
    //     $('.button').toggle('drop', 1000, function() {
    //         console.log('Done !');
    //     })
    // });


    $(document).click(function() {

        $('.button').toggleClass('otherClass', 1000, function() {
            console.log('Done !');
        })
    
    });

});