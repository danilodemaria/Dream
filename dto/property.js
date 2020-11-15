const yup = require('yup');

module.exports = yup.object().shape({
  bathrooms: yup.number().required(),
  bed_number: yup.number().required(),
  bedrooms: yup.number().required(),
  description: yup.string().required(),
  id_client: yup.number().required(),
  id_type: yup.number().required(),
  max_number_people: yup.number().required(),
  parking_spots: yup.number().required(),
  reference_code: yup.string().required(),
  suite_number: yup.number().required(),
});
