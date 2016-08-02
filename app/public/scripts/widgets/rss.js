var strftime = require('strftime');

;(function(exports){
  function bind(elm, evt, f) {
    if (elm.addEventListener) {
      elm.addEventListener(evt, f, false);
    } else if (elm.attachEvent) {
      elm.attachEvent('on' + evt, f);
    }
  }

  function init(){
    $('#rss-widget').find('ul').each(function(){
      var st = '';
      parseRSS($(this).data('src'), function(data, elm){
        var array = data.entries.slice(0, 2);

        for(var i = 0; i < array.length; i++){
          st = st + '<li><strong>' + array[i].title + '</strong><br><em>' + strftime('%a %o %b, %H:%M%P', new Date(array[i].publishedDate)) + '</em><br><span class="content">' + array[i].content + '</span></li>';
        }
        elm.html(st);

        $('#rss-widget li').each(function(){
          bind(this, 'mouseenter', function(){
            $(this).addClass('active');
          });

          bind(this, 'mouseleave', function(){
            $(this).removeClass('active');
          });
        });
      }, $(this));
    });
  }

  function parseRSS(url, callback, elm) {
    $.ajax({
      url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
      dataType: 'json',
      success: function(data) {
        callback(data.responseData.feed, elm);
      }
    });
  }

  exports.init = init;
})(this);
