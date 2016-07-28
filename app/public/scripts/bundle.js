require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/framework.js":[function(require,module,exports){
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

},{}]},{},[]);
