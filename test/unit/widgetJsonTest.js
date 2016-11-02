var expect = require('chai').expect;
var widgetJSON = require('../../app/models/control-panel/framework.js').widgetJSON;
var sinon = require('sinon');

describe('Widget JSON', function(){
  var setJSON;
  var wjson;

  var testJSON = '{"widgets": [{ "name": "weather", "active": false, "settings": { "unit": "celsius" }, "location": { "row": 0, "column": 2, "height": 1, "width": 1 } } ] }';
  var activeTestJSON = '{"widgets": [{ "name": "weather", "active": true, "settings": { "unit": "celsius" }, "location": { "row": 0, "column": 2, "height": 1, "width": 1 } } ] }';

  beforeEach(function(){
    setJSON = sinon.spy();
    wjson = new widgetJSON(setJSON);
  });

  it('should toggle the active state of a widget from false to true', function(){
    expect(wjson.toggleActive(testJSON,'weather')).to.equal(true);
  });

  it('should toggle the active state of a widget from true to false', function(){
    expect(wjson.toggleActive(activeTestJSON,'weather')).to.equal(false);
  });

  it('should set the position of the widget', function(){
    var newPosition = { "row": 1, "column": 1, "height": 1, "width": 1 };
    expect(wjson.setGridPosition(testJSON,'weather', newPosition).row).to.equal(1);
    expect(wjson.setGridPosition(testJSON,'weather', newPosition).column).to.equal(1);
  });

  it('should change a setting of the widget', function(){
    var newSetting = [ "unit", "fahrenheit" ];
    expect(wjson.changeSetting(testJSON,'weather', newSetting).unit).to.equal("fahrenheit");
  });

});
