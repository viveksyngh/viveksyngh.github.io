$(document).ready(function() {
    //console.log("hello");
    //console.log("Hi");
    $('body').scrollspy({target: '.navbar-fixed-top'});
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

    console.log("Hello");
    $('.next').click(function() {
        var curEdu = $('.active-edu');
        var nextEdu = curEdu.next();
        if(nextEdu.length === 0)
        {
            nextEdu = $('.edu').first();
        }
        curEdu.removeClass('active-edu');
        curEdu.fadeOut();
        nextEdu.addClass('active-edu');
        nextEdu.fadeIn();
    })

    $('.prev').click(function() {
        var curEdu = $('.active-edu');
        var prevEdu = curEdu.prev();
        if(prevEdu.length === 0)
        {
            prevEdu = $('.edu').last();
        }
        curEdu.removeClass('active-edu');
        curEdu.fadeOut();
        prevEdu.addClass('active-edu');
        prevEdu.fadeIn();
    })
});
