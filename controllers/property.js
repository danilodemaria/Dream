const Property = require('../models/property');

async function findPropertyById(id) {
  try {
    const property = await Property.findByPk(id);
    return property.toJSON();
  } catch (error) {
    throw new Error(error);
  }
}

async function findAllProperty() {
  try {
    const property = await Property.findAll({ raw: true });
    return property;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  findAllProperty,
  findPropertyById,
};
