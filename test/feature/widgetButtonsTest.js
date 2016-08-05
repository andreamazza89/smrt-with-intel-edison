require('../../app/server');
var expect = require('chai').expect;

describe('News Feed Widget', function(){
  before(function(){
    process.env.widget_path = '/../test/widget-configs/news-active';
    browser
      .url('/');
  });

  it('should be able to drag and drop widgets', function(){
    browser.dragAndDrop('#widget-box-rss', '#grid-3');
    browser.url('/mirror');
    expect(browser.element('#rss-widget').getAttribute('class')).to.contain('row-1');
    expect(browser.element('#rss-widget').getAttribute('class')).to.contain('column-0');

    browser.url('/');
    browser.dragAndDrop('#widget-box-rss', '#grid-1');
    browser.url('/mirror');
    expect(browser.element('#rss-widget').getAttribute('class')).to.contain('row-0');
    expect(browser.element('#rss-widget').getAttribute('class')).to.contain('column-1');
  });

  it('should not be able to drag widget onto existing widget', function(){
    process.env.widget_path = '/../test/widget-configs/multiple-active';
    browser.url('/');
    browser.dragAndDrop('#widget-box-weather', '#grid-0');
    expect(browser.element('#widget-box-weather').getAttribute('style')).to.contain('left: 205px');
  });

  it('new widget gets populated in next free location', function(){
    browser.click('#widget-check-rss');
    browser.url('/mirror');
    expect(browser.element('#rss-widget').getAttribute('class')).to.contain('row-1');
    expect(browser.element('#rss-widget').getAttribute('class')).to.contain('column-0');
    browser.url('/');
    browser.click('#widget-check-rss');
  });

});
