$(document).ready(function(){

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
	// on click of a carousel item, do an Ajax request for
	// the "details/2.html" (or whatever) file for the person
	// clicked, and load those contents into the `$content` div.

	// hint: you will probably want to use "event propagation"
	// (aka "event delegation"), by attaching a single event
	// handler the `$content` element rather than individual
	// event handlers to each item in the carousel.
  $items.on('click',"[rel*='js-item']",loadPersone);

});
