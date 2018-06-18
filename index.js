var fs = require('fs');

fs.readdir('./', 'utf-8', function(err, data) {
    console.log(data);
    fs.writeFile('./task.txt', data, function(err) {
        if (err) throw err;
        console.log('Zapisano!');
    });
});
