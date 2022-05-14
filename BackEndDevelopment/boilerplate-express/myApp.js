let express = require('express');
let app = express();


//const helloWorld = () => console.log('Hello World');
//helloWorld();
const absolutePath1 = __dirname + '/views/index.html';
  
app.get('/', (req, res) => {
  res.sendFile(absolutePath1);
});

const absolutePath2 = __dirname + '/public';

app.use('/public', express.static(absolutePath2));





 module.exports = app;
