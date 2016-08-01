;(function(exports){

  var writeJSON;
  function widgetJSON(sjson){
    writeJSON = sjson;
  }

  widgetJSON.prototype = {
    toggleActive: function(data, widgetName, location) {
      var widgets = JSON.parse(data).widgets;
      for(var i = 0; i < widgets.length; i++) {
        if (widgets[i].name === widgetName) {
          widgets[i].active = widgets[i].active ? false : true;
          widgets[i].location = location;
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
    },

    changeSetting: function(data, widgetName, setting)  {
      var widgets = JSON.parse(data).widgets;
      for(var i = 0; i < widgets.length; i++) {
        if (widgets[i].name === widgetName) {
          widgets[i].settings[setting[0]] = setting[1];
          writeJSON({ widgets: widgets });
          return widgets[i].settings;
        }
      }
    }


  };

  exports.widgetJSON = widgetJSON;

})(this);
