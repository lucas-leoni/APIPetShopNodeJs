const express = require('express');
const router = require('./src/routes/customer.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`\nServer running at url: "http://localhost:${port}/api/"\n`);
});
