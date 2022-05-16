let express = require('express');
let app = express();

const absolutePath1 = __dirname + '/views/index.html';
  
app.get('/', (_req, res) => {
  res.sendFile(absolutePath1);
});


app.get('/json', (req, res) => {
let mySecret = process.env['MESSAGE_STYLE'];
  mySecret === 'uppercase' ? 
    res.json({ "message": "HELLO JSON" }):
    res.json({ "message": "Hello json" })
});

const absolutePath2 = __dirname + '/public';

app.use('/public', express.static(absolutePath2));

 module.exports = app;
