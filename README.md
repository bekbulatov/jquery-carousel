jQuery Carousel Plugin
======================

This is a simple carousel plugin.

How to Use
----------

jQuery Carousel Plugin may be initialized at any time (usually at DOMReady).

	#JS
	
    (function($){
        $(document).ready(function(){
            $('div.carousel_horizontal').carousel({
                mode: 'horizontal',
                center: true,
                auto: true,
                step: 100
            });
        });
    })(jQuery);

For specific usage and options, please read the documentation or visit [http://vkurseweba.ru/blog/jquery-carousel-plugin](http://vkurseweba.ru/blog/jquery-carousel-plugin)