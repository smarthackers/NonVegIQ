$(document).ready(function(){
  var responseArray = [];
  $(".carousel-control").on("click", function(){
    var arr = [$('#jumbo-no-pad .item.active').attr('id') , $(this).hasClass('left')?0:1];
    responseArray.push(arr);
    if($('.item').length==1)
      {
        $("#count-down").TimeCircles().stop();
        $("#myCarousel").remove();
        $(".carousel-control").remove();
        $("#result").html("Fetching your IQ...");
        $.get( "fetchResults?response+="+responseArray+"time="+$("#count-down").TimeCircles().getTime(), function() {
          console.log("Response sent")
        })
        .done(function() {
         $("#result").html("Your score is 162");
        })
        .fail(function() {
          alert( "INTERNET CONNECTIVITY ERROR" );
        });
      }
  });

  $('#myCarousel').on('slide.bs.carousel', function () {
    $("#jumbo-no-pad .item.active").addClass("done");
  });
  $('#myCarousel').on('slid.bs.carousel', function () {
    $("#jumbo-no-pad .item.done").remove();
  });

  $("#count-down").TimeCircles(
       {   
           circle_bg_color: "#8a7f71",
           use_background: true,
           bg_width: 1.0,
           fg_width: 0.02,
           time: {
                Minutes: { color: "#fefeee" },
                Seconds: { color: "#fefeee" }
            }
       }
    );

  $('#myCarousel').carousel({
    interval: 15000000,
    cycle: false,
    pause: false
  });


  jQuery(document).bind('keyup', function(e) {

    if(e.keyCode==39){
    jQuery('a.carousel-control.right').trigger('click');
    }   

    else if(e.keyCode==37){
    jQuery('a.carousel-control.left').trigger('click');
    }
  });

particlesJS.load('particles-js', 'assets/js/particles.json', function() {
});

});
    