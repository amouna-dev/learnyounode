var fs = require('fs');
var path = require('path');
const directory = process.argv[2];
const extension = `.${process.argv[3]}`;

fs.readdir(directory, function(err, list) {
    if (err) return console.log(err);
    list.forEach(el => {
        if (path.extname(el) === extension) {
            console.log(el);
        }
    });
});