var fs = require('fs');

fs.readdir('/zadanie_13_7', 'utf-8', function(err, data) {
    console.log(data);

});

fs.writeFile('./task.txt', function(err) {
    if (err) throw err;
    console.log('Zapisano!');
});
