var expect = require('chai').expect;
var path = require('path');
var WidgetJSON = require('../../../app/public/scripts/widget-json').WidgetJSON;


describe('Widget JSON', function(){

  var WIDGETS_FILE = path.join(__dirname, '../../../app/public/scripts/testWidgets.json');

  beforeEach(function(){
  });

  it('should toggle the active state of a widget', function(){
    var wjson = new WidgetJSON();
    expect(wjson.toggleActive("weather", WIDGETS_FILE)).to.equal("true");
  });

  it('should toggle the active state of a widget', function(){
    var wjson = new WidgetJSON();
    expect(wjson.toggleActive("weather", WIDGETS_FILE)).to.equal("false");
  });

});
