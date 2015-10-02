$( document ).ready(function() {
    console.log( "ready!" );

    // $( ".spinner-master2" ).click(function() {
    //   $( ".nav-items" ).slideDown( "slow" );
    // });

    $('.spinner-master2').click(function (){

      if ($('.nav-items').is(':animated')) {
        console.log('busy');
      } else {

        var clicks = $(this).data('clicks');
        if (clicks){
          $('.nav-items').slideDown('slow');
          console.log("oneclick");
        } else {
          $('.nav-items').slideUp('fast');
          console.log("twoclicks");
        }
        $(this).data('clicks', !clicks);
      }
    
    });

    // $( ".spinner-master2" ).click(function() {
    //   if ($( ".spinner-master2" ).prop("checked", false)) {
    //     $( ".nav-items" ).slideDown( "slow" );
    //     console.log("working");
    //   } else {
    //     $( ".nav-items" ).slideUp( "fast" );
    //   }
      
    // });



    $("#load_about").on("click", function() {
        $("#loader").load("about.html");
    });

});