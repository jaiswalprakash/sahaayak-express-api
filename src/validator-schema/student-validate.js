const Joi = require("joi");
const CONSTANT = require("../utils/constant");
const StudentValidateSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  address: Joi.object({
    country: Joi.string(),
    state: Joi.string(),
    city: Joi.string(),
  }).required(),
  parents: Joi.array().items({
    name: Joi.string().required(),
    email: Joi.string().email({ tlds: { allow: false } }),
    phoneNumber: Joi.number().required(),
    relation: Joi.string().required(),
  }),
  grade: Joi.string().required(),
  orgId: Joi.string(),
  uuid: Joi.string().required(),
});

module.exports = StudentValidateSchema;
