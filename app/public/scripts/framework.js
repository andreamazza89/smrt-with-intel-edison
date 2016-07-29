;(function(exports){

  var writeJSON;
  function widgetJSON(sjson){
    writeJSON = sjson;
  }

  widgetJSON.prototype = {
    toggleActive: function(data, widgetName) {
      var widgets = JSON.parse(data).widgets;
      for(var i = 0; i < widgets.length; i++) {
        if (widgets[i].name === widgetName) {
          widgets[i].active = widgets[i].active === "true" ? "false" : "true";
          writeJSON({ widgets: widgets });
          return widgets[i].active;
        }
      }
    },

    setGridPosition: function(data, widgetName, location)  {
      var widgets = JSON.parse(data).widgets;
      for(var i = 0; i < widgets.length; i++) {
        if (widgets[i].name === widgetName) {
          widgets[i].location = location;
          writeJSON({ widgets: widgets });
          return widgets[i].location;
        }
      }
    }

  };

  exports.widgetJSON = widgetJSON;

})(this);
