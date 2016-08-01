var positionKey = require('./grid-functions').positionKey;
var positionKey2 = require('./grid-functions').positionKey2;
var draggableConfig = require('./grid-functions').draggableConfig;

var getJSON = require('./json').getJSON;
var setJSON = require('./json').setJSON;
var widgetJSON = require('./framework').widgetJSON;
var setDragBox = require('./grid-functions').setDragBox;
var gridPosition = require('./grid-functions').gridPosition;
var getFreeLocation = require('./grid-functions').getFreeLocation;
var spaceFree = require('./grid-functions').spaceFree;

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

  $('input:radio').click(function(){
    var widgetName = $(this).data('name');
    var setting = [this.name, $(this).val()];
    getJSON(wjson.changeSetting, widgetName, setting);
  });

  $('input:checkbox').change(function(){
    var widgetName = $(this).data('name');
    var setting = [$(this).val(), $(this).is(':checked')];
    getJSON(wjson.changeSetting, widgetName, setting);
  });

  $('input:text').change(function(){
    var widgetName = $(this).data('name');
    var setting = [this.name, $(this).val()];
    getJSON(wjson.changeSetting, widgetName, setting);
  });

  $('.widget-settings-button').click(function() {
    var widgetName = $(this).data('name');
    $('#widget-settings-'+widgetName).toggleClass('active');
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
