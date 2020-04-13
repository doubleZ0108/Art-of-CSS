window.onload = function () {
    $('.first li').click(function () {
        console.log("hello");
        $(this).toggleClass("shadow-1");
    });
};