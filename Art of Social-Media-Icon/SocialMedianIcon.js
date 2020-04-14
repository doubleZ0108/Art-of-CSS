window.onload = function () {
    // circle版的样式都在li上
    $('.circle li').click(function () {
        $(this).toggleClass("clicked");
        $(this).toggleClass("fill-color");
    });

    // ring版特殊样式在a上
    $('.ring li a').click(function () {
        $(this).toggleClass("clicked");
        $(this.parentNode).toggleClass("fill-color");
    });
};