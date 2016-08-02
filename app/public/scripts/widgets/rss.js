;(function(exports){
  function init(){
    $('#rss-widget').find('ul').each(function(){
      var st = '';
      parseRSS($(this).data('src'), function(data, elm){
        var array = data.entries.slice(0, 2);
        for(var i = 0; i < array.length; i++){
            st = st + '<li>' + array[i].title + '</li>';
        }
        elm.html(st);
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
