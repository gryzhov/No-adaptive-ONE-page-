$(function () {
	$('.potted__slider').slick({
		dots: true,
		fade: true,
	});
	$('.header__top-menu').on('click', function () {
		$('.header__list').toggleClass('header__list--open');
	});
})
