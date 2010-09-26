/*
---
description: jQuery Carousel Plugin

authors:
  - Bekbulatov Alexander ( http://vkurseweba.ru/ )

license:
  - MIT-style license

requires:
	- jquery-1.3.js
	- jquery.scrollTo.js

...
*/

(function($){
    $.fn.carousel = function(opts) {
        var defaults = {
            mode: 'horizontal', // vertical or horizontal
            fadeDuration: 300,
            transitionDuration: 700,
            step: 300,
            opacity: 0.5,
            circular: false,
            auto: false,
            delay: 3000,
            center: false
        };

        var options = $.extend(defaults, opts);

        return this.each(function() {

            var $obj = $(this),
            $topButton = $obj.children('div.topButton'),
            $bottomButton = $obj.children('div.botomButton'),
            $scrollDiv = $obj.children('div.scroll'),
            $ul = $scrollDiv.children('ul'),
            $li = $ul.children('li'),
            $current = $ul.children('li.current'),
            scrollLimit = 0,
            position = 0,
            timer = null;

            // get gallery's size
            $li.each(function(){
                scrollLimit += (options.mode == 'horizontal') ?
                $(this).outerWidth() : $(this).outerHeight();
            });

            if (options.mode == 'horizontal') {
                $ul.width(scrollLimit);
            }
            else {
                $ul.height(scrollLimit);
            }

            var max = (options.mode == 'horizontal') ?
            $ul.outerWidth() - $scrollDiv.outerWidth() :
            $ul.outerHeight() - $scrollDiv.outerHeight();

            // hover effects
            $li.hover(function() {
                timer && clearInterval(timer);
                $(this).siblings(':not(.current)').stop().fadeTo(options.fadeDuration, options.opacity);
            }, function() {
                timer = initTimer();
                $(this).siblings().stop().fadeTo(options.fadeDuration, 1);
            });

            // scrolling gallery
            var scrollingTo = function(destination) {

                if (typeof destination == 'number') { // if pass x,y
                    $scrollDiv.stop().scrollTo( destination, options.transitionDuration );
                }
                else if(typeof destination == 'object')	{
                    var x;
                    if (options.mode == 'horizontal') { // if gallery's item
                        x = destination.position().left - $ul.position().left;
                        x -= ($scrollDiv.outerWidth() - destination.outerWidth()) / 2;
                    }
                    else {
                        x = destination.position().top - $ul.position().top;
                        x -= ($scrollDiv.outerHeight() - destination.outerHeight()) / 2;
                    }
                    if (x < 0)
                        x = 0;
                    $scrollDiv.stop().scrollTo( x, options.transitionDuration );
                    position = x;
                }

                if (!options.circular){
                    $topButton.toggleClass('disabled', position <= 0);
                    $bottomButton.toggleClass('disabled', position >= max);
                }
            },
            // scrolling automatically
            initTimer = function(){
                if (!options.auto) return null;
                return setInterval(function(){
                    if (position == max)
                        position = 0;
                    else {
                        position += options.step;
                        if (position > max)
                            position = max;
                    }
                    scrollingTo(position);
                }, options.delay);
            }

            // navigation button's events
            $topButton.click(function(){
                if (options.circular && position == 0)
                    position = max;
                else {
                    position -= options.step;
                    if (position < 0)
                        position = 0;
                }
                scrollingTo(position);
            });

            $bottomButton.click(function(){
                if (options.circular && position == max)
                    position = 0;
                else {
                    position += options.step;
                    if (position > max)
                        position = max;
                }
                scrollingTo(position);
            });

            timer = initTimer();

            // scroll to the current item
            if ($current.length) {
                scrollingTo($current);
            }
            // scroll to the middle at first
            else if (options.center) {
                $li.click(function(){
                    var $el = $(this);
                    $el.siblings().removeClass('current');
                    $el.addClass('current');
                    scrollingTo($el);
                });
            }
        });

    };
})(jQuery);