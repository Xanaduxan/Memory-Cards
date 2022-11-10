require('@babel/register');
const express = require('express');
const config = require('./config/serverConfig');
const { sequelize } = require('./db/models');

const mainRoute = require('./routes/mainRoute');
const regRoute = require('./routes/regRoute');
const authRoute = require('./routes/authRoute');
const topicRoute = require('./routes/topicRoute');
const logoutRoute = require('./routes/logoutRoute');

const app = express();
const PORT = process.env.PORT ?? 3000;

config(app);

app.use('/', mainRoute);
app.use('/registration', regRoute);
app.use('/authentication', authRoute);
app.use('/topics', topicRoute);
app.use('/logout', logoutRoute);

app.listen(PORT, async () => {
  console.log(`Server started at ${PORT} port`);
  await sequelize.authenticate();
});
