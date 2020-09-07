require('./models');
const express = require('express');
const Sequelize = require('sequelize');
const dotenv = require('dotenv');
const session = require('express-session');
const store = require('connect-session-sequelize')(session.Store);
dotenv.config();
const config = require('./config.json');
const app = express();
const port = process.env.PORT | 3000;

let sequelize = new Sequelize(config.sequelize);
let sequelizeStore = new store({
  db: sequelize,
});

sequelizeStore.sync();

app.use('/api', require('./routes/index'));

app.listen(port, () => {
  console.log(`Listening on port ${port} ...`);
});
