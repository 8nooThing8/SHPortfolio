const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // Retrieve the user's IP address
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(ip);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
