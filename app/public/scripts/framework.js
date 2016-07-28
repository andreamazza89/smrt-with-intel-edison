;(function(exports){

  function widgetJSON(sjson){

    if (sjson === undefined){
      this.jsonMethod = setJSON;
    } else {
      this.jsonMethod = sjson;
    }

  }

  widgetJSON.prototype = {
    toggleActive: function(data, widgetName) {
      var widgets = JSON.parse(data).widgets;
      for(var i = 0; i < widgets.length; i++) {
        if (widgets[i].name === widgetName) {
          widgets[i].active = widgets[i].active === "true" ? "false" : "true";
          this.jsonMethod({ widgets: widgets });
          return widgets[i].active;
        }
      }
    }

  };

  exports.widgetJSON = widgetJSON;

})(this);
