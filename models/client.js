const Sequelize = require('sequelize');

class Client extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
        },
        last_name: {
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING,
        },
        password: {
          type: Sequelize.STRING,
        },
        active: {
          type: Sequelize.BOOLEAN,
          defaultValue: true,
        },
        created_at: {
          type: Sequelize.BIGINT,
          defaultValue: moment().unix(),
        },
        updated_at: {
          type: Sequelize.BIGINT,
        },
        deleted_at: {
          type: Sequelize.BIGINT,
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: 'client',
      }
    );
    return this;
  }
}

module.exports = Client;
