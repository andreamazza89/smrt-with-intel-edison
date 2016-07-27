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

  it('should create a box when button clicked', function(){
    browser.pressButton("#widget-check-weather");
    expect(browser.html()).to.contain("#widget-box-weather");
  });

});
