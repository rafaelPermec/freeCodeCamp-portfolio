let express = require('express');
let app = express();

const absolutePath1 = __dirname + '/views/index.html';
  
app.get('/', (_req, res) => {
  res.sendFile(absolutePath1);
});

const absolutePath2 = __dirname + '/public';

app.use('/public', express.static(absolutePath2));

 module.exports = app;
