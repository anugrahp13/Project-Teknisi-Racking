// Search
$('#search-mobile').click(function () {
    $('#navbarSupportedContent').removeClass('show');
    $('.search-box').addClass('active');
});
$('#search-desktop').click(function () {
    $('.search-box').addClass('active');
});
$('.search-box .close').click(function () {
    $('.search-box').removeClass('active');
});
$('#menu-mobile').click(function () {
    $('.search-box').removeClass('active');
});