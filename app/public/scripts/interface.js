var getJSON = require('./json').getJSON;
var setJSON = require('./json').setJSON;
var widgetJSON = require('./framework').widgetJSON;
var toggleStyles = require('./styling').toggleStyles;
var setListStyles = require('./styling').setListStyles;

$(document).ready(function(){

  var wjson = new widgetJSON(setJSON);

  getJSON(setListStyles);

  $('.widget-check').click(function(event) {
    var widgetName = $(this).attr('id').match(/\w+$/)[0];
    toggleStyles(widgetName);
    getJSON(wjson.toggleActive, widgetName);
    setDragBox(widgetName);
  });

  $('body').on('mouseup', '.widget-box', function(event){
    var widgetName = $(this).attr('id').match(/\w+$/)[0];
    var location = gridPosition($(this).position());
    getJSON(wjson.setGridPosition, widgetName, location);
  });

  var setDragBox = function(widgetName)  {
    if($('#widget-check-'+widgetName).attr('class') === 'widget-check'){
      $("#widget-box-"+widgetName).remove();
    } else {
      $("#grid-container").append("<div id='widget-box-"+widgetName+"' class='widget-box widget-box-"+widgetName+"' >"+widgetName+"</div>");
      $("#widget-box-"+widgetName).draggable({ snap: ".grid-box", snapMode: "inner", snapTolerance: 103, containment: "#grid-container", cursor: "pointer" });
    }
  };

  var gridPosition = function(location) {
    key = { 0: 0, 205: 1, 410: 2};
    //defaulting to width/height of 1 for now
    return {  row: key[location.top],
              column: key[location.left],
              height: 1,
              width: 1 };
  };


});
