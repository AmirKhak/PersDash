var express = require('express');
var app = express();
const port = 3001;

app.get('/', (req, res) => {
  const customers  = {}
});

app.listen(port, () => console.log(`Server started on ${port}`));
module.exports = app;
