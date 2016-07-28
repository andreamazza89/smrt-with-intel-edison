;(function(exports){
  function widgetJSON(){

  }

  widgetJSON.prototype = {
    toggleActive: function(data, widgetName, sjson) {
      var widgets = JSON.parse(data).widgets;
      for(var i = 0; i < widgets.length; i++) {
        if (widgets[i].name === widgetName) {
          widgets[i].active = widgets[i].active === "true" ? "false" : "true";
          if (sjson === undefined){
            setJSON({ widgets: widgets });
          } else {
            sjson({ widgets: widgets });
          }
          return widgets[i].active;
        }
      }
    }

  };

  exports.widgetJSON = widgetJSON;

})(this);
