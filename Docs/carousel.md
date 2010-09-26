jQuery Carousel Plugin
======================

This is a simple carousel plugin.

Features:

* a different size of gallery's items,
* horizontal and vertical mode,
* a selected item can be centered,
* nice hover effect,
* auto mode

Carousel Plugin requires [ScrollTo Plugin](http://plugins.jquery.com/project/ScrollTo).

### Syntax:

    jQuery('div').carousel(options);

### Options:

* mode - (*string*, defaults to 'horizontal') Horizontal or Vertical mode,
* fadeDuration - (*number*, defaults to 300) Hover effect duration,
* transitionDuration - (*number*, defaults to 700) The interval at which the gallery should be scrolled,
* step - (*number*, defaults to 300) The distance at which the gallery is scrolled with control buttons,
* opacity - (*float*, defaults to 0.5) item's default opacity,
* center - (*boolean*, defaults to false) If true is passed, the gallery is scrolled to the middle after initialization,
* circular - (*boolean*, defaults to false) circular mode,
* auto - (*boolean*, defaults to false) auto mode,
* delay - (*number*, defaults to 3000) The interval at which the gallery is scrolled automatically.