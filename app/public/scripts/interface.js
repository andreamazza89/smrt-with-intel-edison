$(document).ready(function(){
  var widgetJSON = require('/framework.js').widgetJSON;
  var wjson = new widgetJSON();

  getJSON(setListStyles);

  $('.widget-check').click(function(event) {
    var widgetName = $(this).attr('id').match(/\w+$/)[0];
    toggleStyles(widgetName);
    getJSON(wjson.toggleActive, widgetName);
    // getJSON(setListStyles, widgetName);
    // setDragBox(widgetName);
  });


  var setDragBox = function(widgetName)  {
    $("#some-element").html().append("<div id='widget-box-"+widgetName+"'></div>");
  };

});
