const express = require('express');
const customerRouter = require('./src/routes/customer.js');
const dogRouter = require('./src/routes/dog.js');
const serviceRouter = require('./src/routes/service.js');
const userRouter = require('./src/routes/user.js');
const employeeRouter = require('./src/routes/employee.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(customerRouter);
app.use(dogRouter);
app.use(serviceRouter);
app.use(userRouter);
app.use(employeeRouter);

app.listen(port, () => {
  console.log(`\nServer running at url: "http://localhost:${port}/api/"\n`);
});
