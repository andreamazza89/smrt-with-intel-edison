var expect = require('chai').expect;
var widgetJSON = require('../../../app/public/scripts/framework.js').widgetJSON;
var sinon = require('sinon');

describe('Widget JSON', function(){
  var setJSON;
  var wjson;

  beforeEach(function(){
    setJSON = sinon.spy();
    wjson = new widgetJSON(setJSON);
  });

  it('should toggle the active state of a widget from false to true', function(){
    expect(wjson.toggleActive('{"widgets": [ {"name": "weather", "active": "false"} ] }','weather')).to.equal("true");
  });

  it('should toggle the active state of a widget from true to false', function(){
    expect(wjson.toggleActive('{"widgets": [ {"name": "weather", "active": "true"} ] }','weather')).to.equal("false");
  });

});
