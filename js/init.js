/*
	HI THERE I AM JAVASCRIPT OK
	*/

	(function($) {

		skel
		.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

		$(function() {

			var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#page-wrapper'),
			$banner = $('#banner'),
			$articleBanner = $('#articleBanner'),
			$inner = $banner.find('.inner'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
		$body.addClass('is-loading');

		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-loading');
			}, 100);
		});

		// $window.scroll(function() {
		// 	var oVal;
		// 	oVal = $(window).scrollTop() / 640;
		// 	return $inner.css("opacity", (1-oVal));
		// });

		// Mobile?
		if (skel.vars.isMobile)
			$body.addClass('is-mobile');
		else
			skel
		.on('-medium !medium', function() {
			$body.removeClass('is-mobile');
		})
		.on('+medium', function() {
			$body.addClass('is-mobile');
		});

		// Scrolly.
		$('.scrolly')
		.scrolly({
			speed: 1,
			offset: $header.outerHeight()
		});

		// Menu.
		var	$menu = $('#menu'),
		$menuClose = $('<a class="close">').appendTo($menu),
		$menuToggle = $('.menuToggle');

			// Move to end of body.
			$menu
			.appendTo($body);

			// Close.
			$menuClose
			.on('click touchend', function(event) {

				event.preventDefault();
				event.stopPropagation();

				$body.removeClass('is-menu-visible');

			});

			// Toggle.
			$menuToggle
			.on('click touchend', function(event) {

				event.preventDefault();
				event.stopPropagation();

				$body.toggleClass('is-menu-visible');

			});

			// Wrapper.
			$wrapper
			.on('click touchend', function(event) {

				if ($body.hasClass('is-menu-visible')) {

					event.preventDefault();
					event.stopPropagation();

					$body.removeClass('is-menu-visible');

				}

			});

		// Header.
		if (skel.vars.IEVersion < 9)
			$header.removeClass('alt');

		if ($banner.length > 0 && $header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

		$banner.scrollex({
			bottom:		$header.outerHeight() + 10,
			terminate:	function() { $header.removeClass('alt'); },
			enter:		function() { $header.addClass('alt'); },
			leave:		function() { $header.removeClass('alt'); }
		});
	}
	if ($articleBanner.length > 0
		&&	$header.hasClass('alt')) {

		$window.on('resize', function() { $window.trigger('scroll'); });

	$articleBanner.scrollex({
		bottom:		$header.outerHeight() + 10,
		terminate:	function() { $header.removeClass('alt'); },
		enter:		function() { $header.addClass('alt'); },
		leave:		function() { $header.removeClass('alt'); }
	});
}
});

})(jQuery);