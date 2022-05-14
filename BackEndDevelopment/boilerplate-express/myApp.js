let express = require('express');
let app = express();


//const helloWorld = () => console.log('Hello World');
//helloWorld();
const absolutePath = __dirname + '/views/index.html';
  
app.get('/', (req, res) => {
  res.sendFile(absolutePath);
});






 module.exports = app;
