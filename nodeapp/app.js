const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(8080, () => {
  console.log('running');
});
