$(document).ready(function () {

    var banner = new TimelineMax();
    banner.to(".banner", 1, { opacity: 1, top: '0px', ease: 'Linear' })
        .fromTo('.navbar', 0.8, { opacity: 0 }, { opacity: 1 }, '-=0.5')

    $(window).scroll(function () {
        var scrollHigh = $(window).scrollTop();

        if (scrollHigh > 200) {
            $('.menu').css('bottom', '160px');

            $('.top').css('opacity', '1');

            $('.top').css('pointer-events', 'visible');
        } else {
            $('.menu').css('bottom', '100px');

            $('.top').css('opacity', '0');
            $('.top').css('pointer-events', 'none');
        }

    })


    var category_num = $(".category_img").length;

    for (var i = 0; i < category_num; i++) {
        $('.slider-for' + i).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav' + i
        });
        $('.slider-nav' + i).slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for' + i,
            arrows: false,
            dots: false,
            centerMode: true,
            focusOnSelect: true
        });
    }



    $('.productArea').slick({
        speed: 10000,
        pauseOnHover: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });
    var slider_num = $('.tab-pane').length;

    for (var i = 0; i < slider_num; i++) {
        var now = "#menu" + i

        $(now + " .items").each(function () {

            $(now + ' .mbslider').append('<div class="items">' + this.innerHTML + '</div>');


        });
    }

    $('.picSlidertArea').slick();
    $('.mbslider').slick();





    $('#nav-icon').click(function () {
        $(this).toggleClass('open');

        $('.navbar-collapse').toggleClass('move');
        var tl = new TimelineMax()
        if ($('.navbar-collapse').hasClass('move')) {


            tl.staggerFromTo(".navbar-nav li", 0.5, { opacity: 0, top: '20px' }, { opacity: 1, top: '0px', delay: 0.4 }, 0.1)

        } else {


        }

    });
    $('.navbar-nav li a').click(function () {
        $('.navbar-collapse').removeClass('move');

    });

    /* animate */
    var controller = new ScrollMagic.Controller();

    /* Tween about*/

    if ($("#about").length > 0) {
        var textWrapper1 = document.querySelector('#about h3');
        textWrapper1.innerHTML = '<span class="beforeline"></span>' + textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>") + '<span class="afterline"></span>';
        var tween1 = new TimelineMax();
        tween1
            .staggerFromTo("#about h3 span", 0.5,
                { opacity: 0 },
                { opacity: 1 },
                0.1, '-=0.2')
            .fromTo(".aboutFlex .first", 0.7,
                { opacity: 0, top: '-30px' },
                { opacity: 1, top: '0px', ease: "power4.out" })
            .fromTo(".aboutFlex .floatRightText", 0.7,
                { opacity: 0, top: '30px' },
                { opacity: 1, top: '0px' }, '-=0.5')

        var tween2 = new TimelineMax();
        tween2.fromTo(".aboutFlex .second", 0.5,
            { opacity: 0, top: '-30px' },
            { opacity: 1, top: '0px' })
            .fromTo(".aboutFlex .floatLeftText", 0.5,
                { opacity: 0, top: '30px' },
                { opacity: 1, top: '0px' }, '-=0.2');


        var scene1 = new ScrollMagic.Scene({
            triggerElement: "#about",
            reverse: false,
            offset: -200,
        })
            .setTween(tween1)
            .addTo(controller); // trigger a TweenMax.to tween


        var scene2 = new ScrollMagic.Scene({
            triggerElement: ".floatLeftText",
            reverse: false,
            offset: -300,
        })
            .setTween(tween2)
            .addTo(controller);
    }

    /* Tween news*/
    if ($("#news").length > 0) {

        var textWrapper2 = document.querySelector('#news h3');
        textWrapper2.innerHTML = '<span class="beforeline"></span>' + textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>") + '<span class="afterline"></span>';
        var tween3 = new TimelineMax();
        tween3
            .staggerFromTo("#news h3 span", 0.5,
                { opacity: 0 },
                { opacity: 1 },
                0.1, '-=0.2')
            .fromTo(".newsItem:nth-child(odd)", 0.7,
                { opacity: 0, left: '-300px' },
                { opacity: 1, left: '0px', ease: "power4.out" })
            .fromTo(".newsItem:nth-child(even)", 0.7,
                { opacity: 0, right: '-300px' },
                { opacity: 1, right: '0px', ease: "power4.out" }, '-=0.7');

        var scene3 = new ScrollMagic.Scene({
            triggerElement: "#news",
            reverse: false,
            offset: -300,
        })
            .setTween(tween3)
            .addTo(controller);
    }

    /* Tween menu*/
    if ($("#menu").length > 0) {
        var textWrapper3 = document.querySelector('#menu h3');
        textWrapper3.innerHTML = '<span class="beforeline"></span>' + textWrapper3.textContent.replace(/\S/g, "<span class='letter'>$&</span>") + '<span class="afterline"></span>';
        var tween4 = new TimelineMax();
        tween4
            .staggerFromTo("#menu h3 span", 0.5,
                { opacity: 0 },
                { opacity: 1 },
                0.1, '-=0.2')
            .staggerFromTo('.menuItem', '0.5',
                { opacity: 0, top: '50px' },
                { opacity: 1, top: '0px' },
                0.2, '-=0.1')

        var scene4 = new ScrollMagic.Scene({
            triggerElement: "#menu",
            reverse: false,
            offset: -200,
        })
            .setTween(tween4)
            .addTo(controller);
    }



    /* Tween service*/

    if ($("#service").length > 0) {
        var textWrapper11 = document.querySelector('#service h3');
        textWrapper11.innerHTML = '<span class="beforeline"></span>' + textWrapper11.textContent.replace(/\S/g, "<span class='letter'>$&</span>") + '<span class="afterline"></span>';
        var tween15 = new TimelineMax();
        tween15
            .staggerFromTo("#service h3 span", 0.5,
                { opacity: 0 },
                { opacity: 1 },
                0.1, '-=0.2')
            .staggerFromTo('.serviceItem', '0.5',
                { opacity: 0, top: '50px' },
                { opacity: 1, top: '0px' },
                0.2, '-=0.1')

        var scene15 = new ScrollMagic.Scene({
            triggerElement: "#service",
            reverse: false,
            offset: -200,
        })
            .setTween(tween15)
            .addTo(controller);
    }



    /* Tween picture*/
    if ($("#picture").length > 0) {
        var textWrapper4 = document.querySelector('#picture h3');
        textWrapper4.innerHTML = '<span class="beforeline"></span>' + textWrapper4.textContent.replace(/\S/g, "<span class='letter'>$&</span>") + '<span class="afterline"></span>';
        var tween5 = new TimelineMax();
        tween5
            .staggerFromTo("#picture h3 span", 0.5,
                { opacity: 0 },
                { opacity: 1 },
                0.1, '-=0.2')
            .staggerFromTo('.picItem', '0.5',
                { opacity: 0, top: '50px' },
                { opacity: 1, top: '0px' },
                0.2, '-=0.1');


        var scene5 = new ScrollMagic.Scene({
            triggerElement: "#picture",
            reverse: false,
            offset: -200,
        })
            .setTween(tween5)
            .addTo(controller);
    }
    /* Tween picCategory*/
    if ($("#picCategory").length > 0) {
        var textWrapper5 = document.querySelector('#picCategory h3');
        textWrapper5.innerHTML = '<span class="beforeline"></span>' + textWrapper5.textContent.replace(/\S/g, "<span class='letter'>$&</span>") + '<span class="afterline"></span>';
        var tween6 = new TimelineMax();
        tween6
            .staggerFromTo("#picCategory h3 span", 0.5,
                { opacity: 0 },
                { opacity: 1 },
                0.1, '-=0.2')


        var scene6 = new ScrollMagic.Scene({
            triggerElement: "#picCategory",
            reverse: false,
            offset: -200,
        })
            .setTween(tween6)
            .addTo(controller);



    }
    /*Tween picSlider */
    if ($("#picSlider").length > 0) {
        var textWrapper12 = document.querySelector('#picSlider h3');
        textWrapper12.innerHTML = '<span class="beforeline"></span>' + textWrapper12.textContent.replace(/\S/g, "<span class='letter'>$&</span>") + '<span class="afterline"></span>';
        var tween16 = new TimelineMax();
        tween16
            .staggerFromTo("#picSlider h3 span", 0.5,
                { opacity: 0 },
                { opacity: 1 },
                0.1, '-=0.2')
            .fromTo('.nav-pills', '0.5',
                { opacity: 0, top: '50px' },
                { opacity: 1, top: '0px' },
                '-=0.1')

            .fromTo('.tab-content', '0.5',
                { opacity: 0, top: '50px' },
                { opacity: 1, top: '0px' },
                '-=0.1')


        var scene16 = new ScrollMagic.Scene({
            triggerElement: "#picSlider",
            reverse: false,
            offset: -200,
        })
            .setTween(tween16)
            .addTo(controller);
    }


    /* Tween roomType*/
    if ($("#roomType").length > 0) {
        var textWrapper6 = document.querySelector('#roomType h3');
        textWrapper6.innerHTML = '<span class="beforeline"></span>' + textWrapper6.textContent.replace(/\S/g, "<span class='letter'>$&</span>") + '<span class="afterline"></span>';
        var tween9 = new TimelineMax();
        tween9
            .staggerFromTo("#roomType h3 span", 0.5,
                { opacity: 0 },
                { opacity: 1 },
                0.1, '-=0.2')
            .fromTo(".roomItem:nth-child(odd)", 0.7,
                { opacity: 0, left: '-300px' },
                { opacity: 1, left: '0px', ease: "power4.out" })
            .fromTo(".roomItem:nth-child(even)", 0.7,
                { opacity: 0, right: '-300px' },
                { opacity: 1, right: '0px', ease: "power4.out" }, '-=0.7');

        var scene9 = new ScrollMagic.Scene({
            triggerElement: "#roomType",
            reverse: false,
            offset: -200,
        })
            .setTween(tween9)
            .addTo(controller);
    }



    /* Tween listMenu*/
    if ($("#listMenu").length > 0) {
        var textWrapper7 = document.querySelector('#listMenu h3');
        textWrapper7.innerHTML = '<span class="beforeline"></span>' + textWrapper7.textContent.replace(/\S/g, "<span class='letter'>$&</span>") + '<span class="afterline"></span>';
        var tween10 = new TimelineMax();
        tween10
            .staggerFromTo("#listMenu h3 span", 0.5,
                { opacity: 0 },
                { opacity: 1 },
                0.1, '-=0.2')

        var tween11 = new TimelineMax();
        tween11

            .fromTo(".listMenuArea h4", 0.5,
                { opacity: 0, top: '50px' },
                { opacity: 1, top: '0px' })
            .staggerFromTo(".listMenuItem", 0.7,
                { opacity: 0, top: '50px' },
                { opacity: 1, top: '0px' },
                0.2, '-=0.2');

        var scene10 = new ScrollMagic.Scene({
            triggerElement: "#listMenu",
            reverse: false,
            offset: -200,
        })
            .setTween(tween10)
            .addTo(controller);


        var scene11 = new ScrollMagic.Scene({
            triggerElement: ".listMenuArea",
            reverse: false,
            offset: -200,
        })
            .setTween(tween11)
            .addTo(controller);

    }


    /* Tween video*/
    if ($("#video").length > 0) {
        var textWrapper8 = document.querySelector('#video h3');
        textWrapper8.innerHTML = '<span class="beforeline"></span>' + textWrapper8.textContent.replace(/\S/g, "<span class='letter'>$&</span>") + '<span class="afterline"></span>';
        var tween12 = new TimelineMax();
        tween12
            .staggerFromTo("#video h3 span", 0.5,
                { opacity: 0 },
                { opacity: 1 },
                0.1, '-=0.2')
            .fromTo(".videoItem:nth-child(odd)", 0.7,
                { opacity: 0, left: '-300px' },
                { opacity: 1, left: '0px', ease: "power4.out" })
            .fromTo(".videoItem:nth-child(even)", 0.7,
                { opacity: 0, right: '-300px' },
                { opacity: 1, right: '0px', ease: "power4.out" }, '-=0.7')
        var scene12 = new ScrollMagic.Scene({
            triggerElement: "#video",
            reverse: false,
            offset: -200,
        })
            .setTween(tween12)
            .addTo(controller);
    }

    /* Tween product*/
    if ($("#product").length > 0) {
        var textWrapper9 = document.querySelector('#product h3');
        textWrapper9.innerHTML = '<span class="beforeline"></span>' + textWrapper9.textContent.replace(/\S/g, "<span class='letter'>$&</span>") + '<span class="afterline"></span>';
        var tween13 = new TimelineMax();
        tween13
            .staggerFromTo("#product h3 span", 0.5,
                { opacity: 0 },
                { opacity: 1 },
                0.1, '-=0.2')
            .fromTo(".productArea", 1.5,
                { opacity: 0, scale: 0 },
                { opacity: 1, scale: 1, ease: "power4.out" });

        var scene13 = new ScrollMagic.Scene({
            triggerElement: "#product",
            reverse: false,
            offset: -100,
        })
            .setTween(tween13)
            .addTo(controller);
    }





    /* Tween traffic*/
    if ($("#traffic").length > 0) {
        var textWrapper10 = document.querySelector('#traffic h3');
        textWrapper10.innerHTML = '<span class="beforeline"></span>' + textWrapper10.textContent.replace(/\S/g, "<span class='letter'>$&</span>") + '<span class="afterline"></span>';
        var tween14 = new TimelineMax();
        tween14
            .staggerFromTo("#traffic h3 span", 0.5,
                { opacity: 0 },
                { opacity: 1 },
                0.1, '-=0.2')
            .staggerFromTo(".trafficText ul", 0.5,
                { opacity: 0, top: '50px' },
                { opacity: 1, top: '0px' },
                0.1)
            .fromTo(".trafficMap ", 0.5,
                { opacity: 0, top: '50px' },
                { opacity: 1, top: '0px' },
            );
        var scene14 = new ScrollMagic.Scene({
            triggerElement: "#traffic",
            reverse: false,
            offset: -200,
        })
            .setTween(tween14)
            .addTo(controller);

    }



    /*Tween 16 start */



});




var controller1 = new ScrollMagic.Controller();

function func() {

    for (i = 1; i <= categoryItem_num; i++) {
        var test = i.toString()
        this['tweentest' + test] = new TimelineMax();
        this['tweentest' + test].fromTo('.categoryItem:nth-child(' + i + ') .category_img', '0.5',
            { opacity: 0, left: '-300px' },
            { opacity: 1, left: '0px' },
        )
            .fromTo('.categoryItem:nth-child(' + i + ') .category_Text', '0.5',
                { opacity: 0, left: '300px' },
                { opacity: 1, left: '0px' },
                '-=0.2'
            )
        this['scenetest' + test] = new ScrollMagic.Scene({
            triggerElement: ".categoryItem:nth-child(" + i + ")",
            reverse: false,
            offset: -200,
        })
            .setTween(this['tweentest' + test])
            .addTo(controller1);
    }
}
if ($("#picCategory").length > 0) {
    var categoryItem_num = $(".categoryItem").length;
    func();
}
