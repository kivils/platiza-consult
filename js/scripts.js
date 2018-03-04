/*
Julia Sesyunina
idwebkivils@gmail.com
skype: idweb_pm_julia
http://demo.artelx.ru
*/

jQuery(function($){
    jQuery("html").removeClass("no-js").addClass("js");
    jQuery(".linkto").each(function() {
        jQuery(this).click(function(event) {
            var linkto = jQuery(this).attr("href");
            jQuery('body,html').animate({
				scrollTop: (jQuery(linkto).offset().top - jQuery('.topbar_wr').outerHeight())
			}, 800);
            event.preventDefault();
        });
    });

    // Carousels
    var jcarousel = jQuery('.jcarousel');
    jcarousel.each(function() {
        jQuery(this)
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = jQuery(this),
                    width = carousel.innerWidth();

                if(carousel.hasClass('fullwidth')) {
                    width = width;
                }
                else {
                    if (width >= 600) {
                        width = width / 3;
                    } else if (width >= 350) {
                        width = width / 2;
                    }
                }

                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            })
            .jcarouselAutoscroll({
                interval: 3000,
                autostart: true
            });

        jQuery(this).next('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                jQuery(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                jQuery(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
    });


});