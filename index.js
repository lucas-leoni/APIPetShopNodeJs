const express = require('express');
const customerRouter = require('./src/routes/customer.js');
const dogRouter = require('./src/routes/dog.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(customerRouter);
app.use(dogRouter);

app.listen(port, () => {
  console.log(`\nServer running at url: "http://localhost:${port}/api/"\n`);
});
