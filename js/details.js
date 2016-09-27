/*$(document).ready(function(){

	var $items = $("[rel=js-carousel] > [rel=js-content] > [rel=js-items]");
	var $content = $("[rel=js-details]");
  function loadPersone(e){
    e.preventDefault()
      var ID  = $(e.target).attr("rel");
      var i = ID.length - 7
      var striID  = ID.substr(8,i)
      var url = "details/" +striID +".html"
      $.ajax(url, {
          dataType: "text"
      }).then(function(content) {
          $content.html(content)
      })


  }
  $items.on('click',"[rel*='js-item']",loadPersone);

});
*/
var Details = (function() {
    var $items
    var $content

    function loadPersone(e) {
        e.preventDefault()
        var ID = $(e.target).attr("rel");
        var i = ID.length - 7
        var striID = ID.substr(8, i)
        var url = "details/" + striID + ".html"
        $.ajax(url, {
            dataType: "text"
        }).then(function(content) {
            $content.html(content)
        })
    }

    function init() {
			$items = $("[rel=js-carousel] > [rel=js-content] > [rel=js-items]");
		  $content = $("[rel=js-details]");
        $items.on('click', "[rel*='js-item']", loadPersone);
    }


return {
	init : init ,
}

})()
$(document).ready(Details.init)
