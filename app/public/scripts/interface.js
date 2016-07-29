var getJSON = require('./json').getJSON;
var setJSON = require('./json').setJSON;
var widgetJSON = require('./framework').widgetJSON;
var toggleStyles = require('./styling').toggleStyles;
var setListStyles = require('./styling').setListStyles;

var positionKey = { 0: 0, 205: 1, 410: 2 };
var positionKey2 = { 0: 0, 1: 205, 2: 410 };

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
    var widgetName = $(this).data('name');
    var location = gridPosition($(this).position());
    getJSON(wjson.setGridPosition, widgetName, location);
  });

  var setDragBox = function(widgetName)  {
    if($('#widget-check-'+widgetName).hasClass('widget-check')) {
      $("#widget-box-"+widgetName).remove();
    } else {
      $("#grid-container").append("<div id='widget-box-"+widgetName+"' class='widget-box widget-box-"+widgetName+"' >"+widgetName+"</div>");
      $("#widget-box-"+widgetName).draggable({ snap: ".grid-box", snapMode: "inner", snapTolerance: 103, containment: "#grid-container", cursor: "pointer" });
    }
  };

  var gridPosition = function(location) {
    //defaulting to width/height of 1 for now
    return {  row: positionKey[location.top],
              column: positionKey[location.left],
              height: 1,
              width: 1 };
  };

  // var setWidgetPosition = function(){
  //
  // };

  $('.widget-box').each(function(){
    $(this).draggable({ snap: ".grid-box", snapMode: "inner", snapTolerance: 103, containment: "#grid-container", cursor: "pointer" });

    var location = {
      row: $(this).data('location-row'),
      column: $(this).data('location-column'),
      height: $(this).data('location-height'),
      width: $(this).data('location-width')
    };

    $(this).css({
      top: positionKey2[location.row] + 'px',
      left: positionKey2[location.column] + 'px'
    });

  });

});
