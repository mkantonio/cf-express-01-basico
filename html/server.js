const express = require('express');

const app = express();

app.set('view engine', 'ejs');
// app.use('/assets',express.static('assets'));
app.use('/public',express.static('assets'));

app.get('/', function(req, res){
    res.sendFile('index.html', {
        root: __dirname
    });
});

app.get('/ejs', function(req, res){
    res.render('index');
});

app.listen(3000);