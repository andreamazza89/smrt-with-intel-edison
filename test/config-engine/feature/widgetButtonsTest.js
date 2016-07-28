var app = require('../../../app/server');
var Browser = require('zombie');
var expect = require('chai').expect;

describe('Widget buttons', function(){
  var browser;

   before(function(){
     browser = new Browser({ site: 'http://localhost:3000' });
   });

   before(function(done){
     browser.visit('/', function(){
       done();
     });
   });

  it('should create a box when widget enabled', function(){
    browser.pressButton("#widget-check-weather");
    expect(browser.html()).to.contain('id="widget-box-weather"');
  });

  it('should remove a box when widget disabled', function(){
    browser.pressButton("#widget-check-weather");
    expect(browser.html()).to.not.contain('id="widget-box-weather"');
  });

});
