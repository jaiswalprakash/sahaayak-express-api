const Joi = require("joi");
const CONSTANT = require("../utils/constant");
const UserValidateSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.email(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  orgId: Joi.isRef(CONSTANT.COLLECTION.ORIGANIZATION),
  role: Joi.valid(...CONSTANT.ROLE).required(),
});

module.exports = UserValidateSchema;
