
$(document).ready(function(){
  var $modal = $("[rel= 'js-modal']")
$("[rel= 'js-controls']").on('click',"[rel*='js-']",function(e){

    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    var url = $(e.target).attr("href");
    $.ajax(url,{dataType:"text"}).then(function(content){
       $modal.html(content).show()
    })


})

})
