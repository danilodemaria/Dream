const Sequelize = require('sequelize');

class Acessories extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        id_property: {
          type: Sequelize.INTEGER,
          allowNull: false,
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
        modelName: 'acessories',
      }
    );
    return this;
  }
}

module.exports = Acessories;
