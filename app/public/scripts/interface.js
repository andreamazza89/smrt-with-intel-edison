$(document).ready(function(){

  var wjson = new WidgetJSON();

  $('.widget-check').click(function(event) {
    var widgetName = $(this).attr('id').match(/\w+$/)[0];
    //
    // toggleActive(widgetName);
    // setListStyles();
    // setDragBox(widgetName);

    wjson.toggleActive(widgetName);
  });
  //
  // var toggleActive = function(widgetName) {
  //   var widgets = getJSON();
  //   for(var i = 0; i < widgets.length; i++) {
  //     if (widgets[i].name === widgetName) {
  //       widgets[i].active === "true" ? widgets[i].active = "false" :  widgets[i].active = "true";
  //       writeJSON(widgets);
  //       return widgets[i].active;
  //     }
  //   }
  // };
  //
  // var setListStyles = function()  {
  //   var widgets = getJSON();
  //   for (var i = 0; i < widgets.length; i++) {
  //     var name = widgets[i].name;
  //     if(widgets[i].active === "true") {
  //       $("#widget-name-"+name).attr('class', 'widget-name-' + name +'-active');
  //       $("#widget-check-"+name).attr('class', 'widget-check-' + name +'-active');
  //     }
  //     else {
  //       $("#widget-name-"+name).attr('class', 'widget-name');
  //       $("#widget-check-"+name).attr('class', 'widget-check');
  //     }
  //   }
  // }
  //
  // var setDragBox(widgetName)  {
  //   $("#some-element").html().append("<div id='widget-box-"+widgetName+"'></div>");
  // }

});
