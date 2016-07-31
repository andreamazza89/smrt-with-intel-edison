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
  var activeWidget = false;
  var activeLocation;

  $('.widget-check').click(function() {
    var widgetName = $(this).data('name');
    $(this).parent().toggleClass('active');
    gridLocation = getFreeLocation();
    getJSON(wjson.toggleActive, widgetName, gridLocation);
    setDragBox(this, gridLocation);
  });

  $('body').on('mousedown', '.widget-box', function(event){
    activeWidget = $(this);
    activeLocation = $(this).position();
  });

  $(document).mouseup(function(){
    if (activeWidget && spaceFree(activeWidget)) {
      var widgetName = activeWidget.data('name');
      var location = gridPosition(activeWidget.position());
      getJSON(wjson.setGridPosition, widgetName, location);
      activeWidget = false;
    }
    else if (activeWidget) {
      activeWidget.css('top', activeLocation.top);
      activeWidget.css('left', activeLocation.left);
    }
  });

  var setDragBox = function(element, location)  {
    var widgetName = $(element).data('name');
    if($(element).parent().hasClass('active')) {
      $("#grid-container").append("<div id='widget-box-"+widgetName+
        "' class='widget-box widget-box-"+widgetName+
        "' style='top:"+positionKey2[location.row]+"px; "+
        " left:"+positionKey2[location.column]+"px"+
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

  var getFreeLocation = function()  {
    var positions = { 0: [], 1: [], 2:[] };
    $('.widget-box').each(function(){
      positions[positionKey[$(this).position().top]].push(positionKey[$(this).position().left]);
    });
    for(var i = 0; i < 3; i++) {
      for(var j = 0; j < 3; j++) {
        if(!positions[i].includes(j)) {
          return {
            row: i,
            column: j,
            height: 1,
            width: 1
          };
        }
      }
    }
  };

  var spaceFree = function(widget)  {
    var canMove = true;
    $('.widget-box').each(function(){
      if(($(this).data('name') !== widget.data('name')) &&
         (widget.position().top === $(this).position().top) &&
         (widget.position().left === $(this).position().left)) {
        canMove = false;
      }
    });
    return canMove;
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
