$(document).ready(function(){
  var widgetJSON = require('widgetJSON');
  var wjson = new widgetJSON();

  function logger(data) {
    console.log(data);
  }

  $('.widget-check').click(function(event) {
    var widgetName = $(this).attr('id').match(/\w+$/)[0];
    getJSON(wjson.toggleActive, widgetName);
    // getJSON2(setListStyles);
    // setDragBox(widgetName);
  });

  var setListStyles = function(data)  {
    var widgets = JSON.parse(data).widgets;
    for (var i = 0; i < widgets.length; i++) {
      var name = widgets[i].name;
      if(widgets[i].active === "true") {
        $("#widget-name-"+name).attr('class', 'widget-name-' + name +'-active');
        $("#widget-check-"+name).attr('class', 'widget-check-' + name +'-active');
      }
      else {
        $("#widget-name-"+name).attr('class', 'widget-name');
        $("#widget-check-"+name).attr('class', 'widget-check');
      }
    }
  };

  var setDragBox = function(widgetName)  {
    $("#some-element").html().append("<div id='widget-box-"+widgetName+"'></div>");
  };

});
