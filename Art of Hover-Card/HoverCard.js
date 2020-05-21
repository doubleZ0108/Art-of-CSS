window.onload = function () {
    $('.card').hover(function () {
        if ($(this).hasClass("active")) {
            $('.card .bottom').slideUp(function () {
                $('.card').removeClass("active");
            });
        } else {
            $('.card').addClass("active");
            $('.card .bottom').stop().slideDown();
        }
    });
};