// color version change
$('.template-version button').on('click', function(){
    $('.template-version').toggleClass('open');
  });

  
  $(document).ready(function() {
    // preloader
  $(".preloader").delay(500).animate({
    "opacity" : "0"
  }, 500, function() {
    $(".preloader").css("display","none");
  });
  // nice-select
  $('select').niceSelect();
  background();
});

$(window).on('load', function() {
})