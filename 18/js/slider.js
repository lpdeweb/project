$(function () {
    $('#tab li').mouseover(function () {
        $('#tab li').removeClass('black');
        $('#tab-picture .imgArea ul').hide().eq($(this).index()).show();
        $(this).addClass('black')
    })
});
$(function () {
    $('#tab li').mouseout(function () {
        $(this).removeClass('black');
    })
});
