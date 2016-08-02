require('../app/server');
var expect = require('chai').expect;

describe('Mirror page',function(){
  context('When there are no active widgets', function(){
    before(function(){
      process.env.widget_path = '/../test/widget-configs/all-inactive';
      browser.url('/mirror');
    });

    it('has no widgets when not configured', function(){
      expect(browser.getText('.main-content')).to.be.empty;
    });
  });

  context('When TfL is an active widget', function(){
    before(function(){
      process.env.widget_path = '/../test/widget-configs/tfl-active';
      browser
        .url('/mirror')
        .waitForText('#tfl-trains-widget');
    });

    it('displays a tfl widget', function(){
      expect(browser.getText('#tfl-trains-widget')).to.not.be.empty;
    });
  });

  context('When multiple widgets are active', function(){
    before(function(){
      process.env.widget_path = '/../test/widget-configs/multiple-active';
      browser
        .url('/mirror')
        .waitForText('#tfl-trains-widget');

      browser
        .waitForText('#weather-widget');
    });

    it('displays multiple widgets', function(){
      expect(browser.getText('#tfl-trains-widget')).to.not.be.empty;
      expect(browser.getText('#weather-widget')).to.not.be.empty;
    });
  });
});
