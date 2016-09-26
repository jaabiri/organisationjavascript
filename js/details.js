var Details = (function() {

  var $content;

  function init() {
    $content = $("[rel=js-details]");

    EVT.on("person-selected", loadPerson);
  }

  function loadPerson(id) {
    var url = "details/" + id + ".html";

    $.ajax(url, { dataType: "text" })
      .then(function(contents) {
        $content.html(contents);
      });
  }

  EVT.on("init", init);

})();