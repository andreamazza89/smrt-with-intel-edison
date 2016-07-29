var getJSON = require('./json').getJSON;
var setJSON = require('./json').setJSON;
var widgetJSON = require('./framework').widgetJSON;

var positionKey = { 0: 0, 205: 1, 410: 2 };
var positionKey2 = { 0: 0, 1: 205, 2: 410 };

var draggableConfig = { snap: ".grid-box",
                        snapMode: "inner",
                        snapTolerance: 103,
                        containment: "#grid-container",
                        cursor: "pointer" };

$(document).ready(function(){

  var wjson = new widgetJSON(setJSON);

  $('.widget-check').click(function(event) {
    var widgetName = $(this).data('name');
    $(this).parent().toggleClass('active');
    getJSON(wjson.toggleActive, widgetName);
    setDragBox(this);
  });

  $('body').on('mouseup', '.widget-box', function(event){
    var widgetName = $(this).data('name');
    var location = gridPosition($(this).position());
    getJSON(wjson.setGridPosition, widgetName, location);
  });

  var setDragBox = function(element)  {
    var widgetName = $(element).data('name');
    if($(element).parent().hasClass('active')) {
      $("#grid-container").append("<div id='widget-box-"+widgetName+
        "' class='widget-box widget-box-"+widgetName+
        "' data-name='"+widgetName+"'>"+widgetName+"</div>");
      $("#widget-box-"+widgetName).draggable(draggableConfig);
    } else {
      $("#widget-box-"+widgetName).remove();
    }
  };

  var gridPosition = function(location) {
    //defaulting to width/height of 1 for now
    return {  row: positionKey[location.top],
              column: positionKey[location.left],
              height: 1,
              width: 1 };
  };

  $('.widget-box').each(function(){
    $(this).draggable(draggableConfig);

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
