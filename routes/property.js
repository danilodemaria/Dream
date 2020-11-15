const express = require('express');
const router = express.Router();

const property = require('../dto/property');
const validateDto = require('../middlewares/validate-dto');

const {
  createProperty,
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

router.post('/register', validateDto(property), async (req, res) => {
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

  const cardObj = {
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
  };
  try {
    const property = await createCreditCard(cardObj);
    return res.status(200).send(property);
  } catch (error) {
    return res.status(500).send({ message: 'Internal error, err ->', error });
  }
});

module.exports = router;
