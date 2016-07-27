;(function(exports){
  var json = require('json-file');
  var fs = require('fs');
  var path = require('path');
  function WidgetJSON() {

  }

  WidgetJSON.prototype = {
    toggleActive: function(widgetName, fileName){
      var WIDGETS_FILE = (fileName === undefined ? path.join(__dirname, '../../widgets.json') : fileName);
      var widgets = JSON.parse(fs.readFileSync(WIDGETS_FILE).toString('utf8'));

      for(var i = 0; i < widgets.length; i++){
        if(widgets[i].name === widgetName) {
          widgets[i].active === "false" ? widgets[i].active = "true" : widgets[i].active = "false";
          fs.writeFileSync(WIDGETS_FILE, JSON.stringify(widgets), 'utf8');
          return widgets[i].active;
        }
      }
    }
  }
  exports.WidgetJSON = WidgetJSON;
})(this);
