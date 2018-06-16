$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var scroll1 = $('.section1').position();
    var scroll2 = $('.section2').position();
    var scroll3 = $('.section3').position();
    
    if (scroll >= scroll1.top && scroll <= scroll2.top) {
        $(".mainLink").addClass("color1");
    } else {
        $(".mainLink").removeClass("color1");
    }

    if (scroll >= scroll2.top && scroll <= scroll3.top) {
        $(".mainLink").addClass("color2");
    } else {
        $(".mainLink").removeClass("color2");
    }
    
    if (scroll >= scroll3.top) {
        $(".mainLink").addClass("color3");
    } else {
        $(".mainLink").removeClass("color3");
    }
    
});