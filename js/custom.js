$(function () {
    $(window).scroll(function () {
        let top = $(window).scrollTop();
    });
    $('.to_top').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 600);
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    });

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
    });




    //theater
    $('.show_slide').on('init afterChange', function (e, s, c) {
        const current = $('.show_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.main_theater .the_left li').eq(0).addClass('on');
        $('.main_theater .the_left li').eq(c).addClass('on').siblings().removeClass('on');
    })
    $('.show_slide').slick({
        arrows: false,
        fade: true,
    });
    $('.main_theater .the_left li').on('click', function () {
        let idx = $(this).index();
        console.log(idx);
        $('.show_slide').slick('slickGoTo', idx, true);
    });



    //mobile
    $('.mmenu').on('click', function () {
        $('.gnb').toggleClass('on');
    });
    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.sub').stop().slideUp();
        }

    });
    $(window).on('resize', function () {
        $('.head_customer').removeClass('on');
    });
    $('.gnb').on('wheel', function (e) {
        if ($(this).hasClass('on')) {
            e.preventDefault();
        }
    });
})