const express = require('express');

const app = express();
const port = process.env.PORT || 3002;

// routes go here
app.get('/', (req, res) => {
  res.json('Welcome to Roy\'s API');
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
});
