  $(document).ready(function() {
    $('.show-hidden-menu').click(function() {
      $('.FormContainer').show();
    });
  });

  $(document).ready(function() {
    // alert("The paragraph is now hidden");
    $("#viewseat").click(function(){  
      $(".BusContainer").slideToggle("slow", function(){  
          // alert("The paragraph is now hidden");  
      });  
  });

});

