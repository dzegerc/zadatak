var first_row = $(".top .picture");
var second_row = $(".bottom .picture");

$('.button-left').click(function () {
  $(first_row).clone().appendTo('.top');
  $('.top, .bottom').animate({
    scrollLeft: '+=180'
  }, 1000);
});
$('.button-right').click(function () {
  $(second_row).clone().appendTo('.bottom');
  $('.top, .bottom').animate({
    scrollLeft: '-=180'
  }, 1000);
});
    