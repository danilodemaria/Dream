const Sequelize = require('sequelize');
const config = require('../config.json');

const Property = require('./property');

const models = [Property];

class Database {
  constructor() {
    this.sequelize = null;
    this.init();
  }

  init() {
    this.sequelize = new Sequelize(config.sequelize);
    models
      .map((model) => model.init(this.sequelize))
      .map(
        (model) => model.associate && model.associate(this.sequelize.models)
      );
  }
}

module.exports = new Database();
