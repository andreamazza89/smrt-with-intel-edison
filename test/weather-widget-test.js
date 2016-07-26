var app = require("../app/server");
var Browser = require('zombie');
var expect = require('chai').expect;

describe('Weather-wiget', function(){
  var browser;
   before(function(){
     browser = new Browser({ site: "http://localhost:3000"});
   });

   before(function(done){
     browser.visit("/mirror", done);
   });

  it('should display weather', function(){

    expect(browser.text()).to.contain("sunny");
  });
});
