var app = require('../app/server');
var Browser = require('zombie');
var expect = require('chai').expect;
var stub = require('sinon').stub();

describe('Weather-wiget', function(){
  var browser;
  var ajaxstub;

   before(function(){
     browser = new Browser({ site: 'http://localhost:3000' });
   });

   before(function(done){
     browser.visit('/mirror', function(){
       stub(browser.window.$, 'ajax').returns(true);
       done();
     });
   });

  it('should display weather', function(){
    expect(browser.text()).to.contain('21°C Sunny');
  });


});
