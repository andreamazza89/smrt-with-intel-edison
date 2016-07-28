$(document).ready(function(){

  function logger(data) {
    console.log(data);
  }

  $('.widget-check').click(function(event) {
    var widgetName = $(this).attr('id').match(/\w+$/)[0];
    getJSON(toggleActive, widgetName);
    getJSON2(setListStyles);
    // setDragBox(widgetName);
  });

  var toggleActive = function(data, widgetName) {
    var widgets = JSON.parse(data).widgets;
    for(var i = 0; i < widgets.length; i++) {
      if (widgets[i].name === widgetName) {
        widgets[i].active === "true" ? widgets[i].active = "false" :  widgets[i].active = "true";
        setJSON({ widgets: widgets });
        return widgets[i].active;
      }
    }
  };

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
  }

  var setDragBox = function(widgetName)  {
    $("#some-element").html().append("<div id='widget-box-"+widgetName+"'></div>");
  }

});
