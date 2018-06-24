(function($) {
	$(function() {
		$('#menu').mmenu({
			"extensions": [ 'fx-panels-slide-100','fx-menu-slide','effect_slide_menu', 'shadow_page', 'shadow_panels', 'pagedim-black' ],
			"keyboardNavigation": true,
			"screenReader": true,
			"counters": true,
			"navbar": {
				title: 'Menu'
			},
			"offCanvas": {
	            "position": "right"
	        }
		});
	});
})(jQuery);
$(document).ready(function() {
  $("a[href*='#']:not([href='#])").click(function() {
    let target = $(this).attr("href");
    $('html,body').stop().animate({
      scrollTop: $(target).offset().top
    }, 1000);
    event.preventDefault();
  });
});