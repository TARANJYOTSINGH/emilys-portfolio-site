$( document ).ready(function() {
    console.log( "ready!" );



    $("#load_about").on("click", function() {
        $("#loader").load("about.html");
    });

});