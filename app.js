require('@babel/register');
const express = require('express');
const config = require('./config/serverConfig');


const mainRoute = require('./routes/mainRoute');
const regRoute = require('./routes/regRoute');
const authRoute = require('./routes/authRoute')


const app = express();
const PORT = process.env.PORT ?? 3000;

config(app);

app.use('/', mainRoute);
app.use('/registration', regRoute);
app.use('/authentication', authRoute);


app.listen(PORT, async () => {
  console.log(`Server started at ${PORT} port`);
  // await sequelize.authenticate();
});