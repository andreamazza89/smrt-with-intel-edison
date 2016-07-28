$(document).ready(function(){
  var widgetJSON = require('/framework.js').widgetJSON;
  var wjson = new widgetJSON();

  getJSON(setListStyles);

  $('.widget-check').click(function(event) {
    var widgetName = $(this).attr('id').match(/\w+$/)[0];
    toggleStyles(widgetName);
    getJSON(wjson.toggleActive, widgetName);
    setDragBox(widgetName);
  });


  var setDragBox = function(widgetName)  {
    if($('#widget-check-'+widgetName).attr('class') === 'widget-check'){
      $("#widget-box-"+widgetName).remove();
    } else {
      $("#widget-container").append("<div id='widget-box-"+widgetName+"' class='widget-box-"+widgetName+"' >"+widgetName+"</div>");
      $("#widget-box-"+widgetName).draggable({ snap: ".grid-box", snapMode: "inner", snapTolerance: 103, cursor: "pointer" }).css("position", "absolute");
    }
  };


});
