/*$(document).ready(function() {
    var $modal = $("[rel= 'js-modal']")  //globale variable
    $("[rel= 'js-controls']").on('click', "[rel*='js-']", function(e) {

        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        var url = $(e.target).attr("href");
        $.ajax(url, {
            dataType: "text"
        }).then(function(content) {
            $modal.html(content).show()
        })


    })

})*/

var Header = (function() {
    var $modal;

    function init() {
        $modal = $("[rel= 'js-modal']")

        $("[rel= 'js-controls']").on('click', "[rel*='js-']", headerLinkClick)
    }

    function headerLinkClick(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        
        var url = $(e.target).attr("href");
        $.ajax(url, {
            dataType: "text"
        }).then(function(content) {

            $modal.html(content).show()
        })
    }



    return {
        init: init,
    }

})()
$(document).ready(Header.init)
