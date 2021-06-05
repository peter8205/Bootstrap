$(function(){
  $("#nav .dropdown").hover(
    function() {
      $('#products-menu.dropdown-menu', this).stop( true, true ).fadeIn("fast");
      $(this).toggleClass('open');
    },
    function() {
      $('#products-menu.dropdown-menu', this).stop( true, true ).fadeOut("fast");
      $(this).toggleClass('open');
    });
});