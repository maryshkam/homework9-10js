$(function() {
    //============= slider
    $('.jcarousel').jcarousel({
            animation: {
                duration: 900,
                easing: 'linear',
            },
        })
        .jcarouselAutoscroll({
            interval: 3000,
            target: '+=1',
            autostart: true
        });
    //============ Navigation
    $('.jcarousel-control-prev').jcarouselControl({
        target: '-=1'
    });
    $('.jcarousel-control-next').jcarouselControl({
        target: '+=1'
    });
    
  
    //============== select
    $('select').niceSelect();
    //============= checkbox
    var $check = $('.jcheck');
    $check.on('mousedown', function() {
        $(this).toggleClass("active");
    })
});

 // ===================nice select
 $(document).ready(function() {
  $('select').niceSelect();
});

//============= checkbox
    var $check = $('.jcheck');
    $check.on('mousedown', function() {
        $(this).toggleClass("active");
    });
