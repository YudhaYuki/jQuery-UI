$(document).ready(function() {

    $('.resizable').resizable({
        
        // animate:true,
        // animateDuration:100
        aspectRatio: true,
        containment: ".block",
        // ghost: true
        grid: [50,50],
        maxHeight: 250,
        minHeight: 50
    });

});