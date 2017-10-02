if (typeof $ !== 'undefined') {
    var $ = require('jQuery');
}

(function ($) {

    $.fn.objectVisualLock = function(offset) {

        offset = typeof offset !== 'undefined' ? offset : 0;
        var object = $(this);

        ar controlPageObject = '<!-- Object Visual Lock -->' +
        '<script src="https://use.fontawesome.com/b47b7f257b.js"></script>' +
        // '<div class="lock-window-toggle-button" style="postition: fixed; top: 10px; right: 10px; height: 30px; width: 30px; z-index: 100000000; background: white;">' +
        //     '' +
        // '</div>'
        '<div class="lock-window-object" style="position: fixed; top: 10px; right: 10px; height: 20px; width: 60px; z-index: 100000000; background: white;">' +
            '<div class="lock-window-set-to-top" style="height: 20px; width: 20px; text-align: center; background: grey; border: 1px solid black; float: left; cursor: pointer; text-align: center; padding-top: 0px; color: yellow; font-size: 12px;">' +
                '<i class="fa fa-arrow-up" aria-hidden="true"></i>' +
            '</div>' + 
            '<div class="lock-window-set-to-bottom" style="height: 20px; width: 20px; text-align: center; background: grey; border: 1px solid black; float: left; cursor: pointer; text-align: center; padding-top: 0px; font-size: 12px; color: black;">' +
                '<i class="fa fa-arrow-down" aria-hidden="true"></i>' +
            '</div>' +
            '<div class="lock-window-on-off" style="height: 20px; width: 20px; text-align: center; background: grey; border: 1px solid black; float: left; cursor: pointer; text-align: center; padding-top: 0px; font-size: 12px; color: black;">' +
                '<i class="fa fa-power-off" aria-hidden="true"></i>' +
            '</div>' + 
        '</div>';

        $('body').append(controlPageObject);

        var lockWindowObject = $('.lock-window-object'),
            lockWindowOnOff = $('.lock-window-object .lock-window-on-off'),
            lockWindowToTop = $('.lock-window-object .lock-window-set-to-top'),
            lockWindowToBottom = $('.lock-window-object .lock-window-set-to-bottom');

        // Set up up and down control buttons and on and off. and then get the scroll lock
        lockWindowOnOff.on('click', function() {
            if(lockWindowObject.hasClass('active')) {
                lockWindowObject.removeClass('active');
                $(this).css('color', 'black');
            } else {
                lockWindowObject.addClass('active');
                $(this).css('color', 'lime');
            }
        });

        lockWindowToBottom.on('click', function() {
            lockWindowObject.css({ 'top': 'auto', 'bottom': '10px' });
            lockWindowToBottom.css('color', 'yellow');
            lockWindowToTop.css('color', 'black');
        });

        lockWindowToTop.on('click', function() {
            lockWindowObject.css({ 'top': '10px', 'bottom': 'auto' });
            lockWindowToTop.css('color', 'yellow');
            lockWindowToBottom.css('color', 'black');
        });

        $(window).on('resize', function() {
            if(lockWindowObject.hasClass('active')) {
                $('html, body').animate({
                    scrollTop: object.offset().top - offset
                }, 0);
            }
        });

    };

}( jQuery ));