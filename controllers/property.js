const Property = require('../models/property');

async function findPropertyById(id) {
  try {
    const property = await Property.findByPk(id);
    return property.toJSON();
  } catch (error) {
    throw error;
  }
}

async function findAllProperty() {
  try {
    const property = await Property.findAll({ raw: true });
    return property;
  } catch (error) {
    throw error;
  }
}

async function createProperty(propertyObj) {
  try {
    const property = await Property.create(propertyObj);
    return property;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createProperty,
  findAllProperty,
  findPropertyById,
};
