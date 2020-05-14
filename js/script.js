$(function() {

    // Navigation scroll
    $(window).scroll(function(){
        var screenTop = $(document).scrollTop();
        var bannerHeight = $('#banner').height();
        if(screenTop >= bannerHeight) {
            $('#nav').addClass('nav-scrolled');
        } else {
            $('#nav').removeClass('nav-scrolled');
        }
        //console.log(screenTop, bannerHeight);
    });

    // Navigation mobile
    $('#nav-menu-mobile').on('click', function() {
        $('#nav').toggleClass('nav_active');
    });

});