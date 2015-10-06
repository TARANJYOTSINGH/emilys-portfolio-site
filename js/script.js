$( document ).ready(function() {
    console.log( "ready!" );

    // $( ".spinner-master2" ).click(function() {
    //   $( ".nav-items" ).slideDown( "slow" );
    // });
    $("#work").css("text-decoration", "line-through");


    $('.spinner-master2').click(function (){

      if ($('.nav-links').is(':animated')) {
        console.log('busy');
      } else {

        var clicks = $(this).data('clicks');
        if (clicks){
          $('.nav-links').slideDown('slow');
          console.log("oneclick");
        } else {
          $('.nav-links').slideUp('fast');
          console.log("twoclicks");
        }
        $(this).data('clicks', !clicks);
      }
    
    });

   



    $("#load_about").on("click", function() {
        $("#loader").load("about.html");
        $(this).siblings().css("text-decoration", "none");
        $(this).css("text-decoration", "line-through");
    });

});