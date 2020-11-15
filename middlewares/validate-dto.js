const ApiError = require('../error/ApiError');
const yup = require('yup');
yup.setLocale({
  mixed: {
    required: 'Campo obrigatório',
  },
  string: {
    min: ({ min }) => ({ key: 'Tamanho mínimo não atingido', values: { min } }),
    max: ({ max }) => ({ key: 'Tamanho máximo excedido', values: { max } }),
  },
});
function validateDto(schema) {
  return async (req, res, next) => {
    try {
      await schema.validate(req.body, { abortEarly: false });
      next();
    } catch (error) {
      let errors = [];
      error.inner.forEach((err) => {
        errors.push({ [err.path]: err.message });
      });
      next(ApiError.badRequest(errors));
    }
  };
}

module.exports = validateDto;
