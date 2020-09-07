const Sequelize = require('sequelize');
const moment = require('moment');

class Property extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        id_client: {
          type: Sequelize.INTEGER,
        },
        id_type: {
          type: Sequelize.INTEGER,
        },
        reference_code: {
          type: Sequelize.STRING,
        },
        bedrooms: {
          type: Sequelize.INTEGER,
        },
        bed_number: {
          type: Sequelize.INTEGER,
        },
        suite_number: {
          type: Sequelize.INTEGER,
        },
        bathrooms: {
          type: Sequelize.INTEGER,
        },
        parking_spots: {
          type: Sequelize.INTEGER,
        },
        max_number_people: {
          type: Sequelize.INTEGER,
        },
        description: {
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
        modelName: 'property',
      }
    );
    return this;
  }
}

module.exports = Property;
