let express = require('express');
let app = express();


const helloWorld = () => console.log('Hello World');

helloWorld();

app.get('/', (req, res) => {
  res.send("Hello Express");
});


























 module.exports = app;
