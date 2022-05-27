const Joi = require("joi");
const CONSTANT = require("../utils/constant");
const StudentValidateSchema = Joi.object({
  firstName: Joi.string().required(),
  middleName: Joi.string(),
  surName: Joi.string(),
  address: Joi.object({
    country: Joi.string().required(),
    state: Joi.string().required(),
    city: Joi.string().required(),
    pinCode: Joi.number(),
  }).required(),
  parents: Joi.array()
    .items({
      name: Joi.string().required(),
      email: Joi.string().email({ tlds: { allow: false } }),
      phoneNumber: Joi.number().required(),
      relation: Joi.string().required(),
    })
    .max(3)
    .min(2),
  grade: Joi.string().required(),
  DOB: Joi.date().required(),
  gender: Joi.valid(...CONSTANT.GENDER).required(),
  StudentImgURL: Joi.allow(),
});

module.exports = StudentValidateSchema;
