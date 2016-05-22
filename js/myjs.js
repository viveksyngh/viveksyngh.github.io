$(document).ready(function() {
    //console.log("hello");
    //console.log("Hi");

    $('.exp-detail-2').addClass('hidden');
    $('.exp-detail-1').removeClass('hidden');

    $('.link-1').hover(function () {
      $('.exp-detail-2').addClass('hidden');
      $('.exp-detail-1').removeClass('hidden');
    });

    $('.link-2').hover(function () {
      $('.exp-detail-1').addClass('hidden');
      $('.exp-detail-2').removeClass('hidden');
    });
});
