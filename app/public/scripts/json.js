var getJSON = function(callback, widgetName) {
  $.ajax({
    url: "/api/widgets",
    dataType: 'json',
    type: 'GET',
    success: function(data) {
      callback(data, widgetName);
    }.bind(this),
    error: function(xhr, status, err) {
      console.log(err.toString());
    }.bind(this)
  });
};

var setJSON = function(data) {
  $.ajax({
    url: "/api/widgets",
    dataType: 'json',
    type: 'POST',
    data: data,
    success: function(data) {
    }.bind(this),
    error: function(xhr, status, err) {
      console.log(err.toString());
    }.bind(this)
  });
};
