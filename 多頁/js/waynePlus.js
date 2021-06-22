$(document).ready(function () {
    // var height = $('.ml9').offset().top + 100;
    var lesson = $('.lesson1').height();
    var line = $('.line1').height();

    $('.lesson2').height(lesson);
    $('.lesson3').height(lesson);
    $('.line2').height(line);
    $('.line3').height(line);

    $(window).scroll(function () {
        var scroHeight = $(window).scrollTop();
        var test = $(window).scrollTop() + $(window).height();
        // if (test > height && count == 0 && widh > 776) {
        //     var textWrapper = document.querySelector('.ml9 .letters');
        //     textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        //     anime.timeline({ loop: false })
        //         .add({
        //             targets: '.ml9 .letter',
        //             scale: [0, 1],
        //             duration: 1500,
        //             elasticity: 600,
        //             delay: (el, i) => 45 * (i + 1)
        //         });
        //     count++;
        // }
        $('.animateLeftToRight').each(function () {

            var bottom_of_element = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                setTimeout(() => {
                    $(this).css({ 'opacity': '1', 'right': '0px' });
                }, 0);
            }

        });

        $('.animateRightToLeft').each(function () {

            var bottom_of_element = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                setTimeout(() => {
                    $(this).css({ 'opacity': '1', 'left': '0px' });
                }, 0);
            }

        });

        $('.animateBottomToTop').each(function () {

            var bottom_of_element = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                setTimeout(() => {
                    $(this).css({ 'opacity': '1', 'top': '0px' });
                }, 0);
            }

        });

    });



});