const figlet = require('figlet');

figlet('Hello there!', function(err, data) {
  if (err) {
    console.log('Something went wrong...');
    return;
  }
  console.log(data);
});

