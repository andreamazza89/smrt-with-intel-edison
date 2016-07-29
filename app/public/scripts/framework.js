;(function(exports){

  function widgetJSON(sjson){

    if (sjson === undefined){
      this.writeJSON = setJSON;
    } else {
      this.writeJSON = sjson;
    }

  }

  widgetJSON.prototype = {
    toggleActive: function(data, widgetName) {
      var widgets = JSON.parse(data).widgets;
      for(var i = 0; i < widgets.length; i++) {
        if (widgets[i].name === widgetName) {
          widgets[i].active = widgets[i].active === "true" ? "false" : "true";
          this.writeJSON({ widgets: widgets });
          return widgets[i].active;
        }
      }
    },

    setGridPosition: function(data, widgetName, location)  {
      var widgets = JSON.parse(data).widgets;
      for(var i = 0; i < widgets.length; i++) {
        if (widgets[i].name === widgetName) {
          widgets[i].location = location;
          this.writeJSON({ widgets: widgets });
          return widgets[i].location;
        }
      }
    }

  };

  exports.widgetJSON = widgetJSON;

})(this);
