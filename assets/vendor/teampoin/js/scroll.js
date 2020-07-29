$(document).ready(function () {
    // animation scroll js
    var html_body = $('html, body');
    $('a.page-scroll').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 80
        }, 1500, 'easeInOutExpo', function () {
            window.location.hash = target;
        });
    });
});