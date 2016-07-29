;(function(exports){
  var setListStyles = function(data, widgetName)  {
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

  var toggleStyles = function(name)  {
      if($("#widget-name-"+name).hasClass('widget-name')) {
        $("#widget-name-"+name).attr('class', 'widget-name-' + name +'-active');
        $("#widget-check-"+name).attr('class', 'widget-check-' + name +'-active');
      }
      else {
        $("#widget-name-"+name).attr('class', 'widget-name');
        $("#widget-check-"+name).attr('class', 'widget-check');
      }

  };
  exports.setListStyles = setListStyles;
  exports.toggleStyles = toggleStyles;

})(this);
