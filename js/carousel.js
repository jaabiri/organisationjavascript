/*$(document).ready(function() {

    function scrollLeft(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        evt.stopImmediatePropagation();

        if (position > 0) {
            position = Math.max(0, position - 250);
        }

        $items.css({
            left: (-position) + "px"
        });
    }

    function scrollRight(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        evt.stopImmediatePropagation();

        if (position < maxPosition) {
            position = Math.min(maxPosition, position + 250);
        }

        $items.css({
            left: (-position) + "px"
        });
    }

    var $content = $("[rel=js-carousel] > [rel=js-content]");
    var $items = $content.children("[rel=js-items]");
    var $left = $("[rel=js-carousel] > [rel=js-controls] > [rel=js-left]");
    var $right = $("[rel=js-carousel] > [rel=js-controls] > [rel=js-right]");


    var contentWidth = $content.width();
    var itemsWidth = $items.width();
    var position = 0;
    var maxPosition = (itemsWidth - contentWidth);



    $left.on('click', scrollLeft);
    $right.on('click', scrollRight);

});

*/
var Carousel = (function() {

    var $content
    var $items
    var $left
    var $right
    var contentWidth
    var itemsWidth
    var position
    var maxPosition

    function scrollLeft(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        evt.stopImmediatePropagation();

        if (position > 0) {
            position = Math.max(0, position - 250);
        }

        $items.css({
            left: (-position) + "px"
        });
    }

    function scrollRight(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        evt.stopImmediatePropagation();

        if (position < maxPosition) {
            position = Math.min(maxPosition, position + 250);
        }

        $items.css({
            left: (-position) + "px"
        });
    }

    function init() {
        $content = $("[rel=js-carousel] > [rel=js-content]");
        $items = $content.children("[rel=js-items]");
        $left = $("[rel=js-carousel] > [rel=js-controls] > [rel=js-left]");
        $right = $("[rel=js-carousel] > [rel=js-controls] > [rel=js-right]");


        contentWidth = $content.width();
        itemsWidth = $items.width();
        position = 0;
        maxPosition = (itemsWidth - contentWidth);
        $left.on('click', scrollLeft);
        $right.on('click', scrollRight);
    }
    return {
        init: init,
    }


})()
$(document).ready(Carousel.init)
