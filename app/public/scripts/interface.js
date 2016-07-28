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
      $("#widget-container").html('');
    } else {
      $("#widget-container").html("<div id='widget-box-"+widgetName+"' class='widget-box' ></div>");
      $("#widget-box-"+widgetName).draggable({ snap: ".grid-box", snapMode: "inner", snapTolerance: 103, cursor: "pointer" });
    }
  };


});
