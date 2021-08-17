var fs = require('fs');
fs.readFile(process.argv[2], function (err, data) {
  if (err) return console.error(err);
  const res = data.toString().split('\n').length - 1;
  console.log(res);
});
