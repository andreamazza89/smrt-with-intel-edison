require('../app/server');
var expect = require('chai').expect;

describe('News Feed Widget', function(){
  before(function(){
    process.env.widget_path = '/../test/widget-configs/news-active';
    browser
      .url('/mirror')
      .waitForText('#rss-widget');
  });

  it('should have a list of news items', function(){
    expect(browser.getText('#rss-widget')).to.not.be.empty;
  });

});
