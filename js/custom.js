$(function () {
    $('.main_slide').slick({
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    });
    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    });


    $('.sd_day li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.sd_day li').eq(idx).addClass('on').siblings().removeClass('on');
        $('.sd_show li').eq(idx).addClass('on').siblings().removeClass('on');
        $('.sd_show li:nth-child(6) ul').eq(idx).addClass('on').siblings().removeClass('on');
    });

    $('.show_slide').slick({
    });
})