const express = require('express');
const router = express.Router();

const {
  findAllProperty,
  findPropertyById,
} = require('../controllers/property');

router.get('/findone', async (req, res) => {
  const { id } = req.query;
  if (!id)
    return res
      .status(404)
      .send({ message: 'To find a property, you must provide an valid ID.' });
  try {
    const property = await findPropertyById(id);
    return res.status(200).send(property);
  } catch (error) {
    return res.status(500).send({ message: 'Internal error, err ->', error });
  }
});

router.get('/findall', async (req, res) => {
  try {
    const property = await findAllProperty();
    return res.status(200).send(property);
  } catch (error) {
    return res.status(500).send({ message: 'Internal error, err ->', error });
  }
});

router.post('/register', async (req, res) => {
  const {
    bathrooms,
    bed_number,
    bedrooms,
    description,
    id_client,
    id_type,
    max_number_people,
    parking_spots,
    reference_code,
    suite_number,
  } = req.params;

  if (!bathrooms) return res.send(404).send('Bathrooms number must be valid.');
  if (!bed_number) return res.send(404).send('Bed number must be valid.');
  if (!bedrooms) return res.send(404).send('Bedrooms number must be valid.');
  if (!description) return res.send(404).send('Description must be valid.');
  if (!id_client) return res.send(404).send('Id_client must be valid.');
  if (!id_type) return res.send(404).send('Id_type must be valid.');
  if (!max_number_people)
    return res.send(404).send('Max number people must be valid.');
  if (!parking_spots) return res.send(404).send('Parking spots must be valid.');
  if (!reference_code)
    return res.send(404).send('Reference code must be valid.');
  if (!suite_number) return res.send(404).send('Suite number must be valid.');
});

module.exports = router;
