
$(document).ready(function () {
	$(document).on("scroll", onScroll);

	$('nav a[href^="#"]').on('click', function (e) {
		e.preventDefault();
		$(document).off("scroll");

		$('a').each(function () {
			$(this).removeClass('active_buttons');
			$('#nav-toggle').removeClass('active_buttons');
		})
		$(this).addClass('active_buttons');
		$('#nav-toggle').removeClass('active_buttons');

		var target = this.hash;
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top+2
		}, 500, 'swing', function () {
			window.location.hash = target;
			$(document).on("scroll", onScroll);
		});
	});
});

function onScroll(event){
	var scrollPosition = $(document).scrollTop();
	$('nav a').each(function () {
		var currentLink = $(this);
		var refElement = $(currentLink.attr("href"));
		if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
			$('nav ul li a').removeClass("active_buttons");
			currentLink.addClass("active_buttons");
		}
		else{
			currentLink.removeClass("active_buttons");
		}
	});
}
