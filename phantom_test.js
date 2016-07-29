var page = require('webpage').create();
page.open('http://localhost:3000', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    console.log("it worked!");
  }
  phantom.exit();
});
